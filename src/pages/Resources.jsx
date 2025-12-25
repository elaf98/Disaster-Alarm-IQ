import React from 'react';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">{t('resources')}</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Emergency resources and guides</p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-center py-6 sm:py-8">
            <i className="fas fa-book-medical text-3xl sm:text-4xl text-green-500 mb-3 sm:mb-4"></i>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Emergency Resources</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-2 px-4">First aid guides, emergency contacts, and preparedness checklists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;