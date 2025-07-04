import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center space-x-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 relative overflow-hidden
                ${activeSection === item.id 
                  ? 'text-neon-blue bg-neon-blue/20 shadow-lg shadow-neon-blue/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="relative z-10">{item.name}</span>
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;