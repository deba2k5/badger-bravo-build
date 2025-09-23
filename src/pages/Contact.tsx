import { Navigation } from '@/components/Navigation';
import { CyberButton } from '@/components/ui/cyber-button';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { ThreeScene } from '@/components/ThreeScene';
import { HeroCyberGrid } from '@/components/HeroCyberGrid';
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
    label: 'AIZENERA',
    value: 'info@aizenera.com',
    status: 'active',
    responseTime: '< 2 HOURS',
    icon: '📧'
  },
  {
    type: 'phone',
    label: 'AIZENERA',
    value: '+91 6290277345',
    status: 'active',
    responseTime: '< 30 MINUTES',
    icon: '📞'
  },
  {
    type: 'instagram',
    label: 'SOCIAL MATRIX',
    value: '@aizenera_official',
    status: 'active',
    responseTime: 'REAL-TIME',
    icon: '📷'
  },
  {
    type: 'github',
    label: 'CODE NEURAL',
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
      case 'active': return 'text-terminal-green';
      case 'busy': return 'text-cyber-yellow';
      case 'offline': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <CursorTrail />
      <ThreeScene />
      <HeroCyberGrid />
      <Navigation />
      
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-cyan mb-4">
            CONTACT US
          </h1>
          <p className="text-xl font-tech text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your business with AI? Connect with our neural network specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-orbitron font-bold text-cyber-yellow mb-8">
              COMMUNICATION CHANNELS
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="box-3d p-6 rounded-lg backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{method.icon}</span>
                      <div>
                        <h3 className="font-orbitron font-semibold text-cyber-cyan">{method.label}</h3>
                        <p className="font-tech text-sm text-foreground/80">{method.value}</p>
                      </div>
                    </div>
                    <div className={`font-tech text-xs font-semibold ${getStatusColor(method.status)}`}>
                      {method.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-muted-foreground font-tech text-xs">
                    RESPONSE TIME: {method.responseTime}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Stats */}
            <div className="box-3d p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-orbitron font-semibold text-cyber-cyan mb-4">SYSTEM STATUS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-tech text-sm text-foreground/80">ACTIVE USERS</span>
                  <span className="font-tech text-sm font-semibold text-terminal-green">{activeUsers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-tech text-sm text-foreground/80">SYSTEM STATUS</span>
                  <span className="font-tech text-sm font-semibold text-terminal-green">OPERATIONAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-tech text-sm text-foreground/80">RESPONSE RATE</span>
                  <span className="font-tech text-sm font-semibold text-cyber-cyan">98.7%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-orbitron font-bold text-cyber-yellow mb-8">
              AIZENERA HANDSHAKE PROTOCOL
            </h2>
            
            <form onSubmit={handleSubmit} className="box-3d p-8 rounded-lg backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-tech text-sm font-semibold text-cyber-cyan mb-2">
                    NAME_ID *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background/50 border border-border rounded px-4 py-3 font-tech text-sm text-foreground focus:border-cyber-cyan focus:outline-none transition-colors"
                    placeholder="Enter your designation"
                    required
                  />
                </div>
                <div>
                  <label className="block font-tech text-sm font-semibold text-cyber-cyan mb-2">
                    AIZENERA_EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background/50 border border-border rounded px-4 py-3 font-tech text-sm text-foreground focus:border-cyber-cyan focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-tech text-sm font-semibold text-cyber-cyan mb-2">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-background/50 border border-border rounded px-4 py-3 font-tech text-sm text-foreground focus:border-cyber-cyan focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block font-tech text-sm font-semibold text-cyber-cyan mb-2">
                    PROJECT_TYPE
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full bg-background/50 border border-border rounded px-4 py-3 font-tech text-sm text-foreground focus:border-cyber-cyan focus:outline-none transition-colors"
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
                <label className="block font-tech text-sm font-semibold text-cyber-cyan mb-2">
                  BUDGET_ALLOCATION
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-background/50 border border-border rounded px-4 py-3 font-tech text-sm text-foreground focus:border-cyber-cyan focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">Rs.5,000 - $10,000</option>
                  <option value="10k-25k">Rs.10,000 - $25,000</option>
                  <option value="25k-50k">Rs.25,000 - $50,000</option>
                  <option value="50k+">Rs.50,000+</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block font-tech text-sm font-semibold text-cyber-cyan mb-2">
                  PROJECT_DETAILS *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-background/50 border border-border rounded px-4 py-3 font-tech text-sm text-foreground focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Describe your AI project requirements, goals, and technical specifications..."
                  required
                ></textarea>
              </div>

              <CyberButton 
                type="submit" 
                variant="cyber" 
                size="lg" 
                className="w-full font-orbitron tracking-wider box-3d"
              >
                INITIATE_AIZENERA_HANDSHAKE
              </CyberButton>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="box-3d p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan mb-6">
              CONNECT WITH AIZENERA COMMUNITY
            </h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com/aizenera_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <CyberButton variant="ghost" size="lg" className="font-tech box-3d">
                  <span className="mr-3">📷</span>
                  INSTAGRAM
                </CyberButton>
              </a>
              <a 
                href="mailto:info@aizenera.com"
                className="group"
              >
                <CyberButton variant="ghost" size="lg" className="font-tech box-3d">
                  <span className="mr-3">📧</span>
                  EMAIL
                </CyberButton>
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
