import { Navigation } from '@/components/Navigation';
import { CyberButton } from '@/components/ui/cyber-button';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

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
    pricing: '5999',
    icon: '⚡',
    status: 'available',
    complexity: 95,
    duration: '16_WEEKS'
  },
  {
    id: 'quantum-ai',
    title: 'QUANTUM AI',
    subtitle: 'NEXT_GEN_COMPUTING',
    description: 'Cutting-edge quantum-enhanced AI algorithms for solving complex optimization problems.',
    features: [
      'Quantum Algorithm Design',
      'Hybrid Computing Models',
      'Optimization Solutions',
      'Quantum Machine Learning',
      'Error Correction',
      'Performance Analysis'
    ],
    pricing: '9999',
    icon: '🔮',
    status: 'limited',
    complexity: 98,
    duration: '20_WEEKS'
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-terminal-green';
      case 'limited': return 'text-cyber-yellow';
      case 'coming-soon': return 'text-cyber-cyan';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <CursorTrail />
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-cyan mb-4">
            AI SERVICES
          </h1>
          <p className="text-xl font-tech text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge AI solutions and neural network technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="box-3d p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 group cursor-pointer"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-cyber-cyan">
                      {service.title}
                    </h3>
                    <p className="text-cyber-yellow font-tech text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <div className={`font-tech text-xs font-semibold ${getStatusColor(service.status)}`}>
                  {service.status.toUpperCase().replace('-', '_')}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 font-tech text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Complexity Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground font-tech text-xs">COMPLEXITY</span>
                  <span className="text-cyber-cyan font-tech text-xs font-semibold">{service.complexity}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyber-cyan to-cyber-yellow h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${service.complexity}%` }}
                  ></div>
                </div>
              </div>

              {/* Expandable Features */}
              {expandedService === service.id && (
                <div className="border-t border-border/50 pt-4 mt-4">
                  <h4 className="font-orbitron font-semibold text-cyber-yellow mb-3">FEATURES</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-foreground/80 font-tech text-xs flex items-center">
                        <span className="text-cyber-cyan mr-2">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/30">
                <div>
                  <span className="text-muted-foreground font-tech text-xs">PRICE: </span>
                  <span className="text-cyber-cyan font-tech text-sm font-semibold">${service.pricing}</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-tech text-xs">DURATION: </span>
                  <span className="text-cyber-yellow font-tech text-sm font-semibold">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'CLIENTS SERVED', value: '247', color: 'text-cyber-cyan' },
            { label: 'AI MODELS DEPLOYED', value: '89', color: 'text-cyber-yellow' },
            { label: 'SUCCESS RATE', value: '97.2%', color: 'text-terminal-green' },
            { label: 'YEARS EXPERIENCE', value: '12+', color: 'text-cyber-cyan' }
          ].map((stat, index) => (
            <div key={index} className="box-3d p-6 rounded-lg backdrop-blur-sm text-center">
              <div className={`text-3xl font-orbitron font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-tech text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="box-3d p-8 rounded-lg backdrop-blur-sm mb-8">
            <h2 className="text-3xl font-orbitron font-bold text-cyber-cyan mb-4">
              READY TO REVOLUTIONIZE?
            </h2>
            <p className="text-foreground/80 font-tech text-lg leading-relaxed mb-6">
              Join hundreds of companies that have transformed their operations with our AI solutions.
            </p>
          </div>
          <a href="/contact">
            <CyberButton variant="cyber" size="lg" className="font-orbitron tracking-wider box-3d">
              START YOUR AI JOURNEY
            </CyberButton>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;