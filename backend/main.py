from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from PIL import Image
import io

from model_utils import predict
from class_display_names import get_display_name

app = FastAPI(title="LeafGuardAI v2 API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://leafguardai-frontend.onrender.com"],  
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health_check():
    return {"status": "ok", "message": "LeafGuardAI v2 API running"}


@app.post("/predict")
async def predict_endpoint(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    contents = await file.read()
    try:
        img = Image.open(io.BytesIO(contents)).convert("RGB")
    except Exception:
        raise HTTPException(status_code=400, detail="Could not read image file")

    result = predict(img)

    if result["status"] == "success":
        result["display_name"] = get_display_name(result["raw_class"])
    elif result["status"] == "uncertain":
        result["closest_guess_display"] = get_display_name(result["closest_guess"])

    return result

from class_display_names import DISPLAY_NAMES
from model_utils import METADATA

@app.get("/classes")
def get_classes():
    classes = METADATA["classes"]
    return {
        "count": len(classes),
        "classes": [
            {"raw": c, "display": DISPLAY_NAMES.get(c, c)}
            for c in classes
        ],
    }


@app.get("/model-info")
def get_model_info():
    return {
        "classifier": {
            "architecture": "EfficientNet-B0",
            "num_classes": len(METADATA["classes"]),
            "test_accuracy": 0.9985,
            "precision_macro": 0.9987,
            "recall_macro": 0.9989,
            "f1_macro": 0.9988,
            "test_samples": 7558,
        },
        "detector": {
            "architecture": "YOLOv8n",
            "purpose": "Leaf presence detection & cropping",
            "leaf_detection_rate": 0.9968,
            "false_positive_rate": 0.01,
        },
        "known_limitations": [
            "Classifier trained on lab-background leaf photos; confidence drops on real-world outdoor photos.",
            "Cannot reliably identify crops or diseases outside its 26 trained classes; low-confidence results should be treated as uncertain, not definitive.",
            "Softmax confidence is an imperfect signal for unknown-class rejection.",
        ],
    }