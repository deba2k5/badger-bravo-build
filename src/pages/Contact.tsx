import { Navigation } from '@/components/Navigation';
import { SystemStatus } from '@/components/SystemStatus';
import { CyberButton } from '@/components/ui/cyber-button';
import { useState, useEffect } from 'react';

interface ContactMethod {
  type: string;
  value: string;
  status: 'active' | 'busy' | 'offline';
  responseTime: string;
  icon: string;
}

const contactMethods: ContactMethod[] = [
  {
    type: 'NEURAL_LINK',
    value: 'neural@aizenera.com',
    status: 'active',
    responseTime: '< 2 HOURS',
    icon: '🧠'
  },
  {
    type: 'QUANTUM_COMM',
    value: '+1 (555) QUANTUM',
    status: 'active',
    responseTime: '< 30 MINUTES',
    icon: '⚡'
  },
  {
    type: 'MATRIX_PORTAL',
    value: 'discord.gg/aizenera',
    status: 'active',
    responseTime: 'REAL-TIME',
    icon: '💬'
  },
  {
    type: 'GITHUB_NEURAL',
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
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeUsers, setActiveUsers] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const getStatusColor = (status: ContactMethod['status']) => {
    switch (status) {
      case 'active': return 'text-terminal-green border-terminal-green';
      case 'busy': return 'text-terminal-amber border-terminal-amber';
      case 'offline': return 'text-terminal-red border-terminal-red';
      default: return 'text-muted-foreground border-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background matrix-bg relative overflow-x-hidden">
      <SystemStatus />
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider animate-fade-in-up">
              CONTACT_PROTOCOL.exe
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6 animate-fade-in-up">
              <span className="text-foreground">INITIATE</span>
              <br />
              <span className="inspire-glow">CONNECTION</span>
            </h1>
            <p className="text-cyber-cyan font-mono text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              ESTABLISH NEURAL LINK WITH OUR AI ARCHITECTS. READY TO TRANSFORM YOUR IDEAS INTO REALITY.
              <br />
              MULTIPLE COMMUNICATION CHANNELS AVAILABLE FOR IMMEDIATE RESPONSE.
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-2 neon-glow">
                {activeUsers}
              </div>
              <div className="text-xs text-muted-foreground font-mono">ACTIVE_CONNECTIONS</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-2 neon-glow">
                98.7%
              </div>
              <div className="text-xs text-muted-foreground font-mono">RESPONSE_RATE</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-2 neon-glow">
                24/7
              </div>
              <div className="text-xs text-muted-foreground font-mono">AVAILABILITY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
              COMMUNICATION_CHANNELS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              <span className="text-foreground">NEURAL</span>{' '}
              <span className="text-cyber-cyan neon-glow">PATHWAYS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={method.type}
                className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 cursor-pointer transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 animate-float">{method.icon}</div>
                  <div className={`text-xs font-mono px-2 py-1 border rounded inline-flex items-center gap-2 ${getStatusColor(method.status)}`}>
                    <div className={`w-2 h-2 rounded-full ${
                      method.status === 'active' ? 'bg-terminal-green' :
                      method.status === 'busy' ? 'bg-terminal-amber' : 'bg-terminal-red'
                    } animate-pulse`}></div>
                    {method.status.toUpperCase()}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-mono text-cyber-cyan neon-glow">
                    {method.type}
                  </h3>
                  <div className="text-sm text-muted-foreground font-mono">
                    {method.value}
                  </div>
                  
                  <div className="flex justify-between text-xs font-mono pt-3 border-t border-cyber-cyan/20">
                    <span className="text-muted-foreground">RESPONSE:</span>
                    <span className="text-cyber-yellow">{method.responseTime}</span>
                  </div>
                </div>

                <CyberButton variant="terminal" className="w-full mt-4 font-mono text-xs">
                  CONNECT_NOW
                </CyberButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
              PROJECT_BRIEFING_FORM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              <span className="text-foreground">NEURAL</span>{' '}
              <span className="text-cyber-cyan neon-glow">HANDSHAKE</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              Initialize secure communication channel for project discussion.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                    NAME_IDENTIFIER*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                    placeholder="Enter your neural signature..."
                  />
                </div>

                <div>
                  <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                    EMAIL_PROTOCOL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                    placeholder="neural@yourcompany.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                    COMPANY_ENTITY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                    placeholder="Your organization name..."
                  />
                </div>

                <div>
                  <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                    PROJECT_TYPE*
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  >
                    <option value="">Select project type...</option>
                    <option value="neural-training">Neural Training</option>
                    <option value="ai-consulting">AI Consulting</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="quantum-computing">Quantum Computing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                    BUDGET_ALLOCATION
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  >
                    <option value="">Select budget range...</option>
                    <option value="5k-15k">$5K - $15K</option>
                    <option value="15k-50k">$15K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                    TIMELINE_URGENCY
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP (Rush Order)</option>
                    <option value="1-month">1 Month</option>
                    <option value="3-months">3 Months</option>
                    <option value="6-months">6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-cyber-cyan font-mono text-sm mb-2 tracking-wider">
                  PROJECT_DESCRIPTION*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-card/50 border border-cyber-cyan/30 p-3 font-mono text-foreground focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300 resize-none"
                  placeholder="Describe your AI project requirements, objectives, and expected outcomes..."
                />
              </div>

              <div className="text-center">
                <CyberButton 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="font-mono tracking-wider"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse mr-2">⚡</span>
                      TRANSMITTING...
                    </>
                  ) : (
                    'INITIATE_NEURAL_HANDSHAKE'
                  )}
                </CyberButton>
              </div>
            </form>
          ) : (
            <div className="text-center bg-card/50 border border-terminal-green/50 p-12 neon-border animate-fade-in-up">
              <div className="text-6xl mb-6 animate-float">✓</div>
              <h3 className="text-2xl font-bold font-mono text-terminal-green mb-4 neon-glow">
                NEURAL_HANDSHAKE_SUCCESSFUL
              </h3>
              <p className="text-cyber-cyan font-mono mb-6">
                Your project briefing has been successfully transmitted to our neural architects.
                <br />
                Expected response time: &lt; 2 hours during business cycles.
              </p>
              <CyberButton 
                variant="terminal" 
                onClick={() => setSubmitted(false)}
                className="font-mono"
              >
                SEND_ANOTHER_TRANSMISSION
              </CyberButton>
            </div>
          )}
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
              PHYSICAL_COORDINATES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              <span className="text-foreground">NEURAL</span>{' '}
              <span className="text-cyber-cyan neon-glow">HEADQUARTERS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border text-center">
              <div className="text-4xl mb-4 animate-float">🌐</div>
              <h3 className="text-lg font-bold font-mono text-cyber-cyan mb-3">
                GLOBAL_HQ
              </h3>
              <div className="text-sm text-muted-foreground font-mono space-y-1">
                <div>Neural Valley</div>
                <div>San Francisco, CA</div>
                <div>United States</div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border text-center">
              <div className="text-4xl mb-4 animate-float">🕒</div>
              <h3 className="text-lg font-bold font-mono text-cyber-cyan mb-3">
                OPERATION_HOURS
              </h3>
              <div className="text-sm text-muted-foreground font-mono space-y-1">
                <div>24/7 AI Monitoring</div>
                <div>Human Support:</div>
                <div>9AM - 6PM PST</div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border text-center">
              <div className="text-4xl mb-4 animate-float">🔒</div>
              <h3 className="text-lg font-bold font-mono text-cyber-cyan mb-3">
                SECURITY_LEVEL
              </h3>
              <div className="text-sm text-muted-foreground font-mono space-y-1">
                <div>Quantum Encrypted</div>
                <div>Neural Verified</div>
                <div>ISO 27001 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-cyan font-mono text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;