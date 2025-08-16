import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ServiceWizard = ({ service, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < service?.steps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Mock submission
    alert(`Application for ${service?.name} submitted successfully! Reference: LTZ-${Date.now()?.toString()?.slice(-6)}`);
    onClose();
  };

  const currentStepData = service?.steps?.[currentStep];
  const progress = ((currentStep + 1) / service?.steps?.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">{service?.name}</h2>
            <Button variant="ghost" size="sm" onClick={onClose} iconName="X" />
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep + 1} of {service?.steps?.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-coastal h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-foreground mb-2">
              {currentStepData?.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {currentStepData?.description}
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {currentStepData?.fields?.map((field, index) => (
              <div key={index}>
                <Input
                  label={field?.label}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  required={field?.required}
                  description={field?.description}
                  value={formData?.[field?.name] || ''}
                  onChange={(e) => handleInputChange(field?.name, e?.target?.value)}
                />
              </div>
            ))}
          </div>

          {/* Documents Required */}
          {currentStepData?.documents && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-foreground mb-3 flex items-center">
                <Icon name="FileText" size={18} className="mr-2" />
                Required Documents
              </h4>
              <ul className="space-y-2">
                {currentStepData?.documents?.map((doc, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Check" size={16} className="mr-2 text-success" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Previous
            </Button>
            
            {currentStep === service?.steps?.length - 1 ? (
              <Button 
                variant="default"
                onClick={handleSubmit}
                iconName="Send"
                iconPosition="right"
              >
                Submit Application
              </Button>
            ) : (
              <Button 
                variant="default"
                onClick={nextStep}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWizard;