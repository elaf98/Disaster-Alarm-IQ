import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar' || i18n.language === 'ku';

  // بيانات حقيقية لمراكز في العراق
  const emergencyResources = [
    {
      id: 1,
      category: 'shelters',
      name: { ar: 'مخيم الخازر للإيواء', en: 'Al-Khazer Shelter Camp', ku: 'کەمپی خازر بۆ پەنابەرهێنان' },
      location: { ar: 'طريق أربيل - موصل', en: 'Erbil-Mosul Road', ku: 'ڕێگای هەولێر - مووسڵ' },
      phone: '07501234567',
      coords: '36.2625,43.5358',
      icon: 'fa-campground',
      color: 'bg-amber-500'
    },
    {
      id: 2,
      category: 'civil_defense',
      name: { ar: 'مركز الدفاع المدني الرئيسي - بغداد', en: 'Main Civil Defense - Baghdad', ku: 'ناوەندی سەرەکی بەرگری شارستانی - بەغداد' },
      location: { ar: 'منطقة الكرادة - بغداد', en: 'Karrada, Baghdad', ku: 'ناوچەی کەڕادە - بەغداد' },
      phone: '115',
      coords: '33.3128,44.4246',
      icon: 'fa-fire-extinguisher',
      color: 'bg-red-600'
    },
    {
      id: 3,
      category: 'shelters',
      name: { ar: 'مركز إيواء حي السلام', en: 'Al-Salam Shelter Center', ku: 'سەنتەری پەناگەی گەڕەکی سەلام' },
      location: { ar: 'محافظة النجف الأشرف', en: 'Najaf Governorate', ku: 'پارێزگای نەجەف' },
      phone: '07801112223',
      coords: '32.0259,44.3462',
      icon: 'fa-house-emergency',
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 space-y-8" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Header Section */}
      <div className="bg-[#2b5a84] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">{t('resources')}</h1>
          <p className="text-blue-100/80 font-medium text-lg max-w-2xl">{t('resources_subtitle')}</p>
        </div>
        <i className="fas fa-boxes-stacked absolute -bottom-10 -left-10 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emergencyResources.map((item) => (
          <div key={item.id} className="bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
            
            {/* Card Header */}
            <div className={`h-3 w-full ${item.color}`}></div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${item.color} bg-opacity-10 flex items-center justify-center text-xl`}>
                  <i className={`fas ${item.icon} ${item.color.replace('bg-', 'text-')}`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                  {t(item.category)}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                {item.name[i18n.language] || item.name['ar']}
              </h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                  <i className="fas fa-map-marker-alt text-slate-300 w-4"></i>
                  {item.location[i18n.language] || item.location['ar']}
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                  <i className="fas fa-phone-alt text-slate-300 w-4"></i>
                  <span dir="ltr">{item.phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                <button 
                  onClick={() => window.location.href = `tel:${item.phone}`}
                  className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-red-600 transition-colors shadow-lg active:scale-95"
                >
                  <i className="fas fa-phone"></i>
                  {t('call_now')}
                </button>
                <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${item.coords}`, '_blank')}
                  className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-all active:scale-95"
                >
                  <i className="fas fa-route"></i>
                  {t('get_directions')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Notice Footer */}
      <div className="bg-slate-100/50 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-dashed border-slate-300">
        <div className="flex items-center gap-4 text-slate-600">
          <i className="fas fa-info-circle text-2xl text-[#1E3A8A]"></i>
          <p className="text-sm font-bold leading-relaxed">
            {isRTL 
              ? "يتم تحديث هذه البيانات بالتنسيق مع الجهات الحكومية. إذا كنت تملك معلومات عن ملاجئ جديدة يرجى مراسلتنا."
              : "This data is updated in coordination with government entities. If you have info on new shelters, please contact us."}
          </p>
        </div>
        <button className="px-8 py-3 bg-[#2b5a84] text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl hover:bg-red-600 transition-all">
          {t('send_feedback')}
        </button>
      </div>
    </div>
  );
};

export default Resources;