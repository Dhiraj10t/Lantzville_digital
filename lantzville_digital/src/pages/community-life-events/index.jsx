import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import EventsCalendar from './components/EventsCalendar';
import FacilitiesMap from './components/FacilitiesMap';
import RecreationPrograms from './components/RecreationPrograms';
import LocalBusinessDirectory from './components/LocalBusinessDirectory';
import CommunityStories from './components/CommunityStories';
import VolunteerOpportunities from './components/VolunteerOpportunities';

const CommunityLifeEvents = () => {
  const [activeSection, setActiveSection] = useState('events');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationSections = [
    {
      id: 'events',
      name: 'Events Calendar',
      icon: 'Calendar',
      description: 'Community events and festivals'
    },
    {
      id: 'facilities',
      name: 'Facilities & Parks',
      icon: 'MapPin',
      description: 'Recreation spaces and amenities'
    },
    {
      id: 'programs',
      name: 'Recreation Programs',
      icon: 'Users',
      description: 'Classes and activities for all ages'
    },
    {
      id: 'businesses',
      name: 'Local Businesses',
      icon: 'Store',
      description: 'Support our community businesses'
    },
    {
      id: 'stories',
      name: 'Community Stories',
      icon: 'FileText',
      description: 'Celebrating our residents'
    },
    {
      id: 'volunteer',
      name: 'Volunteer',
      icon: 'Heart',
      description: 'Make a difference in your community'
    }
  ];

  const quickStats = [
    {
      label: "Upcoming Events",
      value: "24",
      icon: "Calendar",
      color: "text-blue-600"
    },
    {
      label: "Community Facilities",
      value: "12",
      icon: "MapPin",
      color: "text-green-600"
    },
    {
      label: "Active Programs",
      value: "18",
      icon: "Users",
      color: "text-purple-600"
    },
    {
      label: "Local Businesses",
      value: "85+",
      icon: "Store",
      color: "text-orange-600"
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'events':
        return <EventsCalendar />;
      case 'facilities':
        return <FacilitiesMap />;
      case 'programs':
        return <RecreationPrograms />;
      case 'businesses':
        return <LocalBusinessDirectory />;
      case 'stories':
        return <CommunityStories />;
      case 'volunteer':
        return <VolunteerOpportunities />;
      default:
        return <EventsCalendar />;
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById('main-content');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-coastal text-white pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Community Life & Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover everything that makes Lantzville special - from community events and recreation programs to local businesses and volunteer opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                iconName="Calendar" 
                iconPosition="left"
                onClick={() => scrollToSection('events')}
              >
                View Events
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                iconName="MapPin" 
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('facilities')}
              >
                Explore Facilities
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-3`}>
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className={`sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        isScrolled ? 'shadow-brand' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {navigationSections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                  activeSection === section?.id
                    ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                }`}
              >
                <Icon name={section?.icon} size={18} />
                <div className="text-left">
                  <div className="font-medium">{section?.name}</div>
                  <div className="text-xs opacity-75 hidden sm:block">{section?.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main id="main-content" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderActiveSection()}
        </div>
      </main>
      {/* Community Highlights */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Lantzville is Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community thrives on connection, creativity, and care for one another. Here's what makes us unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Strong Community</h3>
              <p className="text-muted-foreground">
                Neighbors helping neighbors, creating lasting friendships and supporting each other through all of life's moments.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Icon name="Leaf" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Natural Beauty</h3>
              <p className="text-muted-foreground">
                Surrounded by stunning coastal landscapes, parks, and trails that provide endless opportunities for outdoor recreation.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Icon name="Heart" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Caring Spirit</h3>
              <p className="text-muted-foreground">
                A community that celebrates achievements, supports those in need, and works together to make Lantzville even better.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-coastal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Involved in Your Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're new to Lantzville or a longtime resident, there are countless ways to connect, contribute, and celebrate community life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              iconName="Heart" 
              iconPosition="left"
              onClick={() => scrollToSection('volunteer')}
            >
              Volunteer Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              iconName="Mail" 
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Stay Connected
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-coastal rounded-lg flex items-center justify-center">
                  <Icon name="Waves" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lantzville Digital</h3>
                  <p className="text-sm opacity-80">Your Community Hub</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Connecting our community through digital innovation, transparent governance, and accessible services.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Facebook" className="text-white hover:text-primary" />
                <Button variant="ghost" size="sm" iconName="Twitter" className="text-white hover:text-primary" />
                <Button variant="ghost" size="sm" iconName="Instagram" className="text-white hover:text-primary" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/community-dashboard-homepage" className="hover:text-primary transition-colors">Community Dashboard</a></li>
                <li><a href="/resident-services-hub" className="hover:text-primary transition-colors">Resident Services</a></li>
                <li><a href="/council-governance-transparency-center" className="hover:text-primary transition-colors">Council & Governance</a></li>
                <li><a href="/service-request-portal" className="hover:text-primary transition-colors">Service Requests</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  (250) 390-4006
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@lantzville.ca
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  7192 Lantzville Rd
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Mon-Fri: 8:30 AM - 4:30 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; {new Date()?.getFullYear()} District of Lantzville. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityLifeEvents;