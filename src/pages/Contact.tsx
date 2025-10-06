import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface ContactMethod {
  type: string;
  label: string;
  value: string;
  status: 'active' | 'busy' | 'offline';
  responseTime: string;
  icon: string;
}

const contactMethods: ContactMethod[] = [
  {
    type: 'email',
    label: 'AI ZENERA',
    value: 'info@aizenera.com',
    status: 'active',
    responseTime: '< 2 HOURS',
    icon: '📧'
  },
  {
    type: 'phone',
    label: 'AI ZENERA',
    value: '+91 6290277345',
    status: 'active',
    responseTime: '< 30 MINUTES',
    icon: '📞'
  },
  {
    type: 'instagram',
    label: 'SOCIAL',
    value: '@aizenera_official',
    status: 'active',
    responseTime: 'REAL-TIME',
    icon: '📷'
  },
  {
    type: 'github',
    label: 'CODE',
    value: 'github.com/aizenera',
    status: 'active',
    responseTime: '< 24 HOURS',
    icon: '⚙️'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  const [activeUsers] = useState(1247);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600';
      case 'busy': return 'text-amber-600';
      case 'offline': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            CONTACT US
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your business with AI? Connect with our specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">
              COMMUNICATION CHANNELS
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{method.icon}</span>
                      <div>
                        <h3 className="font-semibold text-primary">{method.label}</h3>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                    <div className={`text-xs font-semibold ${getStatusColor(method.status)}`}>
                      {method.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-muted-foreground text-xs">
                    RESPONSE TIME: {method.responseTime}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Stats */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h3 className="font-semibold text-primary mb-4">SYSTEM STATUS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">ACTIVE USERS</span>
                  <span className="text-sm font-semibold text-green-600">{activeUsers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SYSTEM STATUS</span>
                  <span className="text-sm font-semibold text-green-600">OPERATIONAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">RESPONSE RATE</span>
                  <span className="text-sm font-semibold text-primary">98.7%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">
              GET IN TOUCH
            </h2>
            
            <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-card border border-border shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    NAME *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    EMAIL *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    ORGANIZATION
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="neural-training">Neural Training</option>
                    <option value="ai-consulting">AI Consulting</option>
                    <option value="quantum-ai">Quantum AI</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">
                  BUDGET
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">Rs.5,000 - Rs.10,000</option>
                  <option value="10k-25k">Rs.10,000 - Rs.25,000</option>
                  <option value="25k-50k">Rs.25,000 - Rs.50,000</option>
                  <option value="50k+">Rs.50,000+</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-primary mb-2">
                  PROJECT DETAILS *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Describe your AI project requirements, goals, and technical specifications..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="p-8 rounded-lg bg-card border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">
              CONNECT WITH AI ZENERA
            </h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com/aizenera_official" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <span className="mr-3">📷</span>
                  INSTAGRAM
                </Button>
              </a>
              <a 
                href="mailto:info@aizenera.com"
              >
                <Button variant="outline" size="lg">
                  <span className="mr-3">📧</span>
                  EMAIL
                </Button>
              </a>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
