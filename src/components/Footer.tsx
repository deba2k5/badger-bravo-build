import { CyberButton } from '@/components/ui/cyber-button';

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyber-cyan to-cyber-yellow rounded mr-3"></div>
              <h3 className="text-2xl font-orbitron font-bold text-foreground">AI ZENERA</h3>
            </div>
            <p className="text-muted-foreground font-tech mb-6 leading-relaxed max-w-md">
              Pioneering the future of artificial intelligence with cutting-edge neural networks 
              and revolutionary AI solutions that transform digital ecosystems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/aizenera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <CyberButton variant="ghost" size="sm" className="font-tech">
                  <span className="mr-2">📷</span>
                  Instagram
                </CyberButton>
              </a>
              <a 
                href="mailto:contact@aizenera.com"
                className="group"
              >
                <CyberButton variant="ghost" size="sm" className="font-tech">
                  <span className="mr-2">📧</span>
                  Email
                </CyberButton>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 font-tech"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Neural Training',
                'AI Development',
                'Network Hub',
                'Data Analysis',
                'Machine Learning',
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground font-tech">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground font-tech text-sm mb-4 md:mb-0">
              © 2025 AI ZENERA. All rights reserved. | Powered by Neural Networks
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors font-tech">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors font-tech">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors font-tech">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};