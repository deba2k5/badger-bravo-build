import { Navigation } from '@/components/Navigation';
import { SystemStatus } from '@/components/SystemStatus';
import { CyberButton } from '@/components/ui/cyber-button';
import { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
  projects: number;
  experience: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '001',
    name: 'DR. ALEX NEURAL',
    role: 'CHIEF_AI_ARCHITECT',
    specialization: 'Deep Learning & Neural Networks',
    avatar: '🧠',
    status: 'online',
    projects: 47,
    experience: '12_YEARS'
  },
  {
    id: '002',
    name: 'ZARA QUANTUM',
    role: 'SYSTEM_ENGINEER',
    specialization: 'Quantum Computing & Cryptography',
    avatar: '⚡',
    status: 'busy',
    projects: 23,
    experience: '8_YEARS'
  },
  {
    id: '003',
    name: 'MAYA SYNTH',
    role: 'UX_NEURAL_DESIGNER',
    specialization: 'Human-AI Interface Design',
    avatar: '🎨',
    status: 'online',
    projects: 31,
    experience: '6_YEARS'
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stats, setStats] = useState({
    projects: 145,
    clients: 89,
    uptime: 99.9,
    aiModels: 23
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        projects: prev.projects + Math.floor(Math.random() * 2),
        clients: prev.clients + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background matrix-bg relative overflow-x-hidden">
      <SystemStatus />
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider animate-fade-in-up">
              ABOUT_AI_ZENERA.exe
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6 animate-fade-in-up">
              <span className="text-foreground">NEURAL ARCHITECTURE</span>
              <br />
              <span className="inspire-glow">PIONEERS</span>
            </h1>
            <p className="text-cyber-cyan font-mono text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              WE ARE THE ARCHITECTS OF THE FUTURE. BUILDING AI SYSTEMS THAT TRANSCEND HUMAN LIMITATIONS.
              <br />
              CONNECTING MINDS ACROSS THE DIGITAL FRONTIER.
            </p>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-cyber-yellow mb-2 neon-glow">
                {stats.projects}+
              </div>
              <div className="text-xs text-muted-foreground font-mono">PROJECTS_DEPLOYED</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-cyber-yellow mb-2 neon-glow">
                {stats.clients}+
              </div>
              <div className="text-xs text-muted-foreground font-mono">NEURAL_CLIENTS</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-cyber-yellow mb-2 neon-glow">
                {stats.uptime}%
              </div>
              <div className="text-xs text-muted-foreground font-mono">SYSTEM_UPTIME</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-cyber-yellow mb-2 neon-glow">
                {stats.aiModels}
              </div>
              <div className="text-xs text-muted-foreground font-mono">AI_MODELS_ACTIVE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
              NEURAL_TEAM_MATRIX
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              <span className="text-foreground">CORE</span>{' '}
              <span className="text-cyber-cyan neon-glow">ARCHITECTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transform hover:scale-105 ${
                  activeIndex === index ? 'shadow-[0_0_40px_hsl(var(--primary)/0.4)] scale-105' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-float">{member.avatar}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-terminal-green' :
                      member.status === 'busy' ? 'bg-terminal-amber' : 'bg-terminal-red'
                    } animate-pulse`}></div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {member.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-mono text-cyber-cyan neon-glow">
                    {member.name}
                  </h3>
                  <div className="text-sm text-cyber-yellow font-mono">
                    {member.role}
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {member.specialization}
                  </p>
                  
                  <div className="flex justify-between text-xs font-mono pt-4 border-t border-cyber-cyan/20">
                    <span className="text-muted-foreground">PROJECTS:</span>
                    <span className="text-cyber-yellow">{member.projects}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">EXP:</span>
                    <span className="text-cyber-yellow">{member.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
            MISSION_PROTOCOL
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8">
            <span className="text-foreground">OUR</span>{' '}
            <span className="text-cyber-cyan neon-glow">DIRECTIVE</span>
          </h2>
          
          <div className="space-y-6 text-lg font-mono leading-relaxed">
            <p className="text-cyber-cyan terminal-scan">
              TO ACCELERATE THE CONVERGENCE OF HUMAN AND ARTIFICIAL INTELLIGENCE
            </p>
            <p className="text-muted-foreground">
              We believe in a future where AI amplifies human potential rather than replacing it.
              Our neural networks are designed to learn, adapt, and evolve alongside human creativity.
            </p>
            <p className="text-cyber-yellow">
              Every algorithm we develop is a step toward a more connected, intelligent world.
            </p>
          </div>

          <div className="mt-12">
            <CyberButton variant="cyber" size="lg" className="font-mono tracking-wider">
              JOIN_THE_REVOLUTION
            </CyberButton>
          </div>
        </div>
      </section>

      {/* Matrix Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(15)].map((_, i) => (
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

export default About;