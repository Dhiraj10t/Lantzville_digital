import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceStatusGrid = ({ services }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-success bg-success/10 border-success/20';
      case 'disrupted':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'outage':
        return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'maintenance':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return 'CheckCircle';
      case 'disrupted':
        return 'AlertTriangle';
      case 'outage':
        return 'XCircle';
      case 'maintenance':
        return 'Settings';
      default:
        return 'HelpCircle';
    }
  };

  const getServiceIcon = (type) => {
    switch (type) {
      case 'water':
        return 'Droplets';
      case 'power':
        return 'Zap';
      case 'roads':
        return 'Car';
      case 'facilities':
        return 'Building2';
      case 'transit':
        return 'Bus';
      case 'waste':
        return 'Trash2';
      default:
        return 'Settings';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services?.map((service) => (
        <div 
          key={service?.id}
          className="coastal-card p-4"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-muted rounded-lg">
                <Icon 
                  name={getServiceIcon(service?.type)} 
                  size={20} 
                  className="text-foreground"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {service?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service?.location}
                </p>
              </div>
            </div>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(service?.status)}`}>
              <Icon 
                name={getStatusIcon(service?.status)} 
                size={12} 
              />
              <span className="capitalize">{service?.status}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {service?.description}
          </p>
          
          {service?.lastUpdated && (
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Clock" size={12} />
              <span>Updated {service?.lastUpdated}</span>
            </div>
          )}
          
          {service?.estimatedResolution && (
            <div className="mt-2 p-2 bg-muted rounded text-xs">
              <strong>Estimated Resolution:</strong> {service?.estimatedResolution}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceStatusGrid;