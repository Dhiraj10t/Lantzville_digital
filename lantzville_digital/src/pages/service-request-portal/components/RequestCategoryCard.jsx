import React from 'react';
import Icon from '../../../components/AppIcon';

const RequestCategoryCard = ({ category, onClick, isSelected = false }) => {
  return (
    <div
      onClick={() => onClick(category)}
      className={`coastal-card cursor-pointer transition-all duration-300 hover:scale-105 ${
        isSelected 
          ? 'ring-2 ring-primary bg-primary/5 border-primary' :'hover:shadow-elevated'
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          isSelected 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-gradient-coastal text-white'
        }`}>
          <Icon name={category?.icon} size={28} strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground mb-2">
            {category?.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {category?.description}
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Clock" size={14} />
          <span>Response: {category?.responseTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RequestCategoryCard;