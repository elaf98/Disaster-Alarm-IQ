import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navigation = ({ activeSection, setActiveSection }) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: t('dashboard') },
    { id: 'alerts', label: t('alerts') },
    { id: 'resources', label: t('resources') },
    { id: 'analytics', label: t('analytics') }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 w-full shadow-lg border-b border-white/10" 
      style={{ 
        zIndex: 1500, 
        backgroundColor: '#2b5a84', 
        direction: 'rtl', // تثبيت الاتجاه من اليمين لليسار دوماً
        fontFamily: "'Cairo', sans-serif"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          
          <div className="flex items-center h-full gap-6 lg:gap-10">
            
            {/* قسم الهوية: اللوجو أولاً (يمين) ثم الخط ثم الاسم (كما طلبت) */}
            <div 
              className="flex items-center cursor-pointer group shrink-0" 
              onClick={() => setActiveSection('dashboard')}
            >
              {/* 1. اللوجو (خريطة العراق) */}
              <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/logo.png" 
                  alt="لوجو راصد" 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                />
              </div>

              {/* 2. الخط الفاصل العمودي - ثابت لا يتأثر باللغة */}
              <div className="h-10 w-[2px] bg-white/20 mx-4"></div>

              {/* 3. نصوص الهوية (على يسار اللوجو) */}
              <div className="flex flex-col leading-tight text-right">
                <span className="font-black text-white text-lg sm:text-2xl tracking-tight">
                  راصـد
                </span>
                <span className="text-[8px] sm:text-[10px] text-blue-200 font-bold uppercase opacity-90 tracking-wider">
                  Disaster Alarm System
                </span>
              </div>
            </div>
            
            {/* أزرار التنقل */}
            <div className="hidden lg:flex items-center h-full border-r border-white/10 pr-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`h-full px-4 text-sm font-semibold transition-all duration-300 relative ${
                    activeSection === item.id 
                      ? 'text-white bg-white/10' 
                      : 'text-blue-100 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* الجانب الأيسر: زر اللغة (مكبر وبأسماء كاملة) */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-[#3a6a94] text-white text-sm font-bold px-4 py-2 rounded-lg border border-white/30 cursor-pointer outline-none hover:bg-[#4a7aa4] transition-all min-w-[120px] appearance-none text-center"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
                <option value="ku">کوردی</option>
              </select>
              {/* أيقونة سهم صغيرة لأسفل */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <i className="fas fa-chevron-down text-[10px] text-white/70"></i>
              </div>
            </div>

            {/* زر الموبايل */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#244c6f] ${
          mobileMenuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right px-6 py-4 text-sm font-bold border-b border-white/5 ${
                activeSection === item.id ? 'text-white bg-white/10' : 'text-blue-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
