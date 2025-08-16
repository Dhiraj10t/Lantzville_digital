import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityStatusBar = () => {
  const statusData = {
    weather: {
      temperature: "18°C",
      condition: "Partly Cloudy",
      icon: "Cloud"
    },
    nextEvent: {
      name: "Community BBQ",
      date: "Aug 17, 2025",
      time: "6:00 PM"
    },
    serviceAlert: {
      type: "info",
      message: "Water main maintenance scheduled for Aug 20th, 9 AM - 3 PM"
    }
  };

  return (
    <div className="bg-gradient-coastal text-white rounded-lg p-4 mb-6 shadow-brand">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Weather Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
            <Icon name={statusData?.weather?.icon} size={20} color="white" />
          </div>
          <div>
            <div className="font-semibold text-lg">{statusData?.weather?.temperature}</div>
            <div className="text-white/80 text-sm">{statusData?.weather?.condition}</div>
          </div>
        </div>

        {/* Next Event */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
            <Icon name="Calendar" size={20} color="white" />
          </div>
          <div>
            <div className="font-semibold">{statusData?.nextEvent?.name}</div>
            <div className="text-white/80 text-sm">
              {statusData?.nextEvent?.date} at {statusData?.nextEvent?.time}
            </div>
          </div>
        </div>

        {/* Service Alert */}
        <div className="flex items-start space-x-3 lg:max-w-md">
          <div className="flex items-center justify-center w-10 h-10 bg-warning/20 rounded-lg flex-shrink-0">
            <Icon name="Info" size={20} color="white" />
          </div>
          <div>
            <div className="font-medium text-sm">Service Alert</div>
            <div className="text-white/90 text-sm leading-relaxed">
              {statusData?.serviceAlert?.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityStatusBar;