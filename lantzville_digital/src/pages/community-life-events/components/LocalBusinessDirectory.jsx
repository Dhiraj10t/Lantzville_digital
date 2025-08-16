import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocalBusinessDirectory = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const businesses = [
    {
      id: 1,
      name: "Coastal Coffee Roasters",
      category: "Food & Beverage",
      address: "7195 Lantzville Rd, Lantzville, BC",
      phone: "(250) 390-2233",
      email: "hello@coastalcoffee.ca",
      website: "www.coastalcoffee.ca",
      hours: "Mon-Fri: 6:30 AM - 6:00 PM, Sat-Sun: 7:00 AM - 5:00 PM",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviewCount: 127,
      description: `Local coffee roastery serving freshly roasted beans and artisanal beverages. \nFamily-owned business supporting local farmers and sustainable practices. \nCozy atmosphere perfect for meetings or quiet work sessions.`,
      specialOffer: "10% off for municipal employees",
      services: ["Fresh Roasted Coffee", "Pastries", "WiFi", "Meeting Space", "Catering"],
      featured: true,
      socialMedia: {
        facebook: "coastalcoffeeroasters",
        instagram: "coastalcoffee_bc"
      }
    },
    {
      id: 2,
      name: "Lantzville Hardware & Garden",
      category: "Retail",
      address: "7201 Lantzville Rd, Lantzville, BC",
      phone: "(250) 390-4455",
      email: "info@lantzvillehardware.com",
      website: "www.lantzvillehardware.com",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviewCount: 89,
      description: `Your local hardware store with everything for home and garden projects. \nKnowledgeable staff ready to help with advice and solutions. \nSupporting the community for over 25 years.`,
      specialOffer: "Free delivery for orders over $50",
      services: ["Hardware", "Garden Supplies", "Tool Rental", "Key Cutting", "Paint Mixing"],
      featured: false,
      socialMedia: {
        facebook: "lantzvillehardware"
      }
    },
    {
      id: 3,
      name: "Seaside Wellness Clinic",
      category: "Health & Wellness",
      address: "7188 Lantzville Rd, Lantzville, BC",
      phone: "(250) 390-3377",
      email: "appointments@seasidewellness.ca",
      website: "www.seasidewellness.ca",
      hours: "Mon-Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 3:00 PM",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviewCount: 156,
      description: `Comprehensive wellness services including massage therapy, physiotherapy, and naturopathy. \nExperienced practitioners focused on holistic health approaches. \nAccepting new patients and most insurance plans.`,
      specialOffer: "First consultation 20% off",
      services: ["Massage Therapy", "Physiotherapy", "Naturopathy", "Acupuncture", "Wellness Coaching"],
      featured: true,
      socialMedia: {
        facebook: "seasidewellnessbc",
        instagram: "seasidewellness"
      }
    },
    {
      id: 4,
      name: "Ocean View Auto Service",
      category: "Automotive",
      address: "7210 Lantzville Rd, Lantzville, BC",
      phone: "(250) 390-5566",
      email: "service@oceanviewauto.ca",
      website: "www.oceanviewauto.ca",
      hours: "Mon-Fri: 7:30 AM - 5:30 PM, Sat: 8:00 AM - 2:00 PM",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviewCount: 94,
      description: `Full-service automotive repair and maintenance facility. \nCertified technicians using the latest diagnostic equipment. \nHonest service with transparent pricing and warranties.`,
      specialOffer: "Free multi-point inspection with oil change",
      services: ["Oil Changes", "Brake Service", "Engine Repair", "Tire Service", "Diagnostics"],
      featured: false,
      socialMedia: {
        facebook: "oceanviewautoservice"
      }
    },
    {
      id: 5,
      name: "Artisan Bakery & Deli",
      category: "Food & Beverage",
      address: "7192 Lantzville Rd, Lantzville, BC",
      phone: "(250) 390-2244",
      email: "orders@artisanbakery.ca",
      website: "www.artisanbakery.ca",
      hours: "Tue-Sat: 7:00 AM - 3:00 PM, Sun: 8:00 AM - 2:00 PM",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviewCount: 203,
      description: `Fresh baked goods made daily using traditional methods and local ingredients. \nSpecializing in sourdough breads, pastries, and custom cakes. \nCatering available for events and special occasions.`,
      specialOffer: "Buy 6 muffins, get 2 free",
      services: ["Fresh Bread", "Pastries", "Custom Cakes", "Sandwiches", "Catering"],
      featured: true,
      socialMedia: {
        facebook: "artisanbakerylantzville",
        instagram: "artisan_bakery_bc"
      }
    },
    {
      id: 6,
      name: "Coastal Fitness Studio",
      category: "Health & Wellness",
      address: "7205 Lantzville Rd, Lantzville, BC",
      phone: "(250) 390-4488",
      email: "info@coastalfitness.ca",
      website: "www.coastalfitness.ca",
      hours: "Mon-Fri: 5:30 AM - 9:00 PM, Sat-Sun: 7:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      reviewCount: 78,
      description: `Modern fitness facility with state-of-the-art equipment and group classes. \nPersonal training available with certified trainers. \nWelcoming environment for all fitness levels.`,
      specialOffer: "First month membership 50% off",
      services: ["Gym Equipment", "Group Classes", "Personal Training", "Yoga", "Nutrition Counseling"],
      featured: false,
      socialMedia: {
        facebook: "coastalfitnessbc",
        instagram: "coastalfitnessstudio"
      }
    }
  ];

  const categories = ["All", "Food & Beverage", "Retail", "Health & Wellness", "Automotive", "Services", "Professional"];

  const filteredBusinesses = businesses?.filter(business => {
    const categoryMatch = selectedCategory === "All" || business?.category === selectedCategory;
    const searchMatch = searchTerm === "" || 
      business?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      business?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      business?.services?.some(service => service?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredBusinesses = businesses?.filter(business => business?.featured);

  const getCategoryColor = (category) => {
    const colors = {
      "Food & Beverage": "bg-orange-100 text-orange-800",
      "Retail": "bg-blue-100 text-blue-800",
      "Health & Wellness": "bg-green-100 text-green-800",
      "Automotive": "bg-red-100 text-red-800",
      "Services": "bg-purple-100 text-purple-800",
      "Professional": "bg-indigo-100 text-indigo-800"
    };
    return colors?.[category] || "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars?.push(<Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars?.push(<Icon key="half" name="Star" size={16} className="text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars?.push(<Icon key={`empty-${i}`} name="Star" size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Local Business Directory</h2>
          <p className="text-muted-foreground">Supporting our community businesses</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" iconName="Plus" iconPosition="left">
            Add Business
          </Button>
          <Button variant="default" iconName="MapPin" iconPosition="left">
            View Map
          </Button>
        </div>
      </div>
      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search businesses, services, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
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
      </div>
      {/* Featured Businesses */}
      {selectedCategory === "All" && searchTerm === "" && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Star" size={20} className="mr-2 text-yellow-500" />
            Featured Businesses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBusinesses?.map((business) => (
              <div
                key={business?.id}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-lg p-4 cursor-pointer hover:shadow-elevated transition-all duration-300"
                onClick={() => setSelectedBusiness(business)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{business?.name}</h4>
                  <div className="flex items-center">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{business?.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{business?.category}</p>
                <div className="bg-accent/20 text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                  {business?.specialOffer}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Business Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBusinesses?.map((business) => (
          <div
            key={business?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedBusiness(business)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={business?.image}
                alt={business?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(business?.category)}`}>
                  {business?.category}
                </span>
              </div>
              {business?.featured && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-md text-xs font-medium">
                  Featured
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {business?.name}
                </h3>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex items-center mr-2">
                  {renderStars(business?.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({business?.reviewCount} reviews)
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span className="truncate">{business?.address}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>{business?.phone}</span>
                </div>
              </div>

              {business?.specialOffer && (
                <div className="bg-accent/10 text-accent-foreground px-3 py-2 rounded-lg text-sm font-medium mb-4">
                  <Icon name="Tag" size={16} className="inline mr-1" />
                  {business?.specialOffer}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {business?.services?.length} services
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredBusinesses?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No businesses found</h3>
          <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
        </div>
      )}
      {/* Business Details Modal */}
      {selectedBusiness && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedBusiness?.image}
                alt={selectedBusiness?.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedBusiness(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
              {selectedBusiness?.featured && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-md text-sm font-medium">
                  Featured Business
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">
                      {selectedBusiness?.name}
                    </h2>
                    <span className={`px-3 py-1 rounded-md text-sm font-medium ${getCategoryColor(selectedBusiness?.category)}`}>
                      {selectedBusiness?.category}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-3">
                      {renderStars(selectedBusiness?.rating)}
                    </div>
                    <span className="text-muted-foreground">
                      {selectedBusiness?.rating} ({selectedBusiness?.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="MapPin" size={18} className="mr-3" />
                      <span>{selectedBusiness?.address}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Phone" size={18} className="mr-3" />
                      <span>{selectedBusiness?.phone}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Mail" size={18} className="mr-3" />
                      <span>{selectedBusiness?.email}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Globe" size={18} className="mr-3" />
                      <span>{selectedBusiness?.website}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Clock" size={18} className="mr-3" />
                      <span>{selectedBusiness?.hours}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Services</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedBusiness?.services?.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {selectedBusiness?.socialMedia && (
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Follow Us</h4>
                      <div className="flex space-x-2">
                        {selectedBusiness?.socialMedia?.facebook && (
                          <Button size="sm" variant="outline" iconName="Facebook">
                            Facebook
                          </Button>
                        )}
                        {selectedBusiness?.socialMedia?.instagram && (
                          <Button size="sm" variant="outline" iconName="Instagram">
                            Instagram
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">About</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedBusiness?.description}
                </p>
              </div>

              {selectedBusiness?.specialOffer && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Icon name="Tag" size={20} className="mr-2 text-accent" />
                    <h3 className="font-semibold text-accent-foreground">Special Offer</h3>
                  </div>
                  <p className="text-accent-foreground">{selectedBusiness?.specialOffer}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" fullWidth iconName="Phone" iconPosition="left">
                  Call Business
                </Button>
                <Button variant="outline" iconName="Navigation" iconPosition="left">
                  Get Directions
                </Button>
                <Button variant="outline" iconName="Globe" iconPosition="left">
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalBusinessDirectory;