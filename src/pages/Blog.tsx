import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BlogCarousel } from '@/components/BlogCarousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              LATEST
            </h1>
            <div className="text-5xl md:text-7xl font-black text-primary mb-6">
              BLOG UPDATES
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Stay connected to the pulse of AI evolution. Real-time insights from the digital frontier.
            </p>
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
            <div className="p-12 rounded-lg bg-card border border-border shadow-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">
                SUBSCRIBE
              </h3>
              <p className="text-muted-foreground mb-8">
                Subscribe to receive updates directly to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="your.email@domain.com"
                  className="flex-1"
                />
                <Button>
                  SUBSCRIBE
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

export default Blog;