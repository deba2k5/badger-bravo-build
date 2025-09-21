import { CyberButton } from './ui/cyber-button';

const modules = [
  {
    title: 'NEURAL TRAINING',
    subtitle: 'ACADEMY_MODULE',
    description: 'Advanced AI education protocols. Master machine learning algorithms through immersive training simulations.',
    stats: [
      { label: 'COURSES', value: '15+' },
      { label: 'GRADUATES', value: '500+' },
      { label: 'SUCCESS_RATE', value: '98%' },
    ],
    icon: '⚡',
    status: 'ACTIVE',
    data: '500+',
    dataLabel: 'AI PROTOCOLS DEPLOYED',
  },
  {
    title: 'NETWORK HUB',
    subtitle: 'FREELANCER_PROTOCOL',
    description: 'Connect with elite AI specialists. Deploy talent to mission-critical projects across the digital frontier.',
    stats: [
      { label: 'SPECIALISTS', value: '200+' },
      { label: 'ACTIVE_PROJECTS', value: '50+' },
      { label: 'UPTIME', value: '99.5%' },
    ],
    icon: '</>', 
    status: 'ONLINE',
    data: '50+',
    dataLabel: 'NEURAL NETWORKS ACTIVE',
  },
  {
    title: 'DEVELOPMENT LAB',
    subtitle: 'INNOVATION_ENGINE',
    description: 'Next-generation AI solutions. From prototype to production deployment in the global neural network.',
    stats: [
      { label: 'DEPLOYED', value: '25+' },
      { label: 'OPERATIONS', value: '10M+' },
      { label: 'REAL-TIME', value: 'REAL-TIME' },
    ],
    icon: '>_',
    status: 'OPERATIONAL',
    data: '98%',
    dataLabel: 'SYSTEM EFFICIENCY',
  },
];

export const ServiceModules = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
            SYSTEM_OVERVIEW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
            <span className="text-foreground">NEURAL ARCHITECTURE</span>{' '}
            <span className="text-cyber-cyan neon-glow">INITIALIZATION</span>
          </h2>
          <p className="text-muted-foreground font-mono max-w-4xl mx-auto leading-relaxed">
            AIZENERA OPERATES AS A DISTRIBUTED NEURAL NETWORK. CONNECTING HUMAN INTELLIGENCE WITH ARTIFICIAL SYSTEMS.
          </p>
          <div className="text-cyber-yellow font-mono text-sm mt-4 tracking-wider">
            EDUCATION → IMPLEMENTATION → OPTIMIZATION → DOMINATION
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-cyber-yellow mb-2 neon-glow">
                {module.data}
              </div>
              <div className="text-xs text-muted-foreground font-mono tracking-wider">
                {module.dataLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Service Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Module Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-mono">{module.icon}</div>
                <div className={`text-xs font-mono px-2 py-1 border rounded ${
                  module.status === 'ACTIVE' ? 'text-terminal-green border-terminal-green' :
                  module.status === 'ONLINE' ? 'text-cyber-cyan border-cyber-cyan' :
                  'text-terminal-amber border-terminal-amber'
                }`}>
                  {module.status}
                </div>
              </div>

              {/* Module Title */}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-mono text-cyber-cyan mb-1 group-hover:neon-glow transition-all duration-300">
                  {module.title}
                </h3>
                <div className="text-xs text-muted-foreground font-mono">
                  {module.subtitle}
                </div>
              </div>

              {/* Module Description */}
              <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-6">
                {module.description}
              </p>

              {/* Module Stats */}
              <div className="space-y-3 mb-6">
                {module.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-mono">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold font-mono text-cyber-yellow">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Access Button */}
              <CyberButton variant="terminal" className="w-full font-mono text-xs">
                ACCESS_MODULE
              </CyberButton>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-cyber-cyan font-mono">
              2.5TB
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              KNOWLEDGE_BASE
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-cyber-cyan font-mono">
              847ms
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              RESPONSE_TIME
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-cyber-cyan font-mono">
              24/7
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              NEURAL_UPTIME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};