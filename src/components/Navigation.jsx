import React, { useState, useEffect } from 'react'; // أضفنا useEffect
import { useTranslation } from 'react-i18next';

const Navigation = ({ 
  activeSection, 
  setActiveSection, 
  notificationsOpen, 
  setNotificationsOpen
  // حذفنا language و changeLanguage من هنا لأننا سنستخدم i18n مباشرة
}) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // تحديث اتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    const dir = i18n.dir(); // سيعيد 'rtl' للعربية والكردية و 'ltr' للإنجليزية
    document.body.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // هذا السطر سيحفظ اللغة في الـ LocalStorage بفضل التعديل السابق في i18n.js
  };

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
             {/* جعلنا الهامش مرناً بناءً على الاتجاه */}
            <div className="flex-shrink-0 flex items-center">
              <i className={`fas fa-shield-alt text-white text-xl sm:text-2xl ${i18n.dir() === 'rtl' ? 'ml-2 sm:ml-3' : 'mr-2 sm:mr-3'}`}></i>
              <span className="font-bold text-lg sm:text-xl text-white">AlertGuard Iraq</span>
            </div>
            
            {/* في الـ RTL نحتاج لضبط المسافات بين عناصر القائمة */}
            <div className={`hidden md:flex md:space-x-8 ${i18n.dir() === 'rtl' ? 'md:mr-10 md:space-x-reverse' : 'md:ml-10'}`}>
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
          
          <div className={`flex items-center ${i18n.dir() === 'rtl' ? 'space-x-reverse space-x-2 sm:space-x-4' : 'space-x-2 sm:space-x-4'}`}>
            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <select
                value={i18n.language} // نستخدم حالة المكتبة مباشرة
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-blue-700 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm border-none focus:ring-2 focus:ring-blue-300"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* ... باقي الأزرار (Account, Notifications) تبقى كما هي ... */}
          </div>
        </div>
      </div>
      {/* ... كود القائمة المتنقلة (Mobile Menu) مع استبدال لغة الاختيار بـ handleLanguageChange بنفس الطريقة ... */}
    </nav>
  );
};

export default Navigation;