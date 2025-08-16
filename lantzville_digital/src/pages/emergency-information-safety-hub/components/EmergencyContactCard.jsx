import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyContactCard = ({ contact }) => {
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const getContactIcon = (type) => {
    switch (type) {
      case 'police':
        return 'Shield';
      case 'fire':
        return 'Flame';
      case 'medical':
        return 'Heart';
      case 'municipal':
        return 'Building2';
      case 'poison':
        return 'AlertTriangle';
      case 'mental':
        return 'Brain';
      default:
        return 'Phone';
    }
  };

  const getContactColor = (type) => {
    switch (type) {
      case 'police':
        return 'text-blue-600';
      case 'fire':
        return 'text-red-600';
      case 'medical':
        return 'text-green-600';
      case 'municipal':
        return 'text-primary';
      default:
        return 'text-foreground';
    }
  };

  return (
    <div className="coastal-card hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg bg-muted ${getContactColor(contact?.type)}`}>
          <Icon 
            name={getContactIcon(contact?.type)} 
            size={24} 
            className="text-current"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {contact?.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {contact?.description}
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium">{contact?.phone}</span>
            </div>
            {contact?.hours && (
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{contact?.hours}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleCall(contact?.phone)}
            iconName="Phone"
            iconPosition="left"
            iconSize={16}
          >
            Call Now
          </Button>
          {contact?.textNumber && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCall(contact?.textNumber)}
              iconName="MessageSquare"
              iconPosition="left"
              iconSize={16}
            >
              Text
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactCard;