import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              EVENT
            </h1>
            <div className="text-5xl md:text-7xl font-black text-primary mb-6">
              COLLABORATIONS
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Join the collective intelligence. Collaborate with global minds to shape the AI future.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "ACTIVE EVENTS", value: "3", icon: "🚀" },
                { label: "GLOBAL PARTNERS", value: "50+", icon: "🌐" },
                { label: "CONNECTIONS", value: "500+", icon: "🧠" },
                { label: "SUCCESS RATE", value: "100%", icon: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="p-6 text-center bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                EVENT COLLABORATIONS
              </h2>
              <p className="text-muted-foreground text-lg">
                Our journey through innovation and collaboration
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {collaborationEvents.map((event) => (
                <div key={event.id} className="rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-xs px-3 py-1 border rounded ${
                        event.status === 'COMPLETED' ? 'text-green-600 border-green-600/30 bg-green-600/5' :
                        event.status === 'UPCOMING' ? 'text-primary border-primary/30 bg-primary/5' :
                        'text-amber-600 border-amber-600/30 bg-amber-600/5'
                      }`}>
                        {event.status}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-foreground text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">DATE:</span>
                        <span className="text-foreground text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">LOCATION:</span>
                        <span className="text-foreground text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">PARTICIPANTS:</span>
                        <span className="text-primary text-sm font-semibold">{event.participants}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-muted-foreground text-sm mb-2">TECHNOLOGIES:</div>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech, index) => (
                          <span key={index} className="text-primary text-xs px-2 py-1 bg-primary/10 border border-primary/30 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="default"
                        size="sm" 
                        className="flex-1"
                        disabled={event.status === 'COMPLETED'}
                      >
                        {event.status === 'COMPLETED' ? 'COMPLETED' : 'JOIN EVENT'}
                      </Button>
                      <Button variant="outline" size="sm">
                        DETAILS →
                      </Button>
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
            <div className="p-12 rounded-lg bg-card border border-border shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                PARTNERSHIPS
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to collaborate? Propose your partnership and join our network.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  PROPOSE COLLABORATION
                </Button>
                <Button variant="outline" size="lg">
                  VIEW PARTNERSHIPS
                </Button>
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