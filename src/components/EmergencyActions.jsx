import React from 'react';
import { useTranslation } from 'react-i18next';

const EmergencyActions = () => {
  const { t } = useTranslation();

  const handleEmergencyAction = (action) => {
    alert(`Emergency action: ${action} - This would trigger real emergency response`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t('emergencyActions')}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Quick access in case of emergency</p>
      </div>
      <div className="p-3 sm:p-4 grid grid-cols-2 gap-3 sm:gap-4">
        <button 
          onClick={() => handleEmergencyAction(t('emergencyCall'))}
          className="emergency-action flex flex-col items-center justify-center p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
            <i className="fas fa-phone-alt text-red-600 text-lg sm:text-xl"></i>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">{t('emergencyCall')}</span>
        </button>
        
        <button 
          onClick={() => handleEmergencyAction(t('shareLocation'))}
          className="emergency-action flex flex-col items-center justify-center p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <i className="fas fa-map-marker-alt text-blue-600 text-lg sm:text-xl"></i>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">{t('shareLocation')}</span>
        </button>
        
        <button 
          onClick={() => handleEmergencyAction(t('firstAidGuide'))}
          className="emergency-action flex flex-col items-center justify-center p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
            <i className="fas fa-first-aid text-green-600 text-lg sm:text-xl"></i>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">{t('firstAidGuide')}</span>
        </button>
        
        <button 
          onClick={() => handleEmergencyAction(t('sosSignal'))}
          className="emergency-action flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
            <i className="fas fa-sos text-purple-600 text-lg sm:text-xl"></i>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">{t('sosSignal')}</span>
        </button>
      </div>
    </div>
  );
};

export default EmergencyActions;