import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import EmergencyAlertBanner from './components/EmergencyAlertBanner';
import EmergencyContactCard from './components/EmergencyContactCard';
import ServiceStatusGrid from './components/ServiceStatusGrid';
import EvacuationMapViewer from './components/EvacuationMapViewer';
import PreparednessChecklist from './components/PreparednessChecklist';
import CommunityResiliencePrograms from './components/CommunityResiliencePrograms';

const EmergencyInformationSafetyHub = () => {
  const [currentAlert, setCurrentAlert] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock current emergency alert
  const mockAlert = {
    id: 1,
    type: 'weather',
    severity: 'warning',
    title: 'Winter Storm Warning',
    message: `Environment Canada has issued a winter storm warning for the Lantzville area. Heavy snowfall expected with accumulations of 15-25cm. Strong winds gusting up to 70 km/h. Travel not recommended after 6 PM today.`,
    timestamp: '2025-01-15 14:30',
    actionRequired: true
  };

  // Mock emergency contacts
  const emergencyContacts = [
    {
      id: 1,
      type: 'police',
      name: 'RCMP Emergency',
      description: 'Police, fire, medical emergencies',
      phone: '911',
      hours: '24/7 Emergency Line'
    },
    {
      id: 2,
      type: 'police',
      name: 'Nanaimo RCMP',
      description: 'Non-emergency police matters',
      phone: '(250) 754-2345',
      hours: '24/7'
    },
    {
      id: 3,
      type: 'fire',
      name: 'Lantzville Fire Department',
      description: 'Fire emergencies and prevention',
      phone: '911',
      textNumber: '(250) 390-4111',
      hours: '24/7 Emergency'
    },
    {
      id: 4,
      type: 'medical',
      name: 'BC Emergency Health Services',
      description: 'Medical emergencies and ambulance',
      phone: '911',
      hours: '24/7 Emergency'
    },
    {
      id: 5,
      type: 'municipal',
      name: 'Lantzville Municipal Office',
      description: 'Municipal emergencies and services',
      phone: '(250) 390-4006',
      hours: 'Mon-Fri 8:30 AM - 4:30 PM'
    },
    {
      id: 6,
      type: 'poison',
      name: 'Poison Control Centre',
      description: 'Poison emergencies and information',
      phone: '1-800-567-8911',
      hours: '24/7'
    },
    {
      id: 7,
      type: 'mental',
      name: 'Crisis Line',
      description: 'Mental health crisis support',
      phone: '1-800-784-2433',
      textNumber: '741741',
      hours: '24/7 Support'
    }
  ];

  // Mock service status
  const serviceStatus = [
    {
      id: 1,
      type: 'water',
      name: 'Water Services',
      location: 'District-wide',
      status: 'operational',
      description: 'All water services operating normally',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      type: 'power',
      name: 'Electrical Grid',
      location: 'Most areas',
      status: 'disrupted',
      description: 'Planned maintenance affecting Uplands area',
      lastUpdated: '30 minutes ago',
      estimatedResolution: 'Today 6:00 PM'
    },
    {
      id: 3,
      type: 'roads',
      name: 'Road Conditions',
      location: 'Highway access',
      status: 'operational',
      description: 'All major routes clear and accessible',
      lastUpdated: '1 hour ago'
    },
    {
      id: 4,
      type: 'facilities',
      name: 'Municipal Facilities',
      location: 'Community Centre',
      status: 'maintenance',
      description: 'Scheduled maintenance in progress',
      lastUpdated: '4 hours ago',
      estimatedResolution: 'Tomorrow 9:00 AM'
    },
    {
      id: 5,
      type: 'transit',
      name: 'Public Transit',
      location: 'Regional routes',
      status: 'operational',
      description: 'All transit services running on schedule',
      lastUpdated: '45 minutes ago'
    },
    {
      id: 6,
      type: 'waste',
      name: 'Waste Collection',
      location: 'All zones',
      status: 'operational',
      description: 'Regular collection schedule maintained',
      lastUpdated: '3 hours ago'
    }
  ];

  // Mock evacuation routes
  const evacuationRoutes = [
    {
      id: 1,
      name: 'Coastal Highway Route',
      priority: 'primary',
      description: 'Main evacuation route via Highway 19',
      startPoint: 'Downtown Lantzville',
      destination: 'Nanaimo Emergency Centre',
      distance: '12 km',
      estimatedTime: '15-20 minutes',
      accessibilityFeatures: true
    },
    {
      id: 2,
      name: 'Uplands Connector',
      priority: 'secondary',
      description: 'Alternative route through residential areas',
      startPoint: 'Uplands Neighborhood',
      destination: 'Parksville Community Centre',
      distance: '18 km',
      estimatedTime: '25-30 minutes',
      accessibilityFeatures: false
    },
    {
      id: 3,
      name: 'Emergency Backroad',
      priority: 'emergency',
      description: 'Last resort route for severe conditions',
      startPoint: 'Rural Lantzville',
      destination: 'Qualicum Beach',
      distance: '22 km',
      estimatedTime: '35-45 minutes',
      accessibilityFeatures: false
    }
  ];

  // Mock preparedness checklists
  const preparednessChecklists = [
    {
      id: 1,
      type: 'home',
      name: 'Home Emergency Kit',
      description: 'Essential supplies for 72 hours',
      categories: [
        {
          id: 1,
          name: 'Water & Food',
          icon: 'Droplets',
          items: [
            {
              id: 1,
              name: 'Drinking Water',
              description: '4 litres per person per day',
              quantity: '12 litres minimum',
              priority: 'high'
            },
            {
              id: 2,
              name: 'Non-perishable Food',
              description: 'Canned goods, dried foods, energy bars',
              quantity: '3 days supply',
              priority: 'high',
              tips: 'Include manual can opener and utensils'
            },
            {
              id: 3,
              name: 'Water Purification Tablets',
              description: 'Backup water treatment method',
              quantity: '1 bottle',
              priority: 'medium'
            }
          ]
        },
        {
          id: 2,
          name: 'Safety & Tools',
          icon: 'Shield',
          items: [
            {
              id: 4,
              name: 'Flashlight',
              description: 'LED flashlight with extra batteries',
              quantity: '1 per person',
              priority: 'high'
            },
            {
              id: 5,
              name: 'Battery-powered Radio',
              description: 'Weather radio with emergency alerts',
              quantity: '1 unit',
              priority: 'high',
              tips: 'Test monthly and keep batteries fresh'
            },
            {
              id: 6,
              name: 'First Aid Kit',
              description: 'Comprehensive medical supplies',
              quantity: '1 complete kit',
              priority: 'high'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      type: 'family',
      name: 'Family Communication Plan',
      description: 'Stay connected during emergencies',
      items: [
        {
          id: 1,
          name: 'Emergency Contact List',
          description: 'Local and out-of-province contacts'
        },
        {
          id: 2,
          name: 'Meeting Places',
          description: 'Primary and secondary locations'
        },
        {
          id: 3,
          name: 'Important Documents',
          description: 'Copies in waterproof container'
        }
      ]
    },
    {
      id: 3,
      type: 'seasonal',
      name: 'Winter Preparedness',
      description: 'BC winter-specific preparations',
      items: [
        {
          id: 1,
          name: 'Heating Backup',
          description: 'Alternative heating source and fuel'
        },
        {
          id: 2,
          name: 'Winter Clothing',
          description: 'Warm layers and waterproof gear'
        },
        {
          id: 3,
          name: 'Vehicle Winter Kit',
          description: 'Blankets, shovel, sand/salt, booster cables'
        }
      ]
    }
  ];

  // Mock community resilience programs
  const resiliencePrograms = [
    {
      id: 1,
      type: 'training',
      name: 'Emergency Response Training',
      description: 'Learn basic emergency response skills including first aid, CPR, and disaster response protocols.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      schedule: 'Every 2nd Saturday',
      location: 'Lantzville Community Centre',
      duration: '4 hours',
      participants: { current: 18, max: 25 },
      available: true,
      featured: true,
      features: [
        'CPR and First Aid Certification',
        'Emergency Communication Systems',
        'Disaster Response Protocols',
        'Community Coordination Skills'
      ],
      requirements: 'No prior experience required. Minimum age 16.',
      stats: { completed: 156, rating: 4.8 }
    },
    {
      id: 2,
      type: 'volunteer',
      name: 'Neighborhood Watch Program',
      description: 'Join your neighbors in building a safer, more connected community through organized watch groups.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?w=400&h=250&fit=crop',
      schedule: 'Monthly meetings',
      location: 'Various neighborhoods',
      duration: 'Ongoing commitment',
      participants: { current: 45, max: 60 },
      available: true,
      features: [
        'Community Safety Awareness',
        'Emergency Communication Networks',
        'Crime Prevention Techniques',
        'Neighborhood Coordination'
      ],
      requirements: 'Must be Lantzville resident. Background check required.',
      stats: { completed: 89, rating: 4.6 }
    },
    {
      id: 3,
      type: 'network',
      name: 'Amateur Radio Emergency Network',
      description: 'Learn amateur radio operation for emergency communications when other systems fail.',
      image: 'https://images.pixabay.com/photos/2016/11/29/06/18/radio-1867441_1280.jpg?w=400&h=250&fit=crop',
      schedule: 'Wednesdays 7 PM',
      location: 'Municipal Building',
      duration: '8-week course',
      participants: { current: 12, max: 15 },
      available: true,
      features: [
        'Radio License Preparation',
        'Emergency Protocols',
        'Equipment Operation',
        'Network Coordination'
      ],
      requirements: 'Interest in technology helpful but not required.',
      stats: { completed: 34, rating: 4.9 }
    },
    {
      id: 4,
      type: 'education',
      name: 'Family Emergency Planning Workshop',
      description: 'Interactive workshop helping families create comprehensive emergency plans tailored to their needs.',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=250&fit=crop',
      schedule: '1st Sunday monthly',
      location: 'Library Meeting Room',
      duration: '2 hours',
      participants: { current: 8, max: 12 },
      available: true,
      features: [
        'Personalized Emergency Plans',
        'Communication Strategies',
        'Supply Kit Planning',
        'Special Needs Considerations'
      ],
      requirements: 'Open to all families. Children welcome.',
      stats: { completed: 67, rating: 4.7 }
    },
    {
      id: 5,
      type: 'drill',
      name: 'Community Emergency Drill',
      description: 'Quarterly community-wide emergency drills to test and improve our collective response capabilities.',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?w=400&h=250&fit=crop',
      schedule: 'Quarterly',
      location: 'Community-wide',
      duration: '3 hours',
      participants: { current: 234, max: 500 },
      available: false,
      features: [
        'Evacuation Procedures',
        'Communication Testing',
        'Resource Coordination',
        'Response Time Assessment'
      ],
      requirements: 'All residents encouraged to participate.',
      stats: { completed: 4, rating: 4.5 }
    },
    {
      id: 6,
      type: 'training',
      name: 'Psychological First Aid',
      description: 'Learn to provide emotional and psychological support to community members during emergencies.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      schedule: 'Monthly Saturday',
      location: 'Health Centre',
      duration: '6 hours',
      participants: { current: 15, max: 20 },
      available: true,
      features: [
        'Crisis Communication',
        'Emotional Support Techniques',
        'Trauma Recognition',
        'Community Resilience Building'
      ],
      requirements: 'Completion of basic emergency training recommended.',
      stats: { completed: 28, rating: 4.8 }
    }
  ];

  useEffect(() => {
    // Simulate checking for current alerts
    setCurrentAlert(mockAlert);
  }, []);

  const tabOptions = [
    { id: 'overview', label: 'Emergency Overview', icon: 'AlertTriangle' },
    { id: 'contacts', label: 'Emergency Contacts', icon: 'Phone' },
    { id: 'status', label: 'Service Status', icon: 'Activity' },
    { id: 'evacuation', label: 'Evacuation Routes', icon: 'Route' },
    { id: 'preparedness', label: 'Preparedness', icon: 'CheckSquare' },
    { id: 'programs', label: 'Community Programs', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Emergency Alert Banner */}
        {currentAlert && (
          <div className="bg-destructive/5 border-b border-destructive/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <EmergencyAlertBanner alert={currentAlert} />
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="bg-gradient-coastal text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Icon name="Shield" size={48} color="white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Information & Safety Hub
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Your comprehensive resource for emergency preparedness, real-time alerts, and community safety information. 
                Stay informed, stay prepared, stay safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                >
                  Emergency Contacts
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={20}
                >
                  Emergency Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions Bar */}
        <section className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="destructive"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                onClick={() => window.location.href = 'tel:911'}
              >
                Call 911
              </Button>
              <Button
                variant="outline"
                iconName="MapPin"
                iconPosition="left"
                iconSize={16}
                onClick={() => setActiveTab('evacuation')}
              >
                Evacuation Routes
              </Button>
              <Button
                variant="outline"
                iconName="Activity"
                iconPosition="left"
                iconSize={16}
                onClick={() => setActiveTab('status')}
              >
                Service Status
              </Button>
              <Button
                variant="outline"
                iconName="CheckSquare"
                iconPosition="left"
                iconSize={16}
                onClick={() => setActiveTab('preparedness')}
              >
                Emergency Kit
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 overflow-x-auto py-4">
              {tabOptions?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* Current Status Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Current Emergency Status
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="coastal-card">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-success/10 rounded-lg">
                            <Icon name="CheckCircle" size={24} className="text-success" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">All Clear</h3>
                            <p className="text-sm text-muted-foreground">No active emergencies</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Last updated: 2025-01-15 14:45
                        </p>
                      </div>
                      
                      <div className="coastal-card">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-warning/10 rounded-lg">
                            <Icon name="AlertTriangle" size={24} className="text-warning" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Weather Watch</h3>
                            <p className="text-sm text-muted-foreground">Winter conditions expected</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Monitor conditions closely
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Quick Access
                    </h2>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="Phone"
                        iconPosition="left"
                        iconSize={16}
                        onClick={() => setActiveTab('contacts')}
                      >
                        Emergency Contacts
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="Download"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Emergency Guide PDF
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="Bell"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Alert Notifications
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="MessageSquare"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Report Emergency
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Recent Updates */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Recent Emergency Updates
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        type: 'info',
                        title: 'Winter Storm Preparedness Reminder',
                        message: 'Environment Canada forecasts potential winter weather this week. Review your emergency kit and ensure you have adequate supplies.',
                        timestamp: '2025-01-15 10:30',
                        icon: 'CloudSnow'
                      },
                      {
                        id: 2,
                        type: 'success',
                        title: 'Emergency Drill Completed Successfully',
                        message: 'Thank you to all residents who participated in last weekend\'s community emergency drill. Response time improved by 15%.',
                        timestamp: '2025-01-12 16:45',
                        icon: 'CheckCircle'
                      },
                      {
                        id: 3,
                        type: 'warning',
                        title: 'Road Maintenance Advisory',
                        message: 'Scheduled maintenance on Lantzville Road may affect emergency vehicle access. Alternative routes identified and communicated to services.',
                        timestamp: '2025-01-10 09:15',
                        icon: 'Construction'
                      }
                    ]?.map((update) => (
                      <div key={update?.id} className="coastal-card">
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg ${
                            update?.type === 'success' ? 'bg-success/10' :
                            update?.type === 'warning'? 'bg-warning/10' : 'bg-primary/10'
                          }`}>
                            <Icon 
                              name={update?.icon} 
                              size={20} 
                              className={
                                update?.type === 'success' ? 'text-success' :
                                update?.type === 'warning'? 'text-warning' : 'text-primary'
                              }
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-foreground">
                                {update?.title}
                              </h3>
                              <span className="text-sm text-muted-foreground">
                                {update?.timestamp}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {update?.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Emergency Contacts
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Quick access to all emergency services and support contacts. 
                    Save these numbers in your phone for immediate access.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {emergencyContacts?.map((contact) => (
                    <EmergencyContactCard key={contact?.id} contact={contact} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'status' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Service Status Dashboard
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Real-time status of essential municipal services and infrastructure. 
                    Check here for updates during emergencies or planned maintenance.
                  </p>
                </div>
                <ServiceStatusGrid services={serviceStatus} />
              </div>
            )}

            {activeTab === 'evacuation' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Evacuation Routes & Emergency Shelters
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Interactive evacuation maps showing primary and secondary routes, 
                    emergency shelters, and accessibility information for all residents.
                  </p>
                </div>
                <EvacuationMapViewer evacuationRoutes={evacuationRoutes} />
              </div>
            )}

            {activeTab === 'preparedness' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Emergency Preparedness Checklists
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive checklists to help you prepare for emergencies. 
                    Track your progress and ensure your family is ready for any situation.
                  </p>
                </div>
                <PreparednessChecklist checklists={preparednessChecklists} />
              </div>
            )}

            {activeTab === 'programs' && (
              <div>
                <CommunityResiliencePrograms programs={resiliencePrograms} />
              </div>
            )}
          </div>
        </section>

        {/* Emergency Resources Footer */}
        <section className="bg-muted py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Download" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Emergency Guide
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download our comprehensive emergency preparedness guide for offline access.
                </p>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-success/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Bell" size={24} className="text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Alert Notifications
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sign up for emergency alerts and important community notifications.
                </p>
                <Button variant="outline" size="sm">
                  Subscribe
                </Button>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-warning/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Community Support
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with neighbors and join our community resilience network.
                </p>
                <Button variant="outline" size="sm">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Icon name="Shield" size={32} color="white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Lantzville Emergency Services
            </h3>
            <p className="text-white/80 mb-4">
              Keeping our community safe, prepared, and resilient.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>Emergency: 911</span>
              <span>Non-Emergency: (250) 390-4006</span>
              <span>24/7 Support Available</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-sm text-white/60">
              <p>&copy; {new Date()?.getFullYear()} District of Lantzville. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmergencyInformationSafetyHub;