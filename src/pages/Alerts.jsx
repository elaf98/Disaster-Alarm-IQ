import React from 'react';

const Alerts = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">التنبيهات والإنذارات</h2>
      <div className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="font-bold">⚠️ تنبيه طفيف</p>
          <p>احتمال هطول أمطار غزيرة</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <p className="font-bold">✅ جميع الأنظمة تعمل</p>
          <p>لا توجد مخاطر حالية</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;