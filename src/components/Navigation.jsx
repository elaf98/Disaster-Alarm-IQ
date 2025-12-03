import React from 'react';
import { useTranslation } from 'react-i18next';

const Navigation = ({ 
  activeSection, 
  setActiveSection, 
  notificationsOpen, 
  setNotificationsOpen,
  language,
  changeLanguage 
}) => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'dashboard', label: t('dashboard') },
    { id: 'alerts', label: t('alerts') },
    { id: 'map', label: t('threatMap') },
    { id: 'resources', label: t('resources') },
    { id: 'analytics', label: t('analytics') }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇮🇶' },
    { code: 'ku', name: 'Kurdî', flag: '🇮🇶' }
  ];

  return (
    <nav className="gradient-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-shield-alt text-white text-2xl mr-3"></i>
              <span className="font-bold text-xl text-white">AlertGuard Iraq</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-top-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeSection === item.id
                      ? 'border-white text-white'
                      : 'border-transparent text-blue-100 hover:border-blue-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-blue-700 text-white px-3 py-1 rounded-md text-sm border-none focus:ring-2 focus:ring-blue-300"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-800 bg-white shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <i className="fas fa-user-circle mr-2"></i> {t('account')}
            </button>
            
            <div className="relative">
              <button
                id="notification-btn"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="bg-blue-700 p-2 rounded-full text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative"
              >
                <i className="fas fa-bell h-5 w-5"></i>
                <span className="notification-badge">5</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;