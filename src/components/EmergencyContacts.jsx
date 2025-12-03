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
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{t('emergencyContacts')}</h3>
        <p className="text-sm text-gray-500 mt-1">Your emergency network</p>
      </div>
      <div className="p-4 space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className={`w-10 h-10 bg-${contact.color}-100 rounded-full flex items-center justify-center`}>
                <i className={`${contact.icon} text-${contact.color}-600`}></i>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
            </div>
            <button 
              onClick={() => handleCall(contact.name)}
              className="text-blue-600 hover:text-blue-800"
            >
              <i className="fas fa-phone-alt"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;