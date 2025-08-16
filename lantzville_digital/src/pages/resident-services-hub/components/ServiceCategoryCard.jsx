import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceCategoryCard = ({ category, onClick }) => {
  return (
    <div 
      onClick={() => onClick(category)}
      className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${category?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
          <Icon 
            name={category?.icon} 
            size={24} 
            className={category?.iconColor}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {category?.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {category?.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {category?.services?.slice(0, 3)?.map((service, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
              >
                {service}
              </span>
            ))}
            {category?.services?.length > 3 && (
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                +{category?.services?.length - 3} more
              </span>
            )}
          </div>
        </div>
        <Icon 
          name="ChevronRight" 
          size={20} 
          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default ServiceCategoryCard;