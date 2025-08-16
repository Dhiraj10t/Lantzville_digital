import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCategoryCard from './components/ServiceCategoryCard';
import ServiceWizard from './components/ServiceWizard';
import ApplicationStatusCard from './components/ApplicationStatusCard';
import PaymentPortal from './components/PaymentPortal';
import LiveChatWidget from './components/LiveChatWidget';
import FAQSection from './components/FAQSection';

const ResidentServicesHub = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showPaymentPortal, setShowPaymentPortal] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  // Mock data for service categories
  const serviceCategories = [
    {
      id: 1,
      name: 'Moving to Lantzville',
      description: 'Everything you need to know about relocating to our community',
      icon: 'Home',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      services: ['Utility connections', 'Voter registration', 'Waste collection', 'Community programs', 'School enrollment']
    },
    {
      id: 2,
      name: 'Home & Property',
      description: 'Building permits, property taxes, and home-related services',
      icon: 'Building2',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
      services: ['Building permits', 'Property taxes', 'Zoning inquiries', 'Tree removal', 'Fence permits']
    },
    {
      id: 3,
      name: 'Business & Development',
      description: 'Start and grow your business with municipal support',
      icon: 'Briefcase',
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
      services: ['Business licenses', 'Development permits', 'Signage permits', 'Health permits', 'Zoning applications']
    },
    {
      id: 4,
      name: 'Community Programs',
      description: 'Recreation, events, and community engagement opportunities',
      icon: 'Users',
      bgColor: 'bg-success/10',
      iconColor: 'text-success',
      services: ['Recreation programs', 'Event bookings', 'Facility rentals', 'Volunteer opportunities', 'Senior services']
    },
    {
      id: 5,
      name: 'Emergency Services',
      description: 'Safety resources and emergency preparedness information',
      icon: 'AlertTriangle',
      bgColor: 'bg-destructive/10',
      iconColor: 'text-destructive',
      services: ['Emergency alerts', 'Evacuation routes', 'Preparedness guides', 'Report hazards', 'Safety programs']
    }
  ];

  // Mock data for service wizard
  const mockServices = {
    1: {
      name: 'New Resident Registration',
      steps: [
        {
          title: 'Personal Information',
          description: 'Please provide your basic contact information',
          fields: [
            { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter your first name' },
            { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter your last name' },
            { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your.email@example.com' }
          ]
        },
        {
          title: 'Address Information',
          description: 'Confirm your new Lantzville address',
          fields: [
            { name: 'address', label: 'Street Address', type: 'text', required: true, placeholder: '123 Main Street' },
            { name: 'postalCode', label: 'Postal Code', type: 'text', required: true, placeholder: 'V0R 2H0' }
          ]
        },
        {
          title: 'Service Preferences',
          description: 'Choose the services you\'d like to set up',
          fields: [
            { name: 'utilities', label: 'Utility Services', type: 'text', placeholder: 'Water, Sewer, Garbage' },
            { name: 'notifications', label: 'Communication Preferences', type: 'text', placeholder: 'Email, SMS, Mail' }
          ]
        }
      ]
    },
    2: {
      name: 'Building Permit Application',
      steps: [
        {
          title: 'Project Details',
          description: 'Describe your building project',
          fields: [
            { name: 'projectType', label: 'Project Type', type: 'text', required: true, placeholder: 'Renovation, Addition, New Construction' },
            { name: 'description', label: 'Project Description', type: 'text', required: true, placeholder: 'Detailed description of work' }
          ],
          documents: ['Site plan', 'Building plans', 'Structural drawings', 'Property survey']
        },
        {
          title: 'Property Information',
          description: 'Confirm property details',
          fields: [
            { name: 'propertyAddress', label: 'Property Address', type: 'text', required: true, placeholder: 'Project location address' },
            { name: 'lotSize', label: 'Lot Size', type: 'text', placeholder: 'Square footage or acres' }
          ]
        },
        {
          title: 'Contractor Information',
          description: 'Provide contractor details if applicable',
          fields: [
            { name: 'contractorName', label: 'Contractor Name', type: 'text', placeholder: 'Licensed contractor name' },
            { name: 'contractorLicense', label: 'License Number', type: 'text', placeholder: 'BC contractor license' }
          ]
        }
      ]
    }
  };

  // Mock data for application status
  const mockApplications = [
    {
      id: 1,
      title: 'Building Permit - Deck Addition',
      reference: 'LTZ-BP-2024-0156',
      status: 'Under Review',
      submittedDate: 'Aug 10, 2024',
      expectedDate: 'Aug 25, 2024',
      progress: 65,
      nextSteps: 'Structural review in progress. Fire department approval pending.'
    },
    {
      id: 2,
      title: 'Business License - Home Bakery',
      reference: 'LTZ-BL-2024-0089',
      status: 'Approved',
      submittedDate: 'Aug 5, 2024',
      expectedDate: 'Aug 15, 2024',
      progress: 100,
      nextSteps: 'License ready for pickup at municipal office.'
    },
    {
      id: 3,
      title: 'Tree Removal Permit',
      reference: 'LTZ-TR-2024-0234',
      status: 'Requires Action',
      submittedDate: 'Aug 12, 2024',
      expectedDate: 'Aug 20, 2024',
      progress: 25,
      nextSteps: 'Arborist report required. Please submit within 5 business days.'
    }
  ];

  const handleCategoryClick = (category) => {
    // For demo purposes, show wizard for first two categories
    if (category?.id <= 2) {
      setSelectedService(mockServices?.[category?.id]);
    } else {
      alert(`${category?.name} services coming soon! Please contact us for assistance.`);
    }
  };

  const tabs = [
    { id: 'services', label: 'All Services', icon: 'Grid3X3' },
    { id: 'applications', label: 'My Applications', icon: 'FileText' },
    { id: 'payments', label: 'Payments', icon: 'CreditCard' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-coastal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resident Services Hub
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Access all municipal services in one place. From permits to payments, 
              we've organized everything around your needs, not our departments.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Online Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5 min</div>
                <div className="text-sm text-white/80">Average Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex space-x-8">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name={tab?.icon} size={18} />
                      <span>{tab?.label}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'services' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Service Categories
                </h2>
                <p className="text-muted-foreground">
                  Choose a category to get started with municipal services organized around your life events and needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories?.map((category) => (
                  <ServiceCategoryCard
                    key={category?.id}
                    category={category}
                    onClick={handleCategoryClick}
                  />
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-12 p-6 bg-muted/30 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowPaymentPortal(true)}
                    iconName="CreditCard"
                    iconPosition="left"
                    fullWidth
                  >
                    Make Payment
                  </Button>
                  <Button
                    variant="outline"
                    iconName="FileText"
                    iconPosition="left"
                    fullWidth
                  >
                    Track Application
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Phone"
                    iconPosition="left"
                    fullWidth
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  My Applications
                </h2>
                <p className="text-muted-foreground">
                  Track the status of your submitted applications and see what actions are needed.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockApplications?.map((application) => (
                  <ApplicationStatusCard
                    key={application?.id}
                    application={application}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Payment Center
                </h2>
                <p className="text-muted-foreground">
                  Pay your municipal fees, taxes, and service charges securely online.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Icon name="Home" size={32} className="text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Property Taxes</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pay your annual property taxes online
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setShowPaymentPortal(true)}
                    fullWidth
                  >
                    Pay Now
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Icon name="FileText" size={32} className="text-secondary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Permits & Licenses</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pay for building permits and business licenses
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setShowPaymentPortal(true)}
                    fullWidth
                  >
                    Pay Now
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Icon name="Car" size={32} className="text-warning mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Parking & Fines</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pay parking tickets and municipal fines
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setShowPaymentPortal(true)}
                    fullWidth
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && <FAQSection />}
        </div>
      </section>
      {/* Service Wizard Modal */}
      {selectedService && (
        <ServiceWizard
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
      {/* Payment Portal Modal */}
      <PaymentPortal
        isOpen={showPaymentPortal}
        onClose={() => setShowPaymentPortal(false)}
      />
      {/* Live Chat Widget */}
      <LiveChatWidget />
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>Municipal Office: (250) 390-4111</p>
                <p>Emergency: (250) 390-4111</p>
                <p>Email: info@lantzville.ca</p>
                <p>7192 Lantzville Road, Lantzville, BC V0R 2H0</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>Monday - Friday: 8:30 AM - 4:30 PM</p>
                <p>Saturday - Sunday: Closed</p>
                <p>Statutory Holidays: Closed</p>
                <p>Emergency services available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="/emergency-information-safety-hub" className="block text-white/80 hover:text-white transition-colors">
                  Emergency Information
                </a>
                <a href="/council-governance-transparency-center" className="block text-white/80 hover:text-white transition-colors">
                  Council & Governance
                </a>
                <a href="/community-life-events" className="block text-white/80 hover:text-white transition-colors">
                  Community Events
                </a>
                <a href="/service-request-portal" className="block text-white/80 hover:text-white transition-colors">
                  Service Requests
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} District of Lantzville. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResidentServicesHub;