import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: "Dashboard",
      alerts: "Alerts",
      threatMap: "Threat Map",
      resources: "Resources",
      analytics: "Analytics",
      account: "Account",
      
      // Dashboard
      activeAlerts: "Active Alerts",
      yourSafetyStatus: "Your Safety Status",
      responseTime: "Response Time",
      evacuationCenters: "Evacuation Centers",
      liveThreatMap: "Live Threat Map",
      recentAlerts: "Recent Alerts",
      emergencyActions: "Emergency Actions",
      weatherStatus: "Weather Status",
      emergencyContacts: "Emergency Contacts",
      
      // Alerts
      allAlerts: "All Alerts",
      critical: "Critical",
      warning: "Warning",
      advisory: "Advisory",
      weather: "Weather",
      geological: "Geological",
      
      // Common
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
      
      // Emergency Actions
      emergencyCall: "Emergency Call",
      shareLocation: "Share Location",
      firstAidGuide: "First Aid Guide",
      sosSignal: "SOS Signal",
      
      // Alert Types
      tornadoWarning: "Tornado Warning",
      floodWarning: "Flood Warning",
      earthquakeAdvisory: "Earthquake Advisory",
      severeWeather: "Severe Weather",
      
      // Status
      secure: "Secure",
      safe: "Safe",
      danger: "Danger"
    }
  },
  ar: {
    translation: {
      // Navigation
      dashboard: "لوحة التحكم",
      alerts: "التنبيهات",
      threatMap: "خريطة التهديدات",
      resources: "الموارد",
      analytics: "التحليلات",
      account: "الحساب",
      
      // Dashboard
      activeAlerts: "التنبيهات النشطة",
      yourSafetyStatus: "حالة الأمان الخاصة بك",
      responseTime: "وقت الاستجابة",
      evacuationCenters: "مراكز الإخلاء",
      liveThreatMap: "خريطة التهديدات المباشرة",
      recentAlerts: "التنبيهات الأخيرة",
      emergencyActions: "الإجراءات الطارئة",
      weatherStatus: "حالة الطقس",
      emergencyContacts: "جهات الاتصال الطارئة",
      
      // Alerts
      allAlerts: "جميع التنبيهات",
      critical: "حرج",
      warning: "تحذير",
      advisory: "استشاري",
      weather: "الطقس",
      geological: "جيولوجي",
      
      // Common
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
      
      // Emergency Actions
      emergencyCall: "الاتصال الطارئ",
      shareLocation: "مشاركة الموقع",
      firstAidGuide: "دليل الإسعافات الأولية",
      sosSignal: "إشارة الاستغاثة",
      
      // Alert Types
      tornadoWarning: "تحذير إعصار",
      floodWarning: "تحذير فيضان",
      earthquakeAdvisory: "تنبيه زلزال",
      severeWeather: "طقس شديد",
      
      // Status
      secure: "آمن",
      safe: "آمن",
      danger: "خطر"
    }
  },
  ku: {
    translation: {
      // Navigation
      dashboard: "داشبۆرد",
      alerts: "ئاگادارکردنەوەکان",
      threatMap: "نەخشەی مەترسی",
      resources: "سەرچاوەکان",
      analytics: "شیکاری",
      account: "هەژمار",
      
      // Dashboard
      activeAlerts: "ئاگادارکردنەوە چالاکەکان",
      yourSafetyStatus: "ڕەوشی سەلامەتی تۆ",
      responseTime: "کاتی وەڵامدانەوە",
      evacuationCenters: "ناوەندەکانی ڕاکشان",
      liveThreatMap: "نەخشەی مەترسی ڕاستەوخۆ",
      recentAlerts: "ئاگادارکردنەوەکانی دوایی",
      emergencyActions: "کردارە فریاکەوتنەوەکان",
      weatherStatus: "ڕەوشی کەشوهەوا",
      emergencyContacts: "پەیوەندییە فریاکەوتنەوەکان",
      
      // Alerts
      allAlerts: "هەموو ئاگادارکردنەوەکان",
      critical: "گرنگ",
      warning: "ئاگاداری",
      advisory: "ڕاوێژکاری",
      weather: "کەشوهەوا",
      geological: "زەویناسی",
      
      // Common
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
      
      // Emergency Actions
      emergencyCall: "پەیوەندی فریاکەوتنەوە",
      shareLocation: "هاوبەشی کردن شوێن",
      firstAidGuide: "ڕێنمایی یارمەتی یەکەم",
      sosSignal: "ئاماژەی SOS",
      
      // Alert Types
      tornadoWarning: "ئاگاداری تۆرنادۆ",
      floodWarning: "ئاگاداری لافاو",
      earthquakeAdvisory: "ڕاوێژکاری زەویلەرزە",
      severeWeather: "کەشوهەوای توند",
      
      // Status
      secure: "سەلامەت",
      safe: "سەلامەت",
      danger: "مەترسی"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;