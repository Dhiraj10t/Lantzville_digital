import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const MeetingArchives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const meetingArchives = [
    {
      id: 1,
      title: "Regular Council Meeting",
      date: "2025-08-05",
      type: "Regular",
      status: "Completed",
      duration: "2h 15m",
      attendees: ["Mayor Mitchell", "Councillor Chen", "Councillor Thompson", "Councillor Anderson", "Councillor Rodriguez"],
      agenda: [
        "Call to Order",
        "Adoption of Agenda",
        "Public Input Session",
        "Budget Review Q2 2025",
        "Waterfront Development Update",
        "Traffic Safety Initiative Approval",
        "New Business",
        "Adjournment"
      ],
      decisions: [
        {
          item: "Traffic Safety Initiative",
          decision: "Approved",
          vote: "5-0",
          impact: "Implementation of speed bumps on residential streets begins September 2025"
        },
        {
          item: "Waterfront Development Consultant",
          decision: "Approved",
          vote: "4-1",
          impact: "Hired landscape architecture firm for $75,000 design contract"
        },
        {
          item: "Community Garden Expansion",
          decision: "Deferred",
          vote: "N/A",
          impact: "Referred to Parks Committee for further study"
        }
      ],
      publicInput: [
        {
          speaker: "Jane Wilson",
          topic: "Crosswalk Safety on Main Street",
          summary: "Requested additional crosswalk lighting and signage near the school zone"
        },
        {
          speaker: "Tom Bradley",
          topic: "Dog Park Maintenance",
          summary: "Raised concerns about drainage issues and requested regular maintenance schedule"
        }
      ],
      documents: [
        { name: "Meeting Minutes", url: "#", size: "245 KB", type: "PDF" },
        { name: "Video Recording", url: "#", size: "1.2 GB", type: "MP4" },
        { name: "Meeting Agenda", url: "#", size: "156 KB", type: "PDF" },
        { name: "Budget Report Q2", url: "#", size: "890 KB", type: "PDF" }
      ],
      highlights: [
        "Unanimous approval for traffic safety improvements",
        "Public support for waterfront development project",
        "Discussion on sustainable waste management options"
      ],
      followUpActions: [
        "Staff to prepare traffic calming implementation timeline",
        "Schedule public consultation for waterfront design",
        "Parks Committee to review garden expansion proposal"
      ]
    },
    {
      id: 2,
      title: "Special Council Meeting - Emergency Planning",
      date: "2025-07-22",
      type: "Special",
      status: "Completed",
      duration: "1h 45m",
      attendees: ["Mayor Mitchell", "Councillor Chen", "Councillor Thompson", "Councillor Anderson"],
      agenda: [
        "Emergency Response Plan Update",
        "Wildfire Preparedness Review",
        "Emergency Communication Systems",
        "Evacuation Route Planning"
      ],
      decisions: [
        {
          item: "Emergency Alert System Upgrade",
          decision: "Approved",
          vote: "4-0",
          impact: "New system will provide text, email, and social media alerts to residents"
        },
        {
          item: "Wildfire Prevention Budget",
          decision: "Approved",
          vote: "4-0",
          impact: "Additional $50,000 allocated for fuel reduction and fire breaks"
        }
      ],
      publicInput: [],
      documents: [
        { name: "Meeting Minutes", url: "#", size: "189 KB", type: "PDF" },
        { name: "Emergency Plan Update", url: "#", size: "2.1 MB", type: "PDF" },
        { name: "Video Recording", url: "#", size: "945 MB", type: "MP4" }
      ],
      highlights: [
        "Enhanced emergency preparedness measures approved",
        "New alert system to reach 95% of residents",
        "Coordination with regional emergency services improved"
      ],
      followUpActions: [
        "Implement new alert system by October 2025",
        "Schedule community emergency preparedness workshops",
        "Update evacuation route signage"
      ]
    },
    {
      id: 3,
      title: "Public Hearing - Zoning Amendment",
      date: "2025-07-08",
      type: "Public Hearing",
      status: "Completed",
      duration: "3h 30m",
      attendees: ["Mayor Mitchell", "Councillor Chen", "Councillor Thompson", "Councillor Anderson", "Councillor Rodriguez"],
      agenda: [
        "Opening Remarks",
        "Zoning Amendment Presentation",
        "Public Comments Period",
        "Council Questions",
        "Council Deliberation",
        "Decision"
      ],
      decisions: [
        {
          item: "Zoning Amendment - 456 Oak Street",
          decision: "Approved with Conditions",
          vote: "3-2",
          impact: "Allows mixed-use development with height restrictions and parking requirements"
        }
      ],
      publicInput: [
        {
          speaker: "Sarah Johnson",
          topic: "Traffic Impact Concerns",
          summary: "Worried about increased traffic and parking issues in residential area"
        },
        {
          speaker: "Mike Peters",
          topic: "Support for Development",
          summary: "Supports mixed-use development as beneficial for local economy"
        },
        {
          speaker: "Lisa Chen",
          topic: "Building Height Concerns",
          summary: "Requested height restrictions to maintain neighborhood character"
        }
      ],
      documents: [
        { name: "Meeting Minutes", url: "#", size: "312 KB", type: "PDF" },
        { name: "Zoning Application", url: "#", size: "1.8 MB", type: "PDF" },
        { name: "Public Comments Summary", url: "#", size: "156 KB", type: "PDF" },
        { name: "Video Recording", url: "#", size: "1.8 GB", type: "MP4" }
      ],
      highlights: [
        "Extensive public participation with 12 speakers",
        "Council imposed additional conditions based on public input",
        "Compromise reached on building height and design"
      ],
      followUpActions: [
        "Developer to submit revised plans with conditions",
        "Staff to monitor compliance during construction",
        "Follow-up community meeting scheduled for 6 months"
      ]
    }
  ];

  const years = ['2025', '2024', '2023', '2022'];

  const filteredMeetings = meetingArchives?.filter(meeting => {
    const matchesSearch = meeting?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         meeting?.agenda?.some(item => item?.toLowerCase()?.includes(searchTerm?.toLowerCase())) ||
                         meeting?.decisions?.some(decision => decision?.item?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    const matchesYear = meeting?.date?.startsWith(selectedYear);
    return matchesSearch && matchesYear;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMeetingTypeColor = (type) => {
    switch (type) {
      case 'Regular':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Special':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Public Hearing':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getDecisionColor = (decision) => {
    switch (decision) {
      case 'Approved':
        return 'text-secondary';
      case 'Approved with Conditions':
        return 'text-accent';
      case 'Deferred':
        return 'text-muted-foreground';
      case 'Rejected':
        return 'text-destructive';
      default:
        return 'text-foreground';
    }
  };

  const renderMeetingCard = (meeting) => (
    <div
      key={meeting?.id}
      className="border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{meeting?.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getMeetingTypeColor(meeting?.type)}`}>
              {meeting?.type}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{formatDate(meeting?.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{meeting?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{meeting?.attendees?.length} attendees</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={selectedMeeting === meeting?.id ? "ChevronUp" : "ChevronDown"}
          onClick={() => setSelectedMeeting(selectedMeeting === meeting?.id ? null : meeting?.id)}
        >
          Details
        </Button>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-foreground mb-2">Key Decisions</h4>
        <div className="space-y-2">
          {meeting?.decisions?.slice(0, 2)?.map((decision, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
              <span className="text-sm text-foreground">{decision?.item}</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getDecisionColor(decision?.decision)}`}>
                  {decision?.decision}
                </span>
                {decision?.vote !== 'N/A' && (
                  <span className="text-xs text-muted-foreground">({decision?.vote})</span>
                )}
              </div>
            </div>
          ))}
          {meeting?.decisions?.length > 2 && selectedMeeting !== meeting?.id && (
            <p className="text-xs text-muted-foreground">
              +{meeting?.decisions?.length - 2} more decisions
            </p>
          )}
        </div>
      </div>

      {selectedMeeting === meeting?.id && (
        <div className="border-t border-border pt-4 space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Meeting Highlights</h4>
            <ul className="space-y-1">
              {meeting?.highlights?.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="Star" size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {meeting?.decisions?.length > 2 && (
            <div>
              <h4 className="font-medium text-foreground mb-2">All Decisions</h4>
              <div className="space-y-3">
                {meeting?.decisions?.map((decision, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">{decision?.item}</h5>
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${getDecisionColor(decision?.decision)}`}>
                          {decision?.decision}
                        </span>
                        {decision?.vote !== 'N/A' && (
                          <span className="text-sm text-muted-foreground">({decision?.vote})</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{decision?.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {meeting?.publicInput?.length > 0 && (
            <div>
              <h4 className="font-medium text-foreground mb-2">Public Input</h4>
              <div className="space-y-2">
                {meeting?.publicInput?.map((input, index) => (
                  <div key={index} className="p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="User" size={14} className="text-primary" />
                      <span className="font-medium text-foreground text-sm">{input?.speaker}</span>
                      <span className="text-xs text-muted-foreground">- {input?.topic}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{input?.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium text-foreground mb-2">Follow-up Actions</h4>
            <ul className="space-y-1">
              {meeting?.followUpActions?.map((action, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="ArrowRight" size={14} className="mt-0.5 flex-shrink-0 text-secondary" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Meeting Documents</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {meeting?.documents?.map((doc, index) => (
                <a
                  key={index}
                  href={doc?.url}
                  className="flex items-center space-x-2 p-2 rounded-md border border-border hover:bg-muted transition-colors duration-200"
                >
                  <Icon 
                    name={doc?.type === 'PDF' ? 'FileText' : doc?.type === 'MP4' ? 'Video' : 'File'} 
                    size={16} 
                    className="text-muted-foreground" 
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{doc?.name}</p>
                    <p className="text-xs text-muted-foreground">{doc?.size}</p>
                  </div>
                  <Icon name="Download" size={14} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button variant="default" size="sm" iconName="Video" iconPosition="left">
              Watch Recording
            </Button>
            <Button variant="outline" size="sm" iconName="FileText" iconPosition="left">
              Read Minutes
            </Button>
            <Button variant="ghost" size="sm" iconName="Share2" iconPosition="left">
              Share
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Archive" size={20} className="text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Meeting Archives</h2>
            <p className="text-sm text-muted-foreground">Search past meetings and decisions</p>
          </div>
        </div>
        <Button variant="outline" iconName="Calendar" iconPosition="left" size="sm">
          Meeting Calendar
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search meetings, agenda items, or decisions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full"
          />
        </div>
        <div className="flex space-x-2">
          {years?.map(year => (
            <Button
              key={year}
              variant={selectedYear === year ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {filteredMeetings?.length > 0 ? (
          filteredMeetings?.map(meeting => renderMeetingCard(meeting))
        ) : (
          <div className="text-center py-8">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No meetings found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or selecting a different year.
            </p>
          </div>
        )}
      </div>
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Meeting Archive Information</h4>
            <p className="text-sm text-muted-foreground mb-2">
              All council meetings are recorded and archived for public access. Meeting minutes are typically available within 5 business days, and video recordings are posted within 24 hours.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" iconName="HelpCircle" iconPosition="left">
                How to Use Archives
              </Button>
              <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left">
                Meeting Notifications
              </Button>
              <Button variant="ghost" size="sm" iconName="Download" iconPosition="left">
                Bulk Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingArchives;