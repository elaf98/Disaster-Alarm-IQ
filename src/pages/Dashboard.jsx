import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardMap from '../components/DashboardMap';
import EmergencyActions from '../components/EmergencyActions';
import WeatherWidget from '../components/WeatherWidget';
import EmergencyContacts from '../components/EmergencyContacts';


const Dashboard = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('activeAlerts'),
      value: '12',
      icon: 'fas fa-exclamation-circle',
      gradient: 'dashboard-stats',
      trend: '+2.3%',
      trendColor: 'text-green-300'
    },
    {
      title: t('yourSafetyStatus'),
      value: t('secure'),
      icon: 'fas fa-check-circle',
      bg: 'bg-white',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      valueColor: 'text-green-600'
    },
    {
      title: t('responseTime'),
      value: '4.2min',
      icon: 'fas fa-clock',
      bg: 'bg-white',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      trend: '12% faster than avg.',
      trendColor: 'text-green-500'
    },
    {
      title: t('evacuationCenters'),
      value: '7',
      icon: 'fas fa-home',
      bg: 'bg-white',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div>
      {/* Alert Banner */}
      <div className="px-6 py-4 mb-6 rounded-xl gradient-danger text-white flex justify-between items-center pulse-alert">
        <div className="flex items-center">
          <i className="fas fa-exclamation-triangle text-2xl mr-4"></i>
          <div>
            <h3 className="font-bold text-lg">CRITICAL ALERT: Severe Weather Warning</h3>
            <p className="text-sm opacity-90">Tornado warning for Baghdad area until 6:30 PM. Take shelter immediately.</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors">
            {t('viewDetails')}
          </button>
          <button className="bg-red-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-900 transition-colors">
            Emergency Protocol
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bg || ''} ${stat.gradient || ''} p-5 rounded-xl shadow-lg ${stat.gradient ? 'text-white' : ''} card-hover`}>
            <div className="flex justify-between items-start">
              <div>
                <p className={`text-sm font-medium ${stat.gradient ? 'text-blue-200' : 'text-gray-500'}`}>
                  {stat.title}
                </p>
                <p className={`text-2xl lg:text-3xl font-bold mt-2 ${stat.valueColor || (stat.gradient ? 'text-white' : 'text-gray-800')}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.iconBg || 'bg-blue-700'} p-3 rounded-lg`}>
                <i className={`${stat.icon} ${stat.iconColor || 'text-white'} text-xl`}></i>
              </div>
            </div>
            {stat.trend && (
              <div className="mt-4 flex items-center text-sm">
                <span className={stat.trendColor}>
                  <i className="fas fa-arrow-up mr-1"></i> {stat.trend}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-8">
          <DashboardMap />
          
          {/* Recent Alerts */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">{t('recentAlerts')}</h3>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                {t('viewAll')}
              </a>
            </div>
            <div className="divide-y divide-gray-100">
              {/* Alert items would go here */}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <EmergencyActions />
          <WeatherWidget />
          <EmergencyContacts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;