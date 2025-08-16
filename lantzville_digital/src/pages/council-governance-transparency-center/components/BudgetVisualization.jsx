import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BudgetVisualization = () => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const budgetOverview = {
    totalBudget: 12500000,
    year: 2025,
    lastUpdated: "2025-08-15"
  };

  const budgetCategories = [
    {
      name: 'Public Safety',
      amount: 3125000,
      percentage: 25,
      color: '#2563EB',
      icon: 'Shield',
      description: 'Fire department, emergency services, and community safety programs',
      subcategories: [
        { name: 'Fire Department', amount: 1875000 },
        { name: 'Emergency Services', amount: 750000 },
        { name: 'Safety Programs', amount: 500000 }
      ]
    },
    {
      name: 'Infrastructure',
      amount: 2500000,
      percentage: 20,
      color: '#059669',
      icon: 'Construction',
      description: 'Roads, water systems, sewage, and public facilities maintenance',
      subcategories: [
        { name: 'Road Maintenance', amount: 1250000 },
        { name: 'Water & Sewer', amount: 875000 },
        { name: 'Public Buildings', amount: 375000 }
      ]
    },
    {
      name: 'Parks & Recreation',
      amount: 1875000,
      percentage: 15,
      color: '#10B981',
      icon: 'Trees',
      description: 'Parks maintenance, recreational programs, and community events',
      subcategories: [
        { name: 'Parks Maintenance', amount: 1000000 },
        { name: 'Recreation Programs', amount: 625000 },
        { name: 'Community Events', amount: 250000 }
      ]
    },
    {
      name: 'Administration',
      amount: 1875000,
      percentage: 15,
      color: '#F59E0B',
      icon: 'Building2',
      description: 'Municipal operations, staff, and administrative services',
      subcategories: [
        { name: 'Staff Salaries', amount: 1125000 },
        { name: 'Office Operations', amount: 500000 },
        { name: 'Technology', amount: 250000 }
      ]
    },
    {
      name: 'Public Works',
      amount: 1500000,
      percentage: 12,
      color: '#8B5CF6',
      icon: 'Wrench',
      description: 'Waste management, snow removal, and municipal services',
      subcategories: [
        { name: 'Waste Management', amount: 750000 },
        { name: 'Snow Removal', amount: 500000 },
        { name: 'Equipment', amount: 250000 }
      ]
    },
    {
      name: 'Economic Development',
      amount: 875000,
      percentage: 7,
      color: '#EF4444',
      icon: 'TrendingUp',
      description: 'Business support, tourism promotion, and community growth',
      subcategories: [
        { name: 'Business Support', amount: 437500 },
        { name: 'Tourism', amount: 262500 },
        { name: 'Marketing', amount: 175000 }
      ]
    },
    {
      name: 'Other Services',
      amount: 750000,
      percentage: 6,
      color: '#6B7280',
      icon: 'MoreHorizontal',
      description: 'Library, social services, and miscellaneous programs',
      subcategories: [
        { name: 'Library Services', amount: 375000 },
        { name: 'Social Programs', amount: 250000 },
        { name: 'Miscellaneous', amount: 125000 }
      ]
    }
  ];

  const yearlyComparison = [
    { year: '2021', budget: 10800000 },
    { year: '2022', budget: 11200000 },
    { year: '2023', budget: 11800000 },
    { year: '2024', budget: 12100000 },
    { year: '2025', budget: 12500000 }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const formatLargeCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000)?.toFixed(1)}M`;
    }
    return formatCurrency(amount);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-lg">
          <p className="font-medium text-foreground">{label}</p>
          <p className="text-primary">
            {formatCurrency(payload?.[0]?.value)}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Budget Breakdown</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="amount"
                  onMouseEnter={(data) => setSelectedCategory(data?.name)}
                  onMouseLeave={() => setSelectedCategory(null)}
                >
                  {budgetCategories?.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry?.color}
                      stroke={selectedCategory === entry?.name ? '#1E293B' : 'none'}
                      strokeWidth={selectedCategory === entry?.name ? 2 : 0}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Category Details</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {budgetCategories?.map((category) => (
              <div
                key={category?.name}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                  selectedCategory === category?.name
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
                onMouseEnter={() => setSelectedCategory(category?.name)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category?.color}20` }}
                    >
                      <Icon name={category?.icon} size={16} style={{ color: category?.color }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{category?.name}</h4>
                      <p className="text-xs text-muted-foreground">{category?.percentage}% of budget</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{formatLargeCurrency(category?.amount)}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{category?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderYearlyTrend = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">5-Year Budget Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yearlyComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="year" stroke="#64748B" />
              <YAxis 
                stroke="#64748B"
                tickFormatter={(value) => formatLargeCurrency(value)}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="budget" 
                stroke="#2563EB" 
                strokeWidth={3}
                dot={{ fill: '#2563EB', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#2563EB', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <h4 className="font-medium text-foreground">Growth Rate</h4>
          </div>
          <p className="text-2xl font-bold text-primary">3.3%</p>
          <p className="text-sm text-muted-foreground">Annual average increase</p>
        </div>

        <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="DollarSign" size={20} className="text-secondary" />
            <h4 className="font-medium text-foreground">Per Resident</h4>
          </div>
          <p className="text-2xl font-bold text-secondary">$4,167</p>
          <p className="text-sm text-muted-foreground">Based on 3,000 residents</p>
        </div>

        <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={20} className="text-accent" />
            <h4 className="font-medium text-foreground">Efficiency</h4>
          </div>
          <p className="text-2xl font-bold text-accent">92%</p>
          <p className="text-sm text-muted-foreground">Budget utilization rate</p>
        </div>
      </div>
    </div>
  );

  const renderCategoryDetail = () => {
    const category = budgetCategories?.find(cat => cat?.name === selectedCategory);
    if (!category) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${category?.color}20` }}
          >
            <Icon name={category?.icon} size={24} style={{ color: category?.color }} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{category?.name}</h3>
            <p className="text-muted-foreground">{category?.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-4">Subcategory Breakdown</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={category?.subcategories} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis 
                    type="number" 
                    stroke="#64748B"
                    tickFormatter={(value) => formatLargeCurrency(value)}
                  />
                  <YAxis type="category" dataKey="name" stroke="#64748B" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="amount" fill={category?.color} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Budget Details</h4>
            {category?.subcategories?.map((sub, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="font-medium text-foreground">{sub?.name}</span>
                <span className="text-muted-foreground">{formatCurrency(sub?.amount)}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3">
              <div className="flex items-center justify-between font-semibold">
                <span className="text-foreground">Total {category?.name}</span>
                <span className="text-foreground">{formatCurrency(category?.amount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="PieChart" size={20} className="text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Municipal Budget {budgetOverview?.year}</h2>
            <p className="text-sm text-muted-foreground">
              Total Budget: {formatCurrency(budgetOverview?.totalBudget)} • Updated {budgetOverview?.lastUpdated}
            </p>
          </div>
        </div>
        <Button variant="outline" iconName="Download" iconPosition="left" size="sm">
          Download Report
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={activeView === 'overview' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveView('overview')}
        >
          Overview
        </Button>
        <Button
          variant={activeView === 'trend' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveView('trend')}
        >
          5-Year Trend
        </Button>
        {selectedCategory && (
          <Button
            variant={activeView === 'detail' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveView('detail')}
          >
            {selectedCategory} Details
          </Button>
        )}
      </div>
      {activeView === 'overview' && renderOverview()}
      {activeView === 'trend' && renderYearlyTrend()}
      {activeView === 'detail' && renderCategoryDetail()}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Understanding Your Tax Dollars</h4>
            <p className="text-sm text-muted-foreground mb-2">
              This budget visualization shows how your municipal taxes fund essential services and infrastructure. 
              Click on categories to explore detailed breakdowns and see exactly where your money goes.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" iconName="FileText" iconPosition="left">
                Full Budget Document
              </Button>
              <Button variant="ghost" size="sm" iconName="Calculator" iconPosition="left">
                Tax Calculator
              </Button>
              <Button variant="ghost" size="sm" iconName="MessageSquare" iconPosition="left">
                Budget Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetVisualization;