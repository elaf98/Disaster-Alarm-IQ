import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';

const Alerts = () => {
  const { t, i18n } = useTranslation();
  const [alerts, setAlerts] = useState([]);

  // جلب التنبيهات المخزنة في المتصفح عند تحميل الصفحة
  useEffect(() => {
    const savedAlerts = JSON.parse(localStorage.getItem('recent_alerts') || '[]');
    setAlerts(savedAlerts);
  }, []);

  return (
    <div className={`p-6 max-w-4xl mx-auto ${i18n.language === 'en' ? 'text-left' : 'text-right'}`} dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
      {/* الرأس: تم حذف زر المسح/التحديد كمقروء بناءً على طلبك */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Bell className="text-blue-600" /> {t('allAlerts')}
          </h1>
          <p className="text-gray-500 text-sm">{t('recentAlerts')}</p>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed">
            <ShieldCheck size={48} className="mx-auto text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-700">{t('no_active_alerts')}</h3>
          </div>
        ) : (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-5 rounded-xl border-l-4 shadow-sm bg-white flex items-start gap-4 transition-all hover:shadow-md ${
                alert.type === 'critical' ? 'border-red-600' : 'border-orange-500'
              }`}
            >
              {/* أيقونة التنبيه حسب النوع */}
              <div className={`p-3 rounded-full ${alert.type === 'critical' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                <AlertTriangle size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {/* ترجمة اسم المحافظة والحالة للغات الثلاث */}
                    {t(`provinces.${alert.provinceId}`)}: {t(`status.${alert.type}`)}
                  </h3>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} /> {alert.time}
                  </span>
                </div>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {/* وصف الإنذار المترجم */}
                  {alert.description}
                </p>
                <div className="mt-3 flex gap-2">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    alert.type === 'critical' ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {t('danger_level')}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Alerts;