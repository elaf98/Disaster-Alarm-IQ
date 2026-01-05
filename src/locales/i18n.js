 import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // --- Map & Weather ---
      live_map_title: "Live Threat Map - Iraq",
      map_subtitle: "Real-time updates via Satellites & USGS data",
      loading: "Fetching real-time data...",
      temperature: "Temperature",
      humidity: "Humidity",
      disaster_detected: "Disaster Alert",
      liveFeed: "Live Feed",
      
      // --- Provinces ---
      provinces: {
        baghdad: "Baghdad",
        basra: "Basra",
        erbil: "Erbil",
        mosul: "Mosul",
        najaf: "Najaf",
        anbar: "Anbar",
        sulaymaniyah: "Sulaymaniyah"
      },

      // --- Emergency Actions (New Cards) ---
      call_police: "Call Police",
      call_ambulance: "Ambulance",
      share_location: "Share Location",
      first_aid_guide: "First Aid",
      gps_active: "GPS System Active",
      medical_info: "Medical Instructions",
      latestNews: "Latest News",
      quickActions: "Quick Actions",
      my_location_is: "My current location is",
      geolocation_not_supported: "Geolocation is not supported by your browser",

      // --- Status ---
      status: {
        safe: "Safe Mode",
        warning: "Warning Zone",
        critical: "High Danger"
      },

      // --- Dashboard UI ---
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
      comingSoon: "Coming soon - Advanced analytics",
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
      issued: "Issued",
      activeUntil: "Active until",
      tornadoWarning: "Tornado Warning",
      floodWarning: "Flood Warning",
      earthquakeAdvisory: "Earthquake Advisory",
      severeWeather: "Severe Weather",
      secure: "Secure",
      safe: "Safe",
      danger: "Danger",
      flood: "Flood",
      earthquake: "Earthquake",
      storm: "Storm",
      heatwave: "Heatwave",
      disasterFrequency: "Disaster Frequency",
      riskLevels: "Current Risk Levels"
    }
  },
  ar: {
    translation: {
      // --- الخريطة والطقس ---
      live_map_title: "خارطة المخاطر الحية - العراق",
      map_subtitle: "تحديث مباشر بناءً على الأقمار الصناعية وبيانات USGS",
      loading: "جاري جلب البيانات...",
      temperature: "درجة الحرارة",
      humidity: "الرطوبة",
      disaster_detected: "إنذار كارثة",
      liveFeed: "بث مباشر",

      // --- المحافظات ---
      provinces: {
        baghdad: "بغداد",
        basra: "البصرة",
        erbil: "أربيل",
        mosul: "الموصل",
        najaf: "النجف",
        anbar: "الأنبار",
        sulaymaniyah: "السليمانية"
      },

      // --- الإجراءات الطارئة (الكارتات الجديدة) ---
      call_police: "اتصال بالشرطة",
      call_ambulance: "إسعاف فوري",
      share_location: "مشاركة موقعي",
      first_aid_guide: "دليل الإسعافات",
      gps_active: "نظام GPS مفعّل",
      medical_info: "إرشادات طبية",
      latestNews: "آخر الأخبار",
      quickActions: "إجراءات سريعة",
      my_location_is: "موقعي الحالي هو",
      geolocation_not_supported: "متصفحك لا يدعم جلب الموقع الجغرافي",

      // --- الحالات ---
      status: {
        safe: "وضع آمن",
        warning: "منطقة تحذير",
        critical: "خطر داهم"
      },

      // --- واجهة التحكم ---
      dashboard: "لوحة التحكم",
      alerts: "التنبيهات",
      threatMap: "خريطة التهديدات",
      resources: "الموارد",
      analytics: "التحليلات",
      activeAlerts: "التنبيهات النشطة",
      yourSafetyStatus: "حالة الأمان الخاصة بك",
      responseTime: "وقت الاستجابة",
      evacuationCenters: "مراكز الإخلاء",
      emergencyActions: "الإجراءات الطارئة",
      weatherStatus: "حالة الطقس",
      emergencyContacts: "جهات الاتصال الطارئة",
      allAlerts: "جميع التنبيهات",
      critical: "حرج",
      warning: "تحذير",
      viewAll: "عرض الكل",
      viewDetails: "عرض التفاصيل",
      issued: "صدر",
      activeUntil: "نشط حتى",
      tornadoWarning: "تحذير إعصار",
      floodWarning: "تحذير فيضان",
      earthquakeAdvisory: "تنبيه زلزال",
      severeWeather: "طقس شديد",
      secure: "آمن",
      safe: "آمن",
      danger: "خطر",
      flood: "فيضانات",
      earthquake: "زلازل",
      storm: "عواصف",
      heatwave: "موجة حر",
      riskLevels: "مستويات المخاطر الحالية"
    }
  },
 ku: {
    translation: {
      // --- الروابط الأساسية في النافبار ---
      dashboard: "داشبۆرد",
      alerts: "ئاگادارکردنەوەکان",
      threatMap: "نەخشەی مەترسی",
      resources: "سەرچاوەکان",    // الترجمة المفقودة للموارد
      analytics: "شیکارییەکان",   // الترجمة المفقودة للتحليلات

      // --- اسم المنصة (ثابت بالعربي كما طلبت) ---
      app_name: "راصد", 
      important_links: "بەستەرە گرنگەکان",
      emergencyContacts: "پەیوەندییە فریاکەوتنەوەکان",

      // ... بقية المفاتيح كما هي في ملفك
      provinces: {
        baghdad: "بەغداد",
        basra: "بەسرە",
        erbil: "هەولێر",
        mosul: "مووسڵ",
        najaf: "نەجەف",
        anbar: "ئەنبار",
        sulaymaniyah: "سلێمانی"
      },
      call_police: "پەیوەندی پۆلیس",
      call_ambulance: "فریاکەوتنی خێرا",
      share_location: "ناردنی شوێن",
      first_aid_guide: "ڕێبەری پزیشکی",
      gps_active: "سیستەمی GPS چالاکە",
      medical_info: "زانیاری پزیشکی",
      latestNews: "دوایین هەواڵ",
      quickActions: "کرداری خێرا",
      my_location_is: "شوێنی ئێستام ئەمەیە",
      geolocation_not_supported: "وێبگەڕەکەت پشتگیری GPS ناکات",
      status: {
        safe: "دۆخی سەلامەت",
        warning: "ناوچەی ئاگاداری",
        critical: "مەترسی زۆر"
      },
      activeAlerts: "ئاگادارکردنەوە چالاکەکان",
      yourSafetyStatus: "ڕەوشی سەلامەتی تۆ",
      responseTime: "کاتی وەڵامدانەوە",
      evacuationCenters: "ناوەندەکانی ڕاکشان",
      emergencyActions: "کردارە فریاکەوتنەوەکان",
      weatherStatus: "ڕەوشی کەشوهەوا",
      allAlerts: "هەموو ئاگادارکردنەوەکان",
      critical: "گرنگ",
      warning: "ئاگاداری",
      viewAll: "بینینی هەموو",
      viewDetails: "بینینی وردەکاری",
      issued: "دەرچوو",
      activeUntil: "چالاکە تا",
      tornadoWarning: "ئاگاداری تۆرنادۆ",
      floodWarning: "ئاگاداري لافاو",
      earthquakeAdvisory: "ڕاوێژکاری زەویلەرزە",
      severeWeather: "کەشوهەوای توند",
      secure: "سەلامەت",
      safe: "سەلامەت",
      danger: "مەترسی",
      flood: "لافاو",
      earthquake: "بوومەلەرزە",
      storm: "گەردەلوول",
      heatwave: "شەپۆلی گەرما",
      riskLevels: "ئاستی مەترسییەکان"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;