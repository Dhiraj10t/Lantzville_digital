import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const RequestForm = ({ selectedCategory, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    location: '',
    contactMethod: 'email',
    phone: '',
    email: '',
    photos: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priorityOptions = [
    { value: 'low', label: 'Low Priority', description: 'Non-urgent, can wait 5-7 days' },
    { value: 'medium', label: 'Medium Priority', description: 'Standard response, 2-3 days' },
    { value: 'high', label: 'High Priority', description: 'Urgent, within 24 hours' },
    { value: 'emergency', label: 'Emergency', description: 'Immediate attention required' }
  ];

  const contactOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'sms', label: 'Text Message' },
    { value: 'both', label: 'Email & Phone' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (event) => {
    const files = Array.from(event?.target?.files);
    setFormData(prev => ({
      ...prev,
      photos: [...prev?.photos, ...files]
    }));
  };

  const removePhoto = (index) => {
    setFormData(prev => ({
      ...prev,
      photos: prev?.photos?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const requestData = {
      ...formData,
      category: selectedCategory,
      timestamp: new Date()?.toISOString(),
      requestId: `LTZ-${Date.now()?.toString()?.slice(-6)}`
    };
    
    onSubmit(requestData);
    setIsSubmitting(false);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position?.coords;
          setFormData(prev => ({
            ...prev,
            location: `${latitude?.toFixed(6)}, ${longitude?.toFixed(6)}`
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="coastal-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-coastal rounded-lg flex items-center justify-center">
              <Icon name={selectedCategory?.icon} size={20} color="white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                {selectedCategory?.name} Request
              </h2>
              <p className="text-sm text-muted-foreground">
                Expected response: {selectedCategory?.responseTime}
              </p>
            </div>
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Request Title"
            type="text"
            placeholder="Brief description of the issue"
            value={formData?.title}
            onChange={(e) => handleInputChange('title', e?.target?.value)}
            required
            description="Provide a clear, concise title for your request"
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Detailed Description *
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={4}
              placeholder="Please provide detailed information about the issue, including when it started, specific location details, and any other relevant information..."
              value={formData?.description}
              onChange={(e) => handleInputChange('description', e?.target?.value)}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              The more details you provide, the faster we can resolve your request
            </p>
          </div>

          <Select
            label="Priority Level"
            description="Help us prioritize your request appropriately"
            options={priorityOptions}
            value={formData?.priority}
            onChange={(value) => handleInputChange('priority', value)}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Location
            </label>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Street address or description"
                value={formData?.location}
                onChange={(e) => handleInputChange('location', e?.target?.value)}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={getCurrentLocation}
                iconName="MapPin"
                className="px-3"
              >
                GPS
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Provide the exact location or use GPS for precise coordinates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Preferred Contact Method"
              options={contactOptions}
              value={formData?.contactMethod}
              onChange={(value) => handleInputChange('contactMethod', value)}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />
          </div>

          {(formData?.contactMethod === 'phone' || formData?.contactMethod === 'sms' || formData?.contactMethod === 'both') && (
            <Input
              label="Phone Number"
              type="tel"
              placeholder="(250) 123-4567"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              required
            />
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Photos (Optional)
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <Icon name="Camera" size={32} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Click to upload photos or drag and drop
                </span>
                <span className="text-xs text-muted-foreground">
                  PNG, JPG up to 10MB each (max 5 photos)
                </span>
              </label>
            </div>

            {formData?.photos?.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                {formData?.photos?.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="X" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-primary mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">What happens next?</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• You'll receive a confirmation email with your request number</li>
                  <li>• Our team will review and assign your request within 2 hours</li>
                  <li>• You'll get status updates via your preferred contact method</li>
                  <li>• We'll notify you when the issue is resolved</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              iconName="ArrowLeft"
              iconPosition="left"
              className="sm:w-auto"
            >
              Back to Categories
            </Button>
            <Button
              type="submit"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
              className="flex-1 sm:flex-none"
              disabled={!formData?.title || !formData?.description || !formData?.email}
            >
              {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;