import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const RequestTracker = ({ onBack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Mock request data for demonstration
  const mockRequests = {
    'LTZ-123456': {
      id: 'LTZ-123456',
      title: 'Pothole on Lantzville Road',
      category: { name: 'Road Maintenance', icon: 'Construction' },
      priority: 'high',
      status: 'in-progress',
      submittedDate: '2025-01-10T09:30:00Z',
      lastUpdate: '2025-01-12T14:20:00Z',
      estimatedCompletion: '2025-01-15T17:00:00Z',
      assignedTo: 'Public Works Department',
      description: 'Large pothole causing vehicle damage near the intersection with Dickinson Road.',
      location: '123 Lantzville Road, Lantzville, BC',
      updates: [
        {
          date: '2025-01-12T14:20:00Z',
          status: 'in-progress',
          message: 'Work crew dispatched. Road repair scheduled for tomorrow morning.',
          author: 'Mike Johnson, Public Works'
        },
        {
          date: '2025-01-11T10:15:00Z',
          status: 'assigned',
          message: 'Request assigned to Public Works Department. Site inspection completed.',
          author: 'Sarah Chen, Service Coordinator'
        },
        {
          date: '2025-01-10T09:30:00Z',
          status: 'submitted',
          message: 'Service request submitted and acknowledged.',
          author: 'System'
        }
      ]
    },
    'LTZ-789012': {
      id: 'LTZ-789012',
      title: 'Broken streetlight on Sunset Drive',
      category: { name: 'Infrastructure', icon: 'Lightbulb' },
      priority: 'medium',
      status: 'completed',
      submittedDate: '2025-01-05T16:45:00Z',
      lastUpdate: '2025-01-08T11:30:00Z',
      completedDate: '2025-01-08T11:30:00Z',
      assignedTo: 'Electrical Services',
      description: 'Streetlight not working, creating safety concern for pedestrians.',
      location: '456 Sunset Drive, Lantzville, BC',
      updates: [
        {
          date: '2025-01-08T11:30:00Z',
          status: 'completed',
          message: 'Streetlight repaired and tested. Issue resolved.',
          author: 'Tom Wilson, Electrical Services'
        },
        {
          date: '2025-01-06T13:20:00Z',
          status: 'in-progress',
          message: 'Replacement parts ordered. Repair scheduled for January 8th.',
          author: 'Tom Wilson, Electrical Services'
        },
        {
          date: '2025-01-05T16:45:00Z',
          status: 'submitted',
          message: 'Service request submitted and acknowledged.',
          author: 'System'
        }
      ]
    }
  };

  const handleSearch = async (e) => {
    e?.preventDefault();
    setIsSearching(true);
    setSearchError('');
    setSearchResult(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = mockRequests?.[trackingNumber?.toUpperCase()];
    
    if (result) {
      setSearchResult(result);
    } else {
      setSearchError('Request not found. Please check your tracking number and try again.');
    }
    
    setIsSearching(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted':
        return 'bg-muted text-muted-foreground';
      case 'assigned':
        return 'bg-primary/10 text-primary';
      case 'in-progress':
        return 'bg-warning/10 text-warning';
      case 'completed':
        return 'bg-success/10 text-success';
      case 'cancelled':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'submitted':
        return 'FileText';
      case 'assigned':
        return 'UserCheck';
      case 'in-progress':
        return 'Clock';
      case 'completed':
        return 'CheckCircle';
      case 'cancelled':
        return 'XCircle';
      default:
        return 'FileText';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'emergency':
        return 'text-destructive bg-destructive/10';
      case 'high':
        return 'text-warning bg-warning/10';
      case 'medium':
        return 'text-primary bg-primary/10';
      case 'low':
        return 'text-success bg-success/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="coastal-card mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Track Your Request
            </h1>
            <p className="text-muted-foreground">
              Enter your tracking number to view the status and progress of your service request.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Back
          </Button>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              label="Tracking Number"
              type="text"
              placeholder="LTZ-123456"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e?.target?.value)}
              className="flex-1"
              error={searchError}
              description="Format: LTZ-XXXXXX (case insensitive)"
            />
            <Button
              type="submit"
              loading={isSearching}
              iconName="Search"
              iconPosition="right"
              className="sm:mt-6"
              disabled={!trackingNumber?.trim()}
            >
              {isSearching ? 'Searching...' : 'Track Request'}
            </Button>
          </div>
        </form>

        {!searchResult && !searchError && (
          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Info" size={20} className="text-primary" />
              <h3 className="font-semibold text-foreground">Sample Tracking Numbers</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Try these sample tracking numbers to see how the system works:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTrackingNumber('LTZ-123456')}
                className="text-left p-3 bg-white rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="font-mono text-sm text-primary">LTZ-123456</div>
                <div className="text-xs text-muted-foreground">Road maintenance (In Progress)</div>
              </button>
              <button
                type="button"
                onClick={() => setTrackingNumber('LTZ-789012')}
                className="text-left p-3 bg-white rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="font-mono text-sm text-primary">LTZ-789012</div>
                <div className="text-xs text-muted-foreground">Streetlight repair (Completed)</div>
              </button>
            </div>
          </div>
        )}
      </div>
      {searchResult && (
        <div className="space-y-6">
          {/* Request Overview */}
          <div className="coastal-card">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-coastal rounded-lg flex items-center justify-center">
                  <Icon name={searchResult?.category?.icon} size={24} color="white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    {searchResult?.title}
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    {searchResult?.category?.name} • Request #{searchResult?.id}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(searchResult?.status)}`}>
                      <Icon name={getStatusIcon(searchResult?.status)} size={14} className="mr-1" />
                      {searchResult?.status?.charAt(0)?.toUpperCase() + searchResult?.status?.slice(1)?.replace('-', ' ')}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(searchResult?.priority)}`}>
                      {searchResult?.priority?.charAt(0)?.toUpperCase() + searchResult?.priority?.slice(1)} Priority
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Submitted</h4>
                <p className="text-sm text-muted-foreground">
                  {formatDate(searchResult?.submittedDate)}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Last Update</h4>
                <p className="text-sm text-muted-foreground">
                  {formatDate(searchResult?.lastUpdate)}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  {searchResult?.status === 'completed' ? 'Completed' : 'Est. Completion'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {searchResult?.completedDate 
                    ? formatDate(searchResult?.completedDate)
                    : formatDate(searchResult?.estimatedCompletion)
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Request Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="coastal-card">
              <h3 className="font-semibold text-foreground mb-4">Request Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
                  <p className="text-sm text-foreground">{searchResult?.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                  <p className="text-sm text-foreground">{searchResult?.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Assigned To</h4>
                  <p className="text-sm text-foreground">{searchResult?.assignedTo}</p>
                </div>
              </div>
            </div>

            <div className="coastal-card">
              <h3 className="font-semibold text-foreground mb-4">Progress Timeline</h3>
              <div className="space-y-4">
                {searchResult?.updates?.map((update, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(update?.status)}`}>
                      <Icon name={getStatusIcon(update?.status)} size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">
                          {update?.status?.charAt(0)?.toUpperCase() + update?.status?.slice(1)?.replace('-', ' ')}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(update?.date)}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {update?.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        — {update?.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="coastal-card">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                iconName="MessageSquare"
                iconPosition="left"
              >
                Add Comment
              </Button>
              <Button
                variant="outline"
                iconName="Bell"
                iconPosition="left"
              >
                Subscribe to Updates
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
              >
                Share Status
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestTracker;