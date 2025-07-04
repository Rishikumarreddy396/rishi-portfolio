import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      domain: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/rishi/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      fullDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The application is fully responsive and optimized for performance.',
      features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Integration', 'Order Tracking', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI-powered responses',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      domain: 'AI & Web',
      technologies: ['React', 'Socket.io', 'OpenAI', 'Express', 'Redis'],
      github: 'https://github.com/rishi/ai-chat-app',
      demo: 'https://ai-chat-demo.com',
      fullDescription: 'An innovative chat application that combines real-time messaging with AI-powered responses. Users can chat with each other or interact with AI assistants for various tasks. Built with scalable architecture to handle thousands of concurrent users.',
      features: ['Real-time Messaging', 'AI Integration', 'Group Chats', 'File Sharing', 'Voice Messages', 'Message Encryption']
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      domain: 'Productivity',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      github: 'https://github.com/rishi/task-dashboard',
      demo: 'https://task-demo.com',
      fullDescription: 'A comprehensive task management dashboard for teams and individuals. Features project creation, task assignment, progress tracking, time logging, and team collaboration tools. Built as a Progressive Web App for optimal mobile experience.',
      features: ['Project Management', 'Task Assignment', 'Time Tracking', 'Team Collaboration', 'Progress Analytics', 'Mobile PWA']
    },
    {
      id: 4,
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio management',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop',
      domain: 'FinTech',
      technologies: ['React Native', 'CoinGecko API', 'SQLite', 'Redux'],
      github: 'https://github.com/rishi/crypto-tracker',
      demo: 'https://crypto-demo.com',
      fullDescription: 'A mobile-first cryptocurrency portfolio tracker that helps users monitor their investments in real-time. Features include portfolio overview, price alerts, news integration, and detailed analytics with beautiful charts and graphs.',
      features: ['Portfolio Tracking', 'Price Alerts', 'Market News', 'Analytics Dashboard', 'Multi-Currency Support', 'Offline Mode']
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Online education platform with video streaming',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
      domain: 'EdTech',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Stripe'],
      github: 'https://github.com/rishi/lms-platform',
      demo: 'https://lms-demo.com',
      fullDescription: 'A comprehensive learning management system for online education. Instructors can create courses, upload videos, and track student progress. Students can enroll in courses, watch videos, take quizzes, and earn certificates.',
      features: ['Course Creation', 'Video Streaming', 'Student Progress', 'Quiz System', 'Certificates', 'Payment Processing']
    },
    {
      id: 6,
      title: 'IoT Smart Home Dashboard',
      description: 'Control and monitor IoT devices from web interface',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      domain: 'IoT',
      technologies: ['Angular', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
      github: 'https://github.com/rishi/smart-home',
      demo: 'https://smarthome-demo.com',
      fullDescription: 'A smart home dashboard that connects and controls various IoT devices. Features real-time monitoring, automated routines, energy consumption tracking, and security alerts. Built with scalable microservices architecture.',
      features: ['Device Control', 'Real-time Monitoring', 'Automation Rules', 'Energy Tracking', 'Security Alerts', 'Voice Commands']
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass overflow-hidden cursor-pointer hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/20 group"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full border border-neon-blue/30">
                    {project.domain}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs rounded border border-neon-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Horizontal Scroll Animation */}
        <div className="overflow-hidden bg-neon-blue/5 py-4 rounded-lg">
          <div className="animate-slide-left whitespace-nowrap">
            <span className="inline-block px-8 text-neon-blue font-semibold">
              React • Node.js • TypeScript • Python • AWS • MongoDB • PostgreSQL • Docker • Kubernetes • 
              Vue.js • Angular • Express • Next.js • GraphQL • Redis • Firebase • Stripe • OpenAI • 
            </span>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neon-blue mb-2">Description</h3>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-neon-blue mb-2">Key Features</h3>
                      <ul className="space-y-1">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-neon-teal rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neon-blue mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm rounded border border-neon-purple/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button
                        className="w-full glass hover:bg-neon-blue/20 border-neon-blue text-neon-blue hover:text-white transition-all duration-300"
                        onClick={() => window.open(selectedProject.github, '_blank')}
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full glass border-neon-teal text-neon-teal hover:bg-neon-teal/20 hover:text-white transition-all duration-300"
                        onClick={() => window.open(selectedProject.demo, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;