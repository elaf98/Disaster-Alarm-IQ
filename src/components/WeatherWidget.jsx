import React from 'react';
import { useTranslation } from 'react-i18next';

const WeatherWidget = () => {
  const { t } = useTranslation();

  return (
    <div className="weather-widget text-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{t('weatherStatus')}</h3>
            <p className="text-blue-200 text-sm mt-1">Baghdad, Iraq</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">32°C</p>
            <p className="text-blue-200 text-sm">Sunny</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className="text-center">
            <p className="text-sm text-blue-200">Wind</p>
            <p className="font-medium mt-1">15 km/h</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-blue-200">Humidity</p>
            <p className="font-medium mt-1">25%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-blue-200">Visibility</p>
            <p className="font-medium mt-1">10 km</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 px-5 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-exclamation-triangle text-yellow-400 mr-2"></i>
          <span className="text-sm">High dust levels expected</span>
        </div>
        <a href="#" className="text-blue-200 text-sm hover:text-white">Details</a>
      </div>
    </div>
  );
};

export default WeatherWidget;