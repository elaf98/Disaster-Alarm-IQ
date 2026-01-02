import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './locales/i18n';

// Components
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import ThreatMap from './pages/ThreatMap';
import Resources from './pages/Resources';
import Analytics from './pages/Analytics';
import NotificationPanel from './components/NotificationPanel';

function App() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // هنا يتم توحيد الحالة: نراقب لغة المكتبة مباشرة
  useEffect(() => {
    // i18n.language هي المصدر الوحيد الآن
    const currentLang = i18n.language || 'ar';
    
    // ضبط اتجاه الصفحة (RTL للعربية والكردية، LTR لغيرها)
    document.documentElement.dir = (currentLang === 'ar' || currentLang === 'ku') ? 'rtl' : 'ltr';
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
    <div className="min-h-screen bg-gray-50">
      {/* لم نعد نمرر language أو changeLanguage هنا */}
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        notificationsOpen={notificationsOpen}
        setNotificationsOpen={setNotificationsOpen}
      />
      
      <NotificationPanel 
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-0 sm:px-6 lg:px-8">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;