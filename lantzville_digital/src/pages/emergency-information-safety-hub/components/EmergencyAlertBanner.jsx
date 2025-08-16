import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyAlertBanner = ({ alert }) => {
  if (!alert) return null;

  const getAlertStyles = (severity) => {
    switch (severity) {
      case 'critical':
        return 'bg-destructive text-destructive-foreground border-destructive';
      case 'warning':
        return 'bg-warning text-warning-foreground border-warning';
      case 'watch':
        return 'bg-accent text-accent-foreground border-accent';
      default:
        return 'bg-primary text-primary-foreground border-primary';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'weather':
        return 'CloudRain';
      case 'earthquake':
        return 'Zap';
      case 'tsunami':
        return 'Waves';
      case 'fire':
        return 'Flame';
      case 'power':
        return 'Zap';
      default:
        return 'AlertTriangle';
    }
  };

  return (
    <div className={`border-2 rounded-lg p-4 mb-6 ${getAlertStyles(alert?.severity)}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Icon 
            name={getAlertIcon(alert?.type)} 
            size={24} 
            className="animate-pulse" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">
              {alert?.severity?.toUpperCase()} ALERT
            </h3>
            <span className="text-sm opacity-80">
              {alert?.timestamp}
            </span>
          </div>
          <h4 className="text-base font-semibold mb-2">
            {alert?.title}
          </h4>
          <p className="text-sm mb-3 leading-relaxed">
            {alert?.message}
          </p>
          {alert?.actionRequired && (
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/20 border-white/30 hover:bg-white/30"
              >
                View Details
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/20 border-white/30 hover:bg-white/30"
              >
                Emergency Contacts
              </Button>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-current hover:bg-white/20"
          iconName="X"
          iconSize={16}
        />
      </div>
    </div>
  );
};

export default EmergencyAlertBanner;