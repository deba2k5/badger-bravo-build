import { Navigation } from '@/components/Navigation';
import { CountdownTimer } from '@/components/CountdownTimer';
import { ServiceModules } from '@/components/ServiceModules';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* AI Badge */}
            <div className="mb-8 flex justify-center">
              <div className="px-6 py-3 bg-primary/10 rounded-lg border border-primary/20">
                <span className="text-primary text-sm font-semibold tracking-wider">
                  ⚡ NEXT-GEN AI PLATFORM ⚡
                </span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-foreground">INNOVATE TO</span>
              </h1>
              <div className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-primary">
                INSPIRE
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                JOIN AI ZENERA
              </div>
            </div>

            {/* Subtitle */}
            <div className="relative mb-12">
              <div className="py-4 px-8 bg-primary/10 rounded-lg inline-block border border-primary/20">
                <span className="text-primary text-lg md:text-xl font-semibold tracking-wider">
                  NEXT AI REVOLUTION
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <CountdownTimer />
            </div>

            {/* Description */}
            <div className="max-w-5xl mx-auto mb-16 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary text-lg font-semibold mb-2">⚡ NEURAL</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Advanced AI training protocols for next-gen intelligence systems
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary text-lg font-semibold mb-2">🚀 DEPLOY</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Seamless integration with quantum-speed deployment solutions
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary text-lg font-semibold mb-2">🎯 DOMINATE</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Command the digital ecosystem with AI supremacy technology
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <a href="/services">
                <Button size="lg" className="text-base px-8">
                  EXPLORE SERVICES →
                </Button>
              </a>
              <a href="/projects">
                <Button size="lg" variant="outline" className="text-base px-8">
                  VIEW PROJECTS
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Current Service Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="p-8 rounded-lg bg-card border border-border shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-lg mb-4 border border-primary/20">
                  <span className="text-primary text-sm font-semibold tracking-wider">
                    🎓 CURRENT SERVICE 🎓
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  GENERATIVE AI MASTERCLASS
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                  Transform your career with cutting-edge Generative AI skills. Master GPT models, image generation, 
                  and advanced AI techniques in our comprehensive 8-week program.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold mb-2">8 WEEKS</div>
                  <div className="text-muted-foreground text-sm">DURATION</div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold mb-2">4th OCT</div>
                  <div className="text-muted-foreground text-sm">LAUNCH DATE</div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold mb-2">₹249</div>
                  <div className="text-muted-foreground text-sm">EARLY BIRD</div>
                </div>
              </div>

              <div className="text-center">
                <a href="/services">
                  <Button size="lg" className="text-base px-8">
                    ENROLL NOW
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Modules Section */}
        <ServiceModules />

        {/* Final CTA */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                READY TO GET STARTED?
              </h3>
              <p className="text-muted-foreground text-lg">
                Join the AI revolution and unlock infinite possibilities
              </p>
            </div>
            <a href="/contact">
              <Button size="lg" className="text-base px-12 py-6 text-lg">
                GET IN TOUCH
              </Button>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
