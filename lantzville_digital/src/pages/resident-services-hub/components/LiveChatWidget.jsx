import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Municipal Staff',
      message: "Hello! I\'m Sarah from Lantzville Municipal Services. How can I help you today?",
      timestamp: new Date(Date.now() - 60000),
      isStaff: true
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage?.trim()) return;

    const userMessage = {
      id: messages?.length + 1,
      sender: 'You',
      message: newMessage,
      timestamp: new Date(),
      isStaff: false
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate staff response
    setTimeout(() => {
      const responses = [
        "Thank you for your question. Let me look into that for you.",
        "I can help you with that. Would you like me to send you the relevant forms?",
        "That\'s a great question. Let me connect you with the right department.",
        "I have the information you need. Let me gather those details for you."
      ];
      
      const staffResponse = {
        id: messages?.length + 2,
        sender: 'Municipal Staff',
        message: responses?.[Math.floor(Math.random() * responses?.length)],
        timestamp: new Date(),
        isStaff: true
      };

      setMessages(prev => [...prev, staffResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full shadow-elevated hover:shadow-lg transition-all duration-300 bg-gradient-coastal"
          iconName={isOpen ? "X" : "MessageCircle"}
          iconSize={24}
        >
          {!isOpen && (
            <span className="ml-2 hidden sm:inline">Chat with us</span>
          )}
        </Button>
      </div>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border border-border rounded-xl shadow-elevated z-40 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gradient-coastal text-white rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} />
                </div>
                <div>
                  <h3 className="font-medium">Municipal Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                iconName="Minimize2"
                className="text-white hover:bg-white/20"
              />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages?.map((msg) => (
              <div
                key={msg?.id}
                className={`flex ${msg?.isStaff ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg?.isStaff
                      ? 'bg-muted text-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <p className="text-sm">{msg?.message}</p>
                  <p className={`text-xs mt-1 ${
                    msg?.isStaff ? 'text-muted-foreground' : 'text-primary-foreground/80'
                  }`}>
                    {formatTime(msg?.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e?.target?.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                variant="default"
                size="sm"
                onClick={sendMessage}
                disabled={!newMessage?.trim()}
                iconName="Send"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;