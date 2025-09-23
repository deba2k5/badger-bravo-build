import { Navigation } from '@/components/Navigation';
import { CyberButton } from '@/components/ui/cyber-button';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'deployed' | 'research';
  completion: number;
  impact: string;
  client: string;
  year: string;
  metrics: {
    performance: number;
    accuracy: number;
    efficiency: number;
  };
}

const projects: Project[] = [
  {
    id: 'AIZENERA-1',
    title: 'TO BE REVEALED',
    category: 'COMING SOON',
    description: 'COMING SOON',
    technologies: ['COMING SOON'],
    status: 'research', // Use a valid status
    completion: 0,
    impact: 'COMING SOON',
    client: 'COMING SOON',
    year: '2025',
    metrics: {
      performance: 0,
      accuracy: 0,
      efficiency: 0
    }
  },
  {
    id: 'AIZENERA-2',
    title: 'TO BE REVEALED',
    category: 'COMING SOON',
    description: 'COMING SOON',
    technologies: ['COMING SOON'],
    status: 'research',
    completion: 0,
    impact: 'COMING SOON',
    client: 'COMING SOON',
    year: '2025',
    metrics: {
      performance: 0,
      accuracy: 0,
      efficiency: 0
    }
  },
  {
    id: 'AIZENERA-3',
    title: 'TO BE REVEALED',
    category: 'COMING SOON',
    description: 'COMING SOON',
    technologies: ['COMING SOON'],
    status: 'research',
    completion: 0,
    impact: 'COMING SOON',
    client: 'COMING SOON',
    year: '2025',
    metrics: {
      performance: 0,
      accuracy: 0,
      efficiency: 0
    }
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = ['all', 'COMPUTER_VISION', 'GENERATIVE_AI', 'NATURAL_LANGUAGE'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-terminal-green';
      case 'deployed': return 'text-cyber-cyan';
      case 'in-progress': return 'text-cyber-yellow';
      case 'research': return 'text-cyber-blue';
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
            AI PROJECTS
          </h1>
          <p className="text-xl font-tech text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge AI solutions that are transforming industries worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-tech text-sm tracking-wider transition-all duration-300 box-3d ${
                selectedCategory === category
                  ? 'border-cyber-cyan/50 text-cyber-cyan'
                  : 'text-foreground/80 hover:text-cyber-cyan hover:border-cyber-cyan/30'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="box-3d p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-orbitron font-semibold text-cyber-cyan mb-1">
                    {project.title}
                  </h3>
                  <p className="text-cyber-yellow font-tech text-sm">{project.category}</p>
                </div>
                <div className={`font-tech text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status.toUpperCase().replace('-', '_')}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 font-tech text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground font-tech text-xs">COMPLETION</span>
                  <span className="text-cyber-cyan font-tech text-xs font-semibold">{project.completion}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyber-cyan to-terminal-green h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedProject === project.id && (
                <div className="border-t border-border/50 pt-4 mt-4 space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-orbitron font-semibold text-cyber-yellow mb-2">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-muted rounded text-cyber-cyan font-tech text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="font-orbitron font-semibold text-cyber-yellow mb-2">METRICS</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-cyber-cyan font-tech text-lg font-semibold">
                          {project.metrics.performance}%
                        </div>
                        <div className="text-muted-foreground font-tech text-xs">PERFORMANCE</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyber-yellow font-tech text-lg font-semibold">
                          {project.metrics.accuracy}%
                        </div>
                        <div className="text-muted-foreground font-tech text-xs">ACCURACY</div>
                      </div>
                      <div className="text-center">
                        <div className="text-terminal-green font-tech text-lg font-semibold">
                          {project.metrics.efficiency}%
                        </div>
                        <div className="text-muted-foreground font-tech text-xs">EFFICIENCY</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/30">
                <div>
                  <span className="text-muted-foreground font-tech text-xs">CLIENT: </span>
                  <span className="text-cyber-cyan font-tech text-sm font-semibold">{project.client}</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-tech text-xs">YEAR: </span>
                  <span className="text-cyber-yellow font-tech text-sm font-semibold">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'PROJECTS COMPLETED', value: '47', color: 'text-cyber-cyan' },
            { label: 'CLIENTS SERVED', value: '23', color: 'text-cyber-yellow' },
            { label: 'AI MODELS DEPLOYED', value: '89', color: 'text-terminal-green' }
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

        {/* CTA */}
        <div className="text-center">
          <div className="box-3d p-8 rounded-lg backdrop-blur-sm mb-8">
            <h2 className="text-3xl font-orbitron font-bold text-cyber-cyan mb-4">
              READY FOR YOUR PROJECT?
            </h2>
            <p className="text-foreground/80 font-tech text-lg leading-relaxed">
              Let's discuss how we can bring your AI vision to life.
            </p>
          </div>
          <a href="/contact">
            <CyberButton variant="cyber" size="lg" className="font-tech tracking-wider">
              NEURAL_CONNECT
            </CyberButton>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
