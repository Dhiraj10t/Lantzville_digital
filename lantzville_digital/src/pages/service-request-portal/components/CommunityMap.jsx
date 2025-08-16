import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityMap = ({ onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Mock service requests for the map
  const serviceRequests = [
    {
      id: 'LTZ-123456',
      title: 'Pothole on Lantzville Road',
      category: 'Road Maintenance',
      status: 'in-progress',
      priority: 'high',
      lat: 49.2827,
      lng: -124.0732,
      submittedDate: '2025-01-10',
      estimatedCompletion: '2025-01-15'
    },
    {
      id: 'LTZ-789012',
      title: 'Broken streetlight on Sunset Drive',
      category: 'Infrastructure',
      status: 'completed',
      priority: 'medium',
      lat: 49.2845,
      lng: -124.0756,
      submittedDate: '2025-01-05',
      completedDate: '2025-01-08'
    },
    {
      id: 'LTZ-345678',
      title: 'Graffiti removal at Community Center',
      category: 'Parks & Recreation',
      status: 'assigned',
      priority: 'low',
      lat: 49.2812,
      lng: -124.0698,
      submittedDate: '2025-01-12',
      estimatedCompletion: '2025-01-18'
    },
    {
      id: 'LTZ-901234',
      title: 'Water main leak on Cedar Avenue',
      category: 'Water & Sewer',
      status: 'in-progress',
      priority: 'emergency',
      lat: 49.2856,
      lng: -124.0723,
      submittedDate: '2025-01-13',
      estimatedCompletion: '2025-01-14'
    },
    {
      id: 'LTZ-567890',
      title: 'Noise complaint - construction hours',
      category: 'Bylaw Enforcement',
      status: 'submitted',
      priority: 'medium',
      lat: 49.2834,
      lng: -124.0745,
      submittedDate: '2025-01-14',
      estimatedCompletion: '2025-01-16'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Requests', count: serviceRequests?.length },
    { value: 'Road Maintenance', label: 'Road Maintenance', count: 1 },
    { value: 'Infrastructure', label: 'Infrastructure', count: 1 },
    { value: 'Parks & Recreation', label: 'Parks & Recreation', count: 1 },
    { value: 'Water & Sewer', label: 'Water & Sewer', count: 1 },
    { value: 'Bylaw Enforcement', label: 'Bylaw Enforcement', count: 1 }
  ];

  const filteredRequests = selectedFilter === 'all' 
    ? serviceRequests 
    : serviceRequests?.filter(req => req?.category === selectedFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted':
        return '#64748B';
      case 'assigned':
        return '#2563EB';
      case 'in-progress':
        return '#F59E0B';
      case 'completed':
        return '#10B981';
      case 'emergency':
        return '#DC2626';
      default:
        return '#64748B';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'emergency':
        return 'AlertTriangle';
      case 'high':
        return 'AlertCircle';
      case 'medium':
        return 'Clock';
      case 'low':
        return 'Minus';
      default:
        return 'Clock';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="coastal-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Community Service Map
            </h1>
            <p className="text-muted-foreground">
              View active service requests in your neighborhood and track municipal responsiveness.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            iconPosition="right"
          >
            Close Map
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories?.map((category) => (
            <button
              key={category?.value}
              onClick={() => setSelectedFilter(category?.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedFilter === category?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category?.label}
              <span className="ml-2 text-xs opacity-75">({category?.count})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="relative bg-muted/30 rounded-lg overflow-hidden" style={{ height: '500px' }}>
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Lantzville Service Requests Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=49.2827,-124.0732&z=14&output=embed"
                className="border-0"
              />
              
              {/* Map Overlay with Request Markers */}
              <div className="absolute inset-0 pointer-events-none">
                {filteredRequests?.map((request, index) => (
                  <div
                    key={request?.id}
                    className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                    onClick={() => setSelectedRequest(request)}
                  >
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                      style={{ backgroundColor: getStatusColor(request?.status) }}
                    >
                      <Icon 
                        name={getPriorityIcon(request?.priority)} 
                        size={14} 
                        color="white" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium text-foreground mb-3">Map Legend</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-muted-foreground"></div>
                  <span className="text-xs text-muted-foreground">Submitted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Assigned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-warning"></div>
                  <span className="text-xs text-muted-foreground">In Progress</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-success"></div>
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-destructive"></div>
                  <span className="text-xs text-muted-foreground">Emergency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Request List */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              Active Requests ({filteredRequests?.length})
            </h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredRequests?.map((request) => (
                <div
                  key={request?.id}
                  onClick={() => setSelectedRequest(request)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedRequest?.id === request?.id
                      ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm leading-tight">
                      {request?.title}
                    </h4>
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0 ml-2"
                      style={{ backgroundColor: getStatusColor(request?.status) }}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">
                      {request?.category} • #{request?.id}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {request?.status === 'completed' ? 'Completed' : 'Submitted'}: {request?.submittedDate}
                      </span>
                      <Icon 
                        name={getPriorityIcon(request?.priority)} 
                        size={12} 
                        className="text-muted-foreground" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedRequest && (
              <div className="coastal-card bg-primary/5 border-primary">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">Request Details</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedRequest(null)}
                    iconName="X"
                  />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-foreground">
                      {selectedRequest?.title}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {selectedRequest?.category} • #{selectedRequest?.id}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getStatusColor(selectedRequest?.status) }}
                    >
                      {selectedRequest?.status?.charAt(0)?.toUpperCase() + selectedRequest?.status?.slice(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Priority: {selectedRequest?.priority}
                    </span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Submitted: {selectedRequest?.submittedDate}</p>
                    {selectedRequest?.estimatedCompletion && (
                      <p>Est. Completion: {selectedRequest?.estimatedCompletion}</p>
                    )}
                    {selectedRequest?.completedDate && (
                      <p>Completed: {selectedRequest?.completedDate}</p>
                    )}
                  </div>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Full Details
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMap;