# 🌿 LeafGuardAI

An AI-powered plant leaf disease detection web application. Upload or capture a photo of a leaf and get an instant, confidence-scored diagnosis — powered by a two-stage deep learning pipeline that also knows when _not_ to guess.

**Live Demo:** [https://leafguardai-frontend.onrender.com/](#) <!-- update after deployment -->

---

## 📖 Overview

Most plant disease classifiers assume every image they receive is a valid, in-scope leaf photo — and will confidently misdiagnose anything else. LeafGuardAI is built differently: it uses a **two-stage gated pipeline** that first checks whether an image actually contains a leaf, then classifies the disease, and explicitly flags low-confidence results as uncertain rather than presenting a guess as fact.

## ✨ Features

- 🔍 **Two-stage AI pipeline** — YOLOv8n leaf detector gates input before EfficientNet-B0 classifies the disease
- 🎯 **Honest confidence reporting** — low-confidence predictions are flagged as uncertain, not hidden
- 🌍 **Multilingual** — full UI support for English, Bengali, and Hindi, switched instantly with no reload
- 📸 **Camera capture** — native mobile camera integration, not just gallery upload
- 📱 **Fully responsive** — hamburger navigation and adaptive layout for mobile devices
- 🕘 **Scan history** — stored locally in-browser, with individual and bulk deletion
- 🎨 **Glassmorphism UI** — smooth animations, dark/light theme toggle
- ⚡ **Lightweight inference** — both models exported to ONNX for fast, framework-light serving

## 🧠 Model Performance

| Model                        | Metric                         | Score  |
| ---------------------------- | ------------------------------ | ------ |
| EfficientNet-B0 (classifier) | Test Accuracy                  | 99.85% |
| EfficientNet-B0 (classifier) | F1-score (macro)               | 99.88% |
| YOLOv8n (leaf detector)      | Leaf Detection Rate            | 99.68% |
| YOLOv8n (leaf detector)      | False Positive Rate (non-leaf) | 1.00%  |

Trained on a cleaned, deduplicated dataset of 50,053 images across **26 disease classes** spanning **13 crop species**. See [Known Limitations](#-known-limitations) below — real-world generalization was explicitly tested and is documented honestly, not just the lab-benchmark numbers.

## 🏗️ Architecture

```
Input Image
     │
     ▼
YOLOv8n Leaf Detector ──(no leaf found)──► Rejected
     │ (leaf detected)
     ▼
Crop to Bounding Box
     │
     ▼
EfficientNet-B0 Classifier ──(low confidence)──► Flagged Uncertain
     │ (confident)
     ▼
Disease Prediction + Confidence Score
     │
     ▼
FastAPI Backend ──► Web Frontend
```

## 🛠️ Tech Stack

**Machine Learning:** PyTorch, timm (EfficientNet-B0), Ultralytics YOLOv8, ONNX Runtime, scikit-learn, Grad-CAM
**Backend:** FastAPI, Uvicorn
**Frontend:** Vanilla HTML5, CSS3 (glassmorphism), JavaScript (custom i18n engine, no frameworks)
**Training Environment:** Kaggle Notebooks (Tesla T4 GPU)
**Deployment:** Render (backend as Web Service, frontend as Static Site)

## 📁 Project Structure

```
LeafGuardAI/
├── backend/
│   ├── main.py                  # FastAPI app & routes
│   ├── model_utils.py           # ONNX inference pipeline (YOLO gate + classifier)
│   ├── class_display_names.py   # Raw class → human-readable name mapping
│   ├── requirements.txt
│   └── models/
│       ├── yolo_leaf_detector.onnx
│       ├── efficientnet_b0_leaf.onnx
│       └── model_metadata.json
└── frontend/
    ├── index.html
    ├── style.css
    ├── app.js                   # App logic + i18n translations
    └── i18n.js
```

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Python 3.11+
- A modern web browser

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Backend runs at `http://localhost:8000`. Verify with `http://localhost:8000/` — should return `{"status": "ok"}`.

### Frontend

```bash
cd frontend
python -m http.server 5500
```

Open `http://localhost:5500` in your browser. **Do not** open `index.html` directly by double-clicking — it must be served over `http://` for the API calls and camera capture to work correctly.

## 🔌 API Endpoints

| Method | Endpoint      | Description                                              |
| ------ | ------------- | -------------------------------------------------------- |
| `GET`  | `/`           | Health check                                             |
| `POST` | `/predict`    | Upload an image, returns disease prediction + confidence |
| `GET`  | `/classes`    | Returns all 26 supported disease classes                 |
| `GET`  | `/model-info` | Returns model performance metrics & known limitations    |

## ⚠️ Known Limitations

- Classifier was trained primarily on lab-background leaf photos; prediction confidence measurably drops on real-world, outdoor-lit images (verified via out-of-distribution testing — mean confidence fell from ~99% to ~77% on unseen real-world-style images).
- Cannot reliably identify crops or diseases outside its 26 trained classes; softmax confidence alone is an imperfect signal for rejecting unfamiliar inputs (a documented, tested limitation — see project report for details).
- Free-tier hosting means the backend spins down after inactivity; first request after idle may take 30–50 seconds to respond.

## 🗺️ Future Scope

- Expand YOLO training data with more diverse real-world field-background images
- Explore dedicated open-set recognition methods (e.g. OpenMax, energy-based OOD scoring)
- Extend disease/crop coverage beyond the current 26 classes
- Add a user-feedback loop for continuous model improvement
- On-device/offline mobile deployment via model quantization

## 📄 License

This project is developed for academic purposes as part of a B.Tech project.

## 🙋 Author

**Jewel Hossain**
B.Tech/MSIT Student

---

_Built with EfficientNet-B0 & YOLOv8n._
