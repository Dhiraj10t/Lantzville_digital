import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RequestCategoryCard from './components/RequestCategoryCard';
import RequestForm from './components/RequestForm';
import RequestConfirmation from './components/RequestConfirmation';
import RequestTracker from './components/RequestTracker';
import CommunityMap from './components/CommunityMap';

const ServiceRequestPortal = () => {
  const [currentView, setCurrentView] = useState('categories'); // categories, form, confirmation, tracker, map
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [submittedRequest, setSubmittedRequest] = useState(null);

  // Service request categories
  const requestCategories = [
    {
      id: 'road-maintenance',
      name: 'Road Maintenance',
      icon: 'Construction',
      description: 'Potholes, road damage, signage issues, and street maintenance concerns',
      responseTime: '2-3 business days',
      examples: ['Potholes', 'Damaged signs', 'Road debris', 'Line painting']
    },
    {
      id: 'parks-recreation',
      name: 'Parks & Recreation',
      icon: 'Trees',
      description: 'Park facilities, playgrounds, trails, and recreational area maintenance',
      responseTime: '3-5 business days',
      examples: ['Playground issues', 'Trail maintenance', 'Park lighting', 'Facility damage']
    },
    {
      id: 'bylaw-enforcement',
      name: 'Bylaw Concerns',
      icon: 'Shield',
      description: 'Noise complaints, parking violations, property maintenance, and bylaw enforcement',
      responseTime: '1-2 business days',
      examples: ['Noise complaints', 'Parking violations', 'Property maintenance', 'Animal control']
    },
    {
      id: 'water-sewer',
      name: 'Water & Sewer',
      icon: 'Droplets',
      description: 'Water leaks, sewer issues, drainage problems, and utility concerns',
      responseTime: '24 hours',
      examples: ['Water leaks', 'Sewer backups', 'Drainage issues', 'Water quality']
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: 'Lightbulb',
      description: 'Street lighting, traffic signals, sidewalks, and municipal infrastructure',
      responseTime: '2-4 business days',
      examples: ['Street lights', 'Traffic signals', 'Sidewalk repair', 'Storm drains']
    },
    {
      id: 'general-services',
      name: 'General Services',
      icon: 'HelpCircle',
      description: 'Other municipal services, general inquiries, and miscellaneous requests',
      responseTime: '3-5 business days',
      examples: ['General inquiries', 'Service requests', 'Information requests', 'Other concerns']
    }
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentView('form');
  };

  const handleFormSubmit = (requestData) => {
    setSubmittedRequest(requestData);
    setCurrentView('confirmation');
  };

  const handleNewRequest = () => {
    setSelectedCategory(null);
    setSubmittedRequest(null);
    setCurrentView('categories');
  };

  const handleTrackRequest = () => {
    setCurrentView('tracker');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentView('categories');
  };

  const handleShowMap = () => {
    setCurrentView('map');
  };

  const handleCloseMap = () => {
    setCurrentView('categories');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'form':
        return (
          <RequestForm
            selectedCategory={selectedCategory}
            onSubmit={handleFormSubmit}
            onBack={handleBackToCategories}
          />
        );
      case 'confirmation':
        return (
          <RequestConfirmation
            requestData={submittedRequest}
            onNewRequest={handleNewRequest}
            onTrackRequest={handleTrackRequest}
          />
        );
      case 'tracker':
        return (
          <RequestTracker
            onBack={handleBackToCategories}
          />
        );
      case 'map':
        return (
          <CommunityMap
            onClose={handleCloseMap}
          />
        );
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-coastal rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="FileText" size={40} color="white" strokeWidth={2} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Request Portal
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Report issues, request services, and track progress with Lantzville's 311-style system. 
                Your voice helps us maintain and improve our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleTrackRequest}
                  iconName="Search"
                  iconPosition="left"
                  variant="outline"
                >
                  Track Existing Request
                </Button>
                <Button
                  size="lg"
                  onClick={handleShowMap}
                  iconName="Map"
                  iconPosition="left"
                  variant="outline"
                >
                  View Community Map
                </Button>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="coastal-card text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">847</div>
                <div className="text-sm text-muted-foreground">Requests Resolved</div>
              </div>
              
              <div className="coastal-card text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-warning" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">23</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              
              <div className="coastal-card text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Timer" size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">2.3</div>
                <div className="text-sm text-muted-foreground">Avg Days to Resolve</div>
              </div>
              
              <div className="coastal-card text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">96%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
            {/* Service Categories */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What can we help you with?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Select the category that best describes your request. Our smart system will guide you 
                  through the process and ensure your issue reaches the right department.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requestCategories?.map((category) => (
                  <RequestCategoryCard
                    key={category?.id}
                    category={category}
                    onClick={handleCategorySelect}
                  />
                ))}
              </div>
            </div>
            {/* Emergency Notice */}
            <div className="coastal-card bg-destructive/5 border-destructive/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertTriangle" size={24} className="text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Emergency Situations
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For life-threatening emergencies, dangerous situations, or urgent infrastructure failures 
                    that pose immediate risk to public safety, do not use this portal.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      iconName="Phone"
                      iconPosition="left"
                    >
                      Emergency: 911
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Phone"
                      iconPosition="left"
                    >
                      Municipal Office: (250) 390-4444
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* How It Works */}
            <div className="coastal-card bg-gradient-mist">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                How the Service Request Process Works
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Submit Request</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose a category and provide detailed information about your concern
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Get Confirmation</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive a tracking number and confirmation email within minutes
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Track Progress</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor status updates and estimated completion times
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={24} color="white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Issue Resolved</h4>
                  <p className="text-sm text-muted-foreground">
                    Get notified when complete and provide feedback on our service
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          {renderCurrentView()}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-coastal rounded-lg flex items-center justify-center">
                <Icon name="Waves" size={20} color="white" />
              </div>
              <div>
                <div className="font-bold">Lantzville Digital</div>
                <div className="text-sm opacity-80">Service Request Portal</div>
              </div>
            </div>
            <div className="text-sm opacity-80">
              © {new Date()?.getFullYear()} District of Lantzville. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceRequestPortal;