import { Navigation } from '@/components/Navigation';
import { SystemStatus } from '@/components/SystemStatus';
import { CyberButton } from '@/components/ui/cyber-button';
import { useState, useEffect } from 'react';

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
    id: 'neural-vision',
    title: 'NEURAL VISION SYSTEM',
    category: 'COMPUTER_VISION',
    description: 'Advanced computer vision system for real-time object detection and classification in autonomous vehicles.',
    technologies: ['PyTorch', 'OpenCV', 'CUDA', 'TensorRT', 'ROS'],
    status: 'deployed',
    completion: 100,
    impact: '45% reduction in false positives',
    client: 'AUTOMOTIVE_CORP',
    year: '2024',
    metrics: {
      performance: 98,
      accuracy: 96,
      efficiency: 94
    }
  },
  {
    id: 'quantum-optimizer',
    title: 'QUANTUM OPTIMIZER',
    category: 'QUANTUM_AI',
    description: 'Hybrid quantum-classical optimization algorithm for supply chain management and logistics.',
    technologies: ['Qiskit', 'TensorFlow', 'IBM Quantum', 'Python', 'Docker'],
    status: 'in-progress',
    completion: 78,
    impact: '32% cost reduction projected',
    client: 'LOGISTICS_GLOBAL',
    year: '2024',
    metrics: {
      performance: 89,
      accuracy: 92,
      efficiency: 87
    }
  },
  {
    id: 'nlp-assistant',
    title: 'CORPORATE AI ASSISTANT',
    category: 'NATURAL_LANGUAGE',
    description: 'Multi-modal AI assistant for enterprise knowledge management and automated customer support.',
    technologies: ['Transformers', 'LangChain', 'FastAPI', 'Redis', 'PostgreSQL'],
    status: 'completed',
    completion: 100,
    impact: '60% reduction in support tickets',
    client: 'ENTERPRISE_TECH',
    year: '2024',
    metrics: {
      performance: 95,
      accuracy: 93,
      efficiency: 97
    }
  },
  {
    id: 'bio-analyzer',
    title: 'BIOMEDICAL DATA ANALYZER',
    category: 'HEALTHCARE_AI',
    description: 'Deep learning system for medical image analysis and diagnostic assistance in radiology.',
    technologies: ['TensorFlow', 'DICOM', 'Flask', 'MongoDB', 'AWS'],
    status: 'deployed',
    completion: 100,
    impact: '89% diagnostic accuracy',
    client: 'MEDICAL_CENTER',
    year: '2023',
    metrics: {
      performance: 94,
      accuracy: 89,
      efficiency: 91
    }
  },
  {
    id: 'predictive-maintenance',
    title: 'PREDICTIVE MAINTENANCE AI',
    category: 'INDUSTRIAL_IOT',
    description: 'IoT-integrated predictive maintenance system using sensor data and machine learning for equipment optimization.',
    technologies: ['Scikit-learn', 'InfluxDB', 'Grafana', 'MQTT', 'Edge Computing'],
    status: 'deployed',
    completion: 100,
    impact: '40% downtime reduction',
    client: 'MANUFACTURING_INC',
    year: '2023',
    metrics: {
      performance: 92,
      accuracy: 88,
      efficiency: 95
    }
  },
  {
    id: 'neural-trading',
    title: 'NEURAL TRADING ALGORITHM',
    category: 'FINANCIAL_AI',
    description: 'High-frequency trading algorithm using reinforcement learning and market sentiment analysis.',
    technologies: ['PyTorch', 'Alpha-Go', 'Redis', 'Kafka', 'C++'],
    status: 'research',
    completion: 45,
    impact: 'Research phase',
    client: 'FINTECH_VENTURES',
    year: '2024',
    metrics: {
      performance: 78,
      accuracy: 82,
      efficiency: 85
    }
  }
];

const categories = ['ALL', 'COMPUTER_VISION', 'QUANTUM_AI', 'NATURAL_LANGUAGE', 'HEALTHCARE_AI', 'INDUSTRIAL_IOT', 'FINANCIAL_AI'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedCategory === 'ALL') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'text-terminal-green border-terminal-green';
      case 'deployed': return 'text-cyber-cyan border-cyber-cyan';
      case 'in-progress': return 'text-terminal-amber border-terminal-amber';
      case 'research': return 'text-terminal-blue border-terminal-blue';
      default: return 'text-muted-foreground border-muted';
    }
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '✓';
      case 'deployed': return '🚀';
      case 'in-progress': return '⚡';
      case 'research': return '🔬';
      default: return '•';
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
              PROJECT_PORTFOLIO.exe
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6 animate-fade-in-up">
              <span className="text-foreground">AI PROJECTS</span>
              <br />
              <span className="inspire-glow">DEPLOYED</span>
            </h1>
            <p className="text-cyber-cyan font-mono text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              REAL-WORLD AI IMPLEMENTATIONS ACROSS INDUSTRIES. FROM COMPUTER VISION TO QUANTUM COMPUTING.
              <br />
              EACH PROJECT REPRESENTS A BREAKTHROUGH IN ARTIFICIAL INTELLIGENCE APPLICATION.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                {projects.length}
              </div>
              <div className="text-xs text-muted-foreground font-mono">TOTAL_PROJECTS</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                {projects.filter(p => p.status === 'deployed').length}
              </div>
              <div className="text-xs text-muted-foreground font-mono">DEPLOYED</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                95%
              </div>
              <div className="text-xs text-muted-foreground font-mono">AVG_ACCURACY</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-4 neon-border">
              <div className="text-2xl font-bold text-cyber-yellow mb-1 neon-glow">
                6
              </div>
              <div className="text-xs text-muted-foreground font-mono">INDUSTRIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-cyber-cyan/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-mono border transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(var(--primary)/0.3)]'
                    : 'bg-card/50 text-muted-foreground border-cyber-cyan/30 hover:text-cyber-cyan'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card/50 backdrop-blur-sm border border-cyber-cyan/30 p-6 neon-border transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transform hover:scale-[1.02] animate-fade-in-up ${
                  selectedProject === project.id ? 'shadow-[0_0_40px_hsl(var(--primary)/0.4)] scale-[1.02]' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl animate-float">{getStatusIcon(project.status)}</div>
                  <div className={`text-xs font-mono px-3 py-1 border rounded ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', '_').toUpperCase()}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-mono text-cyber-cyan mb-2 neon-glow">
                    {project.title}
                  </h3>
                  <div className="text-sm text-cyber-yellow font-mono mb-3">
                    {project.category}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-muted-foreground">COMPLETION</span>
                    <span className="text-cyber-yellow">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-muted/20 h-2 rounded">
                    <div 
                      className="bg-gradient-to-r from-cyber-cyan to-cyber-yellow h-2 rounded transition-all duration-1000"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex justify-between items-center mb-4 text-xs font-mono">
                  <div>
                    <div className="text-muted-foreground">CLIENT</div>
                    <div className="text-cyber-cyan">{project.client}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">YEAR</div>
                    <div className="text-cyber-cyan">{project.year}</div>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4 p-3 bg-card/30 border border-cyber-cyan/20 rounded">
                  <div className="text-xs text-cyber-yellow font-mono mb-1">IMPACT:</div>
                  <div className="text-sm text-terminal-green font-mono">{project.impact}</div>
                </div>

                {/* Expandable Content */}
                {selectedProject === project.id && (
                  <div className="animate-fade-in-up">
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="text-xs text-cyber-cyan font-mono mb-2 tracking-wider">
                        TECHNOLOGIES:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3">
                      <div className="text-xs text-cyber-cyan font-mono mb-2 tracking-wider">
                        PERFORMANCE_METRICS:
                      </div>
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-muted-foreground">{key.toUpperCase()}</span>
                            <span className="text-cyber-yellow">{value}%</span>
                          </div>
                          <div className="w-full bg-muted/20 h-1 rounded">
                            <div 
                              className="bg-gradient-to-r from-cyber-cyan to-terminal-green h-1 rounded transition-all duration-1000"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="mt-6">
                  <CyberButton variant="terminal" className="w-full font-mono text-xs">
                    {selectedProject === project.id ? 'MINIMIZE_DETAILS' : 'VIEW_DETAILS'}
                  </CyberButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">
            INTERESTED_IN_COLLABORATION?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8">
            <span className="text-foreground">LET'S BUILD</span>{' '}
            <span className="text-cyber-cyan neon-glow">THE FUTURE</span>
          </h2>
          
          <p className="text-lg font-mono leading-relaxed text-muted-foreground mb-8">
            Every project is an opportunity to push the boundaries of what's possible with AI.
            Ready to start your next revolutionary project?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberButton variant="cyber" size="lg" className="font-mono tracking-wider">
              START_NEW_PROJECT
            </CyberButton>
            <CyberButton variant="ghost" size="lg" className="font-mono tracking-wider">
              REQUEST_CASE_STUDY
            </CyberButton>
          </div>
        </div>
      </section>

      {/* Matrix Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(25)].map((_, i) => (
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

export default Projects;