import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

// إعداد الأيقونات
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const DashboardMap = () => {
  const { t, i18n } = useTranslation();
  const iraqCenter = [33.2232, 43.6793];
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);

  const provinces = [
    { id: 'baghdad', name: 'Baghdad', pos: [33.3152, 44.3661] },
    { id: 'basra', name: 'Basra', pos: [30.5081, 47.7835] },
    { id: 'erbil', name: 'Erbil', pos: [36.1901, 44.0089] },
    { id: 'mosul', name: 'Mosul', pos: [36.3489, 43.1577] },
    { id: 'najaf', name: 'Najaf', pos: [31.9922, 44.3515] },
    { id: 'anbar', name: 'Anbar', pos: [33.4000, 42.1000] },
    { id: 'sulaymaniyah', name: 'Sulaymaniyah', pos: [35.5620, 45.4210] }
  ];

  useEffect(() => {
    const fetchRealData = async () => {
      try {
        // 1. جلب بيانات الزلازل
        const earthquakeRes = await axios.get(
          'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=29&maxlatitude=38&minlongitude=38&maxlongitude=49'
        );
        const earthquakes = earthquakeRes.data.features;

        // 2. معالجة بيانات كل محافظة
        const results = await Promise.all(provinces.map(async (province) => {
          try {
            const weatherRes = await axios.get(
              `https://api.open-meteo.com/v1/forecast?latitude=${province.pos[0]}&longitude=${province.pos[1]}&current_weather=true`
            );
            
            const temp = weatherRes.data.current_weather.temperature;
            const humidity = Math.floor(Math.random() * 40) + 20; // رطوبة تقديرية

            const nearbyQuake = earthquakes.find(eq => {
              const [lon, lat] = eq.geometry.coordinates;
              return Math.abs(lat - province.pos[0]) < 1.2 && Math.abs(lon - province.pos[1]) < 1.2;
            });

            // منطق تحديد الحالة
            let statusKey = 'safe';
            let markerType = '0';

            if (temp > 48 || nearbyQuake) {
              statusKey = 'critical';
              markerType = '3';
              
              // --- منطق إرسال التنبيه (يجب أن يكون داخل الـ Map) ---
              handleEmergency(province, nearbyQuake, temp);
            } else if (temp > 40) {
              statusKey = 'warning';
              markerType = '2';
            }

            return { ...province, temp, humidity, disaster: nearbyQuake?.properties.title, type: markerType, statusKey };
          } catch (e) {
            return { ...province, temp: '--', type: '0', statusKey: 'safe' };
          }
        }));

        setMapData(results);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRealData();
  }, [i18n.language]);

  // دالة معالجة الطوارئ: تسجيل في السجل + صوت + إشعار متصفح
  const handleEmergency = (province, quake, temp) => {
    const alertDesc = quake ? `${t('disaster_detected')}: ${quake.properties.title}` : `${t('temperature')}: ${temp}°C`;
    
    const newAlert = {
      id: Date.now() + Math.random(),
      provinceId: province.id,
      description: alertDesc,
      type: 'critical',
      time: new Date().toLocaleTimeString(i18n.language === 'ar' ? 'ar-EG' : 'en-US')
    };

    // حفظ في السجل
    const existing = JSON.parse(localStorage.getItem('recent_alerts') || '[]');
    if (!existing.some(a => a.provinceId === province.id)) {
      localStorage.setItem('recent_alerts', JSON.stringify([newAlert, ...existing]));
      
      // تشغيل الصوت (الموجود في App.js)
      const audio = document.getElementById('emergency-sound');
      if (audio) audio.play().catch(e => console.log("Audio play blocked"));

      // إشعار المتصفح
      if (Notification.permission === "granted") {
        new Notification(t(`provinces.${province.id}`), { body: alertDesc });
      }
    }
  };

  const createIcon = (type) => {
    const colors = { '3': '#ef4444', '2': '#f97316', '0': '#22c55e' };
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${colors[type]}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.2);"></div>`,
      iconSize: [20, 20]
    });
  };

  if (loading) return <div className="p-20 text-center font-bold text-gray-400">{t('loading')}...</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
      <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
        <h3 className="font-bold text-gray-800">{t('live_map_title')}</h3>
        <div className="flex gap-3 text-[10px] font-bold uppercase">
          <span className="text-red-600">● {t('critical')}</span>
          <span className="text-orange-500">● {t('warning')}</span>
          <span className="text-green-600">● {t('safe')}</span>
        </div>
      </div>
      <div className="h-[500px] w-full">
        <MapContainer center={iraqCenter} zoom={6} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {mapData.map((p) => (
            <Marker key={p.id} position={p.pos} icon={createIcon(p.type)}>
              <Popup>
                <div className={`text-sm ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
                  <h4 className="font-bold border-b mb-2">{t(`provinces.${p.id}`)}</h4>
                  <p>🌡️ {t('temperature')}: {p.temp}°C</p>
                  {p.disaster && <p className="text-red-600 font-bold mt-1">⚠️ {p.disaster}</p>}
                  <div className={`mt-2 py-1 px-2 rounded text-center text-white font-bold text-[10px] ${p.type === '3' ? 'bg-red-600' : p.type === '2' ? 'bg-orange-500' : 'bg-green-600'}`}>
                    {t(`status.${p.statusKey}`)}
                  </div>
                </div>
</Popup>            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default DashboardMap;