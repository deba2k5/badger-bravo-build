import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
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
    id: 'ai-masterclasses',
    title: 'AI MASTERCLASSES',
    subtitle: 'GENERATIVE AI PROTOCOL',
    description: 'Comprehensive AI education through cutting-edge Generative AI techniques and hands-on machine learning projects.',
    features: [
      'Generative AI Fundamentals',
      'Large Language Models',
      'Computer Vision & GANs',
      'Neural Architecture Design',
      'Prompt Engineering',
      'AI Ethics & Safety'
    ],
    pricing: '4999',
    icon: '🧠',
    status: 'available',
    complexity: 90,
    duration: '8 WEEKS'
  },
  {
    id: 'consultancy-services',
    title: 'CONSULTANCY SERVICES',
    subtitle: 'STRATEGIC AI IMPLEMENTATION',
    description: 'Enterprise-grade AI strategy consulting and implementation services for complete digital transformation.',
    features: [
      'AI Readiness Assessment',
      'Custom AI Solutions',
      'System Integration',
      'Performance Optimization',
      'Scalability Planning',
      'ROI Analysis & Metrics'
    ],
    pricing: '9999',
    icon: '⚡',
    status: 'available',
    complexity: 95,
    duration: '12 WEEKS'
  },
  {
    id: 'partnerships-collaborations',
    title: 'PARTNERSHIPS',
    subtitle: 'COLLABORATIVE AI VENTURES',
    description: 'Strategic partnerships and collaborations for joint AI research, development, and innovation projects.',
    features: [
      'Joint Research Projects',
      'Technology Transfer',
      'Innovation Partnerships',
      'Academic Collaborations',
      'Industry Alliances',
      'Startup Incubation'
    ],
    pricing: 'Custom',
    icon: '🤝',
    status: 'available',
    complexity: 88,
    duration: 'Flexible'
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600';
      case 'limited': return 'text-amber-600';
      case 'coming-soon': return 'text-primary';
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
            AI SERVICES
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge AI solutions and neural network technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <div className={`text-xs font-semibold ${getStatusColor(service.status)}`}>
                  {service.status.toUpperCase().replace('-', ' ')}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Complexity Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-xs">COMPLEXITY</span>
                  <span className="text-primary text-xs font-semibold">{service.complexity}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${service.complexity}%` }}
                  ></div>
                </div>
              </div>

              {/* Expandable Features */}
              {expandedService === service.id && (
                <div className="border-t border-border pt-4 mt-4">
                  <h4 className="font-semibold text-primary mb-3">FEATURES</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground text-xs flex items-center">
                        <span className="text-primary mr-2">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                <div>
                  <span className="text-muted-foreground text-xs">PRICE: </span>
                  <span className="text-primary text-sm font-semibold">${service.pricing}</span>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs">DURATION: </span>
                  <span className="text-primary text-sm font-semibold">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'CLIENTS SERVED', value: '247', color: 'text-primary' },
            { label: 'AI MODELS DEPLOYED', value: '89', color: 'text-primary' },
            { label: 'SUCCESS RATE', value: '97.2%', color: 'text-primary' },
            { label: 'YEARS EXPERIENCE', value: '12+', color: 'text-primary' }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-lg bg-card border border-border text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="p-8 rounded-lg bg-card border border-border shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              READY TO REVOLUTIONIZE?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Join hundreds of companies that have transformed their operations with our AI solutions.
            </p>
          </div>
          <a href="/contact">
            <Button size="lg" className="px-12">
              START YOUR AI JOURNEY
            </Button>
          </a>
        </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Services;
