import { Navigation } from '@/components/Navigation';
import { ThreeScene } from '@/components/ThreeScene';
import { HeroCyberGrid } from '@/components/HeroCyberGrid';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { CyberButton } from '@/components/ui/cyber-button';

const blogPosts = [
  {
    id: 1,
    title: "NEURAL NETWORK BREAKTHROUGH 2024",
    date: "2024-03-15",
    category: "AI RESEARCH",
    excerpt: "Revolutionary advances in deep learning architectures that process quantum data streams with 99.8% accuracy rates.",
    image: "/api/placeholder/400/250",
    readTime: "5 MIN READ",
    author: "AI RESEARCH TEAM"
  },
  {
    id: 2,
    title: "QUANTUM COMPUTING INTEGRATION",
    date: "2024-03-10",
    category: "TECHNOLOGY",
    excerpt: "Seamless integration of quantum processors with traditional AI systems creating unprecedented computational power.",
    image: "/api/placeholder/400/250",
    readTime: "7 MIN READ",
    author: "QUANTUM DIVISION"
  },
  {
    id: 3,
    title: "AUTONOMOUS SYSTEM DEPLOYMENT",
    date: "2024-03-05",
    category: "AUTOMATION",
    excerpt: "Launch of self-optimizing AI systems across global infrastructure networks with real-time adaptation capabilities.",
    image: "/api/placeholder/400/250",
    readTime: "6 MIN READ",
    author: "DEPLOYMENT TEAM"
  }
];

const Blog = () => {
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
            <div className="mb-8">
              <div className="box-3d px-6 py-3 rounded-lg backdrop-blur-sm inline-block mb-6">
                <span className="text-cyber-cyan font-tech text-sm font-semibold tracking-wider">
                  📡 NEURAL UPDATES 📡
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-tech leading-tight mb-6">
              <span className="text-foreground">LATEST</span>
              <div className="text-cyber-cyan mt-2">NEURAL_UPDATES</div>
            </h1>
            
            <p className="text-foreground/80 font-tech text-lg max-w-3xl mx-auto leading-relaxed">
              Stay connected to the pulse of AI evolution. Real-time insights from the digital frontier.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="box-3d rounded-lg backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 rounded-t-lg mb-6 flex items-center justify-center">
                    <div className="text-cyber-cyan font-tech text-lg">AI_VISUAL_DATA</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyber-cyan font-tech text-xs px-3 py-1 border border-cyber-cyan/30 rounded">
                        {post.category}
                      </span>
                      <span className="text-foreground/60 font-tech text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-foreground font-tech text-xl font-semibold mb-3 group-hover:text-cyber-cyan transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-foreground/70 font-tech text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-foreground/60 font-tech text-xs">
                        <div>{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <CyberButton variant="ghost" size="sm" className="font-tech text-xs">
                        READ_MORE →
                      </CyberButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="box-3d p-12 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-tech font-bold text-cyber-cyan mb-4">
                NEURAL_SUBSCRIPTION
              </h3>
              <p className="text-foreground/80 font-tech mb-8">
                Subscribe to receive quantum-encrypted updates directly to your neural interface
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="neural.email@domain.ai"
                  className="flex-1 px-4 py-3 bg-background/50 border border-cyber-cyan/30 rounded font-tech text-sm text-foreground"
                />
                <CyberButton variant="secondary" className="font-tech">
                  CONNECT
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

export default Blog;