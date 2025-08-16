import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingMeetings = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const upcomingMeetings = [
    {
      id: 1,
      title: "Regular Council Meeting",
      date: "2025-08-20",
      time: "19:00",
      location: "Council Chambers",
      type: "Regular",
      status: "Upcoming",
      agenda: [
        "Budget Review Q3 2025",
        "Community Park Expansion Proposal",
        "Traffic Safety Initiative Update",
        "Public Consultation Results - Waterfront Development"
      ],
      streamingLink: "https://lantzville.ca/live-stream",
      documents: [
        { name: "Meeting Agenda", url: "#", size: "245 KB" },
        { name: "Budget Report Q3", url: "#", size: "1.2 MB" },
        { name: "Park Expansion Plans", url: "#", size: "3.4 MB" }
      ],
      plainLanguageSummary: `This meeting will cover our quarterly budget review, discuss the exciting new community park expansion that could add playground equipment and walking trails, review progress on making our streets safer, and hear results from the recent waterfront development consultation where over 200 residents shared their thoughts.`
    },
    {
      id: 2,
      title: "Special Council Meeting - Budget",
      date: "2025-08-25",
      time: "18:30",
      location: "Council Chambers",
      type: "Special",
      status: "Upcoming",
      agenda: [
        "2026 Budget Preliminary Review",
        "Tax Rate Discussion",
        "Infrastructure Investment Priorities"
      ],
      streamingLink: "https://lantzville.ca/live-stream",
      documents: [
        { name: "Draft Budget 2026", url: "#", size: "2.1 MB" },
        { name: "Tax Impact Analysis", url: "#", size: "890 KB" }
      ],
      plainLanguageSummary: `A focused meeting on next year's budget planning. We'll review spending priorities, discuss how tax rates might be affected, and decide which infrastructure projects (like road repairs and facility upgrades) should be prioritized for 2026.`
    },
    {
      id: 3,
      title: "Public Hearing - Zoning Amendment",
      date: "2025-09-03",
      time: "19:30",
      location: "Community Center",
      type: "Public Hearing",
      status: "Upcoming",
      agenda: [
        "Zoning Amendment Application - 123 Main Street",
        "Public Comments Period",
        "Council Deliberation"
      ],
      streamingLink: "https://lantzville.ca/live-stream",
      documents: [
        { name: "Zoning Application Details", url: "#", size: "1.8 MB" },
        { name: "Community Impact Assessment", url: "#", size: "756 KB" }
      ],
      plainLanguageSummary: `A public hearing where residents can speak about a proposed zoning change for a property on Main Street. This is your chance to ask questions and share concerns before council makes their decision.`
    }
  ];

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString?.split(':');
    const date = new Date();
    date?.setHours(parseInt(hours), parseInt(minutes));
    return date?.toLocaleTimeString('en-CA', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} className="text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Upcoming Council Meetings</h2>
            <p className="text-sm text-muted-foreground">Stay informed about local governance</p>
          </div>
        </div>
        <Button variant="outline" iconName="Bell" iconPosition="left" size="sm">
          Get Notifications
        </Button>
      </div>
      <div className="space-y-4">
        {upcomingMeetings?.map((meeting) => (
          <div
            key={meeting?.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-foreground">{meeting?.title}</h3>
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
                    <span>{formatTime(meeting?.time)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{meeting?.location}</span>
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

            {selectedMeeting === meeting?.id && (
              <div className="border-t border-border pt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Plain Language Summary</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {meeting?.plainLanguageSummary}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Agenda Items</h4>
                  <ul className="space-y-1">
                    {meeting?.agenda?.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="ChevronRight" size={14} className="mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
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
                        <Icon name="FileText" size={16} className="text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{doc?.name}</p>
                          <p className="text-xs text-muted-foreground">{doc?.size}</p>
                        </div>
                        <Icon name="Download" size={14} className="text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="Video" size={16} className="text-primary" />
                    <span className="text-sm text-foreground">Live streaming available</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
                      Add to Calendar
                    </Button>
                    <Button variant="default" size="sm" iconName="Video" iconPosition="left">
                      Watch Live
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">How to Participate</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Council meetings are open to the public. You can attend in person, watch online, or submit written comments.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" iconName="Users" iconPosition="left">
                Attend in Person
              </Button>
              <Button variant="ghost" size="sm" iconName="MessageSquare" iconPosition="left">
                Submit Comments
              </Button>
              <Button variant="ghost" size="sm" iconName="HelpCircle" iconPosition="left">
                Meeting Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetings;