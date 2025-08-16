import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import CommunityStatusBar from './components/CommunityStatusBar';
import QuickActionsGrid from './components/QuickActionsGrid';
import PredictiveSearchBar from './components/PredictiveSearchBar';
import CommunityHighlights from './components/CommunityHighlights';
import CommunityEventsCarousel from './components/CommunityEventsCarousel';
import ServiceRequestTracker from './components/ServiceRequestTracker';
import EmergencyFloatingButton from './components/EmergencyFloatingButton';
import Icon from '../../components/AppIcon';


const CommunityDashboardHomepage = () => {
  useEffect(() => {
    document.title = 'Community Dashboard - Lantzville Digital';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Your comprehensive community hub for Lantzville services, events, and municipal information. Access services, stay informed, and engage with your community.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Status Bar */}
        <section className="bg-gradient-mist py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            {/* Welcome Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                Welcome to Lantzville Digital
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your community hub for services, events, and staying connected. 
                Everything you need to engage with Lantzville, simplified and accessible.
              </p>
            </div>

            {/* Community Status Bar */}
            <CommunityStatusBar />

            {/* Predictive Search */}
            <PredictiveSearchBar />
          </div>
        </section>

        {/* Main Dashboard Content */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 space-y-12">
            {/* Quick Actions Grid */}
            <QuickActionsGrid />

            {/* Community Events Carousel */}
            <CommunityEventsCarousel />

            {/* Community Highlights */}
            <CommunityHighlights />

            {/* Service Request Tracker */}
            <ServiceRequestTracker />
          </div>
        </section>

        {/* Community Stats Section */}
        <section className="bg-muted/50 py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Our Community by the Numbers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how Lantzville Digital is making a difference in our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "3,247", label: "Active Residents", icon: "Users", color: "text-primary" },
                { number: "156", label: "Services Available", icon: "Settings", color: "text-secondary" },
                { number: "89%", label: "Satisfaction Rate", icon: "Heart", color: "text-success" },
                { number: "24/7", label: "Digital Access", icon: "Clock", color: "text-accent" }
              ]?.map((stat, index) => (
                <div key={index} className="coastal-card text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${stat?.color}`}>
                    <Icon name={stat?.icon} size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat?.number}</div>
                  <div className="text-muted-foreground font-medium">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-coastal rounded-lg flex items-center justify-center">
                    <Icon name="Waves" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Lantzville Digital</h3>
                    <p className="text-white/80 text-sm">Your Community Hub</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Connecting our community through innovative digital services and transparent governance.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Resident Services", href: "/resident-services-hub" },
                    { name: "Council & Governance", href: "/council-governance-transparency-center" },
                    { name: "Community Events", href: "/community-life-events" },
                    { name: "Service Requests", href: "/service-request-portal" }
                  ]?.map((link, index) => (
                    <li key={index}>
                      <a href={link?.href} className="text-white/70 hover:text-white transition-colors duration-200">
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-white/70" />
                    <span className="text-white/70">7192 Lantzville Road, Lantzville, BC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-white/70" />
                    <span className="text-white/70">(250) 390-4111</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-white/70" />
                    <span className="text-white/70">info@lantzville.ca</span>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div>
                <h4 className="font-semibold mb-4">Emergency</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-destructive" />
                    <span className="text-white font-semibold">911</span>
                  </div>
                  <a 
                    href="/emergency-information-safety-hub"
                    className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Icon name="Shield" size={16} />
                    <span>Emergency Resources</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/70 text-sm">
                © {new Date()?.getFullYear()} District of Lantzville. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
      {/* Emergency Floating Button */}
      <EmergencyFloatingButton />
    </div>
  );
};

export default CommunityDashboardHomepage;