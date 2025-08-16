import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const PredictiveSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const searchData = [
    { title: "Pay Property Taxes", route: "/resident-services-hub", category: "Services", icon: "CreditCard" },
    { title: "Report Pothole", route: "/service-request-portal", category: "Report Issue", icon: "AlertCircle" },
    { title: "Book Community Center", route: "/resident-services-hub", category: "Facilities", icon: "MapPin" },
    { title: "Council Meeting Minutes", route: "/council-governance-transparency-center", category: "Governance", icon: "FileText" },
    { title: "Upcoming Events", route: "/community-life-events", category: "Events", icon: "Calendar" },
    { title: "Emergency Contacts", route: "/emergency-information-safety-hub", category: "Emergency", icon: "Phone" },
    { title: "Building Permits", route: "/resident-services-hub", category: "Permits", icon: "Home" },
    { title: "Water Bill Payment", route: "/resident-services-hub", category: "Utilities", icon: "Droplets" },
    { title: "Park Reservations", route: "/resident-services-hub", category: "Recreation", icon: "Trees" },
    { title: "Garbage Collection Schedule", route: "/resident-services-hub", category: "Services", icon: "Trash2" },
    { title: "Business License", route: "/resident-services-hub", category: "Business", icon: "Briefcase" },
    { title: "Community Programs", route: "/community-life-events", category: "Programs", icon: "Users" }
  ];

  const popularSearches = [
    "Property taxes", "Council meetings", "Community events", "Report issue", "Emergency info"
  ];

  useEffect(() => {
    if (searchQuery?.length > 0) {
      const filtered = searchData?.filter(item =>
        item?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        item?.category?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      )?.slice(0, 6);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e?.target?.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery('');
    setIsOpen(false);
    navigate(suggestion?.route);
  };

  const handlePopularSearchClick = (search) => {
    setSearchQuery(search);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e?.key) {
      case 'ArrowDown':
        e?.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions?.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e?.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e?.preventDefault();
        if (selectedIndex >= 0 && suggestions?.[selectedIndex]) {
          handleSuggestionClick(suggestions?.[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      navigate(`/resident-services-hub?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div className="mb-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Input
              ref={searchRef}
              type="search"
              placeholder="Search services, pay bills, report issues..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-border focus:border-primary shadow-brand"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Icon name="Search" size={20} className="text-muted-foreground" />
            </div>
          </div>

          {/* Search Suggestions Dropdown */}
          {isOpen && suggestions?.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-elevated z-50 max-h-80 overflow-y-auto">
              {suggestions?.map((suggestion, index) => (
                <div
                  key={`${suggestion?.route}-${index}`}
                  className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-colors duration-150 ${
                    index === selectedIndex 
                      ? 'bg-primary/10 text-primary' :'hover:bg-muted text-foreground'
                  } ${index === 0 ? 'rounded-t-xl' : ''} ${index === suggestions?.length - 1 ? 'rounded-b-xl' : ''}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className={`p-2 rounded-lg ${
                    index === selectedIndex ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <Icon name={suggestion?.icon} size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{suggestion?.title}</div>
                    <div className="text-sm text-muted-foreground">{suggestion?.category}</div>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Popular Searches */}
        {!isOpen && (
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches?.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handlePopularSearchClick(search)}
                  className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-full transition-colors duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictiveSearchBar;