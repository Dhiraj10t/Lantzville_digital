import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CivicParticipationGuide = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const participationGuide = {
    'getting-started': {
      title: 'Getting Started in Civic Engagement',
      icon: 'Play',
      content: [
        {
          title: 'Understanding Local Government',
          description: 'Learn how Lantzville municipal government works and how decisions are made.',
          steps: [
            'Review the municipal organizational chart and council structure',
            'Understand the difference between municipal, provincial, and federal responsibilities',
            'Learn about the budget process and how tax dollars are allocated',
            'Familiarize yourself with key municipal services and departments'
          ],
          resources: [
            { name: 'Municipal Government 101', type: 'Guide', url: '#' },
            { name: 'Council Structure Overview', type: 'Video', url: '#' },
            { name: 'Budget Basics Workshop', type: 'Event', url: '#' }
          ]
        },
        {
          title: 'Finding Your Voice',
          description: 'Discover the many ways you can participate in local democracy.',
          steps: [
            'Identify issues that matter to you and your community',
            'Research current municipal initiatives and policies',
            'Connect with neighbors and community groups with similar interests',
            'Start following council meetings and municipal communications'
          ],
          resources: [
            { name: 'Community Issues Survey', type: 'Form', url: '#' },
            { name: 'Neighborhood Groups Directory', type: 'Directory', url: '#' },
            { name: 'Meeting Calendar', type: 'Calendar', url: '#' }
          ]
        }
      ]
    },
    'attending-meetings': {
      title: 'Attending Council Meetings',
      icon: 'Users',
      content: [
        {
          title: 'Before the Meeting',
          description: 'Prepare effectively to make the most of your council meeting experience.',
          steps: [
            'Review the meeting agenda and supporting documents in advance',
            'Identify agenda items you want to follow or speak about',
            'Prepare questions or comments if you plan to participate',
            'Arrive early to familiarize yourself with the meeting space'
          ],
          resources: [
            { name: 'Meeting Agendas', type: 'Documents', url: '#' },
            { name: 'Council Chambers Map', type: 'Map', url: '#' },
            { name: 'Meeting Preparation Checklist', type: 'Checklist', url: '#' }
          ]
        },
        {
          title: 'During the Meeting',
          description: 'Understand meeting procedures and how to participate respectfully.',
          steps: [
            'Follow meeting etiquette and procedures',
            'Listen actively to discussions and decision-making processes',
            'Take notes on items of interest for future follow-up',
            'Participate in public input sessions when appropriate'
          ],
          resources: [
            { name: 'Meeting Procedures Guide', type: 'Guide', url: '#' },
            { name: 'Public Speaking Guidelines', type: 'Guidelines', url: '#' },
            { name: 'Meeting Etiquette Tips', type: 'Tips', url: '#' }
          ]
        }
      ]
    },
    'public-speaking': {
      title: 'Speaking at Council Meetings',
      icon: 'Mic',
      content: [
        {
          title: 'Preparing Your Presentation',
          description: 'Learn how to effectively communicate your ideas to council.',
          steps: [
            'Register to speak in advance or sign up at the meeting',
            'Prepare a clear, concise presentation (usually 3-5 minutes)',
            'Focus on facts, community impact, and specific requests',
            'Practice your presentation and time yourself'
          ],
          resources: [
            { name: 'Speaker Registration Form', type: 'Form', url: '#' },
            { name: 'Effective Public Speaking Tips', type: 'Guide', url: '#' },
            { name: 'Sample Presentations', type: 'Examples', url: '#' }
          ]
        },
        {
          title: 'Presentation Best Practices',
          description: 'Make your voice heard with confidence and clarity.',
          steps: [
            'State your name and address clearly at the beginning',
            'Present your main points in a logical order',
            'Use specific examples and evidence to support your position',
            'End with a clear request or call to action'
          ],
          resources: [
            { name: 'Presentation Template', type: 'Template', url: '#' },
            { name: 'Public Speaking Workshop', type: 'Workshop', url: '#' },
            { name: 'Confidence Building Tips', type: 'Tips', url: '#' }
          ]
        }
      ]
    },
    'committees': {
      title: 'Joining Committees & Boards',
      icon: 'Users2',
      content: [
        {
          title: 'Available Opportunities',
          description: 'Explore various committees and advisory boards you can join.',
          steps: [
            'Review current committee vacancies and requirements',
            'Understand the time commitment and meeting schedules',
            'Consider your skills, interests, and available time',
            'Submit an application with your background and motivation'
          ],
          committees: [
            { name: 'Parks & Recreation Committee', openings: 2, commitment: '2 hours/month' },
            { name: 'Environmental Advisory Committee', openings: 1, commitment: '3 hours/month' },
            { name: 'Economic Development Committee', openings: 3, commitment: '2 hours/month' },
            { name: 'Planning & Development Committee', openings: 1, commitment: '4 hours/month' }
          ],
          resources: [
            { name: 'Committee Application Form', type: 'Form', url: '#' },
            { name: 'Committee Descriptions', type: 'Guide', url: '#' },
            { name: 'Member Handbook', type: 'Handbook', url: '#' }
          ]
        }
      ]
    },
    'running-for-office': {
      title: 'Running for Municipal Office',
      icon: 'Award',
      content: [
        {
          title: 'Understanding the Process',
          description: 'Learn about municipal elections and candidate requirements.',
          steps: [
            'Understand eligibility requirements and nomination procedures',
            'Learn about campaign finance rules and disclosure requirements',
            'Research the roles and responsibilities of mayor and councillors',
            'Consider the time commitment and personal impact of holding office'
          ],
          resources: [
            { name: 'Candidate Information Package', type: 'Package', url: '#' },
            { name: 'Election Timeline', type: 'Timeline', url: '#' },
            { name: 'Campaign Finance Guide', type: 'Guide', url: '#' }
          ]
        },
        {
          title: 'Building Your Campaign',
          description: 'Develop an effective campaign strategy and platform.',
          steps: [
            'Develop your platform and key policy positions',
            'Build a campaign team and volunteer network',
            'Create campaign materials and communication strategy',
            'Engage with voters through door-to-door canvassing and events'
          ],
          resources: [
            { name: 'Campaign Planning Template', type: 'Template', url: '#' },
            { name: 'Volunteer Recruitment Guide', type: 'Guide', url: '#' },
            { name: 'Voter Engagement Strategies', type: 'Strategies', url: '#' }
          ]
        }
      ]
    },
    'advocacy': {
      title: 'Community Advocacy & Organizing',
      icon: 'Megaphone',
      content: [
        {
          title: 'Building Community Support',
          description: 'Learn how to organize and advocate for community issues.',
          steps: [
            'Identify and research the issue thoroughly',
            'Build a coalition of supporters and stakeholders',
            'Develop a clear advocacy strategy and timeline',
            'Use multiple channels to raise awareness and build support'
          ],
          resources: [
            { name: 'Advocacy Planning Worksheet', type: 'Worksheet', url: '#' },
            { name: 'Coalition Building Guide', type: 'Guide', url: '#' },
            { name: 'Media Relations Tips', type: 'Tips', url: '#' }
          ]
        },
        {
          title: 'Effective Communication',
          description: 'Communicate your message clearly and persuasively.',
          steps: [
            'Craft clear, compelling messages for different audiences',
            'Use social media and traditional media effectively',
            'Organize community events and information sessions',
            'Present petitions and formal requests to council'
          ],
          resources: [
            { name: 'Message Development Guide', type: 'Guide', url: '#' },
            { name: 'Social Media Toolkit', type: 'Toolkit', url: '#' },
            { name: 'Petition Template', type: 'Template', url: '#' }
          ]
        }
      ]
    }
  };

  const sectionTabs = [
    { key: 'getting-started', label: 'Getting Started', icon: 'Play' },
    { key: 'attending-meetings', label: 'Attending Meetings', icon: 'Users' },
    { key: 'public-speaking', label: 'Public Speaking', icon: 'Mic' },
    { key: 'committees', label: 'Committees', icon: 'Users2' },
    { key: 'running-for-office', label: 'Running for Office', icon: 'Award' },
    { key: 'advocacy', label: 'Advocacy', icon: 'Megaphone' }
  ];

  const getResourceIcon = (type) => {
    const icons = {
      'Guide': 'BookOpen',
      'Video': 'Video',
      'Event': 'Calendar',
      'Form': 'FileText',
      'Directory': 'Users',
      'Calendar': 'Calendar',
      'Documents': 'File',
      'Map': 'Map',
      'Checklist': 'CheckSquare',
      'Guidelines': 'List',
      'Tips': 'Lightbulb',
      'Examples': 'Eye',
      'Template': 'Layout',
      'Workshop': 'Users',
      'Package': 'Package',
      'Timeline': 'Clock',
      'Strategies': 'Target',
      'Worksheet': 'Edit',
      'Toolkit': 'Tool',
      'Handbook': 'Book'
    };
    return icons?.[type] || 'File';
  };

  const currentSection = participationGuide?.[activeSection];

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="BookOpen" size={20} className="text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Civic Participation Guide</h2>
            <p className="text-sm text-muted-foreground">Your pathway to community engagement</p>
          </div>
        </div>
        <Button variant="outline" iconName="Download" iconPosition="left" size="sm">
          Download Guide
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6 p-1 bg-muted/50 rounded-lg">
        {sectionTabs?.map(tab => (
          <Button
            key={tab?.key}
            variant={activeSection === tab?.key ? 'default' : 'ghost'}
            size="sm"
            iconName={tab?.icon}
            iconPosition="left"
            onClick={() => setActiveSection(tab?.key)}
            className="flex-shrink-0"
          >
            <span className="hidden sm:inline">{tab?.label}</span>
            <span className="sm:hidden">{tab?.icon}</span>
          </Button>
        ))}
      </div>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={currentSection?.icon} size={18} className="text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{currentSection?.title}</h3>
        </div>

        {currentSection?.content?.map((section, index) => (
          <div key={index} className="border border-border rounded-lg p-6">
            <h4 className="text-lg font-medium text-foreground mb-3">{section?.title}</h4>
            <p className="text-muted-foreground mb-4">{section?.description}</p>

            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-foreground mb-3">Steps to Take:</h5>
                <div className="space-y-2">
                  {section?.steps?.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{stepIndex + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {section?.committees && (
                <div>
                  <h5 className="font-medium text-foreground mb-3">Current Openings:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section?.committees?.map((committee, commitIndex) => (
                      <div key={commitIndex} className="p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                        <div className="flex items-center justify-between mb-2">
                          <h6 className="font-medium text-foreground text-sm">{committee?.name}</h6>
                          <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
                            {committee?.openings} openings
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Time commitment: {committee?.commitment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h5 className="font-medium text-foreground mb-3">Helpful Resources:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section?.resources?.map((resource, resourceIndex) => (
                    <a
                      key={resourceIndex}
                      href={resource?.url}
                      className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <Icon 
                        name={getResourceIcon(resource?.type)} 
                        size={16} 
                        className="text-primary flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{resource?.name}</p>
                        <p className="text-xs text-muted-foreground">{resource?.type}</p>
                      </div>
                      <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gradient-coastal rounded-lg text-white">
        <div className="flex items-start space-x-3">
          <Icon name="Heart" size={20} className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Ready to Get Involved?</h4>
            <p className="text-sm text-white/90 mb-3">
              Your participation makes Lantzville a better place for everyone. Start with small steps and gradually increase your involvement as you become more comfortable with civic engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" iconName="Calendar" iconPosition="left">
                Upcoming Events
              </Button>
              <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left" className="text-white border-white/30 hover:bg-white/10">
                Ask Questions
              </Button>
              <Button variant="ghost" size="sm" iconName="Users" iconPosition="left" className="text-white hover:bg-white/10">
                Find Local Groups
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivicParticipationGuide;