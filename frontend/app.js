// ==================== TRANSLATIONS ====================
const translations = {
  en: {
    appName: "LeafGuardAI",
    navHome: "Detect",
    navDiseases: "Diseases",
    navHistory: "History",
    navAbout: "About",

    heroTitle: "AI-Powered Plant Disease Detection",
    heroSubtitle:
      "Upload or snap a photo of a leaf — get an instant diagnosis powered by deep learning.",
    statAccuracyLabel: "Model Accuracy",
    statClassesLabel: "Disease Classes",
    statCropsLabel: "Crop Species",

    uploadTitle: "Click or drag a leaf image here",
    uploadBtn: "Choose Image",
    cameraBtn: "📸 Use Camera",
    analyzeBtn: "Analyze Leaf",
    retakeBtn: "Retake",
    analyzing: "Analyzing...",
    cameraError: "Could not open camera. Please try gallery upload instead.",

    resultConfidence: "Confidence",
    resultUncertainTitle: "Uncertain Result",
    resultUncertainMsg:
      "A leaf was detected, but it doesn't clearly match any known disease class. This may be a crop or condition outside our training data.",
    resultClosestGuess: "Closest guess",
    resultRejectedTitle: "No Leaf Detected",
    resultRejectedMsg:
      "No leaf was detected in this image. Please upload a clear photo of a plant leaf.",
    resultError: "Could not reach the server. Please try again.",

    howToUseTitle: "How to Use",
    step1Title: "1. Upload or Capture",
    step1Desc:
      "Choose a photo from your gallery or take a live picture of a leaf.",
    step2Title: "2. AI Analyzes",
    step2Desc:
      "Our two-stage AI checks it's a leaf, then identifies the disease.",
    step3Title: "3. Get Results",
    step3Desc:
      "See the diagnosis with a confidence score, saved to your history.",

    whyTitle: "Why LeafGuardAI",
    feature1Title: "Instant Results",
    feature1Desc: "Get a diagnosis in seconds, right from your browser.",
    feature2Title: "Multilingual",
    feature2Desc: "Full support for English, Bengali, and Hindi.",
    feature3Title: "Private by Design",
    feature3Desc:
      "Your scan history stays on your device, never on our servers.",
    feature4Title: "Honest Confidence",
    feature4Desc: "Uncertain results are flagged, not guessed.",

    cropsPreviewTitle: "Supported Crops",
    viewAllBtn: "View All Diseases",

    faqTitle: "Frequently Asked Questions",
    faq1Q: "How accurate is this tool?",
    faq1A:
      "Our classifier achieves 99.85% accuracy on its test dataset. However, accuracy can be lower on real-world photos with unusual lighting or backgrounds — always treat results as a helpful guide, not a final diagnosis.",
    faq2Q: "What if my photo isn't a leaf?",
    faq2A:
      "The app automatically detects whether your image contains a leaf and will reject non-leaf images before analysis.",
    faq3Q: "Can it detect any plant disease?",
    faq3A:
      "It currently recognizes 26 disease/health classes across 13 crops. Leaves from unsupported crops may return an uncertain result.",
    faq4Q: "Is my data saved anywhere?",
    faq4A:
      "Your scan history is stored only in your browser (locally), not on our servers. You can delete individual scans or clear all history anytime.",
    faq5Q: "Does the camera button work on all phones?",
    faq5A:
      "The camera button opens your phone's native camera app directly. It works on all modern mobile browsers (Chrome, Safari, Firefox). On desktop, it opens your webcam if available.",

    historyTitle: "Scan History",
    historyEmpty: "No scans yet. Analyze a leaf to see it here.",
    historyClear: "Clear All History",
    historyDeleteBtn: "Delete",
    historyDeleteOne: "Scan deleted.",

    diseasesTitle: "Diseases We Can Detect",
    diseasesSubtitle: "This model recognizes 26 classes across 13 crops.",

    aboutTitle: "About LeafGuardAI",
    aboutModelSection: "Model Performance",
    aboutTestAccuracy: "Test Accuracy",
    aboutPrecision: "Precision (macro)",
    aboutRecall: "Recall (macro)",
    aboutF1: "F1 Score (macro)",
    aboutDetectorSection: "Leaf Detector (YOLOv8n)",
    aboutDetectionRate: "Leaf Detection Rate",
    aboutFalsePositive: "False Positive Rate (non-leaf images)",
    aboutLimitationsSection: "Known Limitations — Read Before Trusting Results",
    aboutHowItWorks: "How It Works",
    aboutHowItWorksText:
      "Every image passes through two models: first a YOLO detector checks whether a leaf is present and crops it out, then an EfficientNet classifier identifies the disease. Low-confidence results are flagged as uncertain rather than guessed.",

    footerText:
      "Built with EfficientNet-B0 & YOLOv8n · A project in machine learning and web development",
  },

  bn: {
    appName: "লিফগার্ডএআই",
    navHome: "সনাক্তকরণ",
    navDiseases: "রোগসমূহ",
    navHistory: "ইতিহাস",
    navAbout: "সম্পর্কে",

    heroTitle: "এআই-চালিত উদ্ভিদ রোগ সনাক্তকরণ",
    heroSubtitle:
      "একটি পাতার ছবি আপলোড করুন বা তুলুন — গভীর শিক্ষা দ্বারা চালিত তাৎক্ষণিক নির্ণয় পান।",
    statAccuracyLabel: "মডেল নির্ভুলতা",
    statClassesLabel: "রোগের শ্রেণী",
    statCropsLabel: "ফসলের প্রজাতি",

    uploadTitle: "এখানে ক্লিক করুন বা পাতার ছবি টেনে আনুন",
    uploadBtn: "ছবি নির্বাচন করুন",
    cameraBtn: "📸 ক্যামেরা ব্যবহার করুন",
    analyzeBtn: "পাতা বিশ্লেষণ করুন",
    retakeBtn: "আবার তুলুন",
    analyzing: "বিশ্লেষণ চলছে...",
    cameraError: "ক্যামেরা খোলা যায়নি। অনুগ্রহ করে গ্যালারি থেকে আপলোড করুন।",

    resultConfidence: "আত্মবিশ্বাস",
    resultUncertainTitle: "অনিশ্চিত ফলাফল",
    resultUncertainMsg:
      "একটি পাতা সনাক্ত করা হয়েছে, তবে এটি কোনো পরিচিত রোগের সাথে স্পষ্টভাবে মেলে না।",
    resultClosestGuess: "নিকটতম অনুমান",
    resultRejectedTitle: "কোনো পাতা সনাক্ত হয়নি",
    resultRejectedMsg:
      "এই ছবিতে কোনো পাতা সনাক্ত করা যায়নি। অনুগ্রহ করে একটি স্পষ্ট পাতার ছবি আপলোড করুন।",
    resultError: "সার্ভারে পৌঁছানো যায়নি। আবার চেষ্টা করুন।",

    howToUseTitle: "কীভাবে ব্যবহার করবেন",
    step1Title: "১. আপলোড বা ক্যাপচার করুন",
    step1Desc: "গ্যালারি থেকে একটি ছবি বেছে নিন বা পাতার লাইভ ছবি তুলুন।",
    step2Title: "২. এআই বিশ্লেষণ করে",
    step2Desc:
      "আমাদের দুই-ধাপের এআই প্রথমে পাতা কিনা যাচাই করে, তারপর রোগ শনাক্ত করে।",
    step3Title: "৩. ফলাফল পান",
    step3Desc:
      "আত্মবিশ্বাস স্কোর সহ রোগ নির্ণয় দেখুন, যা ইতিহাসে সংরক্ষিত হয়।",

    whyTitle: "কেন লিফগার্ডএআই",
    feature1Title: "তাৎক্ষণিক ফলাফল",
    feature1Desc: "সেকেন্ডের মধ্যে নির্ণয় পান, সরাসরি আপনার ব্রাউজার থেকে।",
    feature2Title: "বহুভাষিক",
    feature2Desc: "ইংরেজি, বাংলা এবং হিন্দির সম্পূর্ণ সমর্থন।",
    feature3Title: "গোপনীয়তা সুরক্ষিত",
    feature3Desc:
      "আপনার স্ক্যান ইতিহাস আপনার ডিভাইসে থাকে, আমাদের সার্ভারে নয়।",
    feature4Title: "সৎ আত্মবিশ্বাস",
    feature4Desc: "অনিশ্চিত ফলাফল অনুমান না করে চিহ্নিত করা হয়।",

    cropsPreviewTitle: "সমর্থিত ফসল",
    viewAllBtn: "সমস্ত রোগ দেখুন",

    faqTitle: "সাধারণ জিজ্ঞাসা",
    faq1Q: "এই টুলটি কতটা নির্ভুল?",
    faq1A:
      "আমাদের মডেল টেস্ট ডেটাসেটে ৯৯.৮৫% নির্ভুলতা অর্জন করে। বাস্তব-জগতের ছবিতে নির্ভুলতা কম হতে পারে।",
    faq2Q: "আমার ছবিতে পাতা না থাকলে কী হবে?",
    faq2A:
      "অ্যাপটি স্বয়ংক্রিয়ভাবে যাচাই করে আপনার ছবিতে পাতা আছে কিনা এবং পাতা নয় এমন ছবি প্রত্যাখ্যান করে।",
    faq3Q: "এটি কি যেকোনো উদ্ভিদের রোগ শনাক্ত করতে পারে?",
    faq3A: "এটি বর্তমানে ১৩টি ফসলের ২৬টি শ্রেণী চিনতে পারে।",
    faq4Q: "আমার ডেটা কি কোথাও সংরক্ষিত হয়?",
    faq4A:
      "আপনার স্ক্যান ইতিহাস শুধুমাত্র আপনার ব্রাউজারে সংরক্ষিত হয়, আমাদের সার্ভারে নয়।",
    faq5Q: "ক্যামেরা বোতাম কি সব ফোনে কাজ করে?",
    faq5A:
      "ক্যামেরা বোতাম সরাসরি আপনার ফোনের নেটিভ ক্যামেরা অ্যাপ খোলে। এটি সব আধুনিক মোবাইল ব্রাউজারে কাজ করে।",

    historyTitle: "স্ক্যান ইতিহাস",
    historyEmpty: "এখনো কোনো স্ক্যান নেই।",
    historyClear: "সমস্ত ইতিহাস মুছুন",
    historyDeleteBtn: "মুছুন",
    historyDeleteOne: "স্ক্যান মুছে ফেলা হয়েছে।",

    diseasesTitle: "আমরা যেসব রোগ সনাক্ত করতে পারি",
    diseasesSubtitle: "এই মডেলটি ১৩টি ফসলের ২৬টি শ্রেণী চিনতে পারে।",

    aboutTitle: "লিফগার্ডএআই সম্পর্কে",
    aboutModelSection: "মডেল পারফরম্যান্স",
    aboutTestAccuracy: "টেস্ট সঠিকতা",
    aboutPrecision: "প্রিসিশন",
    aboutRecall: "রিকল",
    aboutF1: "এফ১ স্কোর",
    aboutDetectorSection: "লিফ ডিটেক্টর (YOLOv8n)",
    aboutDetectionRate: "পাতা সনাক্তকরণ হার",
    aboutFalsePositive: "মিথ্যা পজিটিভ হার",
    aboutLimitationsSection: "পরিচিত সীমাবদ্ধতা",
    aboutHowItWorks: "এটি কীভাবে কাজ করে",
    aboutHowItWorksText:
      "প্রতিটি ছবি দুটি মডেলের মধ্য দিয়ে যায়: প্রথমে YOLO পাতা যাচাই করে কেটে নেয়, তারপর EfficientNet রোগ সনাক্ত করে।",

    footerText:
      "EfficientNet-B0 ও YOLOv8n দিয়ে তৈরি · মেশিন লার্নিং এবং ওয়েব ডেভেলপমেন্টের একটি প্রকল্প",
  },

  hi: {
    appName: "लीफगार्डएआई",
    navHome: "पहचान",
    navDiseases: "रोग",
    navHistory: "इतिहास",
    navAbout: "जानकारी",

    heroTitle: "एआई-संचालित पौध रोग पहचान",
    heroSubtitle:
      "पत्ती की तस्वीर अपलोड करें या लें — डीप लर्निंग द्वारा तुरंत निदान पाएं।",
    statAccuracyLabel: "मॉडल सटीकता",
    statClassesLabel: "रोग वर्ग",
    statCropsLabel: "फसल प्रजातियां",

    uploadTitle: "यहाँ क्लिक करें या पत्ती की तस्वीर खींचें",
    uploadBtn: "तस्वीर चुनें",
    cameraBtn: "📸 कैमरा उपयोग करें",
    analyzeBtn: "पत्ती का विश्लेषण करें",
    retakeBtn: "फिर से लें",
    analyzing: "विश्लेषण हो रहा है...",
    cameraError: "कैमरा नहीं खुला। कृपया गैलरी से अपलोड करें।",

    resultConfidence: "विश्वास स्तर",
    resultUncertainTitle: "अनिश्चित परिणाम",
    resultUncertainMsg:
      "एक पत्ती का पता चला, लेकिन यह किसी ज्ञात रोग वर्ग से स्पष्ट रूप से मेल नहीं खाती।",
    resultClosestGuess: "निकटतम अनुमान",
    resultRejectedTitle: "कोई पत्ती नहीं मिली",
    resultRejectedMsg:
      "इस तस्वीर में कोई पत्ती नहीं मिली। कृपया पत्ती की स्पष्ट तस्वीर अपलोड करें।",
    resultError: "सर्वर तक नहीं पहुंचा जा सका। कृपया पुनः प्रयास करें।",

    howToUseTitle: "उपयोग कैसे करें",
    step1Title: "1. अपलोड या कैप्चर करें",
    step1Desc: "गैलरी से एक फोटो चुनें या पत्ती की लाइव तस्वीर लें।",
    step2Title: "2. एआई विश्लेषण करता है",
    step2Desc:
      "हमारा दो-चरणीय एआई पहले पत्ती जांचता है, फिर रोग की पहचान करता है।",
    step3Title: "3. परिणाम प्राप्त करें",
    step3Desc: "विश्वास स्कोर के साथ निदान देखें, जो इतिहास में सहेजा जाता है।",

    whyTitle: "क्यों लीफगार्डएआई",
    feature1Title: "तुरंत परिणाम",
    feature1Desc: "सेकंडों में निदान पाएं, सीधे अपने ब्राउज़र से।",
    feature2Title: "बहुभाषी",
    feature2Desc: "अंग्रेज़ी, बंगाली और हिन्दी का पूर्ण समर्थन।",
    feature3Title: "निजता सुरक्षित",
    feature3Desc:
      "आपका स्कैन इतिहास आपके डिवाइस पर रहता है, हमारे सर्वर पर नहीं।",
    feature4Title: "ईमानदार विश्वास स्तर",
    feature4Desc:
      "अनिश्चित परिणामों को अनुमान नहीं, बल्कि चिह्नित किया जाता है।",

    cropsPreviewTitle: "समर्थित फसलें",
    viewAllBtn: "सभी रोग देखें",

    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faq1Q: "यह टूल कितना सटीक है?",
    faq1A:
      "हमारा मॉडल परीक्षण डेटासेट पर 99.85% सटीकता प्राप्त करता है। वास्तविक तस्वीरों पर सटीकता कम हो सकती है।",
    faq2Q: "अगर मेरी तस्वीर में पत्ती नहीं है तो क्या होगा?",
    faq2A:
      "ऐप स्वचालित रूप से जांचता है कि तस्वीर में पत्ती है या नहीं और गैर-पत्ती तस्वीरों को अस्वीकार करता है।",
    faq3Q: "क्या यह किसी भी पौधे की बीमारी का पता लगा सकता है?",
    faq3A: "यह वर्तमान में 13 फसलों में 26 वर्गों को पहचानता है।",
    faq4Q: "क्या मेरा डेटा कहीं सहेजा जाता है?",
    faq4A:
      "आपका स्कैन इतिहास केवल आपके ब्राउज़र में सहेजा जाता है, हमारे सर्वर पर नहीं।",
    faq5Q: "क्या कैमरा बटन सभी फोन पर काम करता है?",
    faq5A:
      "कैमरा बटन सीधे आपके फोन का नेटिव कैमरा ऐप खोलता है। यह सभी आधुनिक मोबाइल ब्राउज़रों पर काम करता है।",

    historyTitle: "स्कैन इतिहास",
    historyEmpty: "अभी तक कोई स्कैन नहीं।",
    historyClear: "पूरा इतिहास साफ़ करें",
    historyDeleteBtn: "हटाएं",
    historyDeleteOne: "स्कैन हटा दिया गया।",

    diseasesTitle: "हम जो रोग पहचान सकते हैं",
    diseasesSubtitle: "यह मॉडल 13 फसलों में 26 वर्गों को पहचानता है।",

    aboutTitle: "लीफगार्डएआई के बारे में",
    aboutModelSection: "मॉडल प्रदर्शन",
    aboutTestAccuracy: "परीक्षण सटीकता",
    aboutPrecision: "प्रिसिजन",
    aboutRecall: "रिकॉल",
    aboutF1: "एफ1 स्कोर",
    aboutDetectorSection: "लीफ डिटेक्टर (YOLOv8n)",
    aboutDetectionRate: "पत्ती पहचान दर",
    aboutFalsePositive: "गलत सकारात्मक दर",
    aboutLimitationsSection: "ज्ञात सीमाएं",
    aboutHowItWorks: "यह कैसे काम करता है",
    aboutHowItWorksText:
      "हर तस्वीर दो मॉडलों से गुज़रती है: पहले YOLO पत्ती जांचकर क्रॉप करता है, फिर EfficientNet रोग की पहचान करता है।",

    footerText:
      "EfficientNet-B0 और YOLOv8n से निर्मित · मशीन लर्निंग और वेब डेवलपमेंट का एक प्रोजेक्ट",
  },
};

let currentLang = localStorage.getItem("lang") || "en";
function t(key) {
  return (
    (translations[currentLang] && translations[currentLang][key]) ||
    translations.en[key] ||
    key
  );
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.documentElement.lang = currentLang;
  if (typeof renderHistory === "function") renderHistory();
  if (typeof renderDiseaseList === "function") renderDiseaseList();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

// ==================== CONFIG ====================
const RAW_API_URL = ["localhost", "127.0.0.1", ""].includes(
  window.location.hostname,
)
  ? "http://localhost:8000"
  : "https://leafguardai-v4.onrender.com";
const API_URL = RAW_API_URL.replace(/\/+$/, "");

// ==================== STATE ====================
let selectedFile = null;
let diseaseListCache = null;
let modelInfoCache = null;

// ==================== INIT (runs after DOM is ready since script is at end of body) ====================
const fileInput = document.getElementById("fileInput");
const cameraInput = document.getElementById("cameraInput");
const uploadBox = document.getElementById("uploadBox");
const uploadBtn = document.getElementById("uploadBtn");
const cameraBtn = document.getElementById("cameraBtn");
const previewSection = document.getElementById("previewSection");
const previewImg = document.getElementById("previewImg");
const analyzeBtn = document.getElementById("analyzeBtn");
const retakeBtn = document.getElementById("retakeBtn");
const resultSection = document.getElementById("resultSection");
const themeToggle = document.getElementById("themeToggle");
const langSelect = document.getElementById("langSelect");
const toast = document.getElementById("toast");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const viewAllCropsBtn = document.getElementById("viewAllCropsBtn");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---- Tab navigation (works for both desktop buttons and mobile menu buttons) ----
function activateTab(tabName) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.tab === tabName));
  document
    .querySelectorAll(".tab-section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(`tab-${tabName}`).classList.add("active");

  if (tabName === "diseases") loadDiseaseList();
  if (tabName === "history") renderHistory();
  if (tabName === "about") loadModelInfo();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    activateTab(btn.dataset.tab);
    closeMobileMenu();
  });
});

viewAllCropsBtn.addEventListener("click", () => activateTab("diseases"));

// ---- Hamburger menu ----
function closeMobileMenu() {
  hamburgerBtn.classList.remove("open");
  mobileMenu.classList.remove("open");
}
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

// ---- Upload flow (gallery) ----
uploadBtn.addEventListener("click", () => fileInput.click());
uploadBox.addEventListener("click", (e) => {
  if (e.target.closest("button")) return; // don't double-trigger when a button inside was clicked
  fileInput.click();
});
fileInput.addEventListener("change", (e) => {
  if (e.target.files[0]) handleSelectedFile(e.target.files[0]);
});

// ---- Camera capture (native camera app via capture attribute — reliable on mobile) ----
cameraBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cameraInput.click();
});
cameraInput.addEventListener("change", (e) => {
  if (e.target.files[0]) handleSelectedFile(e.target.files[0]);
});
cameraInput.addEventListener("cancel", () => {
  /* user backed out of camera, no-op */
});

function handleSelectedFile(file) {
  selectedFile = file;
  const reader = new FileReader();
  reader.onload = (ev) => {
    previewImg.src = ev.target.result;
    previewSection.style.display = "block";
    resultSection.innerHTML = "";
    previewSection.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  reader.readAsDataURL(file);
}

retakeBtn.addEventListener("click", () => {
  selectedFile = null;
  previewSection.style.display = "none";
  resultSection.innerHTML = "";
  fileInput.value = "";
  cameraInput.value = "";
});

// ---- Analyze ----
analyzeBtn.addEventListener("click", async () => {
  if (!selectedFile) return;

  analyzeBtn.disabled = true;
  analyzeBtn.innerHTML = `<span class="spinner"></span>${t("analyzing")}`;

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const res = await fetch(`${API_URL}/predict`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    renderResult(data);
    saveToHistory(data);
  } catch (err) {
    resultSection.innerHTML = `<div class="result-section glass"><div class="result-card rejected"><strong>${t("resultError")}</strong></div></div>`;
  } finally {
    analyzeBtn.disabled = false;
    analyzeBtn.textContent = t("analyzeBtn");
  }
});

function renderResult(data) {
  let html = `<div class="result-section glass">`;
  if (data.status === "success") {
    const pct = (data.confidence * 100).toFixed(1);
    html += `
      <div class="result-card">
        <h3>${data.display_name}</h3>
        <p>${t("resultConfidence")}: ${pct}%</p>
        <div class="confidence-bar"><div class="confidence-fill" style="--target-width:${pct}%"></div></div>
      </div>`;
  } else if (data.status === "uncertain") {
    html += `
      <div class="result-card uncertain">
        <h3>${t("resultUncertainTitle")}</h3>
        <p>${t("resultUncertainMsg")}</p>
        <p style="margin-top:8px; color:var(--text-muted);"><em>${t("resultClosestGuess")}: ${data.closest_guess_display} (${(data.closest_guess_confidence * 100).toFixed(1)}%)</em></p>
      </div>`;
  } else {
    html += `
      <div class="result-card rejected">
        <h3>${t("resultRejectedTitle")}</h3>
        <p>${t("resultRejectedMsg")}</p>
      </div>`;
  }
  html += `</div>`;
  resultSection.innerHTML = html;
  resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ---- History ----
function saveToHistory(data) {
  const history = JSON.parse(localStorage.getItem("scanHistory") || "[]");
  const entry = {
    ...data,
    id: Date.now() + "_" + Math.random().toString(36).slice(2, 8),
    timestamp: new Date().toISOString(),
  };
  history.unshift(entry);
  localStorage.setItem("scanHistory", JSON.stringify(history.slice(0, 50)));
}

function renderHistory() {
  const listEl = document.getElementById("historyList");
  if (!listEl) return;
  const history = JSON.parse(localStorage.getItem("scanHistory") || "[]");

  if (history.length === 0) {
    listEl.innerHTML = `<p style="color:var(--text-muted);">${t("historyEmpty")}</p>`;
    return;
  }

  let html = `<button class="secondary-btn" id="clearHistoryBtn" style="margin-bottom:14px;">${t("historyClear")}</button>`;
  history.forEach((item) => {
    const label =
      item.status === "success"
        ? item.display_name
        : item.status === "uncertain"
          ? t("resultUncertainTitle")
          : t("resultRejectedTitle");
    const date = new Date(item.timestamp).toLocaleString();
    const conf = item.confidence
      ? `${(item.confidence * 100).toFixed(1)}%`
      : "—";

    html += `
      <div class="history-item glass" data-id="${item.id}">
        <div><strong>${label}</strong><br><span style="font-size:12px;color:var(--text-muted);">${date}</span></div>
        <div class="history-item-actions">
          <span>${conf}</span>
          <button class="history-delete-btn" data-delete-id="${item.id}" title="${t("historyDeleteBtn")}">🗑️</button>
        </div>
      </div>`;
  });
  listEl.innerHTML = html;

  document
    .getElementById("clearHistoryBtn")
    ?.addEventListener("click", clearHistory);
  listEl.querySelectorAll("[data-delete-id]").forEach((btn) => {
    btn.addEventListener("click", () =>
      deleteHistoryItem(btn.dataset.deleteId),
    );
  });
}

function deleteHistoryItem(id) {
  const el = document.querySelector(`.history-item[data-id="${id}"]`);
  if (el) el.classList.add("removing");
  setTimeout(() => {
    const history = JSON.parse(localStorage.getItem("scanHistory") || "[]");
    localStorage.setItem(
      "scanHistory",
      JSON.stringify(history.filter((h) => h.id !== id)),
    );
    renderHistory();
    showToast(t("historyDeleteOne"));
  }, 250);
}

function clearHistory() {
  localStorage.removeItem("scanHistory");
  renderHistory();
}

// ---- Diseases tab ----
async function loadDiseaseList() {
  if (!diseaseListCache) {
    try {
      const res = await fetch(`${API_URL}/classes`);
      diseaseListCache = await res.json();
    } catch (err) {
      diseaseListCache = { classes: [] };
    }
  }
  renderDiseaseList();
}
function renderDiseaseList() {
  const grid = document.getElementById("diseaseGrid");
  if (!grid || !diseaseListCache) return;
  grid.innerHTML = diseaseListCache.classes
    .map((c) => `<div class="disease-chip">${c.display}</div>`)
    .join("");
}

// ---- About tab ----
async function loadModelInfo() {
  if (!modelInfoCache) {
    try {
      const res = await fetch(`${API_URL}/model-info`);
      modelInfoCache = await res.json();
    } catch (err) {
      return;
    }
  }
  document.getElementById("statGridModel").innerHTML = `
    <div class="stat-box"><div class="stat-value">${(modelInfoCache.classifier.test_accuracy * 100).toFixed(2)}%</div><div class="stat-label">${t("aboutTestAccuracy")}</div></div>
    <div class="stat-box"><div class="stat-value">${(modelInfoCache.classifier.precision_macro * 100).toFixed(2)}%</div><div class="stat-label">${t("aboutPrecision")}</div></div>
    <div class="stat-box"><div class="stat-value">${(modelInfoCache.classifier.recall_macro * 100).toFixed(2)}%</div><div class="stat-label">${t("aboutRecall")}</div></div>
    <div class="stat-box"><div class="stat-value">${(modelInfoCache.classifier.f1_macro * 100).toFixed(2)}%</div><div class="stat-label">${t("aboutF1")}</div></div>`;
  document.getElementById("statGridDetector").innerHTML = `
    <div class="stat-box"><div class="stat-value">${(modelInfoCache.detector.leaf_detection_rate * 100).toFixed(2)}%</div><div class="stat-label">${t("aboutDetectionRate")}</div></div>
    <div class="stat-box"><div class="stat-value">${(modelInfoCache.detector.false_positive_rate * 100).toFixed(2)}%</div><div class="stat-label">${t("aboutFalsePositive")}</div></div>`;
  document.getElementById("limitationsList").innerHTML =
    modelInfoCache.known_limitations.map((l) => `<li>${l}</li>`).join("");
}

// ---- FAQ accordion (event delegation — fixes the non-working toggle) ----
document.getElementById("faqList").addEventListener("click", (e) => {
  const questionBtn = e.target.closest(".faq-question");
  if (!questionBtn) return;
  const item = questionBtn.closest(".faq-item");
  const wasOpen = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item.open")
    .forEach((el) => el.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
});

// ---- Theme ----
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", next);
});
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// ---- Language ----
langSelect.value = currentLang;
langSelect.addEventListener("change", (e) => setLanguage(e.target.value));

// ---- Boot ----
applyTranslations();
