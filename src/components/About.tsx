import { Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const domains = [
    { title: 'Frontend Development', description: 'React, Next.js, TypeScript, TailwindCSS', icon: '🎨' },
    { title: 'Backend Development', description: 'Node.js, Express, MongoDB, PostgreSQL', icon: '⚙️' },
    { title: 'DevOps & Cloud', description: 'AWS, Docker, Kubernetes, CI/CD', icon: '☁️' },
    { title: 'Mobile Development', description: 'React Native, Flutter, iOS/Android', icon: '📱' },
    { title: 'AI & Machine Learning', description: 'Python, TensorFlow, PyTorch, Data Science', icon: '🤖' },
    { title: 'UI/UX Design', description: 'Figma, Adobe XD, User Research, Prototyping', icon: '🎯' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate software engineer with a love for creating innovative digital solutions. 
                  My journey in tech started with curiosity and has evolved into a career dedicated to 
                  building applications that make a difference.
                </p>
                <p>
                  With expertise spanning frontend and backend development, I enjoy tackling complex 
                  challenges and turning ideas into reality. I'm constantly learning new technologies 
                  and pushing the boundaries of what's possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                  open-source projects, or mentoring aspiring developers in the community.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="glass hover:bg-neon-teal/20 border-neon-teal text-neon-teal hover:text-white transition-all duration-300 animate-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open('https://github.com/Rishikumarreddy396', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </Button>
            </div>
          </div>

          {/* Right Side - Domain Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {domains.map((domain, index) => (
                <Card 
                  key={domain.title}
                  className="glass p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="text-3xl mb-2">{domain.icon}</div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-neon-blue transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {domain.description}
                    </p>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Card>
              ))}
            </div>
            
            {/* GitHub Icon - Top Right */}
            <div className="absolute -top-4 -right-4">
              <Button
                size="icon"
                className="glass hover:bg-neon-blue/20 border-neon-blue text-neon-blue hover:text-white transition-all duration-300 animate-float rounded-full"
                onClick={() => window.open('https://github.com/Rishikumarreddy396', '_blank')}
              >
                <Github className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;