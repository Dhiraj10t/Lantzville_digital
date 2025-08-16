import React from 'react';
import Icon from '../../../components/AppIcon';

const ApplicationStatusCard = ({ application }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return 'text-success bg-success/10 border-success/20';
      case 'pending': return 'text-warning bg-warning/10 border-warning/20';
      case 'under review': return 'text-primary bg-primary/10 border-primary/20';
      case 'requires action': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return 'CheckCircle';
      case 'pending': return 'Clock';
      case 'under review': return 'Eye';
      case 'requires action': return 'AlertCircle';
      default: return 'FileText';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-medium text-foreground mb-1">{application?.title}</h3>
          <p className="text-sm text-muted-foreground">
            Reference: {application?.reference}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(application?.status)}`}>
          <div className="flex items-center space-x-1">
            <Icon name={getStatusIcon(application?.status)} size={12} />
            <span>{application?.status}</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Submitted:</span>
          <span className="text-foreground">{application?.submittedDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Expected completion:</span>
          <span className="text-foreground">{application?.expectedDate}</span>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{application?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-coastal h-2 rounded-full transition-all duration-500"
            style={{ width: `${application?.progress}%` }}
          />
        </div>
      </div>
      {/* Next Steps */}
      {application?.nextSteps && (
        <div className="p-3 bg-muted/50 rounded-lg">
          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
            <Icon name="ArrowRight" size={14} className="mr-1" />
            Next Steps
          </h4>
          <p className="text-xs text-muted-foreground">{application?.nextSteps}</p>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatusCard;