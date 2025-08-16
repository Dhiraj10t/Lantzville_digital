import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "2025-08-22",
      time: "6:00 PM - 10:00 PM",
      location: "Lantzville Community Park",
      category: "Festival",
      description: "Join us for an evening of live music featuring local artists and food vendors.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 156,
      maxCapacity: 300,
      price: "Free",
      organizer: "Lantzville Cultural Committee"
    },
    {
      id: 2,
      title: "Community Cleanup Day",
      date: "2025-08-18",
      time: "9:00 AM - 12:00 PM",
      location: "Various Locations",
      category: "Community Service",
      description: "Help keep Lantzville beautiful! Supplies provided, refreshments included.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/adult-1867743_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      attendees: 89,
      maxCapacity: 150,
      price: "Free",
      organizer: "Environmental Committee"
    },
    {
      id: 3,
      title: "Seniors Fitness Class",
      date: "2025-08-16",
      time: "10:00 AM - 11:00 AM",
      location: "Community Center",
      category: "Recreation",
      description: "Low-impact fitness class designed for seniors. All fitness levels welcome.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=compress&cs=tinysrgb&w=800",
      attendees: 24,
      maxCapacity: 30,
      price: "$5",
      organizer: "Recreation Department"
    },
    {
      id: 4,
      title: "Youth Soccer Registration",
      date: "2025-08-20",
      time: "6:00 PM - 8:00 PM",
      location: "Sports Complex",
      category: "Sports",
      description: "Registration for fall youth soccer league. Ages 6-16 welcome.",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 67,
      maxCapacity: 100,
      price: "$45",
      organizer: "Youth Sports Association"
    },
    {
      id: 5,
      title: "Council Meeting",
      date: "2025-08-25",
      time: "7:00 PM - 9:00 PM",
      location: "Municipal Hall",
      category: "Government",
      description: "Monthly council meeting open to all residents. Public comment period included.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=compress&cs=tinysrgb&w=800",
      attendees: 32,
      maxCapacity: 80,
      price: "Free",
      organizer: "Municipal Council"
    }
  ];

  const categories = ["All", "Festival", "Community Service", "Recreation", "Sports", "Government"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events?.filter(event => event?.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      "Festival": "bg-purple-100 text-purple-800",
      "Community Service": "bg-green-100 text-green-800",
      "Recreation": "bg-blue-100 text-blue-800",
      "Sports": "bg-orange-100 text-orange-800",
      "Government": "bg-gray-100 text-gray-800"
    };
    return colors?.[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isUpcoming = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Events</h2>
          <p className="text-muted-foreground">Discover what's happening in Lantzville</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" iconName="Calendar" iconPosition="left">
            Add to Calendar
          </Button>
          <Button variant="default" iconName="Plus" iconPosition="left">
            Submit Event
          </Button>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents?.map((event) => (
          <div
            key={event?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={event?.image}
                alt={event?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(event?.category)}`}>
                  {event?.category}
                </span>
              </div>
              {!isUpcoming(event?.date) && (
                <div className="absolute top-3 right-3 bg-gray-800/80 text-white px-2 py-1 rounded-md text-xs">
                  Past Event
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {event?.title}
                </h3>
                <span className="text-primary font-medium text-sm ml-2">
                  {event?.price}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {formatDate(event?.date)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} className="mr-2" />
                  {event?.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  {event?.location}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {event?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Users" size={16} className="mr-1" />
                  {event?.attendees}/{event?.maxCapacity}
                </div>
                <Button 
                  size="sm" 
                  variant={isUpcoming(event?.date) ? "default" : "outline"}
                  disabled={!isUpcoming(event?.date)}
                >
                  {isUpcoming(event?.date) ? "Register" : "View Details"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent?.image}
                alt={selectedEvent?.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {selectedEvent?.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-md text-sm font-medium ${getCategoryColor(selectedEvent?.category)}`}>
                    {selectedEvent?.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {selectedEvent?.price}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Calendar" size={18} className="mr-3" />
                    <span>{formatDate(selectedEvent?.date)}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Clock" size={18} className="mr-3" />
                    <span>{selectedEvent?.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="MapPin" size={18} className="mr-3" />
                    <span>{selectedEvent?.location}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Users" size={18} className="mr-3" />
                    <span>{selectedEvent?.attendees} registered / {selectedEvent?.maxCapacity} capacity</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="User" size={18} className="mr-3" />
                    <span>{selectedEvent?.organizer}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent?.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {isUpcoming(selectedEvent?.date) ? (
                  <>
                    <Button variant="default" fullWidth iconName="UserPlus" iconPosition="left">
                      Register for Event
                    </Button>
                    <Button variant="outline" iconName="Calendar" iconPosition="left">
                      Add to Calendar
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" fullWidth iconName="Eye" iconPosition="left">
                    View Event Photos
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;