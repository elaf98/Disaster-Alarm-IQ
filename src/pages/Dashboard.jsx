import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import DashboardMap from '../components/DashboardMap';
import WeatherWidget from '../components/WeatherWidget';

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const [newsItems, setNewsItems] = useState([]);
  
  // التحقق من اتجاه اللغة (RTL للعربية والكردية)
  const isRTL = i18n.language === 'ar' || i18n.language === 'ku';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const query = isRTL ? 'العراق عاجل' : 'Iraq breaking news';
        const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${i18n.language}&gl=IQ`);
        if (response.data.items) setNewsItems(response.data.items.map(item => item.title));
      } catch (e) { 
        setNewsItems([t('severeWeather')]); 
      }
    };
    fetchNews();
  }, [i18n.language, t, isRTL]);

  // وظيفة مشاركة الموقع الحقيقية
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        window.open(`https://www.google.com/maps?q=${p.coords.latitude},${p.coords.longitude}`, '_blank');
      }, () => alert(isRTL ? "يرجى تفعيل خدمات الموقع GPS" : "Please enable GPS services"));
    }
  };

  const actions = [
    { id: 'police', title: t('call_police'), sub: '104', icon: 'fas fa-shield-alt', color: 'text-blue-700', bg: 'bg-blue-50', action: () => window.location.href = 'tel:104' },
    { id: 'ambulance', title: t('call_ambulance'), sub: '122', icon: 'fas fa-ambulance', color: 'text-red-600', bg: 'bg-red-50', action: () => window.location.href = 'tel:122' },
    { id: 'location', title: t('share_location'), sub: t('gps_active'), icon: 'fas fa-map-marker-alt', color: 'text-green-600', bg: 'bg-green-50', action: handleShareLocation },
    { id: 'firstaid', title: t('first_aid_guide'), sub: t('medical_info'), icon: 'fas fa-hand-holding-medical', color: 'text-amber-600', bg: 'bg-amber-50', action: () => window.open('https://www.ifrc.org', '_blank') }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans selection:bg-blue-100" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-full px-4 sm:px-10 py-8 space-y-10">
        
        {/* 1. شريط التنبيهات العلوي */}
        <div className="w-full rounded-2xl bg-red-600 shadow-lg p-5 flex items-center gap-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 animate-pulse">
            <i className="fas fa-exclamation-triangle text-xl"></i>
          </div>
          <div className="overflow-hidden">
            <h3 className="font-bold text-sm sm:text-lg">{t('critical')}: {newsItems[0] || t('loading')}</h3>
            <p className="text-white/80 text-xs sm:text-sm font-medium opacity-90 truncate">{newsItems[1] || t('tornadoWarning')}</p>
          </div>
        </div>

        {/* 2. ويدجت الطقس */}
        <div className="w-full">
          <WeatherWidget />
        </div>

        {/* 3. الخريطة التفاعلية */}
        <div className="w-full">
          <div className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-slate-200 h-[500px] sm:h-[700px] overflow-hidden group">
            <DashboardMap className="w-full h-full rounded-[2.2rem] transition-all duration-700 group-hover:brightness-105" />
          </div>
        </div>

        {/* 4. كارتات الإجراءات */}
        <div className="w-full space-y-6">
          <div className={`flex items-center gap-3 px-2 border-${isRTL ? 'r' : 'l'}-4 border-blue-800`}>
            <h3 className="text-sm font-black text-[#1E3A8A] uppercase tracking-widest px-2">{t('emergencyActions')}</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((item) => (
              <button key={item.id} onClick={item.action} className={`${item.bg} rounded-3xl border border-white hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-8 group relative overflow-hidden active:scale-95 shadow-sm`}>
                <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h4 className={`font-black text-xs sm:text-base mb-1 ${item.color}`}>{item.title}</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.sub}</p>
              </button>
            ))}
          </div>
        </div>

      {/* 5. الفوتر الاحترافي الموحد - مترجم بالكامل */}
<footer className="w-full mt-24 pt-16 border-t border-slate-200 pb-10 bg-white/50 backdrop-blur-sm rounded-t-[3rem]">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 mb-16">
    
    {/* قسم الهوية والشعار */}
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg transform -rotate-6 bg-white flex items-center justify-center border border-slate-100 p-1">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-xl font-black text-[#1E3A8A] tracking-tighter uppercase leading-none">
            {i18n.language === 'ar' ? 'راصد' : i18n.language === 'ku' ? 'ڕاسد' : 'RASID'} <span className="text-red-600">IQ</span>
          </h2>
          <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">
            {t('map_subtitle')}
          </span>
        </div>
      </div>
      <p className="text-[#475569] text-sm leading-relaxed font-semibold opacity-90">
        {i18n.language === 'ar' && "المنصة المتكاملة لإدارة الأزمات والكوارث في العراق. رؤيتنا هي بناء مجتمع آمن ومستعد لمواجهة الطوارئ."}
        {i18n.language === 'en' && "Iraq's integrated platform for crisis and disaster management. Our vision is a safe and prepared community."}
        {i18n.language === 'ku' && "پلاتفۆرمی نیشتمانی بۆ بەڕێوەبردنی قەیرانەکان لە عێراق. ئامانجمان پاراستنی ژیانی هاوڵاتیانە."}
      </p>
    </div>

    {/* روابط هامة - مفاتيح من ملفك */}
    <div className="space-y-6">
      <h4 className={`text-xs font-black text-[#1E3A8A] uppercase tracking-widest border-${isRTL ? 'r' : 'l'}-4 border-red-600 px-4`}>
        {isRTL ? 'روابط هامة' : 'Useful Links'}
      </h4>
      <ul className="space-y-4 text-[#64748B] text-sm font-bold">
        <li className="hover:text-[#1E3A8A] cursor-pointer transition-all flex items-center gap-3 group">
          <i className={`fas fa-chevron-${isRTL ? 'left' : 'right'} text-[8px] opacity-0 group-hover:opacity-100 transition-all`}></i> 
          {t('threatMap')}
        </li>
        <li className="hover:text-[#1E3A8A] cursor-pointer transition-all flex items-center gap-3 group">
          <i className={`fas fa-chevron-${isRTL ? 'left' : 'right'} text-[8px] opacity-0 group-hover:opacity-100 transition-all`}></i> 
          {t('resources')}
        </li>
      </ul>
    </div>

    {/* قنوات التواصل */}
    <div className="space-y-6">
      <h4 className={`text-xs font-black text-[#1E3A8A] uppercase tracking-widest border-${isRTL ? 'r' : 'l'}-4 border-blue-600 px-4`}>
        {t('emergencyContacts')}
      </h4>
      <div className="space-y-5">
        <a href="mailto:support@rasid.iq" className="flex items-center gap-3 text-sm text-[#334155] hover:text-[#1E3A8A] font-bold transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1E3A8A]"><i className="far fa-envelope text-xs"></i></div>
          support@rasid.iq
        </a>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-all cursor-pointer"><i className="fab fa-twitter"></i></div>
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all cursor-pointer"><i className="fab fa-facebook-f"></i></div>
        </div>
      </div>
    </div>

    {/* كارت الشكوى - لون النافبار */}
    <div className="bg-[#2b5a84] rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl">
       <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4 backdrop-blur-md">
            <i className="fas fa-comment-medical text-xl"></i>
          </div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-2">
            {i18n.language === 'ar' ? 'مركز المقترحات' : i18n.language === 'ku' ? 'ناوەندی پێشنیارەکان' : 'Feedback Hub'}
          </h4>
          <p className="text-[11px] mb-6 text-blue-100 font-medium leading-relaxed opacity-80">
            {i18n.language === 'ar' ? 'مساهمتك تساعدنا في إنقاذ الأرواح بشكل أسرع.' : i18n.language === 'ku' ? 'پێشنیارەکانت یارمەتیمان دەدات بۆ ڕزگارکردنی ژیان.' : 'Your input helps us save lives faster.'}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full py-3.5 bg-red-600 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-[#1E3A8A] transition-all transform active:scale-95">
            {i18n.language === 'ar' ? 'إرسال ملاحظة' : i18n.language === 'ku' ? 'ناردنی تێبینی' : 'SEND FEEDBACK'}
          </button>
       </div>
       <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
    </div>
  </div>

  {/* الشريط السفلي النهائي */}
  <div className="flex flex-col lg:flex-row justify-between items-center pt-10 border-t border-slate-200/50 gap-8 px-8">
    <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.25em]">
      © {new Date().getFullYear()} <span className="text-[#1E3A8A]">
        {i18n.language === 'ar' ? 'منصة راصد ' : i18n.language === 'ku' ? 'پلاتفۆرمی ڕاسد' : 'RASID NATIONAL PLATFORM'}
      </span>
    </div>
    <div className="flex items-center gap-8">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">v2.4.0-Stable</span>
        <div className="px-5 py-2 bg-[#ECFDF5] rounded-full flex items-center gap-3 border border-[#A7F3D0]">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
           </span>
           <span className="text-[9px] font-black text-green-700 uppercase tracking-tighter">
             {i18n.language === 'ar' ? 'الأنظمة نشطة' : i18n.language === 'ku' ? 'سیستەمەکان چالاکن' : 'Systems Active'}
           </span>
        </div>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
};

export default Dashboard;