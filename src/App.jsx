import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import './locales/i18n';

// Components
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Resources from './pages/Resources';
import Analytics from './pages/Analytics';
import NotificationPanel from './components/NotificationPanel';

function App() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // 1. طلب إذن الإشعارات عند تشغيل التطبيق لأول مرة
  useEffect(() => {
    if ("Notification" in window) {
      if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission();
      }
    }
  }, []);

  // 2. توحيد اتجاه الصفحة ولغتها بناءً على اختيار المستخدم
  useEffect(() => {
    const currentLang = i18n.language || 'ar';
    const dir = (currentLang === 'ar' || currentLang === 'ku') ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'alerts': return <Alerts />;
      case 'map': return <ThreatMap />;
      case 'resources': return <Resources />;
      case 'analytics': return <Analytics />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden transition-all duration-300">
      {/* النافبار الثابت */}
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        notificationsOpen={notificationsOpen}
        setNotificationsOpen={setNotificationsOpen}
      />
      
      {/* لوحة الإشعارات الجانبية */}
      <NotificationPanel 
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      {/* المحتوى الرئيسي */}
      <main className="flex-grow pt-20 pb-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full animate-fadeIn transition-opacity duration-500">
          {renderSection()}
        </div>
      </main>

      {/* إضافة عنصر صوت خفي يتم استدعاؤه عند الطوارئ */}
      <audio id="emergency-sound" src="https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3" preload="auto"></audio>
    </div>
  );
}

export default App;




