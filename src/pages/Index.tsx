import { Navigation } from '@/components/Navigation';
import { SystemStatus } from '@/components/SystemStatus';
import { CountdownTimer } from '@/components/CountdownTimer';
import { ServiceModules } from '@/components/ServiceModules';
import { CyberButton } from '@/components/ui/cyber-button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background matrix-bg relative overflow-x-hidden">
      {/* System Status Overlays */}
      <SystemStatus />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Neural Network Training Protocol Header */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 font-mono text-xs text-cyber-cyan">
        <div className="flex items-center space-x-2 animate-pulse">
          <span>&gt;</span>
          <span>NEURAL_NETWORK_TRAINING_PROTOCOL</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono leading-tight mb-4">
                <span className="text-foreground">INNOVATE TO</span>
              </h1>
              <div className="text-5xl md:text-7xl lg:text-8xl font-black font-mono inspire-glow animate-pulse-glow mb-4">
                INSPIRE
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono text-cyber-yellow">
                2025
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-cyber-cyan font-mono text-lg md:text-xl mb-8 tracking-wider">
              NEXT AI REVOLUTION
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-12 space-y-2">
              <p className="text-cyber-cyan font-mono text-sm md:text-base tracking-wider leading-relaxed">
                ENTER THE NEURAL FRONTIER. MASTER AI TECHNOLOGIES.
              </p>
              <p className="text-cyber-cyan font-mono text-sm md:text-base tracking-wider leading-relaxed">
                DEPLOY. SCALE. DOMINATE THE DIGITAL ECOSYSTEM.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <CyberButton variant="secondary" size="lg" className="font-mono tracking-wider">
                <span className="mr-2">▶</span>
                APPLY WITH DEVFOLIO
                <span className="ml-2">→</span>
              </CyberButton>
              <CyberButton variant="ghost" size="lg" className="font-mono tracking-wider">
                <span className="mr-2">↓</span>
                GUIDELINES
              </CyberButton>
            </div>
          </div>
        </section>

        {/* Service Modules Section */}
        <ServiceModules />

        {/* Final CTA */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <CyberButton variant="cyber" size="xl" className="font-mono tracking-wider text-xl px-12">
              INITIATE_NEURAL_HANDSHAKE
            </CyberButton>
          </div>
        </section>
      </main>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Matrix Rain Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
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

        {/* Scanning Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;