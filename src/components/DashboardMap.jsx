import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const DashboardMap = () => {
  const { t } = useTranslation();

  // Iraq coordinates
  const iraqCenter = [33.2232, 43.6793];
  
  // Sample disaster data for Iraq
  const disasters = [
    {
      id: 1,
      position: [37.10726731554552, 43.517877960398145], // دهوك
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 2,
      position: [36.47503862984028, 43.176506528801234], // الموصل
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 3,
      position: [35.49646663095943, 42.15746981111663], // نينوى
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 4,
      position: [35.69816327337555, 45.234275335558664], // سليمانية
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 5,
      position: [35.60445674173643, 44.421898652666265], // كركوك
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 6,
      position: [34.28506257801299, 43.91491321386586], // صلاح الدين
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 7,
      position: [34.23539261101675, 45.05779965015749], // ديالى
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 8,
      position: [33.3152, 44.3661], // بغداد
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 9,
      position: [32.66191500321363, 45.807644201929975], // واسط
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 10,
      position: [33.34124483059142, 40.79067680034809], // الأنبار
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 11,
      position: [32.59589637454824, 43.95241141836148], // كربلاء
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 12,
      position: [32.59362162683641, 44.96627213805818], // بابل
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 13,
      position: [31.822096348666292, 44.10919163933003], // النجف
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 14,
      position: [32.02796970608617, 44.88142262116236], // الديوانية
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 15,
      position: [30.39089124210332, 45.544056549928285], // المثنى
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 16,
      position: [31.069488654774624, 46.165009339418596], // ذي قار
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 17,
      position: [31.957831674723298, 47.167797756055315], // ميسان
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    },
    {
      id: 18,
      position: [30.5, 47.8], // البصرة
      type: 'advisory',
      title: 'Flood Warning',
      description: 'Heavy rainfall expected in southern regions'
    }
  ];
//icons colors
  const createCustomIcon = (type) => {
    let color;
    switch (type) {
      case 'critical':
        color = '#c81912';
        break;
      case 'warning':
        color = '#ff9a3c';
        break;
      case 'advisory':
        color = '#ffd000ff';
        break;
      default:
        color = '#5dfd00ff';
    }

    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Live Threat Map - Iraq</h3>
        <p className="text-sm text-gray-500 mt-1">Real-time disaster alerts across Iraq</p>
      </div>
      <div className="p-4">
        <MapContainer
          center={iraqCenter}
          zoom={6}
          style={{ height: '320px', width: '100%', borderRadius: '8px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {disasters.map((disaster) => (
            <Marker
              key={disaster.id}
              position={disaster.position}
              icon={createCustomIcon(disaster.type)}
            >
              <Popup>
                <div className="font-semibold">{disaster.title}</div>
                <div className="text-sm mt-1">{disaster.description}</div>
                <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  {t('viewDetails')}
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        
        <div className="mt-4 flex justify-between flex-wrap gap-2">
          <div className="flex items-center">
            <span className="alert-indicator bg-red-500"></span>
            <span className="text-sm text-gray-600">{t('critical')}</span>
          </div>
          <div className="flex items-center">
            <span className="alert-indicator bg-orange-500"></span>
            <span className="text-sm text-gray-600">{t('warning')}</span>
          </div>
          <div className="flex items-center">
            <span className="alert-indicator bg-yellow-500"></span>
            <span className="text-sm text-gray-600">{t('advisory')}</span>
          </div>
          <div className="flex items-center">
            <span className="alert-indicator bg-green-500"></span>
            <span className="text-sm text-gray-600">{t('safe')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMap;