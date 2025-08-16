import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityEventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Summer Community BBQ",
      date: "August 17, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Lantzville Community Park",
      description: "Join us for our annual summer BBQ featuring local food vendors, live music, and activities for the whole family. Free admission with donations welcome.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=300&fit=crop",
      category: "Community",
      attendees: 127,
      maxAttendees: 200,
      rsvpStatus: "available"
    },
    {
      id: 2,
      title: "Council Public Meeting",
      date: "August 19, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Municipal Hall - Council Chambers",
      description: "Monthly council meeting discussing the waterfront development project, budget updates, and community feedback session. Public participation encouraged.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=600&h=300&fit=crop",
      category: "Governance",
      attendees: 45,
      maxAttendees: 80,
      rsvpStatus: "available"
    },
    {
      id: 3,
      title: "Coastal Cleanup Day",
      date: "August 22, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Lantzville Beach Access Points",
      description: "Help keep our beautiful coastline clean! Volunteers will receive cleanup supplies, refreshments, and a community service certificate. All ages welcome.",
      image: "https://images.pixabay.com/photo/2018/03/30/15/11/beach-3275953_1280.jpg?w=600&h=300&fit=crop",
      category: "Environment",
      attendees: 89,
      maxAttendees: 150,
      rsvpStatus: "available"
    },
    {
      id: 4,
      title: "Farmers Market Opening",
      date: "August 24, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Downtown Lantzville Square",
      description: "Weekly farmers market featuring local produce, artisan crafts, and food trucks. Support local businesses and enjoy fresh, seasonal offerings.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=300&fit=crop",
      category: "Market",
      attendees: 203,
      maxAttendees: 300,
      rsvpStatus: "available"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events?.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events?.length) % events?.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleRSVP = (eventId) => {
    // Mock RSVP functionality
    console.log(`RSVP for event ${eventId}`);
    navigate('/community-life-events');
  };

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case 'community': return 'bg-primary text-primary-foreground';
      case 'governance': return 'bg-secondary text-secondary-foreground';
      case 'environment': return 'bg-success text-success-foreground';
      case 'market': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const currentEvent = events?.[currentSlide];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
        <Button 
          variant="ghost" 
          iconName="Calendar" 
          iconSize={18}
          onClick={() => navigate('/community-life-events')}
        >
          View All Events
        </Button>
      </div>
      <div className="relative bg-card rounded-xl shadow-brand overflow-hidden">
        {/* Main Event Display */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row">
            {/* Event Image */}
            <div className="lg:w-1/2 relative">
              <Image
                src={currentEvent?.image}
                alt={currentEvent?.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentEvent?.category)}`}>
                  {currentEvent?.category}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="lg:w-1/2 p-6 lg:p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {currentEvent?.title}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Icon name="Calendar" size={18} />
                    <span>{currentEvent?.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{currentEvent?.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Icon name="MapPin" size={18} />
                    <span>{currentEvent?.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {currentEvent?.description}
                </p>

                {/* Attendance Info */}
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      {currentEvent?.attendees} / {currentEvent?.maxAttendees} attending
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {currentEvent?.maxAttendees - currentEvent?.attendees} spots left
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentEvent?.attendees / currentEvent?.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* RSVP Button */}
                <Button
                  variant="default"
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  onClick={() => handleRSVP(currentEvent?.id)}
                  className="mt-4"
                >
                  RSVP for Event
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-brand transition-all duration-200 hover:scale-110"
            aria-label="Previous event"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-brand transition-all duration-200 hover:scale-110"
            aria-label="Next event"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 p-4 bg-muted/50">
          {events?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-primary scale-110' :'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityEventsCarousel;