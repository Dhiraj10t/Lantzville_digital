import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunityResiliencePrograms = ({ programs }) => {
  const getProgramIcon = (type) => {
    switch (type) {
      case 'training':
        return 'GraduationCap';
      case 'volunteer':
        return 'Heart';
      case 'network':
        return 'Users';
      case 'education':
        return 'BookOpen';
      case 'drill':
        return 'Target';
      default:
        return 'Shield';
    }
  };

  const getProgramColor = (type) => {
    switch (type) {
      case 'training':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'volunteer':
        return 'text-success bg-success/10 border-success/20';
      case 'network':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'education':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'drill':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Community Resilience Programs
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our community preparedness initiatives and help build a more resilient Lantzville. 
          Together, we can strengthen our neighborhood networks and emergency response capabilities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs?.map((program) => (
          <div key={program?.id} className="coastal-card group">
            {/* Program Image */}
            <div className="relative overflow-hidden rounded-lg mb-4" style={{ height: '200px' }}>
              <Image
                src={program?.image}
                alt={program?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium ${getProgramColor(program?.type)}`}>
                  <Icon name={getProgramIcon(program?.type)} size={12} />
                  <span className="capitalize">{program?.type}</span>
                </span>
              </div>
              {program?.featured && (
                <div className="absolute top-3 right-3">
                  <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>

            {/* Program Content */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {program?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {program?.description}
                </p>
              </div>

              {/* Program Details */}
              <div className="space-y-2">
                {program?.schedule && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Calendar" size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{program?.schedule}</span>
                  </div>
                )}
                {program?.location && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="MapPin" size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{program?.location}</span>
                  </div>
                )}
                {program?.duration && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{program?.duration}</span>
                  </div>
                )}
                {program?.participants && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Users" size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {program?.participants?.current}/{program?.participants?.max} participants
                    </span>
                  </div>
                )}
              </div>

              {/* Program Features */}
              {program?.features && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {program?.features?.slice(0, 3)?.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={12} className="text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {program?.requirements && (
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="text-sm font-medium text-foreground mb-1">Requirements:</h4>
                  <p className="text-xs text-muted-foreground">{program?.requirements}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant={program?.available ? "default" : "outline"}
                  size="sm"
                  fullWidth
                  disabled={!program?.available}
                  iconName={program?.available ? "UserPlus" : "Clock"}
                  iconPosition="left"
                  iconSize={16}
                >
                  {program?.available ? "Join Program" : "Waitlist"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  iconName="Info"
                  iconPosition="left"
                  iconSize={16}
                >
                  Learn More
                </Button>
              </div>

              {/* Program Stats */}
              {program?.stats && (
                <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span>{program?.stats?.completed} completed</span>
                  <span>{program?.stats?.rating}★ rating</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-gradient-coastal rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-3">
          Ready to Make a Difference?
        </h3>
        <p className="mb-6 opacity-90">
          Join our community resilience network and help build a safer, more prepared Lantzville.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="outline"
            className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
            iconName="Users"
            iconPosition="left"
            iconSize={16}
          >
            Volunteer Today
          </Button>
          <Button
            variant="outline"
            className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
            iconName="Calendar"
            iconPosition="left"
            iconSize={16}
          >
            View All Programs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityResiliencePrograms;