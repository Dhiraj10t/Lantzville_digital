import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const EmergencyFloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      id: 1,
      title: "Emergency Services",
      number: "911",
      description: "Police, Fire, Ambulance",
      icon: "Phone",
      color: "bg-destructive"
    },
    {
      id: 2,
      title: "Municipal Emergency",
      number: "250-390-4111",
      description: "After-hours municipal emergencies",
      icon: "Building2",
      color: "bg-warning"
    },
    {
      id: 3,
      title: "Power Outage",
      number: "1-888-769-3766",
      description: "BC Hydro outage reporting",
      icon: "Zap",
      color: "bg-accent"
    }
  ];

  const handleMainButtonClick = () => {
    if (isExpanded) {
      navigate('/emergency-information-safety-hub');
    } else {
      setIsExpanded(true);
    }
  };

  const handleContactClick = (contact) => {
    if (contact?.number === "911" || contact?.number?.includes("-")) {
      window.location.href = `tel:${contact?.number}`;
    }
    setIsExpanded(false);
  };

  const handleClickOutside = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={handleClickOutside}
        />
      )}
      {/* Floating Button Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Emergency Contacts Menu */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 w-80 bg-card border border-border rounded-xl shadow-elevated p-4 mb-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Emergency Contacts</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-muted rounded-full transition-colors duration-200"
                  aria-label="Close emergency menu"
                >
                  <Icon name="X" size={16} className="text-muted-foreground" />
                </button>
              </div>

              {emergencyContacts?.map((contact) => (
                <button
                  key={contact?.id}
                  onClick={() => handleContactClick(contact)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors duration-200 text-left"
                >
                  <div className={`${contact?.color} p-2 rounded-lg flex-shrink-0`}>
                    <Icon name={contact?.icon} size={18} color="white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">{contact?.title}</div>
                    <div className="text-sm text-muted-foreground">{contact?.description}</div>
                    <div className="font-mono text-sm text-primary font-semibold">
                      {contact?.number}
                    </div>
                  </div>
                  <Icon name="Phone" size={16} className="text-muted-foreground" />
                </button>
              ))}

              <div className="pt-3 border-t border-border">
                <button
                  onClick={() => navigate('/emergency-information-safety-hub')}
                  className="w-full flex items-center justify-center space-x-2 p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <Icon name="Shield" size={18} />
                  <span className="font-medium">View All Emergency Info</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Emergency Button */}
        <button
          onClick={handleMainButtonClick}
          className={`w-14 h-14 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isExpanded ? 'rotate-45' : ''
          }`}
          aria-label={isExpanded ? "View emergency information" : "Emergency contacts"}
        >
          <Icon 
            name={isExpanded ? "Plus" : "AlertTriangle"} 
            size={24} 
            strokeWidth={2.5}
          />
        </button>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-20"></div>
        
        {/* Emergency Label */}
        {!isExpanded && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-brand opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Emergency
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-destructive border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmergencyFloatingButton;