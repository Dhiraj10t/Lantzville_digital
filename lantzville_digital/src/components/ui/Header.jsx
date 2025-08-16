import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  const navigationItems = [
    {
      name: 'Community Dashboard',
      href: '/community-dashboard-homepage',
      icon: 'Home',
      description: 'Your community hub'
    },
    {
      name: 'Resident Services',
      href: '/resident-services-hub',
      icon: 'Users',
      description: 'Municipal services'
    },
    {
      name: 'Council & Governance',
      href: '/council-governance-transparency-center',
      icon: 'Building2',
      description: 'Transparency center'
    },
    {
      name: 'Community Events',
      href: '/community-life-events',
      icon: 'Calendar',
      description: 'Local happenings'
    },
    {
      name: 'Service Requests',
      href: '/service-request-portal',
      icon: 'FileText',
      description: 'Submit requests'
    }
  ];

  const emergencyItem = {
    name: 'Emergency Info',
    href: '/emergency-information-safety-hub',
    icon: 'AlertTriangle',
    description: 'Safety resources'
  };

  const isActiveRoute = (href) => {
    return location?.pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        isScrolled ? 'shadow-brand' : ''
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a 
              href="/community-dashboard-homepage" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
              aria-label="Lantzville Digital Home"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-coastal rounded-lg flex items-center justify-center shadow-brand">
                  <Icon name="Waves" size={24} color="white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground tracking-tight">
                  Lantzville Digital
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Your Community Hub
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <a
                key={item?.href}
                href={item?.href}
                className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted ${
                  isActiveRoute(item?.href)
                    ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={isActiveRoute(item?.href) ? 'page' : undefined}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    className={`transition-colors duration-200 ${
                      isActiveRoute(item?.href) ? 'text-primary' : 'text-current'
                    }`}
                  />
                  <span>{item?.name}</span>
                </div>
                {isActiveRoute(item?.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Emergency & Actions */}
          <div className="flex items-center space-x-3">
            {/* Emergency Button - Always Visible */}
            <a
              href={emergencyItem?.href}
              className={`hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActiveRoute(emergencyItem?.href)
                  ? 'bg-destructive text-destructive-foreground'
                  : 'bg-destructive/10 text-destructive hover:bg-destructive/20'
              }`}
              aria-current={isActiveRoute(emergencyItem?.href) ? 'page' : undefined}
            >
              <Icon name={emergencyItem?.icon} size={16} />
              <span className="hidden md:inline">Emergency</span>
            </a>

            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              iconName="Search"
              iconSize={18}
              aria-label="Search"
            >
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              iconSize={20}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white/98 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <a
                  key={item?.href}
                  href={item?.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActiveRoute(item?.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  aria-current={isActiveRoute(item?.href) ? 'page' : undefined}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item?.name}</div>
                    <div className={`text-xs ${
                      isActiveRoute(item?.href) 
                        ? 'text-primary-foreground/80' 
                        : 'text-muted-foreground'
                    }`}>
                      {item?.description}
                    </div>
                  </div>
                </a>
              ))}
              
              {/* Emergency Item in Mobile */}
              <a
                href={emergencyItem?.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActiveRoute(emergencyItem?.href)
                    ? 'bg-destructive text-destructive-foreground'
                    : 'bg-destructive/10 text-destructive hover:bg-destructive/20'
                }`}
                aria-current={isActiveRoute(emergencyItem?.href) ? 'page' : undefined}
              >
                <Icon 
                  name={emergencyItem?.icon} 
                  size={18} 
                  className="flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="font-medium">{emergencyItem?.name}</div>
                  <div className={`text-xs ${
                    isActiveRoute(emergencyItem?.href) 
                      ? 'text-destructive-foreground/80' 
                      : 'text-destructive/80'
                  }`}>
                    {emergencyItem?.description}
                  </div>
                </div>
              </a>

              {/* Mobile Search */}
              <div className="pt-2 border-t border-border mt-4">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Search"
                  iconPosition="left"
                  className="justify-start"
                >
                  Search Lantzville Digital
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;