import React from 'react';
import { useTranslation } from 'react-i18next';

const NotificationPanel = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'critical',
      title: t('severeWeather'),
      message: 'Tornado warning in your area. Take shelter immediately.',
      time: '2 min ago',
      priority: t('highPriority')
    },
    {
      id: 2,
      type: 'warning',
      title: t('floodWarning'),
      message: 'River levels rising rapidly in downtown area.',
      time: '15 min ago',
      priority: t('mediumPriority')
    },
    {
      id: 3,
      type: 'info',
      title: 'System Update',
      message: 'New features available in AlertGuard Pro.',
      time: '1 hour ago',
      priority: t('lowPriority')
    }
  ];

  const getIconClass = (type) => {
    switch (type) {
      case 'critical':
        return 'fas fa-exclamation-triangle text-red-600';
      case 'warning':
        return 'fas fa-exclamation-circle text-orange-500';
      case 'info':
        return 'fas fa-info-circle text-blue-600';
      default:
        return 'fas fa-info-circle text-blue-600';
    }
  };

  const getBgClass = (type) => {
    switch (type) {
      case 'critical':
        return 'bg-red-100';
      case 'warning':
        return 'bg-orange-100';
      case 'info':
        return 'bg-blue-100';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <div className="fixed right-2 sm:right-4 top-16 sm:top-20 w-[calc(100%-1rem)] sm:w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200 max-h-[calc(100vh-5rem)] flex flex-col">
      <div className="p-3 sm:p-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t('notifications')}</h3>
        <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800">
          {t('markAllAsRead')}
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto flex-1">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-3 sm:p-4 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${getBgClass(notification.type)} rounded-full flex items-center justify-center`}>
                  <i className={`${getIconClass(notification.type)} text-sm sm:text-base`}></i>
                </div>
              </div>
              <div className="ml-2 sm:ml-3 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{notification.message}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500 flex-wrap gap-1">
                  <i className="far fa-clock mr-1"></i>
                  <span>{notification.time}</span>
                  <span className="mx-1">•</span>
                  <span className="text-red-600 font-medium">{notification.priority}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-2 sm:p-3 border-t border-gray-200 text-center bg-gray-50 rounded-b-lg flex-shrink-0">
        <a href="#" className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800">
          {t('viewAll')}
        </a>
      </div>
    </div>
  );
};

export default NotificationPanel;