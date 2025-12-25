import React from 'react';

const Alerts = () => {
  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">التنبيهات والإنذارات</h2>
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 rounded-lg">
          <p className="font-bold text-sm sm:text-base">⚠️ تنبيه طفيف</p>
          <p className="text-xs sm:text-sm mt-1">احتمال هطول أمطار غزيرة</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg">
          <p className="font-bold text-sm sm:text-base">✅ جميع الأنظمة تعمل</p>
          <p className="text-xs sm:text-sm mt-1">لا توجد مخاطر حالية</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;