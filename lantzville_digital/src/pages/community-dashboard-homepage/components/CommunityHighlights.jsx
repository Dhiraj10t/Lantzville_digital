import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityHighlights = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      id: 1,
      type: "council",
      title: "New Waterfront Park Development Approved",
      summary: "Council unanimously approved the $2.3M waterfront park project, featuring accessible walkways, playground equipment, and native plant gardens. Construction begins September 2025.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      date: "Aug 12, 2025",
      readTime: "3 min read",
      category: "Municipal Decision",
      route: "/council-governance-transparency-center"
    },
    {
      id: 2,
      type: "resident",
      title: "Local Artist Sarah Chen Wins Provincial Award",
      summary: "Lantzville resident Sarah Chen received the BC Arts Council\'s Emerging Artist Award for her coastal-inspired sculpture series. Her work will be featured in the new community center.",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=400&h=250&fit=crop",
      date: "Aug 10, 2025",
      readTime: "2 min read",
      category: "Resident Spotlight",
      route: "/community-life-events"
    },
    {
      id: 3,
      type: "business",
      title: "Coastal Coffee Co. Celebrates 10 Years",
      summary: "Local favorite Coastal Coffee Co. marks a decade of serving the community with fair-trade coffee and homemade pastries. Special anniversary events planned throughout August.",
      image: "https://images.pixabay.com/photo/2017/07/31/11/22/coffee-2557980_1280.jpg?w=400&h=250&fit=crop",
      date: "Aug 8, 2025",
      readTime: "2 min read",
      category: "Local Business",
      route: "/community-life-events"
    }
  ];

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'council': return 'Building2';
      case 'resident': return 'User';
      case 'business': return 'Store';
      default: return 'Info';
    }
  };

  const getCategoryColor = (type) => {
    switch (type) {
      case 'council': return 'text-primary bg-primary/10';
      case 'resident': return 'text-secondary bg-secondary/10';
      case 'business': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Community Highlights</h2>
        <Button 
          variant="ghost" 
          iconName="ExternalLink" 
          iconSize={18}
          onClick={() => navigate('/community-life-events')}
        >
          View All News
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {highlights?.map((highlight) => (
          <article
            key={highlight?.id}
            className="coastal-card hover:shadow-elevated cursor-pointer group"
            onClick={() => navigate(highlight?.route)}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={highlight?.image}
                alt={highlight?.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(highlight?.type)}`}>
                  <Icon name={getCategoryIcon(highlight?.type)} size={12} className="mr-1" />
                  {highlight?.category}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                {highlight?.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {highlight?.summary}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={12} className="mr-1" />
                    {highlight?.date}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {highlight?.readTime}
                  </span>
                </div>
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" 
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;