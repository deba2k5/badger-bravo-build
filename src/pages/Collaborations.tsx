import { Navigation } from '@/components/Navigation';
import { ThreeScene } from '@/components/ThreeScene';
import { HeroCyberGrid } from '@/components/HeroCyberGrid';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { CyberButton } from '@/components/ui/cyber-button';

const collaborationEvents = [
  {
    id: 1,
    title: "SMART MAKEATHON 2025",
    date: "6th - 7th September 2025",
    type: "MAKEATHON",
    status: "COMPLETED",
    participants: 200,
    location: "TECH_ARENA",
    description: "Innovation-driven makeathon focusing on smart solutions and AI-powered prototypes for real-world challenges.",
    technologies: ["IoT", "AI_ML", "ROBOTICS", "SMART_SYSTEMS"]
  },
  {
    id: 2,
    title: "IEM HACKOASIS 2.0",
    date: "20th September 2025",
    type: "HACKATHON",
    status: "COMPLETED",
    participants: 300,
    location: "IEM_CAMPUS",
    description: "Premier coding competition bringing together brilliant minds to create innovative tech solutions.",
    technologies: ["WEB_DEV", "AI_ML", "BLOCKCHAIN", "MOBILE_APP"]
  },
  {
    id: 3,
    title: "HACKSPIRE 2025",
    date: "31st Oct - 1st Nov 2025",
    type: "HACKATHON",
    status: "UPCOMING",
    participants: 400,
    location: "INNOVATION_HUB",
    description: "Next-generation hackathon inspiring breakthrough innovations in AI, quantum computing, and emerging technologies.",
    technologies: ["QUANTUM_AI", "NEURAL_NETWORKS", "EDGE_COMPUTING", "BIOTECH"]
  }
];

const Collaborations = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <CursorTrail />
      <ThreeScene />
      <HeroCyberGrid />
      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-cyan mb-4">
              EVENT
            </h1>
            <div className="text-6xl md:text-8xl font-black font-orbitron inspire-glow mb-6">
              COLLABORATIONS
            </div>
            <p className="text-foreground/80 font-tech text-lg max-w-3xl mx-auto leading-relaxed">
              Join the collective intelligence. Collaborate with global minds to shape the AI future.
            </p>
          </div>
          </div>
        </section>

        {/* Collaboration Stats */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "ACTIVE_EVENTS", value: "12", icon: "🚀" },
                { label: "GLOBAL_PARTNERS", value: "450+", icon: "🌐" },
                { label: "NEURAL_CONNECTIONS", value: "1.2K", icon: "🧠" },
                { label: "SUCCESS_RATE", value: "98.7%", icon: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="box-3d p-6 text-center backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-tech font-bold text-cyber-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70 font-tech text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "ACTIVE_EVENTS", value: "3", icon: "🚀" },
                { label: "GLOBAL_PARTNERS", value: "50+", icon: "🌐" },
                { label: "NEURAL_CONNECTIONS", value: "500+", icon: "🧠" },
                { label: "SUCCESS_RATE", value: "100%", icon: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="box-3d p-6 text-center backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-orbitron font-bold text-cyber-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70 font-tech text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-cyan mb-4">
                EVENT_COLLABORATIONS
              </h2>
              <p className="text-foreground/80 font-tech text-lg">
                Our journey through innovation and collaboration
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {collaborationEvents.map((event) => (
                <div key={event.id} className="box-3d rounded-lg backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300 group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-orbitron text-xs px-3 py-1 border rounded ${
                        event.status === 'COMPLETED' ? 'text-terminal-green border-terminal-green/30' :
                        event.status === 'UPCOMING' ? 'text-cyber-cyan border-cyber-cyan/30' :
                        'text-cyber-yellow border-cyber-yellow/30'
                      }`}>
                        {event.status}
                      </span>
                      <span className="text-foreground/60 font-tech text-xs">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-foreground font-orbitron text-2xl font-semibold mb-4 group-hover:text-cyber-cyan transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-foreground/70 font-tech text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/60 font-tech text-sm">DATE:</span>
                        <span className="text-foreground font-tech text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/60 font-tech text-sm">LOCATION:</span>
                        <span className="text-foreground font-tech text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/60 font-tech text-sm">PARTICIPANTS:</span>
                        <span className="text-cyber-cyan font-orbitron text-sm font-semibold">{event.participants}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-foreground/60 font-tech text-sm mb-2">TECHNOLOGIES:</div>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech, index) => (
                          <span key={index} className="text-cyber-cyan font-tech text-xs px-2 py-1 border border-cyber-cyan/30 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <CyberButton 
                        variant="secondary" 
                        size="sm" 
                        className="font-tech text-xs flex-1"
                        disabled={event.status === 'COMPLETED'}
                      >
                        {event.status === 'COMPLETED' ? 'COMPLETED' : 'JOIN_EVENT'}
                      </CyberButton>
                      <CyberButton variant="ghost" size="sm" className="font-tech text-xs">
                        DETAILS →
                      </CyberButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="box-3d p-12 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-tech font-bold text-cyber-cyan mb-4">
                NEURAL_PARTNERSHIP
              </h3>
              <p className="text-foreground/80 font-tech text-lg mb-8">
                Ready to join the collective? Propose your collaboration and expand the neural network.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CyberButton variant="cyber" size="lg" className="font-tech">
                  PROPOSE_COLLABORATION
                </CyberButton>
                <CyberButton variant="ghost" size="lg" className="font-tech">
                  VIEW_PARTNERSHIPS
                </CyberButton>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Collaborations;