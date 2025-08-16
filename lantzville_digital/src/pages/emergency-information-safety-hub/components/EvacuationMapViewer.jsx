import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EvacuationMapViewer = ({ evacuationRoutes }) => {
  const [selectedRoute, setSelectedRoute] = useState(evacuationRoutes?.[0]);
  const [mapView, setMapView] = useState('routes'); // routes, shelters, hazards

  const getRouteColor = (priority) => {
    switch (priority) {
      case 'primary':
        return 'border-success bg-success/10';
      case 'secondary':
        return 'border-warning bg-warning/10';
      case 'emergency':
        return 'border-destructive bg-destructive/10';
      default:
        return 'border-border bg-muted';
    }
  };

  const mapViewOptions = [
    { id: 'routes', label: 'Evacuation Routes', icon: 'Route' },
    { id: 'shelters', label: 'Emergency Shelters', icon: 'Home' },
    { id: 'hazards', label: 'Hazard Zones', icon: 'AlertTriangle' }
  ];

  return (
    <div className="coastal-card">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map Controls */}
        <div className="lg:w-1/3 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Map View
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {mapViewOptions?.map((option) => (
                <Button
                  key={option?.id}
                  variant={mapView === option?.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setMapView(option?.id)}
                  iconName={option?.icon}
                  iconPosition="left"
                  iconSize={16}
                  className="justify-start"
                >
                  {option?.label}
                </Button>
              ))}
            </div>
          </div>

          {mapView === 'routes' && (
            <div>
              <h4 className="font-medium text-foreground mb-3">
                Evacuation Routes
              </h4>
              <div className="space-y-2">
                {evacuationRoutes?.map((route) => (
                  <div
                    key={route?.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedRoute?.id === route?.id 
                        ? getRouteColor(route?.priority) 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedRoute(route)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">
                        {route?.name}
                      </h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        route?.priority === 'primary' ? 'bg-success/20 text-success' :
                        route?.priority === 'secondary'? 'bg-warning/20 text-warning' : 'bg-destructive/20 text-destructive'
                      }`}>
                        {route?.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {route?.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{route?.estimatedTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={12} />
                        <span>{route?.distance}</span>
                      </div>
                    </div>
                    {route?.accessibilityFeatures && (
                      <div className="mt-2 flex items-center space-x-1">
                        <Icon name="Accessibility" size={12} className="text-primary" />
                        <span className="text-xs text-primary">Accessible Route</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedRoute && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-foreground mb-2">
                Route Details
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Starting Point:</span>
                  <span className="font-medium">{selectedRoute?.startPoint}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destination:</span>
                  <span className="font-medium">{selectedRoute?.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Distance:</span>
                  <span className="font-medium">{selectedRoute?.distance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Est. Time:</span>
                  <span className="font-medium">{selectedRoute?.estimatedTime}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Map */}
        <div className="lg:w-2/3">
          <div className="relative bg-muted rounded-lg overflow-hidden" style={{ height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Lantzville Emergency Evacuation Map"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=49.2827,-124.0781&z=13&output=embed"
              className="border-0"
            />
            
            {/* Map Overlay Controls */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2">
              <div className="flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ZoomIn"
                  iconSize={16}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ZoomOut"
                  iconSize={16}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Locate"
                  iconSize={16}
                />
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
              <h5 className="font-medium text-foreground mb-2 text-sm">Legend</h5>
              <div className="space-y-1 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span>Primary Routes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span>Secondary Routes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span>Emergency Only</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Emergency Shelters</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download Map
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share"
              iconPosition="left"
              iconSize={16}
            >
              Share Route
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Printer"
              iconPosition="left"
              iconSize={16}
            >
              Print Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvacuationMapViewer;