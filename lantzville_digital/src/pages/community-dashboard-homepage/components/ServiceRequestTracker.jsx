import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceRequestTracker = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const navigate = useNavigate();

  const serviceRequests = [
    {
      id: "SR-2025-0847",
      title: "Pothole on Lantzville Road",
      category: "Road Maintenance",
      status: "in_progress",
      priority: "medium",
      submittedDate: "Aug 10, 2025",
      estimatedCompletion: "Aug 18, 2025",
      description: "Large pothole near intersection with Cedar Ave causing vehicle damage risk",
      location: "Lantzville Road & Cedar Ave",
      assignedTo: "Public Works Department",
      updates: [
        { date: "Aug 15, 2025", message: "Work crew scheduled for repair", status: "in_progress" },
        { date: "Aug 12, 2025", message: "Site inspection completed", status: "reviewed" },
        { date: "Aug 10, 2025", message: "Request received and logged", status: "submitted" }
      ]
    },
    {
      id: "SR-2025-0851",
      title: "Broken Street Light",
      category: "Utilities",
      status: "completed",
      priority: "high",
      submittedDate: "Aug 8, 2025",
      completedDate: "Aug 14, 2025",
      description: "Street light out on Marine Drive creating safety hazard",
      location: "Marine Drive near Community Center",
      assignedTo: "Electrical Services",
      updates: [
        { date: "Aug 14, 2025", message: "Light fixture replaced and tested", status: "completed" },
        { date: "Aug 9, 2025", message: "Electrician dispatched", status: "in_progress" },
        { date: "Aug 8, 2025", message: "Priority request logged", status: "submitted" }
      ]
    },
    {
      id: "SR-2025-0853",
      title: "Park Bench Vandalism",
      category: "Parks & Recreation",
      status: "pending",
      priority: "low",
      submittedDate: "Aug 13, 2025",
      estimatedCompletion: "Aug 25, 2025",
      description: "Graffiti on bench at Sunset Park requires cleaning and possible replacement",
      location: "Sunset Park - Main Pavilion",
      assignedTo: "Parks Maintenance",
      updates: [
        { date: "Aug 13, 2025", message: "Request received, awaiting assessment", status: "submitted" }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success bg-success/10 border-success/20';
      case 'in_progress': return 'text-primary bg-primary/10 border-primary/20';
      case 'pending': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'in_progress': return 'Clock';
      case 'pending': return 'AlertCircle';
      default: return 'Circle';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const formatStatus = (status) => {
    return status?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase());
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Service Request Tracker</h2>
        <Button 
          variant="outline" 
          iconName="Plus" 
          iconSize={18}
          onClick={() => navigate('/service-request-portal')}
        >
          Submit New Request
        </Button>
      </div>
      <div className="coastal-card">
        <div className="space-y-4">
          {serviceRequests?.map((request) => (
            <div
              key={request?.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-brand ${
                selectedRequest === request?.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedRequest(selectedRequest === request?.id ? null : request?.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm text-muted-foreground">
                      {request?.id}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(request?.status)}`}>
                      <Icon name={getStatusIcon(request?.status)} size={12} className="mr-1" />
                      {formatStatus(request?.status)}
                    </span>
                    <span className={`text-xs font-medium ${getPriorityColor(request?.priority)}`}>
                      {request?.priority?.toUpperCase()} PRIORITY
                    </span>
                  </div>

                  <h3 className="font-semibold text-foreground">
                    {request?.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Tag" size={14} className="mr-1" />
                      {request?.category}
                    </span>
                    <span className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {request?.location}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {request?.submittedDate}
                    </span>
                  </div>
                </div>

                <Icon 
                  name={selectedRequest === request?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-muted-foreground" 
                />
              </div>

              {/* Expanded Details */}
              {selectedRequest === request?.id && (
                <div className="mt-4 pt-4 border-t border-border space-y-4">
                  <p className="text-muted-foreground">
                    {request?.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Assignment Details</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Icon name="User" size={14} className="mr-2" />
                          {request?.assignedTo}
                        </div>
                        {request?.estimatedCompletion && (
                          <div className="flex items-center">
                            <Icon name="Clock" size={14} className="mr-2" />
                            Est. completion: {request?.estimatedCompletion}
                          </div>
                        )}
                        {request?.completedDate && (
                          <div className="flex items-center text-success">
                            <Icon name="CheckCircle" size={14} className="mr-2" />
                            Completed: {request?.completedDate}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Recent Updates</h4>
                      <div className="space-y-2">
                        {request?.updates?.slice(0, 2)?.map((update, index) => (
                          <div key={index} className="flex items-start space-x-2 text-sm">
                            <Icon name="Circle" size={8} className="text-primary mt-2 flex-shrink-0" />
                            <div>
                              <div className="text-muted-foreground">{update?.message}</div>
                              <div className="text-xs text-muted-foreground">{update?.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="MessageCircle"
                      iconPosition="left"
                      onClick={() => navigate('/service-request-portal')}
                    >
                      Add Comment
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                      onClick={() => navigate('/service-request-portal')}
                    >
                      View Full Details
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border text-center">
          <Button
            variant="ghost"
            iconName="Eye"
            iconPosition="left"
            onClick={() => navigate('/service-request-portal')}
          >
            View All Service Requests
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestTracker;