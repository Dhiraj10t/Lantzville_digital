import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PaymentPortal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

  const paymentServices = [
    { value: 'property-tax', label: 'Property Tax', fee: '$1,245.00' },
    { value: 'building-permit', label: 'Building Permit', fee: '$350.00' },
    { value: 'business-license', label: 'Business License', fee: '$125.00' },
    { value: 'parking-ticket', label: 'Parking Ticket', fee: '$45.00' },
    { value: 'utility-bill', label: 'Utility Bill', fee: '$89.50' }
  ];

  const paymentMethods = [
    { value: 'credit-card', label: 'Credit Card' },
    { value: 'debit-card', label: 'Debit Card' },
    { value: 'bank-transfer', label: 'Bank Transfer' }
  ];

  const handleServiceChange = (value) => {
    setSelectedService(value);
    const service = paymentServices?.find(s => s?.value === value);
    if (service) {
      setAmount(service?.fee);
    }
  };

  const handlePayment = () => {
    // Mock payment processing
    alert(`Payment of ${amount} processed successfully! Transaction ID: TXN-${Date.now()?.toString()?.slice(-8)}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground flex items-center">
              <Icon name="CreditCard" size={24} className="mr-2 text-primary" />
              Payment Portal
            </h2>
            <Button variant="ghost" size="sm" onClick={onClose} iconName="X" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <Select
            label="Select Service"
            placeholder="Choose service to pay for"
            options={paymentServices}
            value={selectedService}
            onChange={handleServiceChange}
            required
          />

          <Input
            label="Amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e?.target?.value)}
            placeholder="$0.00"
            disabled
            description="Amount is automatically calculated based on service selected"
          />

          <Select
            label="Payment Method"
            placeholder="Choose payment method"
            options={paymentMethods}
            value={paymentMethod}
            onChange={setPaymentMethod}
            required
          />

          {paymentMethod === 'credit-card' && (
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
              <Input
                label="Card Number"
                type="text"
                placeholder="1234 5678 9012 3456"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Expiry Date"
                  type="text"
                  placeholder="MM/YY"
                  required
                />
                <Input
                  label="CVV"
                  type="text"
                  placeholder="123"
                  required
                />
              </div>
              <Input
                label="Cardholder Name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          {/* Security Notice */}
          <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-start space-x-2">
              <Icon name="Shield" size={16} className="text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium text-success">Secure Payment</p>
                <p className="text-xs text-success/80">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} fullWidth>
              Cancel
            </Button>
            <Button 
              variant="default" 
              onClick={handlePayment}
              disabled={!selectedService || !paymentMethod}
              iconName="CreditCard"
              iconPosition="left"
              fullWidth
            >
              Pay {amount}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;