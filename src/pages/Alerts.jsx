import React from 'react';
import { useTranslation } from 'react-i18next'; // إضافة الاستيراد

const Alerts = () => {
  const { t } = useTranslation(); // تعريف الدالة
  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('allAlerts')}</h2>
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 rounded-lg">
          <p className="font-bold text-sm sm:text-base">⚠️ {t('warning')}</p>
          <p className="text-xs sm:text-sm mt-1">{t('severeWeather')}</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg">
          <p className="font-bold text-sm sm:text-base">✅ {t('secure')}</p>
          <p className="text-xs sm:text-sm mt-1">{t('safe')}</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;