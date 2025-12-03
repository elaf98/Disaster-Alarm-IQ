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
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'alerts':
        return <Alerts />;
      case 'map':
        return <ThreatMap />;
      case 'resources':
        return <Resources />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        notificationsOpen={notificationsOpen}
        setNotificationsOpen={setNotificationsOpen}
        language={language}
        changeLanguage={changeLanguage}
      />
      
      <NotificationPanel 
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;