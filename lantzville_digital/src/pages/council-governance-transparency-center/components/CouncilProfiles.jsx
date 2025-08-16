import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CouncilProfiles = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const councilMembers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "Mayor",
      email: "mayor@lantzville.ca",
      phone: "(250) 390-4006",
      termStart: "2022-10-15",
      termEnd: "2026-10-15",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      background: `Sarah has been a Lantzville resident for over 15 years and brings extensive experience in municipal governance and community development. She previously served as a councillor for two terms before being elected mayor.`,
      keyFocusAreas: [
        "Sustainable community development",
        "Economic growth and business support",
        "Environmental stewardship",
        "Transparent governance"
      ],
      achievements: [
        "Led the development of Lantzville\'s first Climate Action Plan",
        "Secured $2.3M in federal funding for infrastructure projects",
        "Established the annual Community Leadership Awards",
        "Implemented digital town halls for increased accessibility"
      ],
      committees: [
        "Regional District Board",
        "Economic Development Committee (Chair)",
        "Emergency Planning Committee"
      ],
      education: "Master of Public Administration, University of Victoria",
      workingHours: "Monday-Friday, 9:00 AM - 5:00 PM",
      nextAvailability: "Office hours: Thursdays 2:00-4:00 PM"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Councillor",
      email: "mchen@lantzville.ca",
      phone: "(250) 390-4007",
      termStart: "2022-10-15",
      termEnd: "2026-10-15",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      background: `A local business owner and environmental advocate, Michael has lived in Lantzville for 8 years. He owns a sustainable landscaping company and is passionate about green infrastructure and community resilience.`,
      keyFocusAreas: [
        "Environmental sustainability",
        "Parks and recreation",
        "Small business support",
        "Community safety"
      ],
      achievements: [
        "Championed the installation of 15 new EV charging stations",
        "Led the community garden initiative at Centennial Park",
        "Established the Green Business Recognition Program",
        "Organized annual Earth Day community cleanup events"
      ],
      committees: [
        "Parks and Recreation Committee (Chair)",
        "Environmental Advisory Committee",
        "Business Liaison Committee"
      ],
      education: "Bachelor of Environmental Science, UBC",
      workingHours: "Tuesday, Thursday, Saturday mornings",
      nextAvailability: "Coffee meetings: Saturdays 10:00 AM - 12:00 PM at Village Café"
    },
    {
      id: 3,
      name: "Jennifer Thompson",
      position: "Councillor",
      email: "jthompson@lantzville.ca",
      phone: "(250) 390-4008",
      termStart: "2022-10-15",
      termEnd: "2026-10-15",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      background: `Jennifer is a retired educator who taught at local schools for 30 years. She has been actively involved in community organizations and brings a strong focus on family services and youth programming.`,
      keyFocusAreas: [
        "Education and youth services",
        "Senior citizen programs",
        "Community health and wellness",
        "Affordable housing initiatives"
      ],
      achievements: [
        "Secured funding for the new youth center programs",
        "Established the Senior Transportation Service",
        "Created the Community Wellness Festival",
        "Developed partnerships with Island Health for local clinics"
      ],
      committees: [
        "Social Planning Committee (Chair)",
        "Library Board",
        "Age-Friendly Community Committee"
      ],
      education: "Master of Education, University of Victoria",
      workingHours: "Monday, Wednesday, Friday afternoons",
      nextAvailability: "Community office hours: Wednesdays 1:00-3:00 PM at Community Center"
    },
    {
      id: 4,
      name: "Robert Anderson",
      position: "Councillor",
      email: "randerson@lantzville.ca",
      phone: "(250) 390-4009",
      termStart: "2022-10-15",
      termEnd: "2026-10-15",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      background: `Robert is a civil engineer with 25 years of experience in infrastructure development. He moved to Lantzville 12 years ago and has been involved in various community planning initiatives.`,
      keyFocusAreas: [
        "Infrastructure development",
        "Transportation planning",
        "Public works efficiency",
        "Long-term community planning"
      ],
      achievements: [
        "Oversaw the successful completion of the water main upgrade project",
        "Implemented the road maintenance optimization program",
        "Led the development of the 20-year infrastructure plan",
        "Established the Public Works Advisory Committee"
      ],
      committees: [
        "Public Works Committee (Chair)",
        "Planning and Development Committee",
        "Regional Transportation Committee"
      ],
      education: "Bachelor of Civil Engineering, UBC",
      workingHours: "Monday-Wednesday evenings, Saturday mornings",
      nextAvailability: "Site visits available by appointment"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      position: "Councillor",
      email: "lrodriguez@lantzville.ca",
      phone: "(250) 390-4010",
      termStart: "2022-10-15",
      termEnd: "2026-10-15",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      background: `Lisa is a communications professional and community volunteer who has lived in Lantzville for 6 years. She brings expertise in digital engagement and community outreach.`,
      keyFocusAreas: [
        "Digital governance and transparency",
        "Community engagement",
        "Arts and culture",
        "Tourism development"
      ],
      achievements: [
        "Launched the municipal social media engagement strategy",
        "Created the annual Lantzville Arts Festival",
        "Developed the community feedback portal",
        "Established partnerships with local artists and cultural groups"
      ],
      committees: [
        "Communications Committee (Chair)",
        "Arts and Culture Committee",
        "Tourism Development Committee"
      ],
      education: "Bachelor of Communications, Simon Fraser University",
      workingHours: "Flexible schedule, primarily evenings and weekends",
      nextAvailability: "Virtual meetings available Tuesday-Thursday evenings"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTermProgress = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();
    const total = end - start;
    const elapsed = now - start;
    return Math.min(Math.max((elapsed / total) * 100, 0), 100);
  };

  const renderMemberCard = (member) => (
    <div
      key={member?.id}
      className="border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-200"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <Image
            src={member?.photo}
            alt={`${member?.name} - ${member?.position}`}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
            member?.position === 'Mayor' ? 'bg-primary' : 'bg-secondary'
          }`}>
            {member?.position === 'Mayor' ? 'M' : 'C'}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{member?.name}</h3>
              <p className="text-sm font-medium text-primary">{member?.position}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName={selectedMember === member?.id ? "ChevronUp" : "ChevronDown"}
              onClick={() => setSelectedMember(selectedMember === member?.id ? null : member?.id)}
            >
              {selectedMember === member?.id ? 'Less' : 'More'}
            </Button>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={14} />
              <a href={`mailto:${member?.email}`} className="hover:text-primary transition-colors">
                {member?.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={14} />
              <a href={`tel:${member?.phone}`} className="hover:text-primary transition-colors">
                {member?.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={14} />
              <span>Term: {formatDate(member?.termStart)} - {formatDate(member?.termEnd)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-foreground mb-2">Key Focus Areas</h4>
        <div className="flex flex-wrap gap-2">
          {member?.keyFocusAreas?.map((area, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Term Progress</span>
          <span className="text-xs text-muted-foreground">
            {Math.round(getTermProgress(member?.termStart, member?.termEnd))}% complete
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary rounded-full h-2 transition-all duration-300"
            style={{ width: `${getTermProgress(member?.termStart, member?.termEnd)}%` }}
          />
        </div>
      </div>

      {selectedMember === member?.id && (
        <div className="border-t border-border pt-4 space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Background</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{member?.background}</p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Recent Achievements</h4>
            <ul className="space-y-1">
              {member?.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={14} className="mt-0.5 flex-shrink-0 text-secondary" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Committee Memberships</h4>
            <div className="flex flex-wrap gap-2">
              {member?.committees?.map((committee, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                >
                  {committee}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">{member?.education}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Working Hours</h4>
              <p className="text-sm text-muted-foreground">{member?.workingHours}</p>
            </div>
          </div>

          <div className="p-3 bg-accent/5 rounded-lg">
            <h4 className="font-medium text-foreground mb-1">Next Availability</h4>
            <p className="text-sm text-muted-foreground">{member?.nextAvailability}</p>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button variant="default" size="sm" iconName="Mail" iconPosition="left">
              Send Email
            </Button>
            <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
              Schedule Meeting
            </Button>
            <Button variant="ghost" size="sm" iconName="Phone" iconPosition="left">
              Call
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
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Users" size={20} className="text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Mayor & Council</h2>
            <p className="text-sm text-muted-foreground">Meet your elected representatives</p>
          </div>
        </div>
        <Button variant="outline" iconName="Calendar" iconPosition="left" size="sm">
          Meeting Schedule
        </Button>
      </div>
      <div className="space-y-6">
        {councilMembers?.map(member => renderMemberCard(member))}
      </div>
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Connect with Council</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Your elected representatives are here to serve the community. Don't hesitate to reach out with questions, concerns, or ideas for improving Lantzville.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" iconName="MessageSquare" iconPosition="left">
                Council Contact Form
              </Button>
              <Button variant="ghost" size="sm" iconName="Video" iconPosition="left">
                Virtual Office Hours
              </Button>
              <Button variant="ghost" size="sm" iconName="FileText" iconPosition="left">
                Council Procedures
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilProfiles;