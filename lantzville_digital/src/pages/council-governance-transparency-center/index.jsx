import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import UpcomingMeetings from './components/UpcomingMeetings';
import BudgetVisualization from './components/BudgetVisualization';
import PublicConsultations from './components/PublicConsultations';
import CouncilProfiles from './components/CouncilProfiles';
import MeetingArchives from './components/MeetingArchives';
import PolicyTracker from './components/PolicyTracker';
import CivicParticipationGuide from './components/CivicParticipationGuide';

const CouncilGovernanceTransparencyCenter = () => {
  const quickActions = [
    {
      title: "Watch Live Council Meeting",
      description: "Join the current council session",
      icon: "Video",
      action: "Watch Now",
      variant: "default",
      href: "#"
    },
    {
      title: "Submit Public Comment",
      description: "Share your thoughts with council",
      icon: "MessageSquare",
      action: "Comment",
      variant: "outline",
      href: "#"
    },
    {
      title: "View Meeting Agenda",
      description: "See what\'s being discussed",
      icon: "FileText",
      action: "View Agenda",
      variant: "outline",
      href: "#"
    },
    {
      title: "Contact Your Councillor",
      description: "Reach out to your representative",
      icon: "Mail",
      action: "Contact",
      variant: "outline",
      href: "#"
    }
  ];

  const transparencyMetrics = [
    {
      label: "Council Meetings This Year",
      value: "24",
      icon: "Calendar",
      trend: "+2 from last year"
    },
    {
      label: "Public Consultations Active",
      value: "3",
      icon: "Users",
      trend: "247 participants"
    },
    {
      label: "Policies in Progress",
      value: "5",
      icon: "FileText",
      trend: "65% avg completion"
    },
    {
      label: "Budget Transparency Score",
      value: "92%",
      icon: "PieChart",
      trend: "Above provincial avg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-coastal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon name="Building2" size={32} className="text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Council & Governance
                </h1>
                <p className="text-xl text-white/90">
                  Transparency Center
                </p>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Lantzville's commitment to transparent governance comes alive through this comprehensive civic engagement platform that makes local democracy accessible and engaging.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickActions?.map((action, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name={action?.icon} size={20} className="text-white" />
                  <h3 className="font-semibold text-white">{action?.title}</h3>
                </div>
                <p className="text-sm text-white/80 mb-3">{action?.description}</p>
                <Button
                  variant={action?.variant}
                  size="sm"
                  fullWidth
                  className={action?.variant === 'default' ? '' : 'text-white border-white/30 hover:bg-white/10'}
                >
                  {action?.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Transparency Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {transparencyMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon name={metric?.icon} size={24} className="text-white/80" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric?.value}</div>
                <div className="text-sm text-white/90 mb-1">{metric?.label}</div>
                <div className="text-xs text-white/70">{metric?.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Upcoming Meetings */}
          <UpcomingMeetings />

          {/* Budget Visualization */}
          <BudgetVisualization />

          {/* Public Consultations */}
          <PublicConsultations />

          {/* Council Profiles */}
          <CouncilProfiles />

          {/* Meeting Archives */}
          <MeetingArchives />

          {/* Policy Tracker */}
          <PolicyTracker />

          {/* Civic Participation Guide */}
          <CivicParticipationGuide />
        </div>
      </main>
      {/* Call to Action Section */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Your Voice Matters</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Democracy works best when everyone participates. Whether you attend a meeting, join a committee, or simply stay informed, your engagement helps build a stronger Lantzville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" iconName="Calendar" iconPosition="left">
              Attend Next Meeting
            </Button>
            <Button variant="outline" size="lg" iconName="Users" iconPosition="left">
              Join a Committee
            </Button>
            <Button variant="ghost" size="lg" iconName="Bell" iconPosition="left">
              Get Meeting Alerts
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Waves" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Lantzville Digital</h3>
                  <p className="text-sm text-white/70">Your Community Hub</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Connecting residents with transparent, accessible local government services and civic engagement opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/community-dashboard-homepage" className="block text-white/80 hover:text-white text-sm transition-colors">Community Dashboard</a>
                <a href="/resident-services-hub" className="block text-white/80 hover:text-white text-sm transition-colors">Resident Services</a>
                <a href="/community-life-events" className="block text-white/80 hover:text-white text-sm transition-colors">Community Events</a>
                <a href="/service-request-portal" className="block text-white/80 hover:text-white text-sm transition-colors">Service Requests</a>
                <a href="/emergency-information-safety-hub" className="block text-white/80 hover:text-white text-sm transition-colors">Emergency Info</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Council</h4>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>7192 Lantzville Road, Lantzville, BC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>(250) 390-4006</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>info@lantzville.ca</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date()?.getFullYear()} District of Lantzville. All rights reserved. | 
              <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1">Accessibility</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CouncilGovernanceTransparencyCenter;