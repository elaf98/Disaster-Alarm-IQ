import React, { useState } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <i className="fas fa-shield-alt text-white text-xl sm:text-2xl mr-2 sm:mr-3"></i>
              <span className="font-bold text-lg sm:text-xl text-white">AlertGuard Iraq</span>
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
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} h-6 w-6`}></i>
            </button>

            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-blue-700 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm border-none focus:ring-2 focus:ring-blue-300"
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
              className="hidden sm:inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-blue-800 bg-white shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <i className="fas fa-user-circle mr-1 sm:mr-2"></i> <span className="hidden lg:inline">{t('account')}</span>
            </button>
            
            <div className="relative">
              <button
                id="notification-btn"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="bg-blue-700 p-2 rounded-full text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative"
              >
                <i className="fas fa-bell h-4 w-4 sm:h-5 sm:w-5"></i>
                <span className="notification-badge">5</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Language Selector */}
            <div className="px-3 py-2 sm:hidden">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-blue-700 text-white px-3 py-2 rounded-md text-sm border-none focus:ring-2 focus:ring-blue-300"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Mobile Account Button */}
            <button
              type="button"
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-700 hover:text-white sm:hidden"
            >
              <i className="fas fa-user-circle mr-2"></i> {t('account')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;