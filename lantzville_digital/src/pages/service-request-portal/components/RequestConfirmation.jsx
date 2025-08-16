import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RequestConfirmation = ({ requestData, onNewRequest, onTrackRequest }) => {
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
    <div className="max-w-2xl mx-auto">
      <div className="coastal-card text-center">
        <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={40} color="white" strokeWidth={2} />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          Request Submitted Successfully!
        </h1>
        <p className="text-muted-foreground mb-8">
          Your service request has been received and assigned a tracking number.
        </p>

        <div className="bg-gradient-mist rounded-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Request Number
            </h2>
            <div className="text-3xl font-bold text-primary font-mono tracking-wider">
              {requestData?.requestId}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Save this number for tracking your request
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Category</span>
                <div className="flex items-center space-x-2 mt-1">
                  <Icon name={requestData?.category?.icon} size={16} className="text-primary" />
                  <span className="text-foreground">{requestData?.category?.name}</span>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Priority</span>
                <div className="mt-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(requestData?.priority)}`}>
                    {requestData?.priority?.charAt(0)?.toUpperCase() + requestData?.priority?.slice(1)}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Expected Response</span>
                <p className="text-foreground mt-1">{requestData?.category?.responseTime}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Submitted</span>
                <p className="text-foreground mt-1">{formatDate(requestData?.timestamp)}</p>
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Contact Method</span>
                <p className="text-foreground mt-1 capitalize">{requestData?.contactMethod}</p>
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Status</span>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-foreground">Under Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <Icon name="Mail" size={20} className="text-primary mt-0.5" />
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Confirmation Email Sent
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                A detailed confirmation has been sent to <strong>{requestData?.email}</strong> with your request details and tracking information.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Check your spam folder if you don't see it within 5 minutes</p>
                <p>• You'll receive updates as your request progresses</p>
                <p>• Reply to any update email to add additional information</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="coastal-card bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Icon name="Search" size={20} className="text-primary" />
              <div className="text-left">
                <h4 className="font-medium text-foreground">Track Progress</h4>
                <p className="text-xs text-muted-foreground">
                  Monitor your request status
                </p>
              </div>
            </div>
          </div>

          <div className="coastal-card bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Icon name="MessageSquare" size={20} className="text-primary" />
              <div className="text-left">
                <h4 className="font-medium text-foreground">Get Updates</h4>
                <p className="text-xs text-muted-foreground">
                  Automatic notifications
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onNewRequest}
            iconName="Plus"
            iconPosition="left"
            className="flex-1"
          >
            Submit Another Request
          </Button>
          <Button
            onClick={onTrackRequest}
            iconName="Search"
            iconPosition="right"
            className="flex-1"
          >
            Track This Request
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="coastal-card bg-gradient-mist">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Phone" size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Need Immediate Help?</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            For urgent issues that require immediate attention, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
            >
              (250) 390-4444
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="AlertTriangle"
              iconPosition="left"
            >
              Emergency: 911
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestConfirmation;