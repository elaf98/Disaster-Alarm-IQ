import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const Analytics = () => {
  const { t, i18n } = useTranslation();
  const [selectedProvince, setSelectedProvince] = useState('Baghdad');
  const [realStats, setRealStats] = useState([0, 0, 0, 0]);
  const [loading, setLoading] = useState(true);

  const iraqProvinces = [
    { en: "Baghdad", ar: "بغداد", ku: "بەغدا" },
    { en: "Basra", ar: "البصرة", ku: "بەسرە" },
    { en: "Erbil", ar: "أربيل", ku: "هەولێر" },
    { en: "Sulaymaniyah", ar: "السليمانية", ku: "سلێمانی" },
    { en: "Duhok", ar: "دهوك", ku: "دهۆک" }
  ];

  useEffect(() => {
    const fetchRealData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/analytics/${selectedProvince}`);
        setRealStats(res.data.chartData);
      } catch (err) {
        console.error("خطأ في الاتصال بالسيرفر");
      } finally {
        setLoading(false);
      }
    };
    fetchRealData();
  }, [selectedProvince]);

  const chartData = {
    labels: [t('flood'), t('earthquake'), t('storm'), t('heatwave')],
    datasets: [{
      label: t('riskLevels'),
      data: realStats,
      backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'],
      borderWidth: 1
    }]
  };

  const commonOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        rtl: i18n.language !== 'en',
        labels: { font: { family: 'inherit' } }
      }
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* رأس الصفحة: العنوان والقائمة المنسدلة */}
      <div className={`flex justify-between items-center ${i18n.language === 'en' ? 'flex-row' : 'flex-row-reverse'}`}>
        <h2 className="text-2xl font-bold">{t('analytics')}</h2>
        
        <select 
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="p-2 border rounded-lg shadow-sm bg-white font-bold text-blue-600 outline-none"
        >
          {iraqProvinces.map(p => (
            <option key={p.en} value={p.en}>
              {p[i18n.language] || p.en}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-20 font-bold animate-pulse">{t('loading')}...</div>
      ) : (
        /* dir="ltr" لضمان بقاء الأعمدة يساراً والدائرة يميناً دوماً */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full" dir="ltr">
          
          {/* المخطط العمودي */}
          <div className="bg-white p-6 rounded-xl shadow-md h-[400px] flex flex-col">
             <h3 className={`mb-4 font-bold text-gray-700 ${i18n.language === 'en' ? 'text-left' : 'text-right'}`} dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
                {t('riskLevels')}
             </h3>
             <div className="flex-grow">
                <Bar 
                  data={chartData} 
                  options={{ 
                    ...commonOptions,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        position: i18n.language === 'en' ? 'left' : 'right'
                      }
                    }
                  }} 
                />
             </div>
          </div>

          {/* المخطط الدائري */}
          <div className="bg-white p-6 rounded-xl shadow-md h-[400px] flex flex-col">
            <h3 className={`mb-4 font-bold text-gray-700 ${i18n.language === 'en' ? 'text-left' : 'text-right'}`} dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
                {/* تم تصحيح المفتاح هنا ليطابق ملف الترجمة الخاص بك */}
                {t('disasterDistribution')}
             </h3>
             <div className="flex-grow">
                <Pie data={chartData} options={commonOptions} />
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;