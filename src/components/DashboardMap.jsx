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
      position: [33.3152, 44.3661], // Baghdad
      type: 'critical',
      title: 'Sandstorm Alert',
      description: 'Severe sandstorm expected in Baghdad area'
    },
    {
      id: 3,
      position: [30.5, 47.8], // Basra
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