import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const PreparednessChecklist = ({ checklists }) => {
  const [activeChecklist, setActiveChecklist] = useState(checklists?.[0]);
  const [checkedItems, setCheckedItems] = useState({});

  const handleItemCheck = (checklistId, itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [`${checklistId}-${itemId}`]: !prev?.[`${checklistId}-${itemId}`]
    }));
  };

  const getCompletionPercentage = (checklist) => {
    const totalItems = checklist?.items?.length;
    const completedItems = checklist?.items?.filter(item => 
      checkedItems?.[`${checklist?.id}-${item?.id}`]
    )?.length;
    return Math.round((completedItems / totalItems) * 100);
  };

  const getChecklistIcon = (type) => {
    switch (type) {
      case 'home':
        return 'Home';
      case 'family':
        return 'Users';
      case 'seasonal':
        return 'Calendar';
      case 'pet':
        return 'Heart';
      case 'vehicle':
        return 'Car';
      default:
        return 'CheckSquare';
    }
  };

  return (
    <div className="coastal-card">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Checklist Navigation */}
        <div className="lg:w-1/3">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Emergency Preparedness
          </h3>
          <div className="space-y-2">
            {checklists?.map((checklist) => {
              const completion = getCompletionPercentage(checklist);
              return (
                <div
                  key={checklist?.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    activeChecklist?.id === checklist?.id
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveChecklist(checklist)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon 
                      name={getChecklistIcon(checklist?.type)} 
                      size={20} 
                      className="text-primary"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">
                        {checklist?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {checklist?.description}
                      </p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{completion}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="progress-fill h-2 rounded-full transition-all duration-500"
                        style={{ width: `${completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-medium text-foreground mb-2">
              Quick Actions
            </h4>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download All Lists
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Printer"
                iconPosition="left"
                iconSize={16}
              >
                Print Checklist
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Share"
                iconPosition="left"
                iconSize={16}
              >
                Share with Family
              </Button>
            </div>
          </div>
        </div>

        {/* Active Checklist */}
        <div className="lg:w-2/3">
          {activeChecklist && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {activeChecklist?.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeChecklist?.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {getCompletionPercentage(activeChecklist)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Complete
                  </div>
                </div>
              </div>

              {activeChecklist?.categories?.map((category) => (
                <div key={category?.id} className="mb-6">
                  <h4 className="text-lg font-medium text-foreground mb-3 flex items-center space-x-2">
                    <Icon name={category?.icon} size={20} className="text-primary" />
                    <span>{category?.name}</span>
                  </h4>
                  <div className="space-y-3">
                    {category?.items?.map((item) => (
                      <div 
                        key={item?.id}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                      >
                        <Checkbox
                          checked={checkedItems?.[`${activeChecklist?.id}-${item?.id}`] || false}
                          onChange={() => handleItemCheck(activeChecklist?.id, item?.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h5 className="font-medium text-foreground">
                                {item?.name}
                              </h5>
                              <p className="text-sm text-muted-foreground mt-1">
                                {item?.description}
                              </p>
                              {item?.quantity && (
                                <div className="flex items-center space-x-1 mt-2">
                                  <Icon name="Package" size={12} className="text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">
                                    Recommended: {item?.quantity}
                                  </span>
                                </div>
                              )}
                            </div>
                            {item?.priority === 'high' && (
                              <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded-full">
                                Essential
                              </span>
                            )}
                          </div>
                          {item?.tips && (
                            <div className="mt-2 p-2 bg-accent/10 rounded text-xs text-accent-foreground">
                              <Icon name="Lightbulb" size={12} className="inline mr-1" />
                              {item?.tips}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )) || (
                <div className="space-y-3">
                  {activeChecklist?.items?.map((item) => (
                    <div 
                      key={item?.id}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <Checkbox
                        checked={checkedItems?.[`${activeChecklist?.id}-${item?.id}`] || false}
                        onChange={() => handleItemCheck(activeChecklist?.id, item?.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">
                          {item?.name}
                        </h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreparednessChecklist;