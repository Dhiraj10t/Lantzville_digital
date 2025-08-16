import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecreationPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All");

  const programs = [
    {
      id: 1,
      title: "Youth Soccer League",
      ageGroup: "Youth (6-16)",
      category: "Sports",
      instructor: "Coach Mike Thompson",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      schedule: "Saturdays 10:00 AM - 12:00 PM",
      duration: "10 weeks",
      startDate: "2025-09-07",
      endDate: "2025-11-16",
      location: "Lantzville Sports Complex",
      price: "$85",
      spotsAvailable: 12,
      totalSpots: 24,
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Join our youth soccer league for skill development, teamwork, and fun! \nProgram includes weekly games, skill-building drills, and end-of-season tournament. \nAll equipment provided except cleats and shin guards.`,
      requirements: ["Soccer cleats", "Shin guards", "Water bottle"],
      benefits: ["Physical fitness", "Teamwork skills", "Confidence building", "New friendships"]
    },
    {
      id: 2,
      title: "Senior Fitness & Wellness",
      ageGroup: "Seniors (55+)",
      category: "Fitness",
      instructor: "Sarah Johnson, Certified Trainer",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      schedule: "Tuesdays & Thursdays 10:00 AM - 11:00 AM",
      duration: "8 weeks",
      startDate: "2025-08-20",
      endDate: "2025-10-15",
      location: "Community Center",
      price: "$60",
      spotsAvailable: 8,
      totalSpots: 15,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=compress&cs=tinysrgb&w=800",
      description: `Low-impact fitness program designed specifically for seniors. \nFocus on flexibility, balance, strength, and social connection. \nAll fitness levels welcome with modifications available.`,
      requirements: ["Comfortable clothing", "Water bottle", "Yoga mat (provided if needed)"],
      benefits: ["Improved balance", "Increased strength", "Social interaction", "Better mobility"]
    },
    {
      id: 3,
      title: "Family Swimming Lessons",
      ageGroup: "All Ages",
      category: "Aquatics",
      instructor: "Lisa Chen, Lifeguard Certified",
      instructorImage: "https://randomuser.me/api/portraits/women/28.jpg",
      schedule: "Sundays 2:00 PM - 3:00 PM",
      duration: "6 weeks",
      startDate: "2025-08-25",
      endDate: "2025-10-06",
      location: "Nanaimo Aquatic Centre",
      price: "$120 per family",
      spotsAvailable: 5,
      totalSpots: 8,
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Learn to swim together as a family! \nProgram covers water safety, basic strokes, and confidence building. \nSuitable for beginners and those looking to improve technique.`,
      requirements: ["Swimwear", "Towel", "Goggles (optional)"],
      benefits: ["Water safety skills", "Family bonding", "Physical fitness", "Confidence in water"]
    },
    {
      id: 4,
      title: "Adult Art Workshop",
      ageGroup: "Adults (18+)",
      category: "Arts & Culture",
      instructor: "David Martinez, Local Artist",
      instructorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      schedule: "Wednesdays 7:00 PM - 9:00 PM",
      duration: "4 weeks",
      startDate: "2025-09-04",
      endDate: "2025-09-25",
      location: "Community Center Art Room",
      price: "$95",
      spotsAvailable: 3,
      totalSpots: 12,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=compress&cs=tinysrgb&w=800",
      description: `Explore your creative side with watercolor painting techniques. \nLearn color theory, brush techniques, and composition. \nAll materials included, no experience necessary.`,
      requirements: ["Apron or old clothes", "Enthusiasm to learn"],
      benefits: ["Creative expression", "Stress relief", "New skills", "Social connection"]
    },
    {
      id: 5,
      title: "Teen Leadership Program",
      ageGroup: "Teens (13-17)",
      category: "Leadership",
      instructor: "Amanda Foster, Youth Coordinator",
      instructorImage: "https://randomuser.me/api/portraits/women/35.jpg",
      schedule: "Fridays 4:00 PM - 6:00 PM",
      duration: "12 weeks",
      startDate: "2025-09-06",
      endDate: "2025-11-22",
      location: "Community Center",
      price: "$75",
      spotsAvailable: 7,
      totalSpots: 16,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Develop leadership skills through community service projects and workshops. \nLearn public speaking, project management, and teamwork. \nCulminate with a community presentation of your group project.`,
      requirements: ["Notebook", "Commitment to attendance", "Positive attitude"],
      benefits: ["Leadership skills", "Community involvement", "Public speaking", "Resume building"]
    },
    {
      id: 6,
      title: "Toddler Music & Movement",
      ageGroup: "Toddlers (2-4)",
      category: "Early Childhood",
      instructor: "Emma Wilson, Early Childhood Educator",
      instructorImage: "https://randomuser.me/api/portraits/women/29.jpg",
      schedule: "Mondays 10:00 AM - 10:45 AM",
      duration: "6 weeks",
      startDate: "2025-08-26",
      endDate: "2025-10-07",
      location: "Community Center",
      price: "$55",
      spotsAvailable: 4,
      totalSpots: 10,
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: `Fun-filled music and movement class for toddlers and caregivers. \nSinging, dancing, and instrument play to develop motor skills. \nGreat opportunity for socialization and bonding.`,
      requirements: ["Comfortable clothes for movement", "Caregiver participation"],
      benefits: ["Motor skill development", "Music appreciation", "Social skills", "Parent-child bonding"]
    }
  ];

  const ageGroups = ["All", "Toddlers (2-4)", "Youth (6-16)", "Teens (13-17)", "Adults (18+)", "Seniors (55+)", "All Ages"];
  const categories = ["All", "Sports", "Fitness", "Aquatics", "Arts & Culture", "Leadership", "Early Childhood"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms = programs?.filter(program => {
    const ageMatch = selectedAgeGroup === "All" || program?.ageGroup === selectedAgeGroup;
    const categoryMatch = selectedCategory === "All" || program?.category === selectedCategory;
    return ageMatch && categoryMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      "Sports": "bg-orange-100 text-orange-800",
      "Fitness": "bg-green-100 text-green-800",
      "Aquatics": "bg-blue-100 text-blue-800",
      "Arts & Culture": "bg-purple-100 text-purple-800",
      "Leadership": "bg-indigo-100 text-indigo-800",
      "Early Childhood": "bg-pink-100 text-pink-800"
    };
    return colors?.[category] || "bg-gray-100 text-gray-800";
  };

  const getAvailabilityColor = (available, total) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "text-green-600";
    if (percentage > 20) return "text-yellow-600";
    return "text-red-600";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Recreation Programs</h2>
          <p className="text-muted-foreground">Programs for all ages and interests</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" iconName="Calendar" iconPosition="left">
            View Schedule
          </Button>
          <Button variant="default" iconName="UserPlus" iconPosition="left">
            Register Now
          </Button>
        </div>
      </div>
      {/* Filters */}
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-sm font-medium text-foreground mb-2">Age Group</h3>
          <div className="flex flex-wrap gap-2">
            {ageGroups?.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAgeGroup(age)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedAgeGroup === age
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground mb-2">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms?.map((program) => (
          <div
            key={program?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProgram(program)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={program?.image}
                alt={program?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(program?.category)}`}>
                  {program?.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1">
                <span className="text-xs font-medium text-foreground">{program?.ageGroup}</span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {program?.title}
                </h3>
                <span className="text-primary font-bold text-lg ml-2">
                  {program?.price}
                </span>
              </div>

              <div className="flex items-center mb-3">
                <img
                  src={program?.instructorImage}
                  alt={program?.instructor}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-muted-foreground">{program?.instructor}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {formatDate(program?.startDate)} - {formatDate(program?.endDate)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} className="mr-2" />
                  {program?.schedule}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  {program?.location}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className={`text-sm font-medium ${getAvailabilityColor(program?.spotsAvailable, program?.totalSpots)}`}>
                  <Icon name="Users" size={16} className="inline mr-1" />
                  {program?.spotsAvailable} spots left
                </div>
                <Button size="sm" variant="default">
                  Register
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredPrograms?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No programs found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to see more programs.</p>
        </div>
      )}
      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProgram?.image}
                alt={selectedProgram?.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">
                      {selectedProgram?.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-md text-sm font-medium ${getCategoryColor(selectedProgram?.category)}`}>
                      {selectedProgram?.category}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <img
                      src={selectedProgram?.instructorImage}
                      alt={selectedProgram?.instructor}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium text-foreground">{selectedProgram?.instructor}</div>
                      <div className="text-sm text-muted-foreground">{selectedProgram?.ageGroup}</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {selectedProgram?.price}
                  </div>
                  <div className={`text-sm font-medium ${getAvailabilityColor(selectedProgram?.spotsAvailable, selectedProgram?.totalSpots)}`}>
                    {selectedProgram?.spotsAvailable} of {selectedProgram?.totalSpots} spots available
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Program Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Calendar" size={18} className="mr-3" />
                      <span>{formatDate(selectedProgram?.startDate)} - {formatDate(selectedProgram?.endDate)}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Clock" size={18} className="mr-3" />
                      <span>{selectedProgram?.schedule}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="MapPin" size={18} className="mr-3" />
                      <span>{selectedProgram?.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Calendar" size={18} className="mr-3" />
                      <span>{selectedProgram?.duration}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">What to Bring</h3>
                  <ul className="space-y-2">
                    {selectedProgram?.requirements?.map((requirement, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProgram?.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Program Benefits</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProgram?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="default" 
                  fullWidth 
                  iconName="UserPlus" 
                  iconPosition="left"
                  disabled={selectedProgram?.spotsAvailable === 0}
                >
                  {selectedProgram?.spotsAvailable === 0 ? "Program Full" : "Register Now"}
                </Button>
                <Button variant="outline" iconName="Heart" iconPosition="left">
                  Save Program
                </Button>
                <Button variant="outline" iconName="Share" iconPosition="left">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecreationPrograms;