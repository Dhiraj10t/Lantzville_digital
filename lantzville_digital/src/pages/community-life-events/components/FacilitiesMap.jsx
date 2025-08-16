import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FacilitiesMap = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'

  const facilities = [
    {
      id: 1,
      name: "Lantzville Community Center",
      type: "Community Center",
      address: "7192 Lantzville Rd, Lantzville, BC",
      coordinates: { lat: 49.2827, lng: -124.0759 },
      amenities: ["Meeting Rooms", "Kitchen", "Stage", "Parking", "Wheelchair Accessible"],
      hours: "Mon-Fri: 8:00 AM - 10:00 PM, Sat-Sun: 9:00 AM - 9:00 PM",
      phone: "(250) 390-4006",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=compress&cs=tinysrgb&w=800",
      availability: "Available",
      bookingRequired: true,
      description: "Main community gathering space with flexible rooms for events, meetings, and celebrations."
    },
    {
      id: 2,
      name: "Kin Hut Park",
      type: "Park",
      address: "Kin Hut Rd, Lantzville, BC",
      coordinates: { lat: 49.2845, lng: -124.0823 },
      amenities: ["Playground", "Picnic Tables", "Walking Trails", "Beach Access", "Parking"],
      hours: "Dawn to Dusk",
      phone: "(250) 390-4006",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      availability: "Open",
      bookingRequired: false,
      description: "Beautiful waterfront park with playground facilities and beach access for families."
    },
    {
      id: 3,
      name: "Lantzville Sports Complex",
      type: "Sports Facility",
      address: "7192 Lantzville Rd, Lantzville, BC",
      coordinates: { lat: 49.2831, lng: -124.0765 },
      amenities: ["Soccer Fields", "Baseball Diamond", "Tennis Courts", "Concession", "Parking"],
      hours: "6:00 AM - 10:00 PM",
      phone: "(250) 390-4006",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      availability: "Available",
      bookingRequired: true,
      description: "Multi-sport facility hosting youth and adult leagues, tournaments, and recreational activities."
    },
    {
      id: 4,
      name: "Huddlestone Pond Trail",
      type: "Trail",
      address: "Huddlestone Rd, Lantzville, BC",
      coordinates: { lat: 49.2798, lng: -124.0712 },
      amenities: ["Walking Trail", "Wildlife Viewing", "Benches", "Interpretive Signs"],
      hours: "Dawn to Dusk",
      phone: "(250) 390-4006",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=compress&cs=tinysrgb&w=800",
      availability: "Open",
      bookingRequired: false,
      description: "Peaceful nature trail around Huddlestone Pond with excellent bird watching opportunities."
    },
    {
      id: 5,
      name: "Lantzville Library",
      type: "Library",
      address: "7192 Lantzville Rd, Lantzville, BC",
      coordinates: { lat: 49.2829, lng: -124.0761 },
      amenities: ["Books", "Computers", "WiFi", "Study Areas", "Programs", "Wheelchair Accessible"],
      hours: "Tue-Thu: 10:00 AM - 8:00 PM, Fri-Sat: 10:00 AM - 5:00 PM",
      phone: "(250) 390-3092",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      availability: "Open",
      bookingRequired: false,
      description: "Community library offering books, digital resources, and educational programs for all ages."
    }
  ];

  const facilityTypes = ["All", "Community Center", "Park", "Sports Facility", "Trail", "Library"];
  const [selectedType, setSelectedType] = useState("All");

  const filteredFacilities = selectedType === "All" 
    ? facilities 
    : facilities?.filter(facility => facility?.type === selectedType);

  const getTypeColor = (type) => {
    const colors = {
      "Community Center": "bg-blue-100 text-blue-800",
      "Park": "bg-green-100 text-green-800",
      "Sports Facility": "bg-orange-100 text-orange-800",
      "Trail": "bg-purple-100 text-purple-800",
      "Library": "bg-indigo-100 text-indigo-800"
    };
    return colors?.[type] || "bg-gray-100 text-gray-800";
  };

  const getAvailabilityColor = (availability) => {
    return availability === "Available" || availability === "Open" ?"bg-green-100 text-green-800" :"bg-red-100 text-red-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Facilities</h2>
          <p className="text-muted-foreground">Explore parks, centers, and recreational spaces</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                viewMode === 'map' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Map" size={16} className="mr-1" />
              Map
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                viewMode === 'list' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="List" size={16} className="mr-1" />
              List
            </button>
          </div>
          <Button variant="outline" iconName="Navigation" iconPosition="left">
            Get Directions
          </Button>
        </div>
      </div>
      {/* Type Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {facilityTypes?.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedType === type
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      {viewMode === 'map' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Lantzville Community Facilities"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=49.2827,-124.0759&z=14&output=embed"
                className="rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-medium text-foreground mb-2">Legend</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Community Centers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Parks & Trails</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span>Sports Facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facility List Sidebar */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Nearby Facilities</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {filteredFacilities?.map((facility) => (
                <div
                  key={facility?.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedFacility?.id === facility?.id
                      ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedFacility(facility)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm">{facility?.name}</h4>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getAvailabilityColor(facility?.availability)}`}>
                      {facility?.availability}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Icon name="MapPin" size={12} className="mr-1" />
                    <span className="truncate">{facility?.address}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(facility?.type)}`}>
                    {facility?.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities?.map((facility) => (
            <div
              key={facility?.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFacility(facility)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility?.image}
                  alt={facility?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(facility?.type)}`}>
                    {facility?.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getAvailabilityColor(facility?.availability)}`}>
                    {facility?.availability}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {facility?.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span className="truncate">{facility?.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="truncate">{facility?.hours}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Phone" size={16} className="mr-2" />
                    <span>{facility?.phone}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {facility?.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {facility?.amenities?.length} amenities
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>)
      )}
      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedFacility?.image}
                alt={selectedFacility?.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
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
                      {selectedFacility?.name}
                    </h2>
                    <span className={`px-3 py-1 rounded-md text-sm font-medium ${getTypeColor(selectedFacility?.type)}`}>
                      {selectedFacility?.type}
                    </span>
                    <span className={`px-3 py-1 rounded-md text-sm font-medium ${getAvailabilityColor(selectedFacility?.availability)}`}>
                      {selectedFacility?.availability}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {selectedFacility?.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="MapPin" size={18} className="mr-3" />
                      <span>{selectedFacility?.address}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Phone" size={18} className="mr-3" />
                      <span>{selectedFacility?.phone}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Clock" size={18} className="mr-3" />
                      <span>{selectedFacility?.hours}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFacility?.amenities?.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {selectedFacility?.bookingRequired ? (
                  <Button variant="default" fullWidth iconName="Calendar" iconPosition="left">
                    Book Facility
                  </Button>
                ) : (
                  <Button variant="default" fullWidth iconName="MapPin" iconPosition="left">
                    Get Directions
                  </Button>
                )}
                <Button variant="outline" iconName="Phone" iconPosition="left">
                  Call Facility
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

export default FacilitiesMap;