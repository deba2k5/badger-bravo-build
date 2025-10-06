import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  stats: Array<{ label: string; value: string }>;
}

const teamMembers: TeamMember[] = [
  {
    name: 'DEBANGSHU CHATTERJEE',
    role: 'CO FOUNDER',
    bio: 'Leading the charge in neural network architecture with experience in deep learning and AI research.',
    stats: [
      { label: 'PROJECTS', value: '5+' },
      { label: 'ACCURACY', value: '98.7%' },
      { label: 'STATUS', value: 'ACTIVE' }
    ]
  },
  {
    name: 'NIRMALYA SENGUPTA',
    role: 'CO FOUNDER',
    bio: 'Focused on optimizing AI algorithms for next-generation processing power.',
    stats: [
      { label: 'PROJECTS', value: '5+' },
      { label: 'EFFICIENCY', value: '98.2%' },
      { label: 'STATUS', value: 'BUSY' }
    ]
  },
  {
    name: 'TO BE REVEALED',
    role: 'TO BE REVEALED',
    bio: 'TO BE REVEALED',
    stats: [
      { label: 'PROJECTS', value: 'X' },
      { label: 'SATISFACTION', value: '99.9%' },
      { label: 'STATUS', value: 'ACTIVE' }
    ]
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            ABOUT AI ZENERA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of artificial intelligence through revolutionary neural networks 
            and cutting-edge machine learning technologies.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/50 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="space-y-2">
                {member.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex justify-between items-center">
                    <span className="text-muted-foreground text-xs">{stat.label}</span>
                    <span className="text-primary text-xs font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="p-8 rounded-lg bg-card border border-border shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            OUR MISSION
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-4xl mx-auto">
            To revolutionize the digital landscape through advanced AI technologies, creating intelligent 
            systems that enhance human potential and drive innovation across industries. Our commitment to 
            excellence and cutting-edge research positions us at the forefront of the AI revolution.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "INNOVATION",
              description: "Pushing boundaries with groundbreaking AI research and development",
              icon: "🚀"
            },
            {
              title: "EXCELLENCE",
              description: "Delivering superior solutions with precision and reliability",
              icon: "⭐"
            },
            {
              title: "INTEGRITY",
              description: "Building trust through ethical AI practices and transparency",
              icon: "🛡️"
            },
            {
              title: "COLLABORATION",
              description: "Fostering partnerships to accelerate technological advancement",
              icon: "🤝"
            }
          ].map((value, index) => (
            <div key={index} className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{value.icon}</span>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact">
            <Button size="lg" className="px-12">
              JOIN THE REVOLUTION
            </Button>
          </a>
        </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default About;
