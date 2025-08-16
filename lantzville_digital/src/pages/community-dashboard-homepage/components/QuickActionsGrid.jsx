import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionsGrid = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 1,
      title: "Pay Property Taxes",
      description: "Quick online payment",
      icon: "CreditCard",
      color: "bg-primary",
      route: "/resident-services-hub",
      seasonal: true,
      priority: "high"
    },
    {
      id: 2,
      title: "Report an Issue",
      description: "Street lights, potholes, etc.",
      icon: "AlertCircle",
      color: "bg-secondary",
      route: "/service-request-portal",
      seasonal: false,
      priority: "high"
    },
    {
      id: 3,
      title: "Book Facilities",
      description: "Parks, community center",
      icon: "MapPin",
      color: "bg-accent",
      route: "/resident-services-hub",
      seasonal: true,
      priority: "medium"
    },
    {
      id: 4,
      title: "Council Meetings",
      description: "Upcoming sessions & minutes",
      icon: "Users",
      color: "bg-muted-foreground",
      route: "/council-governance-transparency-center",
      seasonal: false,
      priority: "medium"
    },
    {
      id: 5,
      title: "Community Events",
      description: "Local happenings & RSVP",
      icon: "Calendar",
      color: "bg-success",
      route: "/community-life-events",
      seasonal: true,
      priority: "high"
    },
    {
      id: 6,
      title: "Emergency Info",
      description: "Safety resources & alerts",
      icon: "AlertTriangle",
      color: "bg-destructive",
      route: "/emergency-information-safety-hub",
      seasonal: false,
      priority: "critical"
    }
  ];

  const handleActionClick = (route) => {
    navigate(route);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
        <Button 
          variant="ghost" 
          iconName="MoreHorizontal" 
          iconSize={18}
          onClick={() => navigate('/resident-services-hub')}
        >
          View All Services
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions?.map((action) => (
          <div
            key={action?.id}
            className="coastal-card hover:shadow-elevated cursor-pointer group transition-all duration-300"
            onClick={() => handleActionClick(action?.route)}
          >
            <div className="flex items-start space-x-4">
              <div className={`${action?.color} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={action?.icon} size={24} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {action?.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {action?.description}
                </p>
                {action?.seasonal && (
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span className="text-xs text-accent font-medium">Seasonal Priority</span>
                  </div>
                )}
              </div>
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsGrid;