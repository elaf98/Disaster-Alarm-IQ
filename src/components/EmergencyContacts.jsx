import React from 'react';
import { useTranslation } from 'react-i18next';

const EmergencyContacts = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Primary Physician',
      icon: 'fas fa-user-md',
      color: 'blue'
    },
    {
      name: 'Baghdad Central Shelter',
      role: 'Evacuation Center',
      icon: 'fas fa-home',
      color: 'green'
    },
    {
      name: 'Fire Department',
      role: 'Emergency Services',
      icon: 'fas fa-fire-extinguisher',
      color: 'red'
    }
  ];

  const handleCall = (contactName) => {
    alert(`Calling ${contactName}...`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t('emergencyContacts')}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Your emergency network</p>
      </div>
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center flex-1 min-w-0">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-${contact.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                <i className={`${contact.icon} text-${contact.color}-600 text-sm sm:text-base`}></i>
              </div>
              <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                <p className="text-xs text-gray-500 truncate">{contact.role}</p>
              </div>
            </div>
            <button 
              onClick={() => handleCall(contact.name)}
              className="text-blue-600 hover:text-blue-800 flex-shrink-0 ml-2 p-2"
            >
              <i className="fas fa-phone-alt text-sm sm:text-base"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;