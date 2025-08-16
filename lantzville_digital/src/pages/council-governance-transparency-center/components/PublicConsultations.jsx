import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PublicConsultations = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const activeConsultations = [
    {
      id: 1,
      title: "Waterfront Development Master Plan",
      description: "Help shape the future of our waterfront area with new recreational facilities, walking paths, and community spaces.",
      status: "Active",
      deadline: "2025-09-15",
      participationCount: 247,
      type: "Community Planning",
      engagementOptions: [
        { type: "Online Survey", participants: 156, icon: "FileText" },
        { type: "Virtual Town Hall", participants: 45, icon: "Video" },
        { type: "Interactive Map", participants: 46, icon: "Map" }
      ],
      keyQuestions: [
        "What recreational activities would you like to see at the waterfront?",
        "How important is preserving natural habitat areas?",
        "What accessibility features should be prioritized?",
        "How should parking and transportation be handled?"
      ],
      timeline: [
        { phase: "Public Input", status: "current", date: "Aug 1 - Sep 15" },
        { phase: "Design Review", status: "upcoming", date: "Sep 16 - Oct 15" },
        { phase: "Final Proposal", status: "upcoming", date: "Oct 16 - Nov 1" },
        { phase: "Council Decision", status: "upcoming", date: "Nov 15" }
      ],
      impact: "This project will transform 2.5 hectares of waterfront into a community hub with trails, picnic areas, and educational facilities."
    },
    {
      id: 2,
      title: "Traffic Calming Initiative - Residential Areas",
      description: "Share your thoughts on proposed traffic calming measures including speed bumps, crosswalks, and reduced speed limits.",
      status: "Active",
      deadline: "2025-08-30",
      participationCount: 189,
      type: "Transportation",
      engagementOptions: [
        { type: "Online Survey", participants: 134, icon: "FileText" },
        { type: "Community Walk", participants: 28, icon: "MapPin" },
        { type: "Written Submissions", participants: 27, icon: "Mail" }
      ],
      keyQuestions: [
        "Which streets have the most concerning traffic issues?",
        "What times of day are traffic problems most noticeable?",
        "Which traffic calming measures would you support?",
        "How do you typically travel through these areas?"
      ],
      timeline: [
        { phase: "Community Input", status: "current", date: "Aug 1 - Aug 30" },
        { phase: "Traffic Study", status: "upcoming", date: "Sep 1 - Sep 30" },
        { phase: "Proposal Development", status: "upcoming", date: "Oct 1 - Oct 31" },
        { phase: "Implementation", status: "upcoming", date: "Spring 2026" }
      ],
      impact: "Proposed measures could reduce vehicle speeds by 15-20% and improve pedestrian safety on 8 residential streets."
    },
    {
      id: 3,
      title: "Community Center Programming Survey",
      description: "Help us plan new programs and services for the community center based on resident interests and needs.",
      status: "Active",
      deadline: "2025-09-01",
      participationCount: 312,
      type: "Recreation",
      engagementOptions: [
        { type: "Online Survey", participants: 245, icon: "FileText" },
        { type: "Focus Groups", participants: 36, icon: "Users" },
        { type: "Drop-in Sessions", participants: 31, icon: "Coffee" }
      ],
      keyQuestions: [
        "What age groups need more programming options?",
        "What types of fitness classes interest you most?",
        "How important are arts and crafts programs?",
        "What times work best for your family?"
      ],
      timeline: [
        { phase: "Input Collection", status: "current", date: "Jul 15 - Sep 1" },
        { phase: "Program Planning", status: "upcoming", date: "Sep 2 - Sep 30" },
        { phase: "Staff Training", status: "upcoming", date: "Oct 1 - Oct 31" },
        { phase: "Program Launch", status: "upcoming", date: "Nov 1" }
      ],
      impact: "Results will guide the development of 12-15 new programs serving all age groups in our community."
    }
  ];

  const completedConsultations = [
    {
      id: 4,
      title: "Downtown Revitalization Strategy",
      description: "Community input on improving downtown core with new businesses, streetscaping, and pedestrian improvements.",
      status: "Completed",
      completedDate: "2025-07-31",
      participationCount: 423,
      type: "Economic Development",
      outcome: "Council approved a 3-year revitalization plan including new street lighting, expanded sidewalks, and business incentive programs.",
      implementationStatus: "Phase 1 construction begins October 2025"
    },
    {
      id: 5,
      title: "Parks and Recreation Master Plan",
      description: "Long-term planning for park improvements, new recreational facilities, and trail development.",
      status: "Completed",
      completedDate: "2025-06-15",
      participationCount: 356,
      type: "Recreation",
      outcome: "Residents prioritized playground upgrades, new walking trails, and expanded sports facilities. Budget approved for 5-year implementation.",
      implementationStatus: "Playground construction scheduled for Spring 2026"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Completed':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      'Community Planning': 'bg-blue-50 text-blue-700 border-blue-200',
      'Transportation': 'bg-orange-50 text-orange-700 border-orange-200',
      'Recreation': 'bg-green-50 text-green-700 border-green-200',
      'Economic Development': 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return colors?.[type] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const renderConsultationCard = (consultation, isActive = true) => (
    <div
      key={consultation?.id}
      className="border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{consultation?.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(consultation?.status)}`}>
              {consultation?.status}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(consultation?.type)}`}>
              {consultation?.type}
            </span>
          </div>
          <p className="text-muted-foreground mb-3">{consultation?.description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{consultation?.participationCount} participants</span>
            </div>
            {isActive ? (
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>{getDaysRemaining(consultation?.deadline)} days remaining</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={14} />
                <span>Completed {formatDate(consultation?.completedDate)}</span>
              </div>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={selectedConsultation === consultation?.id ? "ChevronUp" : "ChevronDown"}
          onClick={() => setSelectedConsultation(selectedConsultation === consultation?.id ? null : consultation?.id)}
        >
          {selectedConsultation === consultation?.id ? 'Less' : 'More'}
        </Button>
      </div>

      {selectedConsultation === consultation?.id && (
        <div className="border-t border-border pt-4 space-y-4">
          {isActive ? (
            <>
              <div>
                <h4 className="font-medium text-foreground mb-3">Ways to Participate</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {consultation?.engagementOptions?.map((option, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name={option?.icon} size={16} className="text-primary" />
                        <span className="font-medium text-foreground text-sm">{option?.type}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{option?.participants} participants</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">Key Questions</h4>
                <ul className="space-y-1">
                  {consultation?.keyQuestions?.map((question, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <Icon name="HelpCircle" size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Project Timeline</h4>
                <div className="space-y-2">
                  {consultation?.timeline?.map((phase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        phase?.status === 'current' ? 'bg-secondary' : 
                        phase?.status === 'completed' ? 'bg-primary' : 'bg-muted'
                      }`} />
                      <div className="flex-1">
                        <span className={`text-sm font-medium ${
                          phase?.status === 'current' ? 'text-secondary' : 'text-foreground'
                        }`}>
                          {phase?.phase}
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">{phase?.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-medium text-foreground mb-1">Expected Impact</h4>
                <p className="text-sm text-muted-foreground">{consultation?.impact}</p>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="default" size="sm" iconName="ExternalLink" iconPosition="left">
                  Participate Now
                </Button>
                <Button variant="outline" size="sm" iconName="Share2" iconPosition="left">
                  Share
                </Button>
                <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left">
                  Get Updates
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-medium text-foreground mb-1">Outcome</h4>
                <p className="text-sm text-muted-foreground">{consultation?.outcome}</p>
              </div>
              
              <div className="p-3 bg-secondary/5 rounded-lg">
                <h4 className="font-medium text-foreground mb-1">Implementation Status</h4>
                <p className="text-sm text-muted-foreground">{consultation?.implementationStatus}</p>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" iconName="FileText" iconPosition="left">
                  View Results
                </Button>
                <Button variant="ghost" size="sm" iconName="Eye" iconPosition="left">
                  Track Progress
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="MessageSquare" size={20} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Public Consultations</h2>
            <p className="text-sm text-muted-foreground">Have your say in community decisions</p>
          </div>
        </div>
        <Button variant="outline" iconName="Plus" iconPosition="left" size="sm">
          Suggest Topic
        </Button>
      </div>
      <div className="flex space-x-1 mb-6 bg-muted/50 p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === 'active' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('active')}
        >
          Active ({activeConsultations?.length})
        </Button>
        <Button
          variant={activeTab === 'completed' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('completed')}
        >
          Completed ({completedConsultations?.length})
        </Button>
      </div>
      <div className="space-y-4">
        {activeTab === 'active' && activeConsultations?.map(consultation => 
          renderConsultationCard(consultation, true)
        )}
        {activeTab === 'completed' && completedConsultations?.map(consultation => 
          renderConsultationCard(consultation, false)
        )}
      </div>
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Your Voice Matters</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Public consultations are your opportunity to influence municipal decisions. Your input helps council make informed choices that reflect community needs and priorities.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" iconName="HelpCircle" iconPosition="left">
                How It Works
              </Button>
              <Button variant="ghost" size="sm" iconName="Mail" iconPosition="left">
                Email Updates
              </Button>
              <Button variant="ghost" size="sm" iconName="Calendar" iconPosition="left">
                Consultation Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicConsultations;