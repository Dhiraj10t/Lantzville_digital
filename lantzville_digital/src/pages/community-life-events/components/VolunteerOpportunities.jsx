import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VolunteerOpportunities = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCommitment, setSelectedCommitment] = useState("All");

  const opportunities = [
    {
      id: 1,
      title: "Community Event Coordinator",
      organization: "Lantzville Events Committee",
      category: "Events & Festivals",
      commitment: "Ongoing",
      timeRequired: "4-6 hours/week",
      location: "Community Center",
      contactPerson: "Sarah Johnson",
      contactEmail: "events@lantzville.ca",
      contactPhone: "(250) 390-4006",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Help organize and coordinate community events throughout the year including festivals, concerts, and seasonal celebrations.

Responsibilities include:
• Assist with event planning and logistics
• Coordinate with vendors and performers
• Help with setup and breakdown
• Manage volunteer teams during events
• Promote events through social media and community outreach

This role is perfect for someone who enjoys bringing people together and has strong organizational skills.`,
      requirements: ["Strong organizational skills", "Good communication abilities", "Reliable transportation", "Weekend availability"],
      benefits: ["Event planning experience", "Community networking", "Leadership development", "Recognition certificate"],
      urgency: "High",
      spotsAvailable: 3,
      applicationDeadline: "2025-08-30"
    },
    {
      id: 2,
      title: "Youth Sports Coach Assistant",
      organization: "Lantzville Recreation Department",
      category: "Sports & Recreation",
      commitment: "Seasonal",
      timeRequired: "6 hours/week",
      location: "Sports Complex",
      contactPerson: "Mike Thompson",
      contactEmail: "recreation@lantzville.ca",
      contactPhone: "(250) 390-4007",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Support youth soccer and baseball programs by assisting head coaches with practices and games.

Responsibilities include:
• Help with practice drills and skill development
• Assist with game day operations
• Support player safety and equipment management
• Encourage positive sportsmanship and team building
• Communicate with parents and guardians

Great opportunity for former athletes or anyone passionate about youth development through sports.`,
      requirements: ["Background check required", "First aid certification (preferred)", "Experience with youth", "Physical fitness"],
      benefits: ["Coaching certification training", "Youth development skills", "Community recognition", "Season-end appreciation event"],
      urgency: "Medium",
      spotsAvailable: 5,
      applicationDeadline: "2025-09-15"
    },
    {
      id: 3,
      title: "Senior Center Companion",
      organization: "Lantzville Senior Services",
      category: "Community Support",
      commitment: "Ongoing",
      timeRequired: "2-4 hours/week",
      location: "Community Center",
      contactPerson: "Helen Chang",
      contactEmail: "seniors@lantzville.ca",
      contactPhone: "(250) 390-4008",
      image: "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Provide companionship and support to seniors through various programs and activities.

Responsibilities include:
• Engage in conversation and social activities
• Assist with art classes and craft projects
• Help with technology training sessions
• Support during group outings and events
• Provide friendly visits to homebound seniors

This rewarding role offers the chance to make meaningful connections while supporting our valued senior community members.`,
      requirements: ["Patience and empathy", "Good listening skills", "Reliable schedule", "Background check required"],
      benefits: ["Intergenerational connections", "Personal fulfillment", "Volunteer appreciation events", "Training provided"],
      urgency: "Medium",
      spotsAvailable: 8,
      applicationDeadline: "2025-09-01"
    },
    {
      id: 4,
      title: "Environmental Stewardship Volunteer",
      organization: "Lantzville Environmental Committee",
      category: "Environment",
      commitment: "Project-based",
      timeRequired: "4 hours/month",
      location: "Various outdoor locations",
      contactPerson: "David Martinez",
      contactEmail: "environment@lantzville.ca",
      contactPhone: "(250) 390-4009",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=compress&cs=tinysrgb&w=800",
      description: `Join our environmental stewardship team to protect and enhance Lantzville's natural spaces.

Responsibilities include:
• Participate in habitat restoration projects
• Assist with invasive species removal
• Help maintain trails and natural areas
• Support environmental education programs
• Collect data for environmental monitoring

Perfect for nature lovers who want to make a tangible difference in preserving our local environment.`,
      requirements: ["Outdoor work capability", "Environmental interest", "Physical fitness", "Weather-appropriate clothing"],
      benefits: ["Environmental education", "Outdoor skills development", "Conservation impact", "Team building"],
      urgency: "Low",
      spotsAvailable: 12,
      applicationDeadline: "2025-10-15"
    },
    {
      id: 5,
      title: "Emergency Preparedness Educator",
      organization: "Lantzville Emergency Services",
      category: "Emergency Services",
      commitment: "Ongoing",
      timeRequired: "3 hours/month",
      location: "Community venues",
      contactPerson: "Fire Chief Robert Kim",
      contactEmail: "emergency@lantzville.ca",
      contactPhone: "(250) 390-4010",
      image: "https://images.pexels.com/photos/6266304/pexels-photo-6266304.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Help educate community members about emergency preparedness and safety measures.

Responsibilities include:
• Present at community workshops and events
• Distribute emergency preparedness materials
• Assist with emergency response drills
• Support neighborhood preparedness programs
• Help maintain emergency supply caches

Training provided for all aspects of emergency preparedness education.`,
      requirements: ["Public speaking comfort", "Reliability", "Emergency services interest", "Training completion"],
      benefits: ["Emergency response training", "Public speaking skills", "Community safety impact", "Certification opportunities"],
      urgency: "High",
      spotsAvailable: 4,
      applicationDeadline: "2025-08-25"
    },
    {
      id: 6,
      title: "Library Program Assistant",
      organization: "Lantzville Public Library",
      category: "Education & Literacy",
      commitment: "Ongoing",
      timeRequired: "3 hours/week",
      location: "Public Library",
      contactPerson: "Lisa Chen",
      contactEmail: "library@lantzville.ca",
      contactPhone: "(250) 390-3092",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Support library programs and services that promote literacy and learning in our community.

Responsibilities include:
• Assist with children's story time sessions
• Help with adult literacy programs
• Support technology training workshops
• Organize book displays and reading programs
• Assist patrons with research and computer use

Great opportunity for book lovers and those passionate about education and community learning.`,
      requirements: ["Love of reading and learning", "Patience with all ages", "Basic computer skills", "Flexible schedule"],
      benefits: ["Library science exposure", "Teaching skills development", "Community education impact", "Professional references"],
      urgency: "Medium",
      spotsAvailable: 6,
      applicationDeadline: "2025-09-10"
    }
  ];

  const categories = ["All", "Events & Festivals", "Sports & Recreation", "Community Support", "Environment", "Emergency Services", "Education & Literacy"];
  const commitmentTypes = ["All", "Ongoing", "Seasonal", "Project-based"];

  const filteredOpportunities = opportunities?.filter(opportunity => {
    const categoryMatch = selectedCategory === "All" || opportunity?.category === selectedCategory;
    const commitmentMatch = selectedCommitment === "All" || opportunity?.commitment === selectedCommitment;
    return categoryMatch && commitmentMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      "Events & Festivals": "bg-purple-100 text-purple-800",
      "Sports & Recreation": "bg-orange-100 text-orange-800",
      "Community Support": "bg-green-100 text-green-800",
      "Environment": "bg-emerald-100 text-emerald-800",
      "Emergency Services": "bg-red-100 text-red-800",
      "Education & Literacy": "bg-blue-100 text-blue-800"
    };
    return colors?.[category] || "bg-gray-100 text-gray-800";
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      "High": "bg-red-100 text-red-800",
      "Medium": "bg-yellow-100 text-yellow-800",
      "Low": "bg-green-100 text-green-800"
    };
    return colors?.[urgency] || "bg-gray-100 text-gray-800";
  };

  const getCommitmentIcon = (commitment) => {
    const icons = {
      "Ongoing": "Clock",
      "Seasonal": "Calendar",
      "Project-based": "Target"
    };
    return icons?.[commitment] || "Clock";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isDeadlineApproaching = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14 && diffDays > 0;
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Volunteer Opportunities</h2>
          <p className="text-muted-foreground">Make a difference in your community</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" iconName="Users" iconPosition="left">
            Volunteer Resources
          </Button>
          <Button variant="default" iconName="Heart" iconPosition="left">
            Apply Now
          </Button>
        </div>
      </div>
      {/* Filters */}
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-sm font-medium text-foreground mb-2">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground mb-2">Commitment Type</h3>
          <div className="flex flex-wrap gap-2">
            {commitmentTypes?.map((commitment) => (
              <button
                key={commitment}
                onClick={() => setSelectedCommitment(commitment)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCommitment === commitment
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {commitment}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities?.map((opportunity) => (
          <div
            key={opportunity?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedOpportunity(opportunity)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={opportunity?.image}
                alt={opportunity?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(opportunity?.category)}`}>
                  {opportunity?.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getUrgencyColor(opportunity?.urgency)}`}>
                  {opportunity?.urgency} Priority
                </span>
              </div>
              {isDeadlineApproaching(opportunity?.applicationDeadline) && (
                <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Deadline Soon!
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-foreground text-lg mb-2 leading-tight">
                {opportunity?.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                {opportunity?.organization}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name={getCommitmentIcon(opportunity?.commitment)} size={16} className="mr-2" />
                  <span>{opportunity?.commitment} • {opportunity?.timeRequired}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>{opportunity?.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  <span>Apply by {formatDate(opportunity?.applicationDeadline)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-primary">
                  {opportunity?.spotsAvailable} spots available
                </div>
                <Button size="sm" variant="default">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredOpportunities?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No opportunities found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to see more volunteer opportunities.</p>
        </div>
      )}
      {/* Opportunity Details Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedOpportunity?.image}
                alt={selectedOpportunity?.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedOpportunity(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <span className={`px-3 py-1 rounded-md text-sm font-medium ${getCategoryColor(selectedOpportunity?.category)}`}>
                  {selectedOpportunity?.category}
                </span>
                <span className={`px-3 py-1 rounded-md text-sm font-medium ${getUrgencyColor(selectedOpportunity?.urgency)}`}>
                  {selectedOpportunity?.urgency} Priority
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {selectedOpportunity?.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {selectedOpportunity?.organization}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary mb-1">
                    {selectedOpportunity?.spotsAvailable} spots available
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Apply by {formatDate(selectedOpportunity?.applicationDeadline)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Opportunity Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name={getCommitmentIcon(selectedOpportunity?.commitment)} size={18} className="mr-3" />
                      <span>{selectedOpportunity?.commitment} commitment</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Clock" size={18} className="mr-3" />
                      <span>{selectedOpportunity?.timeRequired}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="MapPin" size={18} className="mr-3" />
                      <span>{selectedOpportunity?.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="User" size={18} className="mr-3" />
                      <span>{selectedOpportunity?.contactPerson}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Mail" size={18} className="mr-3" />
                      <span>{selectedOpportunity?.contactEmail}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Phone" size={18} className="mr-3" />
                      <span>{selectedOpportunity?.contactPhone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Description</h3>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedOpportunity?.description}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedOpportunity?.requirements?.map((requirement, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedOpportunity?.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" fullWidth iconName="Heart" iconPosition="left">
                  Apply for This Opportunity
                </Button>
                <Button variant="outline" iconName="Mail" iconPosition="left">
                  Contact Coordinator
                </Button>
                <Button variant="outline" iconName="Share" iconPosition="left">
                  Share Opportunity
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerOpportunities;