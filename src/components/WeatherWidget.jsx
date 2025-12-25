import React from 'react';
import { useTranslation } from 'react-i18next';

const WeatherWidget = () => {
  const { t } = useTranslation();

  return (
    <div className="weather-widget text-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base sm:text-lg font-semibold">{t('weatherStatus')}</h3>
            <p className="text-blue-200 text-xs sm:text-sm mt-1">Baghdad, Iraq</p>
          </div>
          <div className="text-right">
            <p className="text-2xl sm:text-3xl font-bold">32°C</p>
            <p className="text-blue-200 text-xs sm:text-sm">Sunny</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 flex justify-between">
          <div className="text-center flex-1">
            <p className="text-xs sm:text-sm text-blue-200">Wind</p>
            <p className="font-medium mt-1 text-sm sm:text-base">15 km/h</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-xs sm:text-sm text-blue-200">Humidity</p>
            <p className="font-medium mt-1 text-sm sm:text-base">25%</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-xs sm:text-sm text-blue-200">Visibility</p>
            <p className="font-medium mt-1 text-sm sm:text-base">10 km</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 px-4 sm:px-5 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center">
          <i className="fas fa-exclamation-triangle text-yellow-400 mr-2 text-sm sm:text-base"></i>
          <span className="text-xs sm:text-sm">High dust levels expected</span>
        </div>
        <a href="#" className="text-blue-200 text-xs sm:text-sm hover:text-white">Details</a>
      </div>
    </div>
  );
};

export default WeatherWidget;