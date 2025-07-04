import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="py-12 relative border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2024 <span className="text-white font-semibold">Rishi</span>. All rights reserved.
            </p>
          </div>

          {/* Center - Made with love */}
          <div className="text-center order-first md:order-none">
            <p className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>using</span>
              <span className="text-neon-blue font-semibold">React</span>
            </p>
          </div>

          {/* Right - Navigation Links */}
          <div className="text-center md:text-right">
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-8">
          <Button
            size="icon"
            onClick={scrollToTop}
            className="glass hover:bg-neon-blue/20 border-neon-blue text-neon-blue hover:text-white transition-all duration-300 animate-bounce-slow"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;