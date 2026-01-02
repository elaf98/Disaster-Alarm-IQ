import React from 'react';
import { useTranslation } from 'react-i18next'; // إضافة الاستيراد

const ThreatMap = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('liveThreatMap')}</h2>
      <div className="bg-gray-200 h-64 sm:h-96 md:h-[500px] rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
        <p className="text-gray-600 text-sm sm:text-base">{t('liveThreatMap')}</p>
      </div>
    </div>
  );
};

export default ThreatMap;