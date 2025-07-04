import { useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-teal/10 opacity-50 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-neon-blue bg-transparent text-white placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-neon-blue bg-transparent text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass border-white/20 focus:border-neon-blue bg-transparent text-white placeholder:text-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass hover:bg-neon-blue/20 border-neon-blue text-neon-blue hover:text-white transition-all duration-300 animate-glow"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-neon-blue/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:rishi@example.com" className="text-white hover:text-neon-blue transition-colors">
                      rishi@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-neon-purple/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-neon-purple transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-neon-teal/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-neon-teal" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  className="glass hover:bg-white/10 border-white/20 text-white hover:text-neon-blue transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://github.com/rishi', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="glass hover:bg-white/10 border-white/20 text-white hover:text-neon-blue transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://linkedin.com/in/rishi', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Availability Status */}
            <Card className="glass p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-white font-semibold">Available for new projects</p>
                  <p className="text-gray-400 text-sm">Let's build something amazing together!</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;