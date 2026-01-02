import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// 1. استيراد المكتبة التي قمت بتثبيتها
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // ... الكود الخاص بك بالإنجليزية (لا تقم بتغييره)
      dashboard: "Dashboard",
      alerts: "Alerts",
      threatMap: "Threat Map",
      resources: "Resources",
      analytics: "Analytics",
      account: "Account",
      activeAlerts: "Active Alerts",
      yourSafetyStatus: "Your Safety Status",
      responseTime: "Response Time",
      evacuationCenters: "Evacuation Centers",
      liveThreatMap: "Live Threat Map",
      recentAlerts: "Recent Alerts",
      emergencyActions: "Emergency Actions",
      weatherStatus: "Weather Status",
      emergencyContacts: "Emergency Contacts",
      allAlerts: "All Alerts",
      critical: "Critical",
      warning: "Warning",
      advisory: "Advisory",
      weather: "Weather",
      geological: "Geological",
      viewAll: "View All",
      viewDetails: "View Details",
      markAllAsRead: "Mark all as read",
      notifications: "Notifications",
      highPriority: "High Priority",
      mediumPriority: "Medium Priority",
      lowPriority: "Low Priority",
      issued: "Issued",
      activeUntil: "Active until",
      milesAway: "miles away",
      emergencyCall: "Emergency Call",
      shareLocation: "Share Location",
      firstAidGuide: "First Aid Guide",
      sosSignal: "SOS Signal",
      tornadoWarning: "Tornado Warning",
      floodWarning: "Flood Warning",
      earthquakeAdvisory: "Earthquake Advisory",
      severeWeather: "Severe Weather",
      secure: "Secure",
      safe: "Safe",
      danger: "Danger"
    }
  },
  ar: {
    translation: {
    // ... الكود الخاص بك بالعربية (لا تقم بتغييره)
      dashboard: "لوحة التحكم",
      alerts: "التنبيهات",
      threatMap: "خريطة التهديدات",
      resources: "الموارد",
      analytics: "التحليلات",
      account: "الحساب",
      activeAlerts: "التنبيهات النشطة",
      yourSafetyStatus: "حالة الأمان الخاصة بك",
      responseTime: "وقت الاستجابة",
      evacuationCenters: "مراكز الإخلاء",
      liveThreatMap: "خريطة التهديدات المباشرة",
      recentAlerts: "التنبيهات الأخيرة",
      emergencyActions: "الإجراءات الطارئة",
      weatherStatus: "حالة الطقس",
      emergencyContacts: "جهات الاتصال الطارئة",
      allAlerts: "جميع التنبيهات",
      critical: "حرج",
      warning: "تحذير",
      advisory: "استشاري",
      weather: "الطقس",
      geological: "جيولوجي",
      viewAll: "عرض الكل",
      viewDetails: "عرض التفاصيل",
      markAllAsRead: "تحديد الكل كمقروء",
      notifications: "الإشعارات",
      highPriority: "أولوية عالية",
      mediumPriority: "أولوية متوسطة",
      lowPriority: "أولوية منخفضة",
      issued: "صدر",
      activeUntil: "نشط حتى",
      milesAway: "ميل بعيداً",
      emergencyCall: "الاتصال الطارئ",
      shareLocation: "مشاركة الموقع",
      firstAidGuide: "دليل الإسعافات الأولية",
      sosSignal: "إشارة الاستغاثة",
      tornadoWarning: "تحذير إعصار",
      floodWarning: "تحذير فيضان",
      earthquakeAdvisory: "تنبيه زلزال",
      severeWeather: "طقس شديد",
      secure: "آمن",
      safe: "آمن",
      danger: "خطر"
    }
  },
  ku: {
    translation: {
      // ... الكود الخاص بك بالكردية (لا تقم بتغييره)
      dashboard: "داشبۆرد",
      alerts: "ئاگادارکردنەوەکان",
      threatMap: "نەخشەی مەترسی",
      resources: "سەرچاوەکان",
      analytics: "شیکاری",
      account: "هەژمار",
      activeAlerts: "ئاگادارکردنەوە چالاکەکان",
      yourSafetyStatus: "ڕەوشی سەلامەتی تۆ",
      responseTime: "کاتی وەڵامدانەوە",
      evacuationCenters: "ناوەندەکانی ڕاکشان",
      liveThreatMap: "نەخشەی مەترسی ڕاستەوخۆ",
      recentAlerts: "ئاگادارکردنەوەکانی دوایی",
      emergencyActions: "کردارە فریاکەوتنەوەکان",
      weatherStatus: "ڕەوشی کەشوهەوا",
      emergencyContacts: "پەیوەندییە فریاکەوتنەوەکان",
      allAlerts: "هەموو ئاگادارکردنەوەکان",
      critical: "گرنگ",
      warning: "ئاگاداری",
      advisory: "ڕاوێژکاری",
      weather: "کەشوهەوا",
      geological: "زەویناسی",
      viewAll: "بینینی هەموو",
      viewDetails: "بینینی وردەکاری",
      markAllAsRead: "نیشانەکردنی هەموو وەک خوێندراو",
      notifications: "ئاگانامەکان",
      highPriority: "پێشەنگی بەرز",
      mediumPriority: "پێشەنگی مامناوەند",
      lowPriority: "پێشەنگی نزم",
      issued: "دەرچوو",
      activeUntil: "چالاکە تا",
      milesAway: "میل دوورە",
      emergencyCall: "پەیوەندی فریاکەوتنەوە",
      shareLocation: "هاوبەشی کردن شوێن",
      firstAidGuide: "ڕێنمایی یارمەتی یەکەم",
      sosSignal: "ئاماژەی SOS",
      tornadoWarning: "ئاگاداری تۆرنادۆ",
      floodWarning: "ئاگاداری لافاو",
      earthquakeAdvisory: "ڕاوێژکاری زەویلەرزە",
      severeWeather: "کەشوهەوای توند",
      secure: "سەلامەت",
      safe: "سەلامەت",
      danger: "مەترسی"
    }
  }
};

i18n
  .use(LanguageDetector) // تفعيل كاشف وحافظ اللغة
  .use(initReactI18next)
  .init({
    resources,
    // تم حذف سطر lng: "en" لكي لا يجبر التطبيق على الإنجليزية عند كل تحديث
    fallbackLng: "ar", // اللغة التي يعمل بها إذا لم يجد لغة مخزنة (يفضل وضعها العربية لمشروعك)
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage'], // حفظ الاختيار في ذاكرة المتصفح
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;