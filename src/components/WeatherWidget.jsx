import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function WeatherWidget() {
  const { t } = useTranslation();
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = '4ffab3500ee0f5070681cdb7bf6d5150';

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setWeather({
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          visibility: data.visibility / 1000,
        });
        setLocationName(`${data.name}, ${data.sys.country}`);
      } catch {
        setError('Failed to fetch weather.');
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => setError('Geolocation permission denied.')
      );
    } else {
      setError('Geolocation not supported.');
    }
  }, []);

  return (
    <div className="weather-widget text-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base sm:text-lg font-semibold">{t('weatherStatus')}</h3>
            <p className="text-blue-200 text-xs sm:text-sm mt-1">{locationName || 'Loading...'}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl sm:text-3xl font-bold">{weather ? `${weather.temp}°C` : '...'}</p>
            <p className="text-blue-200 text-xs sm:text-sm">{weather ? weather.condition : '...'}</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 flex justify-between">
          <div className="text-center flex-1">
            <p className="text-xs sm:text-sm text-blue-200">Wind</p>
            <p className="font-medium mt-1 text-sm sm:text-base">{weather ? `${weather.wind} km/h` : '...'}</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-xs sm:text-sm text-blue-200">Humidity</p>
            <p className="font-medium mt-1 text-sm sm:text-base">{weather ? `${weather.humidity}%` : '...'}</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-xs sm:text-sm text-blue-200">Visibility</p>
            <p className="font-medium mt-1 text-sm sm:text-base">{weather ? `${weather.visibility} km` : '...'}</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 px-4 sm:px-5 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <a href="#" className="text-blue-200 text-xs sm:text-sm hover:text-white">Details</a>
      </div>
      {error && <p className="text-red-400 text-xs mt-2 px-4">{error}</p>}
    </div>
  );
}