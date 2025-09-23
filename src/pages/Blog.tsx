import { Navigation } from '@/components/Navigation';
import { ThreeScene } from '@/components/ThreeScene';
import { HeroCyberGrid } from '@/components/HeroCyberGrid';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { CyberButton } from '@/components/ui/cyber-button';
import { BlogCarousel } from '@/components/BlogCarousel';

const blogPosts = [
  {
    id: 1,
    title: "COMING SOON",
    date: "TBD",
    category: "AI RESEARCH",
    excerpt: "Exciting AI research articles and breakthrough discoveries will be published here soon. Stay tuned for cutting-edge insights.",
    image: "/api/placeholder/400/250",
    readTime: "COMING SOON",
    author: "AIZENERA TEAM"
  },
  {
    id: 2,
    title: "COMING SOON",
    date: "TBD",
    category: "TECHNOLOGY",
    excerpt: "Latest technology trends, AI implementations, and industry innovations will be featured in upcoming blog posts.",
    image: "/api/placeholder/400/250",
    readTime: "COMING SOON",
    author: "AIZENERA TEAM"
  },
  {
    id: 3,
    title: "COMING SOON",
    date: "TBD",
    category: "TUTORIALS",
    excerpt: "Step-by-step tutorials, AI development guides, and educational content will be available here very soon.",
    image: "/api/placeholder/400/250",
    readTime: "COMING SOON",
    author: "AIZENERA TEAM"
  },
  {
    id: 4,
    title: "COMING SOON",
    date: "TBD",
    category: "INDUSTRY NEWS",
    excerpt: "Latest news from the AI industry, startup stories, and collaboration announcements coming soon.",
    image: "/api/placeholder/400/250",
    readTime: "COMING SOON",
    author: "AIZENERA TEAM"
  },
  {
    id: 5,
    title: "COMING SOON",
    date: "TBD",
    category: "CASE STUDIES",
    excerpt: "Real-world AI implementation case studies and success stories will be shared in upcoming posts.",
    image: "/api/placeholder/400/250",
    readTime: "COMING SOON",
    author: "AIZENERA TEAM"
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-cyan mb-4">
              LATEST
            </h1>
            <div className="text-6xl md:text-8xl font-black font-orbitron inspire-glow mb-6">
              NEURAL_UPDATES
            </div>
            <p className="text-foreground/80 font-tech text-lg max-w-3xl mx-auto leading-relaxed">
              Stay connected to the pulse of AI evolution. Real-time insights from the digital frontier.
            </p>
          </div>
          </div>
        </section>

        {/* Blog Carousel */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <BlogCarousel posts={blogPosts} />
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