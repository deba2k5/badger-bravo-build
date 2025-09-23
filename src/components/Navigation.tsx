import { CyberButton } from './ui/cyber-button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import aiZeneraLogo from '@/assets/aizenera-logo.png';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'BLOG', href: '/blog' },
  { name: 'COLLABORATIONS', href: '/collaborations' },
  { name: 'CONTACT', href: '/contact' },
];

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-cyber-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 hover:animate-pulse transition-all duration-300">
              <img src={aiZeneraLogo} alt="AI ZENERA" className="h-10 w-10" />
              <span className="text-cyber-cyan font-tech font-bold text-xl">
                AI_ZENERA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-mono transition-all duration-300 hover:neon-glow border border-transparent hover:border-cyber-cyan/30 ${
                    isActive(item.href) 
                      ? 'text-cyber-cyan neon-glow border-cyber-cyan/30 bg-cyber-cyan/10' 
                      : 'text-muted-foreground hover:text-cyber-cyan'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <CyberButton variant="terminal" size="sm" className="font-mono text-xs">
                NEURAL_ACCESS
              </CyberButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cyber-cyan p-2 hover:neon-glow transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-cyber-cyan/20 bg-background/95 backdrop-blur-sm animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-mono transition-all duration-300 border border-transparent hover:border-cyber-cyan/30 ${
                    isActive(item.href) 
                      ? 'text-cyber-cyan neon-glow border-cyber-cyan/30 bg-cyber-cyan/10' 
                      : 'text-muted-foreground hover:text-cyber-cyan'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};