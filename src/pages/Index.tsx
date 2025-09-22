import { Navigation } from '@/components/Navigation';
import { CountdownTimer } from '@/components/CountdownTimer';
import { ServiceModules } from '@/components/ServiceModules';
import { CyberButton } from '@/components/ui/cyber-button';
import { ThreeScene } from '@/components/ThreeScene';
import { HeroCyberGrid } from '@/components/HeroCyberGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Three.js Background */}
      <ThreeScene />
      
      {/* Cyber Grid Background */}
      <HeroCyberGrid />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* AI Badge */}
            <div className="mb-8 flex justify-center">
              <div className="bg-cyber-cyan/10 border border-cyber-cyan/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-cyber-cyan font-mono text-sm tracking-wider">
                  ⚡ NEXT-GEN AI PLATFORM ⚡
                </span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-mono leading-tight mb-6">
                <span className="text-foreground">INNOVATE TO</span>
              </h1>
              <div className="text-6xl md:text-8xl lg:text-9xl font-black font-mono inspire-glow animate-pulse-glow mb-6 relative">
                <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyber-cyan via-cyber-yellow to-cyber-cyan opacity-50 animate-pulse"></div>
                <div className="relative z-10">INSPIRE</div>
              </div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cyber-yellow glow-text">
                2025
              </div>
            </div>

            {/* Subtitle with animated background */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent blur-sm"></div>
              <div className="relative text-cyber-cyan font-mono text-xl md:text-2xl tracking-wider bg-background/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-lg py-4 px-8 inline-block">
                ⟨ NEXT AI REVOLUTION ⟩
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <CountdownTimer />
            </div>

            {/* Enhanced Description */}
            <div className="max-w-5xl mx-auto mb-16 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/30 backdrop-blur-sm border border-cyber-cyan/30 p-6 rounded-lg">
                  <div className="text-cyber-cyan font-mono text-lg mb-2">⚡ NEURAL</div>
                  <p className="text-cyber-cyan/80 font-mono text-sm">
                    Advanced AI training protocols for next-gen intelligence
                  </p>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-cyber-yellow/30 p-6 rounded-lg">
                  <div className="text-cyber-yellow font-mono text-lg mb-2">🚀 DEPLOY</div>
                  <p className="text-cyber-yellow/80 font-mono text-sm">
                    Seamless integration with quantum-speed deployment
                  </p>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-terminal-green/30 p-6 rounded-lg">
                  <div className="text-terminal-green font-mono text-lg mb-2">🎯 DOMINATE</div>
                  <p className="text-terminal-green/80 font-mono text-sm">
                    Command the digital ecosystem with AI supremacy
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <a href="/services" className="group">
                <CyberButton variant="secondary" size="lg" className="font-mono tracking-wider relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 via-transparent to-cyber-cyan/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center">
                    <span className="mr-3">▶</span>
                    EXPLORE SERVICES
                    <span className="ml-3">→</span>
                  </span>
                </CyberButton>
              </a>
              <a href="/projects" className="group">
                <CyberButton variant="ghost" size="lg" className="font-mono tracking-wider relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-yellow/20 via-transparent to-cyber-yellow/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center">
                    <span className="mr-3">⚡</span>
                    VIEW PROJECTS
                    <span className="ml-3">⚡</span>
                  </span>
                </CyberButton>
              </a>
            </div>
          </div>
        </section>

        {/* Service Modules Section */}
        <ServiceModules />

        {/* Enhanced Final CTA */}
        <section className="py-20 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-mono font-bold text-cyber-cyan mb-4">
                READY TO TRANSCEND?
              </h3>
              <p className="text-cyber-cyan/80 font-mono text-lg tracking-wider">
                Join the neural revolution and unlock infinite possibilities
              </p>
            </div>
            <a href="/contact" className="group inline-block">
              <CyberButton variant="cyber" size="xl" className="font-mono tracking-wider text-xl px-16 py-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan via-cyber-yellow to-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center">
                  <span className="mr-4">🧠</span>
                  INITIATE_NEURAL_HANDSHAKE
                  <span className="ml-4">🧠</span>
                </span>
              </CyberButton>
            </a>
          </div>
        </section>
      </main>

      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Matrix Rain Effect - Enhanced */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-cyan font-mono text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
              {Math.random() > 0.5 ? '1' : '0'}
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Multiple Scanning Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan-line"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-yellow to-transparent animate-scan-line" style={{ animationDelay: '2s', top: '30%' }}></div>
          <div className="h-px bg-gradient-to-r from-transparent via-terminal-green to-transparent animate-scan-line" style={{ animationDelay: '4s', top: '70%' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyber-cyan rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;