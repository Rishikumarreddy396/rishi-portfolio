const Experience = () => {
  const experiences = [
    {
      period: '2023 - Present',
      company: 'TechCorp Solutions',
      role: 'Senior Software Engineer',
      description: 'Led development of microservices architecture, implemented CI/CD pipelines, and mentored junior developers. Built scalable web applications using React, Node.js, and AWS.',
      tools: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      period: '2021 - 2023',
      company: 'Innovation Labs',
      role: 'Full Stack Developer',
      description: 'Developed and maintained multiple client projects, implemented responsive web designs, and optimized application performance. Collaborated with cross-functional teams.',
      tools: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'TypeScript']
    },
    {
      period: '2020 - 2021',
      company: 'StartupXYZ',
      role: 'Frontend Developer',
      description: 'Built modern, responsive user interfaces and implemented interactive features. Worked closely with designers to create pixel-perfect implementations.',
      tools: ['React', 'SCSS', 'REST APIs', 'Git', 'Figma']
    },
    {
      period: '2019 - 2020',
      company: 'Freelance',
      role: 'Web Developer',
      description: 'Delivered custom web solutions for small businesses and startups. Handled end-to-end project development from concept to deployment.',
      tools: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-teal rounded-full" />
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-blue rounded-full border-4 border-background animate-glow z-10" />
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass p-8 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/20">
                    <div className={`space-y-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <h4 className="text-xl text-neon-blue font-semibold">{exp.company}</h4>
                        <p className="text-neon-purple font-medium">{exp.period}</p>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {exp.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-neon-teal/20 text-neon-teal text-sm rounded-full border border-neon-teal/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;