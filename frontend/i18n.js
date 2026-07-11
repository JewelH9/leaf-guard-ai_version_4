const translations = {
  en: {
    appName: "LeafGuardAI",
    navHome: "Detect",
    navDiseases: "Diseases",
    navHistory: "History",
    navAbout: "About",

    uploadTitle: "Click or drag a leaf image here",
    uploadBtn: "Choose Image",
    analyzeBtn: "Analyze Leaf",
    analyzing: "Analyzing...",

    resultSuccessTitle: "Detection Result",
    resultConfidence: "Confidence",
    resultUncertainTitle: "Uncertain Result",
    resultUncertainMsg:
      "A leaf was detected, but it doesn't clearly match any known disease class. This may be a crop or condition outside our training data.",
    resultClosestGuess: "Closest guess",
    resultRejectedTitle: "No Leaf Detected",
    resultRejectedMsg:
      "No leaf was detected in this image. Please upload a clear photo of a plant leaf.",
    resultError: "Could not reach the server. Please try again.",

    diseasesTitle: "Diseases We Can Detect",
    diseasesSubtitle: "This model recognizes 26 classes across 13 crops.",

    historyTitle: "Scan History",
    historyEmpty: "No scans yet. Analyze a leaf to see it here.",
    historyClear: "Clear History",

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

    cameraBtn: "Use Camera",
    captureBtn: "Capture",
    retakeBtn: "Retake",
    cancelCameraBtn: "Cancel",
    cameraError:
      "Could not access camera. Please check permissions or use gallery upload instead.",
    historyDeleteBtn: "Delete",
    historyDeleteOne: "Scan deleted.",
  },

  bn: {
    appName: "লিফগার্ডএআই",
    navHome: "সনাক্তকরণ",
    navDiseases: "রোগসমূহ",
    navHistory: "ইতিহাস",
    navAbout: "সম্পর্কে",

    uploadTitle: "এখানে ক্লিক করুন বা পাতার ছবি টেনে আনুন",
    uploadBtn: "ছবি নির্বাচন করুন",
    analyzeBtn: "পাতা বিশ্লেষণ করুন",
    analyzing: "বিশ্লেষণ চলছে...",

    resultSuccessTitle: "সনাক্তকরণ ফলাফল",
    resultConfidence: "আত্মবিশ্বাস",
    resultUncertainTitle: "অনিশ্চিত ফলাফল",
    resultUncertainMsg:
      "একটি পাতা সনাক্ত করা হয়েছে, তবে এটি কোনো পরিচিত রোগের সাথে স্পষ্টভাবে মেলে না। এটি প্রশিক্ষণ ডেটার বাইরের একটি ফসল বা অবস্থা হতে পারে।",
    resultClosestGuess: "নিকটতম অনুমান",
    resultRejectedTitle: "কোনো পাতা সনাক্ত হয়নি",
    resultRejectedMsg:
      "এই ছবিতে কোনো পাতা সনাক্ত করা যায়নি। অনুগ্রহ করে একটি স্পষ্ট পাতার ছবি আপলোড করুন।",
    resultError: "সার্ভারে পৌঁছানো যায়নি। আবার চেষ্টা করুন।",

    diseasesTitle: "আমরা যেসব রোগ সনাক্ত করতে পারি",
    diseasesSubtitle: "এই মডেলটি ১৩টি ফসলের ২৬টি শ্রেণী চিনতে পারে।",

    historyTitle: "স্ক্যান ইতিহাস",
    historyEmpty: "এখনো কোনো স্ক্যান নেই। একটি পাতা বিশ্লেষণ করুন।",
    historyClear: "ইতিহাস মুছুন",

    aboutTitle: "লিফগার্ডএআই সম্পর্কে",
    aboutModelSection: "মডেল পারফরম্যান্স",
    aboutTestAccuracy: "টেস্ট সঠিকতা",
    aboutPrecision: "প্রিসিশন (ম্যাক্রো)",
    aboutRecall: "রিকল (ম্যাক্রো)",
    aboutF1: "এফ১ স্কোর (ম্যাক্রো)",
    aboutDetectorSection: "লিফ ডিটেক্টর (YOLOv8n)",
    aboutDetectionRate: "পাতা সনাক্তকরণ হার",
    aboutFalsePositive: "মিথ্যা পজিটিভ হার (পাতা নয় এমন ছবি)",
    aboutLimitationsSection:
      "পরিচিত সীমাবদ্ধতা — ফলাফলে বিশ্বাস করার আগে পড়ুন",
    aboutHowItWorks: "এটি কীভাবে কাজ করে",
    aboutHowItWorksText:
      "প্রতিটি ছবি দুটি মডেলের মধ্য দিয়ে যায়: প্রথমে YOLO ডিটেক্টর পাতা আছে কিনা যাচাই করে কেটে নেয়, তারপর EfficientNet শ্রেণীবিভাগকারী রোগ সনাক্ত করে। কম আত্মবিশ্বাসের ফলাফল অনুমান না করে অনিশ্চিত হিসেবে চিহ্নিত করা হয়।",
  },

  hi: {
    appName: "लीफगार्डएआई",
    navHome: "पहचान",
    navDiseases: "रोग",
    navHistory: "इतिहास",
    navAbout: "जानकारी",

    uploadTitle: "यहाँ क्लिक करें या पत्ती की तस्वीर खींचें",
    uploadBtn: "तस्वीर चुनें",
    analyzeBtn: "पत्ती का विश्लेषण करें",
    analyzing: "विश्लेषण हो रहा है...",

    resultSuccessTitle: "पहचान परिणाम",
    resultConfidence: "विश्वास स्तर",
    resultUncertainTitle: "अनिश्चित परिणाम",
    resultUncertainMsg:
      "एक पत्ती का पता चला, लेकिन यह किसी ज्ञात रोग वर्ग से स्पष्ट रूप से मेल नहीं खाती। यह प्रशिक्षण डेटा से बाहर की फसल या स्थिति हो सकती है।",
    resultClosestGuess: "निकटतम अनुमान",
    resultRejectedTitle: "कोई पत्ती नहीं मिली",
    resultRejectedMsg:
      "इस तस्वीर में कोई पत्ती नहीं मिली। कृपया पत्ती की स्पष्ट तस्वीर अपलोड करें।",
    resultError: "सर्वर तक नहीं पहुंचा जा सका। कृपया पुनः प्रयास करें।",

    diseasesTitle: "हम जो रोग पहचान सकते हैं",
    diseasesSubtitle: "यह मॉडल 13 फसलों में 26 वर्गों को पहचानता है।",

    historyTitle: "स्कैन इतिहास",
    historyEmpty: "अभी तक कोई स्कैन नहीं। एक पत्ती का विश्लेषण करें।",
    historyClear: "इतिहास साफ़ करें",

    aboutTitle: "लीफगार्डएआई के बारे में",
    aboutModelSection: "मॉडल प्रदर्शन",
    aboutTestAccuracy: "परीक्षण सटीकता",
    aboutPrecision: "प्रिसिजन (मैक्रो)",
    aboutRecall: "रिकॉल (मैक्रो)",
    aboutF1: "एफ1 स्कोर (मैक्रो)",
    aboutDetectorSection: "लीफ डिटेक्टर (YOLOv8n)",
    aboutDetectionRate: "पत्ती पहचान दर",
    aboutFalsePositive: "गलत सकारात्मक दर (गैर-पत्ती चित्र)",
    aboutLimitationsSection:
      "ज्ञात सीमाएं — परिणामों पर भरोसा करने से पहले पढ़ें",
    aboutHowItWorks: "यह कैसे काम करता है",
    aboutHowItWorksText:
      "हर तस्वीर दो मॉडलों से गुज़रती है: पहले YOLO डिटेक्टर जांचता है कि पत्ती मौजूद है या नहीं और उसे क्रॉप करता है, फिर EfficientNet वर्गीकरणकर्ता रोग की पहचान करता है। कम विश्वास वाले परिणामों को अनुमान लगाने के बजाय अनिश्चित के रूप में चिह्नित किया जाता है।",
  },
  howToUseTitle: "उपयोग कैसे करें",
  step1Title: "1. अपलोड या कैप्चर करें",
  step1Desc: "गैलरी से एक फोटो चुनें या पत्ती की लाइव तस्वीर लें।",
  step2Title: "2. एआई विश्लेषण करता है",
  step2Desc:
    "हमारा दो-चरणीय एआई पहले जांचता है कि यह पत्ती है, फिर रोग की पहचान करता है।",
  step3Title: "3. परिणाम प्राप्त करें",
  step3Desc:
    "विश्वास स्कोर के साथ निदान देखें, जो आपके इतिहास में सहेजा जाता है।",

  faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
  faq1Q: "यह टूल कितना सटीक है?",
  faq1A:
    "हमारा मॉडल परीक्षण डेटासेट पर 99.85% सटीकता प्राप्त करता है। हालांकि, असामान्य रोशनी या पृष्ठभूमि वाली वास्तविक तस्वीरों पर सटीकता कम हो सकती है — परिणामों को अंतिम निदान नहीं, बल्कि एक सहायक मार्गदर्शिका मानें।",
  faq2Q: "अगर मेरी तस्वीर में पत्ती नहीं है तो क्या होगा?",
  faq2A:
    "ऐप स्वचालित रूप से जांचता है कि आपकी तस्वीर में पत्ती है या नहीं और विश्लेषण से पहले गैर-पत्ती तस्वीरों को अस्वीकार कर देता है।",
  faq3Q: "क्या यह किसी भी पौधे की बीमारी का पता लगा सकता है?",
  faq3A:
    "यह वर्तमान में 13 फसलों में 26 रोग/स्वास्थ्य वर्गों को पहचानता है। असमर्थित फसलों की पत्तियों के लिए अनिश्चित परिणाम मिल सकता है।",
  faq4Q: "क्या मेरा डेटा कहीं सहेजा जाता है?",
  faq4A:
    "आपका स्कैन इतिहास केवल आपके ब्राउज़र में (स्थानीय रूप से) सहेजा जाता है, हमारे सर्वर पर नहीं। आप कभी भी individual स्कैन हटा सकते हैं या पूरा इतिहास साफ़ कर सकते हैं।",

  cameraBtn: "कैमरा उपयोग करें",
  captureBtn: "कैप्चर करें",
  retakeBtn: "फिर से लें",
  cancelCameraBtn: "रद्द करें",
  cameraError:
    "कैमरा एक्सेस नहीं हो सका। कृपया अनुमतियां जांचें या गैलरी से अपलोड करें।",
  historyDeleteBtn: "हटाएं",
  historyDeleteOne: "स्कैन हटा दिया गया।",
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
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.documentElement.lang = currentLang;
  // Re-render dynamic sections that build their own text (results, history, disease list)
  if (typeof renderHistory === "function") renderHistory();
  if (typeof renderDiseaseList === "function") renderDiseaseList();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}
