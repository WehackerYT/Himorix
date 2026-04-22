"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! 👋 I'm Himorix AI Assistant. I can help you with:\n\n• Service information\n• Pricing estimates\n• Project timelines\n• Contact details\n• Technology stack\n\nWhat would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [userName, setUserName] = useState<string>('');
  const [conversationContext, setConversationContext] = useState<string[]>([]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    // Update conversation context
    setConversationContext(prev => [...prev.slice(-3), message]);
    
    // Extract name if mentioned
    const namePatterns = [
      /my name is (\w+)/i,
      /i am (\w+)/i,
      /i'm (\w+)/i,
      /call me (\w+)/i,
      /this is (\w+)/i,
      /name is (\w+)/i,
    ];
    
    for (const pattern of namePatterns) {
      const match = userMessage.match(pattern);
      if (match && match[1]) {
        const extractedName = match[1].charAt(0).toUpperCase() + match[1].slice(1);
        setUserName(extractedName);
        return `Nice to meet you, ${extractedName}! 👋\n\nHow can I help you today? Feel free to ask about our services, pricing, or anything else!`;
      }
    }
    
    // Personalized greeting if we know the name
    const personalGreeting = userName ? `${userName}, ` : '';
    
    // Enhanced keyword matching with variations and context
    const greetings = ['hello', 'hi', 'hey', 'greetings', 'namaste', 'good morning', 'good afternoon', 'good evening', 'hola', 'yo', 'sup'];
    const services = ['service', 'services', 'offer', 'provide', 'what do you do', 'help', 'solutions', 'work', 'do', 'what can you'];
    const customSoftware = ['custom software', 'software development', 'bespoke', 'tailored', 'custom app', 'enterprise', 'erp', 'crm'];
    const webDev = ['web development', 'website', 'web app', 'web design', 'frontend', 'backend', 'full stack', 'site'];
    const mobile = ['mobile', 'app', 'ios', 'android', 'smartphone', 'tablet', 'phone app', 'flutter', 'react native'];
    const cloud = ['cloud', 'hosting', 'server', 'infrastructure', 'migration', 'aws', 'azure', 'gcp', 'devops'];
    const ai = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'data', 'analytics', 'intelligence', 'chatbot', 'automation'];
    const pricing = ['price', 'cost', 'quote', 'estimate', 'budget', 'investment', 'charges', 'fee', 'money', 'expensive', 'cheap'];
    const contact = ['contact', 'phone', 'email', 'address', 'reach', 'call', 'location', 'office', 'talk', 'speak', 'manager', 'sales'];
    const portfolio = ['portfolio', 'work', 'projects', 'examples', 'case study', 'showcase', 'demo', 'client', 'done'];
    const time = ['time', 'duration', 'timeline', 'how long', 'when', 'delivery', 'deadline', 'days', 'weeks', 'months'];
    const tech = ['technology', 'tech', 'stack', 'tools', 'framework', 'language', 'platform', 'use', 'build with'];
    const support = ['support', 'maintenance', 'help', 'assistance', 'updates', 'fixes', 'bug', 'issue', 'problem'];
    const thanks = ['thank', 'thanks', 'appreciate', 'great', 'awesome', 'helpful', 'good', 'perfect', 'excellent'];
    const goodbye = ['bye', 'goodbye', 'exit', 'quit', 'leave', 'see you', 'later', 'cya', 'ttyl'];
    const about = ['about', 'company', 'himorix', 'who', 'what is', 'tell me about', 'information'];
    const hire = ['hire', 'job', 'career', 'join', 'apply', 'work for', 'vacancy', 'position'];
    
    // Check for name inquiry
    if ((message.includes('who') && message.includes('you')) || message.includes('your name')) {
      return "I'm Himorix AI Assistant - your friendly guide to our software development services! 🤖\n\nI can help you explore services, get pricing, or answer any questions about Himorix!";
    }
    
    // Check for company info
    if (about.some(word => message.includes(word)) && (message.includes('company') || message.includes('himorix') || message.includes('about'))) {
      return `${personalGreeting}Himorix is a leading software development company with 10+ years of experience! 🚀\n\nWe've delivered 500+ projects across 25+ countries. Our team of 100+ experts specializes in:\n\n• Custom Software Development\n• Web & Mobile Apps\n• Cloud Solutions\n• AI & Data Analytics\n• Cybersecurity\n\nWhat would you like to know more about?`;
    }
    
    // Check for greetings with name
    if (greetings.some(greeting => message.includes(greeting))) {
      if (userName) {
        return `Hello ${userName}! 👋 Great to hear from you again!\n\nWhat can I help you with today?`;
      }
      return "Hello! 👋 Welcome to Himorix!\n\nI'm here to help you explore our services, get pricing, or answer any questions. What brings you here today?";
    }
    
    // Check for hiring/careers
    if (hire.some(word => message.includes(word))) {
      return "Thanks for your interest in joining Himorix! 🎯\n\nWe're always looking for talented developers, designers, and tech enthusiasts.\n\n📧 Send your resume to: careers@himorix.com\n\nCurrent openings:\n• Full Stack Developers\n• Mobile App Developers\n• UI/UX Designers\n• DevOps Engineers\n• AI/ML Specialists";
    }
    
    // Check for services inquiry
    if (services.some(service => message.includes(service))) {
      return `${personalGreeting}We specialize in:\n\n🚀 Custom Software Development\n🌐 Web Applications\n📱 Mobile Apps\n☁️ Cloud Solutions\n🤖 AI & Data Analytics\n🔒 Cybersecurity\n\nWhich area interests you most? Or tell me about your project idea!`;
    }
    
    // Check for custom software
    if (customSoftware.some(software => message.includes(software))) {
      return `${personalGreeting}Our custom software solutions include:\n\n• Enterprise applications (ERP, CRM)\n• Database design & optimization\n• Secure API development\n• SaaS platforms\n• Business process automation\n• Legacy system modernization\n\nWhat type of software do you need?`;
    }
    
    // Check for web development
    if (webDev.some(web => message.includes(web))) {
      return `${personalGreeting}Our web development expertise:\n\n🎨 Modern UI/UX with React, Vue, Angular\n⚡ Fast, responsive designs\n🔧 Robust backends (Node.js, Python, Java)\n📱 Progressive Web Apps\n🛒 E-commerce solutions\n🔒 Security-first approach\n\nWhat kind of web project are you planning?`;
    }
    
    // Check for mobile apps
    if (mobile.some(mob => message.includes(mob))) {
      return `${personalGreeting}We build amazing mobile apps:\n\n📱 Native iOS (Swift, SwiftUI)\n📱 Native Android (Kotlin, Jetpack Compose)\n🔄 Cross-platform (React Native, Flutter)\n🎨 Beautiful, intuitive UI/UX\n🔒 Enterprise-grade security\n📊 Analytics integration\n\nWhich platform are you targeting?`;
    }
    
    // Check for cloud services
    if (cloud.some(cloudService => message.includes(cloudService))) {
      return `${personalGreeting}Cloud solutions we offer:\n\n☁️ Cloud migration & strategy\n💾 Scalable storage solutions\n🔒 Cloud security & compliance\n🌍 Global CDN deployment\n⚡ Serverless architecture\n🐳 Docker & Kubernetes\n\nAre you looking to migrate existing infrastructure or build new?`;
    }
    
    // Check for AI/Data
    if (ai.some(aiTech => message.includes(aiTech))) {
      return `${personalGreeting}Our AI & Data services:\n\n🤖 Custom Machine Learning models\n📊 Business Intelligence dashboards\n🗣️ Natural Language Processing\n👁️ Computer Vision solutions\n📈 Predictive Analytics\n🎯 AI Strategy Consulting\n\nWhat business challenge are you looking to solve with AI?`;
    }
    
    // Check for pricing
    if (pricing.some(price => message.includes(price))) {
      return `${personalGreeting}Our pricing is project-based. Here's a rough idea:\n\n💰 Basic websites: $5K - $15K\n💰 Web applications: $15K - $50K\n💰 Mobile apps: $10K - $40K\n💰 Enterprise solutions: $50K+\n\nThe exact cost depends on features, complexity, and timeline.\n\nWould you like a detailed quote for your specific project?`;
    }
    
    // Check for contact
    if (contact.some(contactInfo => message.includes(contactInfo))) {
      return `${personalGreeting}Here's how to reach us:

📞 US: Coming Soon
📞 IND: +91 9929171178
📧 Email: contact@himorix.com
📍 Office: Himorix, O Block, Balaji Choraya, Narayan Vihar, Jaipur, Rajasthan

🕐 Business Hours: Mon-Fri 9AM-6PM IST

Prefer a call or email? I can connect you right away!`;
    }
    
    // Check for portfolio
    if (portfolio.some(port => message.includes(port))) {
      return `${personalGreeting}Our portfolio highlights:\n\n🏆 500+ successful projects delivered\n🏆 Clients across 25+ countries\n🏆 Industries: Fintech, Healthcare, E-commerce, SaaS, Enterprise\n\nRecent projects:\n• Banking app with 1M+ users\n• Healthcare platform for 50+ hospitals\n• E-commerce site with $10M+ GMV\n• AI-powered analytics dashboard\n\nWant to see specific case studies?`;
    }
    
    // Check for timeline
    if (time.some(duration => message.includes(duration))) {
      return `${personalGreeting}Typical project timelines:\n\n⏱️ Simple website: 2-4 weeks\n⏱️ Web application: 2-4 months\n⏱️ Mobile app: 3-5 months\n⏱️ Enterprise solution: 4-8 months\n\nWe follow agile methodology with 2-week sprints, so you'll see progress regularly!\n\nDo you have a specific deadline in mind?`;
    }
    
    // Check for technology
    if (tech.some(technology => message.includes(technology))) {
      return `${personalGreeting}Our technology stack:\n\n🎨 Frontend: React, Next.js, Vue.js, Angular, Tailwind CSS\n🔧 Backend: Node.js, Express, Python, Django, Java\n📱 Mobile: Swift, Kotlin, React Native, Flutter\n☁️ Cloud: AWS, Azure, Google Cloud Platform\n💾 Database: PostgreSQL, MongoDB, MySQL, Redis\n🐳 DevOps: Docker, Kubernetes, CI/CD\n\nAny specific technology preference for your project?`;
    }
    
    // Check for support
    if (support.some(help => message.includes(help))) {
      return `${personalGreeting}Our support services:\n\n🛡️ 24/7 Technical Support\n🛡️ Bug fixes & patches\n🛡️ Performance optimization\n🛡️ Security updates\n🛡️ Feature enhancements\n🛡️ Dedicated account manager\n\nWe offer monthly retainer plans as well as pay-per-ticket options.\n\nWhat level of support are you looking for?`;
    }
    
    // Check for thanks
    if (thanks.some(thank => message.includes(thank))) {
      const responses = [
        `${userName ? `${userName}, ` : ''}You're very welcome! 😊 Happy to help!`,
        `Glad I could help${userName ? `, ${userName}` : ''}! Feel free to ask anything else!`,
        `My pleasure${userName ? `, ${userName}` : ''}! Let me know if you need anything else!`
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Check for goodbye
    if (goodbye.some(bye => message.includes(bye))) {
      return `${userName ? `${userName}, ` : ''}Thanks for chatting with Himorix! 👋\n\nFeel free to reach out anytime. Have a great day! 🌟\n\nIf you need urgent assistance, call us at +91 9929171178`;
    }
    
    // Check for location
    if (message.includes('where') && (message.includes('located') || message.includes('based'))) {
      return `${personalGreeting}We're based in Jaipur, Rajasthan, India 🇮�\n\nBut we serve clients globally with team members across India and expanding internationally!\n\nOur presence allows us to provide excellent development support. 🌍`;
    }
    
    // Check for experience/team
    if (message.includes('experience') || message.includes('years') || message.includes('team') || message.includes('developers')) {
      return `${personalGreeting}Himorix by numbers:\n\n📅 10+ years of experience\n👥 100+ expert developers & designers\n🚀 500+ successful projects\n🌍 25+ countries served\n⭐ 98% client satisfaction rate\n\nOur team includes specialists in every major technology stack!`;
    }
    
    // Check for start/begin/process
    if (message.includes('start') || message.includes('begin') || message.includes('process') || message.includes('how to')) {
      return `${personalGreeting}Getting started is easy! 🚀\n\n1️⃣ Share your project requirements\n2️⃣ Get free consultation (within 24 hours)\n3️⃣ Receive detailed proposal & timeline\n4️⃣ Kick-off with dedicated team\n\nYou can:\n• Fill out the contact form\n• Email us at contact@himorix.com\n• Call +91 9929171178\n\nWhat's your project idea? Let's discuss!`;
    }
    
    // Context-aware response based on previous messages
    if (conversationContext.length > 1) {
      const lastContext = conversationContext[conversationContext.length - 2];
      
      if (lastContext.includes('price') || lastContext.includes('cost')) {
        return `${personalGreeting}To give you an accurate quote, I'd need a bit more information:\n\n• What type of project? (web app, mobile app, software)\n• Key features you need\n• Any design preferences\n• Your timeline\n\nWant to schedule a free consultation to discuss details?`;
      }
      
      if (lastContext.includes('service') || lastContext.includes('help')) {
        return `${personalGreeting}To recommend the best service for you, could you tell me:\n\n• What problem are you trying to solve?\n• Do you have an existing system?\n• Who are your target users?\n\nThis will help me suggest the perfect solution!`;
      }
    }
    
    // Default smart response with name if known
    return `${personalGreeting}I'm here to help! 🤔\n\nI can assist you with:\n• 💼 Our services & solutions\n• 💰 Pricing & timelines\n• 🛠️ Technology stack\n• 📞 Contact information\n• 🏆 Portfolio examples\n\nWhat specific information would help you today?\n\nOr just tell me about your project idea!`;
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateBotResponse(inputValue),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] bg-pink-600 hover:bg-pink-700 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 transform hover:scale-110 ${isOpen ? 'hidden' : 'flex items-center justify-center'}`}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] bg-white rounded-2xl shadow-2xl transition-all duration-300 flex flex-col ${
          isMinimized ? 'w-72 h-14 sm:w-80 sm:h-16' : 'w-[calc(100vw-2rem)] max-w-md max-h-[80vh] sm:w-96'
        }`} style={{ maxHeight: 'calc(100vh - 120px)' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Himorix AI Assistant</h3>
                <p className="text-xs text-pink-100">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-pink-500 p-1 rounded transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-pink-500 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 min-h-0 overflow-y-auto p-2 sm:p-3 space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-pink-600" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] sm:max-w-[70%] p-2 sm:p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-pink-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-pink-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-pink-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-2 sm:p-3">
                {/* Quick Reply Suggestions */}
                <div className="mb-2 flex flex-wrap gap-2">
                  {['Services', 'Pricing', 'Contact', 'Portfolio', 'Start Project'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setInputValue(suggestion);
                        // Auto-send the suggestion
                        setTimeout(() => {
                          const userMessage: Message = {
                            id: Date.now().toString(),
                            text: suggestion,
                            sender: 'user',
                            timestamp: new Date()
                          };
                          setMessages(prev => [...prev, userMessage]);
                          setInputValue('');
                          setIsTyping(true);
                          
                          setTimeout(() => {
                            const botResponse: Message = {
                              id: (Date.now() + 1).toString(),
                              text: generateBotResponse(suggestion),
                              sender: 'bot',
                              timestamp: new Date()
                            };
                            setMessages(prev => [...prev, botResponse]);
                            setIsTyping(false);
                          }, 1000);
                        }, 100);
                      }}
                      className="px-2 py-1 bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 text-pink-700 hover:text-pink-800 rounded-full text-xs sm:text-sm transition-all duration-300 border border-pink-200 hover:border-pink-300 shadow-sm hover:shadow-md transform hover:scale-105 font-medium"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                      console.log('Input value:', e.target.value);
                      setInputValue(e.target.value);
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputValue.trim() === '' || isTyping}
                    className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
