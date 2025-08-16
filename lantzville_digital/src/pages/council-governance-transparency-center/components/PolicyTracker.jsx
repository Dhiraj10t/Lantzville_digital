import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PolicyTracker = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const policies = [
    {
      id: 1,
      title: "Climate Action Plan Implementation",
      status: "In Progress",
      category: "Environment",
      priority: "High",
      introducedDate: "2025-03-15",
      expectedCompletion: "2025-12-31",
      progress: 65,
      description: "Comprehensive plan to reduce municipal carbon emissions by 40% by 2030 through renewable energy adoption, building efficiency improvements, and sustainable transportation initiatives.",
      keyComponents: [
        "Solar panel installation on municipal buildings",
        "Electric vehicle fleet transition",
        "Building energy efficiency retrofits",
        "Community renewable energy programs"
      ],
      timeline: [
        { phase: "Planning & Consultation", status: "completed", date: "Mar - Apr 2025" },
        { phase: "Infrastructure Assessment", status: "completed", date: "May - Jun 2025" },
        { phase: "Implementation Phase 1", status: "current", date: "Jul - Sep 2025" },
        { phase: "Community Programs Launch", status: "upcoming", date: "Oct - Dec 2025" }
      ],
      impact: "Expected to reduce municipal emissions by 15% in first year and create 25 local green jobs",
      budget: "$2.3M over 3 years",
      communityBenefit: "Lower energy costs for residents, improved air quality, and climate resilience",
      nextMilestone: "Solar panel installation completion by September 30, 2025"
    },
    {
      id: 2,
      title: "Affordable Housing Strategy",
      status: "Under Review",
      category: "Housing",
      priority: "High",
      introducedDate: "2025-06-01",
      expectedCompletion: "2026-06-01",
      progress: 25,
      description: "Multi-faceted approach to increase affordable housing options including zoning amendments, developer incentives, and partnership programs with non-profit housing providers.",
      keyComponents: [
        "Inclusionary zoning policy updates",
        "Affordable housing reserve fund",
        "Partnership with BC Housing",
        "First-time homebuyer assistance program"
      ],
      timeline: [
        { phase: "Research & Analysis", status: "completed", date: "Jun - Jul 2025" },
        { phase: "Public Consultation", status: "current", date: "Aug - Sep 2025" },
        { phase: "Policy Development", status: "upcoming", date: "Oct - Dec 2025" },
        { phase: "Implementation", status: "upcoming", date: "Jan - Jun 2026" }
      ],
      impact: "Target: 150 new affordable housing units over 5 years",
      budget: "$5.2M initial investment plus ongoing programs",
      communityBenefit: "Increased housing options for young families and seniors, workforce retention",
      nextMilestone: "Public consultation report due September 15, 2025"
    },
    {
      id: 3,
      title: "Digital Services Modernization",
      status: "Recently Approved",
      category: "Technology",
      priority: "Medium",
      introducedDate: "2025-07-20",
      expectedCompletion: "2026-03-31",
      progress: 10,
      description: "Comprehensive upgrade of municipal digital services including online permit applications, digital payments, and improved website functionality for better resident experience.",
      keyComponents: [
        "Online permit and license applications",
        "Digital payment processing system",
        "Mobile-responsive website redesign",
        "Customer relationship management system"
      ],
      timeline: [
        { phase: "Vendor Selection", status: "current", date: "Aug - Sep 2025" },
        { phase: "System Development", status: "upcoming", date: "Oct 2025 - Jan 2026" },
        { phase: "Testing & Training", status: "upcoming", date: "Feb - Mar 2026" },
        { phase: "Launch", status: "upcoming", date: "Apr 2026" }
      ],
      impact: "Reduce processing times by 50% and improve resident satisfaction scores",
      budget: "$450K implementation plus $75K annual maintenance",
      communityBenefit: "24/7 service access, faster processing, reduced wait times",
      nextMilestone: "Vendor selection completion by September 30, 2025"
    },
    {
      id: 4,
      title: "Community Safety Enhancement Bylaw",
      status: "Completed",
      category: "Safety",
      priority: "High",
      introducedDate: "2025-01-10",
      expectedCompletion: "2025-07-31",
      progress: 100,
      description: "Updated community safety bylaws including noise regulations, public space usage guidelines, and enhanced enforcement mechanisms for maintaining community standards.",
      keyComponents: [
        "Revised noise control regulations",
        "Public space usage guidelines",
        "Enhanced bylaw enforcement",
        "Community mediation programs"
      ],
      timeline: [
        { phase: "Bylaw Drafting", status: "completed", date: "Jan - Feb 2025" },
        { phase: "Public Consultation", status: "completed", date: "Mar - Apr 2025" },
        { phase: "Council Review", status: "completed", date: "May - Jun 2025" },
        { phase: "Implementation", status: "completed", date: "Jul 2025" }
      ],
      impact: "Improved community standards and reduced noise complaints by 30%",
      budget: "$125K for implementation and enforcement",
      communityBenefit: "Quieter neighborhoods, clearer guidelines for residents and businesses",
      nextMilestone: "6-month effectiveness review scheduled for January 2026"
    },
    {
      id: 5,
      title: "Parks and Recreation Master Plan Update",
      status: "In Progress",
      category: "Recreation",
      priority: "Medium",
      introducedDate: "2025-04-01",
      expectedCompletion: "2025-11-30",
      progress: 45,
      description: "Comprehensive review and update of the 10-year parks and recreation master plan based on community growth, changing demographics, and resident feedback.",
      keyComponents: [
        "Community needs assessment",
        "Facility condition evaluations",
        "Program expansion planning",
        "Accessibility improvements"
      ],
      timeline: [
        { phase: "Community Survey", status: "completed", date: "Apr - May 2025" },
        { phase: "Facility Assessments", status: "completed", date: "Jun - Jul 2025" },
        { phase: "Plan Development", status: "current", date: "Aug - Oct 2025" },
        { phase: "Final Approval", status: "upcoming", date: "Nov 2025" }
      ],
      impact: "Guide $3.2M in recreation facility investments over next decade",
      budget: "$85K for planning process",
      communityBenefit: "Improved recreational opportunities for all ages and abilities",
      nextMilestone: "Draft plan presentation to council October 15, 2025"
    }
  ];

  const categories = ['all', 'Environment', 'Housing', 'Technology', 'Safety', 'Recreation'];
  const statuses = ['all', 'In Progress', 'Under Review', 'Recently Approved', 'Completed'];

  const filteredPolicies = policies?.filter(policy => {
    if (activeFilter === 'all') return true;
    return policy?.category === activeFilter || policy?.status === activeFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Under Review':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Recently Approved':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Completed':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Environment': 'Leaf',
      'Housing': 'Home',
      'Technology': 'Smartphone',
      'Safety': 'Shield',
      'Recreation': 'Trees'
    };
    return icons?.[category] || 'FileText';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderPolicyCard = (policy) => (
    <div
      key={policy?.id}
      className="border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={getCategoryIcon(policy?.category)} size={16} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{policy?.title}</h3>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(policy?.status)}`}>
              {policy?.status}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(policy?.priority)}`}>
              {policy?.priority} Priority
            </span>
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              {policy?.category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{policy?.description}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={selectedPolicy === policy?.id ? "ChevronUp" : "ChevronDown"}
          onClick={() => setSelectedPolicy(selectedPolicy === policy?.id ? null : policy?.id)}
        >
          Details
        </Button>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm text-muted-foreground">{policy?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary rounded-full h-2 transition-all duration-300"
            style={{ width: `${policy?.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={14} />
          <span>Introduced: {formatDate(policy?.introducedDate)}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Target" size={14} />
          <span>Expected: {formatDate(policy?.expectedCompletion)}</span>
        </div>
      </div>

      {selectedPolicy === policy?.id && (
        <div className="border-t border-border pt-4 mt-4 space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Key Components</h4>
            <ul className="space-y-1">
              {policy?.keyComponents?.map((component, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={14} className="mt-0.5 flex-shrink-0 text-secondary" />
                  <span>{component}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">Implementation Timeline</h4>
            <div className="space-y-3">
              {policy?.timeline?.map((phase, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    phase?.status === 'completed' ? 'bg-secondary' :
                    phase?.status === 'current' ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {phase?.status === 'completed' && (
                      <Icon name="Check" size={10} className="text-white" />
                    )}
                    {phase?.status === 'current' && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        phase?.status === 'current' ? 'text-primary' : 'text-foreground'
                      }`}>
                        {phase?.phase}
                      </span>
                      <span className="text-xs text-muted-foreground">{phase?.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-primary/5 rounded-lg">
              <h4 className="font-medium text-foreground mb-1">Expected Impact</h4>
              <p className="text-sm text-muted-foreground">{policy?.impact}</p>
            </div>
            <div className="p-3 bg-secondary/5 rounded-lg">
              <h4 className="font-medium text-foreground mb-1">Community Benefit</h4>
              <p className="text-sm text-muted-foreground">{policy?.communityBenefit}</p>
            </div>
          </div>

          <div className="p-3 bg-accent/5 rounded-lg">
            <h4 className="font-medium text-foreground mb-1">Next Milestone</h4>
            <p className="text-sm text-muted-foreground">{policy?.nextMilestone}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Budget: </span>{policy?.budget}
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" iconName="FileText" iconPosition="left">
                Full Document
              </Button>
              <Button variant="ghost" size="sm" iconName="MessageSquare" iconPosition="left">
                Provide Feedback
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="FileText" size={20} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Policy Tracker</h2>
            <p className="text-sm text-muted-foreground">Track municipal policies and their implementation</p>
          </div>
        </div>
        <Button variant="outline" iconName="Bell" iconPosition="left" size="sm">
          Policy Updates
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {[...categories, ...statuses?.filter(s => s !== 'all')]?.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'all' ? 'All Policies' : filter}
          </Button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredPolicies?.length > 0 ? (
          filteredPolicies?.map(policy => renderPolicyCard(policy))
        ) : (
          <div className="text-center py-8">
            <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No policies found</h3>
            <p className="text-muted-foreground">
              Try selecting a different filter to see more policies.
            </p>
          </div>
        )}
      </div>
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Understanding Policy Implementation</h4>
            <p className="text-sm text-muted-foreground mb-2">
              This tracker shows the progress of municipal policies from introduction to completion. Each policy includes timelines, budgets, and expected community impacts to keep residents informed about local governance decisions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" iconName="HelpCircle" iconPosition="left">
                How Policies Work
              </Button>
              <Button variant="ghost" size="sm" iconName="MessageSquare" iconPosition="left">
                Submit Policy Ideas
              </Button>
              <Button variant="ghost" size="sm" iconName="Download" iconPosition="left">
                Policy Reports
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyTracker;