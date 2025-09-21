import { Navigation } from '@/components/Navigation';
import { SystemStatus } from '@/components/SystemStatus';
import { CyberButton } from '@/components/ui/cyber-button';
import { useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
  status: 'available' | 'limited' | 'coming-soon';
  complexity: number;
  duration: string;
}

const services: Service[] = [
  {
    id: 'neural-training',
    title: 'NEURAL TRAINING',
    subtitle: 'AI_EDUCATION_PROTOCOL',
    description: 'Comprehensive AI education through immersive neural network simulations and hands-on machine learning projects.',
    features: [
      'Deep Learning Fundamentals',
      'Neural Network Architecture',
      'Computer Vision Training',
      'NLP Model Development',
      'Reinforcement Learning',
      'AI Ethics & Safety'
    ],
    pricing: '2499',
    icon: '🧠',
    status: 'available',
    complexity: 85,
    duration: '12_WEEKS'
  },
  {
    id: 'ai-consulting',
    title: 'AI CONSULTING',
    subtitle: 'STRATEGIC_IMPLEMENTATION',
    description: 'Enterprise-grade AI strategy consulting and implementation services for digital transformation initiatives.',
    features: [
      'AI Readiness Assessment',
      'Custom Model Development',
      'System Integration',
      'Performance Optimization',
      'Scalability Planning',
      'ROI Analysis'
    ],
    pricing: '15000',
    icon: '⚡',
    status: 'available',
    complexity: 95,
    duration: '8_WEEKS'
  },
  {
    id: 'neural-development',
    title: 'NEURAL DEVELOPMENT',
    subtitle: 'CUSTOM_AI_SOLUTIONS',
    description: 'End-to-end AI solution development from prototype to production deployment with ongoing support.',
    features: [
      'Custom AI Model Design',
      'API Development',
      'Cloud Deployment',
      'Monitoring & Analytics',
      'Continuous Learning',
      '24/7 Support'
    ],
    pricing: '25000',
    icon: '🚀',
    status: 'limited',
    complexity: 98,
    duration: '16_WEEKS'
  },
  {
    id: 'quantum-ai',
    title: 'QUANTUM AI',
    subtitle: 'NEXT_GEN_COMPUTING',
    description: 'Cutting-edge quantum-enhanced AI algorithms for solving complex optimization and cryptographic challenges.',
    features: [
      'Quantum Machine Learning',
      'Optimization Algorithms',
      'Cryptographic Security',
      'Parallel Processing',
      'Research Collaboration',
      'Patent Support'
    ],
    pricing: 'CUSTOM',
    icon: '⚛️',
    status: 'coming-soon',
    complexity: 100,
    duration: 'TBD'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [metrics, setMetrics] = useState({
    activeProjects: 47,
    successRate: 98.5,
    clientSatisfaction: 99.2,
    deployedModels: 156
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
      
      setMetrics(prev => ({
        ...prev,
        activeProjects: prev.activeProjects + Math.floor(Math.random() * 2),
        deployedModels: prev.deployedModels + Math.floor(Math.random() * 3)
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: Service['status']) => {
    switch (status) {
      case 'available': return 'text-terminal-green border-terminal-green';
      case 'limited': return 'text-terminal-amber border-terminal-amber';
      case 'coming-soon': return 'text-terminal-blue border-terminal-blue';
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
              SERVICES_MATRIX.exe
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6 animate-fade-in-up">
              <span className="text-foreground">AI SOLUTIONS</span>
              <br />
              <span className="inspire-glow">DEPLOYED</span>
            </h1>
            <p className="text-cyber-cyan font-mono text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              COMPREHENSIVE AI SERVICES FROM NEURAL NETWORK TRAINING TO QUANTUM-ENHANCED SOLUTIONS.
              <br />
              TRANSFORM YOUR BUSINESS WITH CUTTING-EDGE ARTIFICIAL INTELLIGENCE.
            </p>
          </div>

          {/* Service Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                {metrics.activeProjects}
              </div>
              <div className="text-xs text-muted-foreground font-mono">ACTIVE_PROJECTS</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                {metrics.successRate}%
              </div>
              <div className="text-xs text-muted-foreground font-mono">SUCCESS_RATE</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                {metrics.clientSatisfaction}%
              </div>
              <div className="text-xs text-muted-foreground font-mono">CLIENT_SATISFACTION</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                {metrics.deployedModels}
              </div>
              <div className="text-xs text-muted-foreground font-mono">DEPLOYED_MODELS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
              AVAILABLE_PROTOCOLS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              <span className="text-foreground">SERVICE</span>{' '}
              <span className="text-cyber-cyan neon-glow">ARCHITECTURE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-8 neon-border transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transform hover:scale-[1.02] ${
                  selectedService === service.id ? 'shadow-[0_0_40px_hsl(var(--primary)/0.4)] scale-[1.02]' : ''
                } ${activeIndex === index ? 'ring-2 ring-cyber-cyan/50' : ''}`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl animate-float">{service.icon}</div>
                  <div className={`text-xs font-mono px-3 py-1 border rounded ${getStatusColor(service.status)}`}>
                    {service.status.replace('-', '_').toUpperCase()}
                  </div>
                </div>

                {/* Service Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-mono text-cyber-cyan mb-2 neon-glow">
                    {service.title}
                  </h3>
                  <div className="text-sm text-cyber-yellow font-mono mb-4">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Complexity Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-muted-foreground">COMPLEXITY</span>
                    <span className="text-cyber-yellow">{service.complexity}%</span>
                  </div>
                  <div className="w-full bg-muted/20 h-2 rounded">
                    <div 
                      className="bg-gradient-to-r from-cyber-cyan to-cyber-yellow h-2 rounded transition-all duration-1000"
                      style={{ width: `${service.complexity}%` }}
                    ></div>
                  </div>
                </div>

                {/* Expandable Features */}
                {selectedService === service.id && (
                  <div className="mb-6 animate-fade-in-up">
                    <div className="text-xs text-cyber-cyan font-mono mb-3 tracking-wider">
                      FEATURES_INCLUDED:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs font-mono">
                          <span className="text-terminal-green mr-2">▶</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing and Duration */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">INVESTMENT</div>
                    <div className="text-xl font-bold text-cyber-yellow font-mono">
                      {service.pricing === 'CUSTOM' ? 'CUSTOM' : `$${service.pricing}`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground font-mono">DURATION</div>
                    <div className="text-sm font-bold text-cyber-cyan font-mono">
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <CyberButton 
                  variant={service.status === 'available' ? 'cyber' : 'terminal'} 
                  className="w-full font-mono text-xs"
                  disabled={service.status === 'coming-soon'}
                >
                  {service.status === 'available' ? 'INITIATE_PROJECT' :
                   service.status === 'limited' ? 'REQUEST_ACCESS' :
                   'NOTIFY_WHEN_READY'}
                </CyberButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
            READY_TO_DEPLOY?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8">
            <span className="text-foreground">START YOUR</span>{' '}
            <span className="text-cyber-cyan neon-glow">AI JOURNEY</span>
          </h2>
          
          <p className="text-lg font-mono leading-relaxed text-muted-foreground mb-8">
            Connect with our neural architects to discuss your AI implementation strategy.
            Every project begins with understanding your unique challenges and objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberButton variant="cyber" size="lg" className="font-mono tracking-wider">
              SCHEDULE_CONSULTATION
            </CyberButton>
            <CyberButton variant="ghost" size="lg" className="font-mono tracking-wider">
              VIEW_PORTFOLIO
            </CyberButton>
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

export default Services;