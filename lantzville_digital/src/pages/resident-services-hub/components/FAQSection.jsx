import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      category: 'Building & Permits',
      question: 'How long does it take to get a building permit in Lantzville?',
      answer: `Building permit processing times vary based on project complexity:\n\n• Simple renovations: 5-10 business days\n• New residential construction: 15-20 business days\n• Commercial projects: 20-30 business days\n\nAll applications are reviewed in order of receipt. You'll receive email updates throughout the process.`
    },
    {
      id: 2,
      category: 'Property & Taxes',question: 'When are property taxes due and what payment methods are accepted?',
      answer: `Property taxes are due July 2nd each year. Payment methods include:\n\n• Online banking (most banks)\n• Credit card (Visa, MasterCard) - 2.75% convenience fee applies\n• Debit card at municipal office\n• Cash or cheque in person\n• Pre-authorized payment plans available\n\nLate payment penalty is 10% after July 2nd.`
    },
    {
      id: 3,
      category: 'Business Services',question: 'What do I need to start a business in Lantzville?',answer: `To start a business in Lantzville, you'll need:\n\n• Business license application\n• Zoning compliance verification\n• Fire department approval (if applicable)\n• Health permit (food services)\n• Signage permit (if installing signs)\n\nMost home-based businesses can be approved within 5 business days.`
    },
    {
      id: 4,
      category: 'Utilities & Services',
      question: 'How do I report a water main break or utility emergency?',
      answer: `For utility emergencies:\n\n• Call our 24/7 emergency line: (250) 390-4111\n• Use the Service Request Portal for non-emergencies\n• Email: emergency@lantzville.ca\n\nWater main breaks, gas leaks, and power outages should be reported immediately. Our crews respond within 30 minutes for emergencies.`
    },
    {
      id: 5,
      category: 'Community Programs',
      question: 'How do I register for community programs and events?',
      answer: `Registration for community programs:\n\n• Online through our Community Life & Events page\n• In-person at the Community Centre\n• Phone registration: (250) 390-4111\n• Early bird discounts available for residents\n\nPrograms include fitness classes, seniors activities, youth programs, and seasonal events.`
    },
    {
      id: 6,
      category: 'Bylaws & Regulations',
      question: 'What are the noise bylaws in Lantzville?',
      answer: `Lantzville noise bylaws specify:\n\n• Quiet hours: 10 PM to 7 AM weekdays, 10 PM to 9 AM weekends\n• Construction: 7 AM to 6 PM weekdays, 9 AM to 5 PM weekends\n• No construction on statutory holidays\n• Excessive noise complaints can result in fines\n\nReport noise violations through our Service Request Portal or call (250) 390-4111.`
    }
  ];

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded?.has(id)) {
      newExpanded?.delete(id);
    } else {
      newExpanded?.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqData?.filter(faq =>
    faq?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    faq?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    faq?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const categories = [...new Set(faqData.map(faq => faq.category))];

  return (
    <div className="bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-6">
          Find answers to common questions about Lantzville municipal services, bylaws, and community programs.
        </p>
        
        <Input
          type="search"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="max-w-md"
        />
      </div>
      {/* Category Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <span
            key={category}
            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
          >
            {category}
          </span>
        ))}
      </div>
      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs?.map((faq) => (
          <div
            key={faq?.id}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleExpanded(faq?.id)}
              className="w-full p-4 text-left hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {faq?.category}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground">
                    {faq?.question}
                  </h3>
                </div>
                <Icon
                  name={expandedItems?.has(faq?.id) ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-muted-foreground ml-4 flex-shrink-0"
                />
              </div>
            </button>
            
            {expandedItems?.has(faq?.id) && (
              <div className="px-4 pb-4 border-t border-border bg-muted/20">
                <div className="pt-4">
                  <div className="prose prose-sm max-w-none">
                    {faq?.answer?.split('\n')?.map((line, index) => (
                      <p key={index} className="text-muted-foreground mb-2 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {filteredFAQs?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            No results found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or browse all categories above.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQSection;