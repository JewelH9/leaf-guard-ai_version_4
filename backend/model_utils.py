import json
import os
import numpy as np
import onnxruntime as ort
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, "models")

with open(os.path.join(MODELS_DIR, "model_metadata.json")) as f:
    METADATA = json.load(f)

IDX_TO_CLASS = {int(k): v for k, v in METADATA["idx_to_class"].items()}
EFFICIENTNET_INPUT_SIZE = METADATA["input_size"]          # 224
YOLO_INPUT_SIZE = METADATA["yolo_input_size"]              # 640
YOLO_CONF_THRESHOLD = METADATA["yolo_conf_threshold"]       # 0.25
CLASSIFIER_CONF_THRESHOLD = METADATA["efficientnet_confidence_threshold"]  # 0.5

IMAGENET_MEAN = np.array([0.485, 0.456, 0.406], dtype=np.float32)
IMAGENET_STD = np.array([0.229, 0.224, 0.225], dtype=np.float32)

yolo_session = ort.InferenceSession(os.path.join(MODELS_DIR, "yolo_leaf_detector.onnx"))
clf_session = ort.InferenceSession(os.path.join(MODELS_DIR, "efficientnet_b0_leaf.onnx"))

yolo_input_name = yolo_session.get_inputs()[0].name
clf_input_name = clf_session.get_inputs()[0].name


def _letterbox(img: Image.Image, size: int):
    """Resize with padding to keep aspect ratio (standard YOLO preprocessing)."""
    w, h = img.size
    scale = size / max(w, h)
    nw, nh = int(w * scale), int(h * scale)
    img_resized = img.resize((nw, nh), Image.BILINEAR)

    canvas = Image.new("RGB", (size, size), (114, 114, 114))
    pad_x, pad_y = (size - nw) // 2, (size - nh) // 2
    canvas.paste(img_resized, (pad_x, pad_y))
    return canvas, scale, pad_x, pad_y


def _run_yolo(img: Image.Image):
    """Returns best leaf bounding box (x1,y1,x2,y2 in original image coords) or None."""
    letterboxed, scale, pad_x, pad_y = _letterbox(img, YOLO_INPUT_SIZE)

    arr = np.array(letterboxed).astype(np.float32) / 255.0
    arr = arr.transpose(2, 0, 1)[np.newaxis, :]  # NCHW

    outputs = yolo_session.run(None, {yolo_input_name: arr})[0]  # shape (1, 5, 8400)
    preds = outputs[0].T  # (8400, 5) -> x_center, y_center, w, h, conf

    best_conf = 0.0
    best_box = None
    for pred in preds:
        cx, cy, bw, bh, conf = pred
        if conf > best_conf and conf >= YOLO_CONF_THRESHOLD:
            best_conf = conf
            best_box = (cx, cy, bw, bh)

    if best_box is None:
        return None, 0.0

    cx, cy, bw, bh = best_box
    # Undo letterbox scaling/padding to map back to original image coords
    x1 = (cx - bw / 2 - pad_x) / scale
    y1 = (cy - bh / 2 - pad_y) / scale
    x2 = (cx + bw / 2 - pad_x) / scale
    y2 = (cy + bh / 2 - pad_y) / scale

    w, h = img.size
    x1, y1 = max(0, x1), max(0, y1)
    x2, y2 = min(w, x2), min(h, y2)

    return (int(x1), int(y1), int(x2), int(y2)), float(best_conf)


def _run_classifier(cropped_img: Image.Image):
    img_resized = cropped_img.resize((EFFICIENTNET_INPUT_SIZE, EFFICIENTNET_INPUT_SIZE), Image.BILINEAR)
    arr = np.array(img_resized).astype(np.float32) / 255.0
    arr = (arr - IMAGENET_MEAN) / IMAGENET_STD
    arr = arr.transpose(2, 0, 1)[np.newaxis, :].astype(np.float32)

    outputs = clf_session.run(None, {clf_input_name: arr})[0][0]  # raw logits

    # softmax
    exp = np.exp(outputs - np.max(outputs))
    probs = exp / exp.sum()

    pred_idx = int(np.argmax(probs))
    confidence = float(probs[pred_idx])
    return IDX_TO_CLASS[pred_idx], confidence


def predict(img: Image.Image) -> dict:
    """Full pipeline: YOLO gate -> crop -> EfficientNet classify -> thresholded result."""
    box, yolo_conf = _run_yolo(img)

    if box is None:
        return {
            "status": "rejected",
            "reason": "no_leaf_detected",
            "message": "No leaf was detected in this image. Please upload a clear photo of a plant leaf.",
        }

    x1, y1, x2, y2 = box
    cropped = img.crop((x1, y1, x2, y2))

    raw_class, clf_conf = _run_classifier(cropped)

    if clf_conf < CLASSIFIER_CONF_THRESHOLD:
        return {
            "status": "uncertain",
            "reason": "low_confidence",
            "message": "A leaf was detected, but it doesn't clearly match any known disease class. This may be a crop or condition outside our training data.",
            "yolo_confidence": round(yolo_conf, 4),
            "closest_guess": raw_class,
            "closest_guess_confidence": round(clf_conf, 4),
        }

    return {
        "status": "success",
        "raw_class": raw_class,
        "predicted_class": raw_class,
        "confidence": round(clf_conf, 4),
        "yolo_confidence": round(yolo_conf, 4),
        "bounding_box": {"x1": x1, "y1": y1, "x2": x2, "y2": y2},
    }