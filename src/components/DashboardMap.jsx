import React, { useEffect,useState } from 'react';
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
  const iraqCenter = [33.2232, 43.6793];
  // Sample disaster data for Iraq
  const [disasters, setDisasters] = useState([]);
useEffect(() => {
  const fetchDisasters = async () => {
    try {
      const res = await fetch(
        'https://api.allorigins.win/raw?url=https://www.gdacs.org/xml/gdacs.xml'
      );
      const text = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      const gdacsEvents = Array.from(xml.querySelectorAll("event"))
        .map((ev, index) => {
          const title = ev.querySelector("title")?.textContent || "Unknown Event";
          const typeText = ev.querySelector("eventtype")?.textContent || "Unknown";
          const alertLevel = ev.querySelector("alertlevel")?.textContent || "Green";
          const lat = ev.querySelector("lat")?.textContent;
          const lon = ev.querySelector("lon")?.textContent;

          if (!lat || !lon) return null;

          const [latNum, lonNum] = [Number(lat), Number(lon)];

          // Focus only on Iraq
          if (latNum < 28 || latNum > 38 || lonNum < 38 || lonNum > 50) return null;

          let type = '0';
          if (alertLevel === "Red") type = '3';
          else if (alertLevel === "Orange") type = '2';
          else if (alertLevel === "Yellow") type = '1';

          return {
            id: `gdacs-${index}`,
            position: [latNum, lonNum],
            type,
            title,
            description: typeText,
          };
        })
        .filter(Boolean);

      // test
      const mockDisasters = [
        {
          id: 'test-1',
          position: [33.3152, 44.3661], // Baghdad
          type: '3',
          title: 'TEST: Earthquake (Red Alert)',
          description: 'This is a test alert',
        },
        {
          id: 'test-2',
          position: [36.34, 43.13], // Mosul
          type: '2',
          title: 'TEST: Flood Warning',
          description: 'Simulated flood event',
        },
        {
          id: 'test-3',
          position: [30.51, 47.82], // Basra
          type: '1',
          title: 'TEST: Heat Advisory',
          description: 'High temperature simulation',
        },
      ];

      setDisasters([...gdacsEvents, ...mockDisasters]);
    } catch (err) {
      console.error("GDACS error:", err);

    }
  };

  fetchDisasters();
}, []);
//icons colors
  const createCustomIcon = (type) => {
    let color;
    switch (type) {
      case '3':
        color = '#c81912';
        break;
      case '2':
        color = '#ff9a3c';
        break;
      case '1':
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
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Live Threat Map - Iraq</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Real-time disaster alerts across Iraq</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="h-[280px] sm:h-[320px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <MapContainer
            center={iraqCenter}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
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
                <div className="font-semibold text-sm">{disaster.title}</div>
                <div className="text-xs mt-1">{disaster.description}</div>
                <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm">
                  {t('viewDetails')}
                </button>
              </Popup>
            </Marker>
          ))}
          </MapContainer>
        </div>
        
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
          <div className="flex items-center">
            <span className="alert-indicator bg-red-500"></span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">{t('critical')}</span>
          </div>
          <div className="flex items-center">
            <span className="alert-indicator bg-orange-500"></span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">{t('warning')}</span>
          </div>
          <div className="flex items-center">
            <span className="alert-indicator bg-yellow-500"></span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">{t('advisory')}</span>
          </div>
          <div className="flex items-center">
            <span className="alert-indicator bg-green-500"></span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">{t('safe')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMap;