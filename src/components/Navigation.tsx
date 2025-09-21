import { CyberButton } from './ui/cyber-button';

const navItems = [
  { name: 'MODULES', href: '#modules' },
  { name: 'SERVICES', href: '#services' },
  { name: 'NETWORK', href: '#network' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'BLOG', href: '#blog' },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-cyber-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-cyber-cyan font-mono font-bold text-xl tracking-wider">
                <span className="neon-glow">AI ZENERA</span>
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                NEURAL_NETWORK_ACTIVE
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-cyber-cyan font-mono text-sm tracking-wider transition-colors duration-300 hover:neon-glow px-3 py-2 relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <CyberButton variant="cyber" size="sm" className="hidden sm:inline-flex">
              INITIALIZE
            </CyberButton>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <CyberButton variant="ghost" size="icon">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </CyberButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};