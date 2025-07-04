import { ArrowDown, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rishiImg from '@/assets/me.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-blue/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-neon-purple/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-neon-teal/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 border-2 border-neon-pink/40 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Name and Title */}
          <div className="text-center lg:text-left space-y-4 order-2 lg:order-1">
            <div className="space-y-3">
              {/* Animated greeting */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-neon-blue">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-xs md:text-sm font-medium">Hello, I'm</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Kurnool </span>
                <span className="gradient-text block lg:inline">Rishi Kumar</span>
                <span className="text-neon-teal block">Reddy</span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Code className="w-5 h-5 text-neon-blue" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-neon-blue">
                  Software Engineer
                </h2>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Crafting seamless digital experiences with modern technologies and innovative solutions
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-neon-blue to-neon-teal text-white hover:from-neon-teal hover:to-neon-blue transition-all duration-300 transform hover:scale-105 shadow-lg text-sm px-6 py-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300 transform hover:scale-105 text-sm px-6 py-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main profile container */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full relative overflow-hidden border-4 border-gradient-to-r from-neon-blue via-neon-purple to-neon-teal p-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-teal">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src={rishiImg}
                    /*src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"*/
                    alt="Kurnool Rishi Kumar Reddy - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon-blue rounded-full"></div>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-2 h-2 bg-neon-purple rounded-full"></div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-teal rounded-full"></div>
                <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-2 h-2 bg-neon-pink rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center space-y-1 text-neon-blue hover:text-white transition-colors">
          <span className="text-xs">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;