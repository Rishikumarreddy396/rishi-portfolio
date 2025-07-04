const Education = () => {
  const educationData = [
    {
      period: '2022 - 2027',
      institution: 'VITAP University',
      degree: 'Integrated M.Tech in Software Engineering',
      type: 'Engineering',
      icon: '🎓'
    },
    {
      period: '2020 - 2022',
      institution: 'Sri Chaitanya Jr College',
      degree: 'Intermediate - MPC',
      type: 'Intermediate',
      icon: '📚'
    },
    {
      period: '2020',
      institution: 'Sri Chaitanya School',
      degree: 'Secondary Education',
      type: 'School',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="py-16 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Academic journey that shaped my technical foundation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-neon-blue/10"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center text-xl border border-white/10">
                      {edu.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                        <h4 className="text-base text-neon-blue font-medium">{edu.institution}</h4>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <span className="text-sm text-neon-purple font-medium">{edu.period}</span>
                        <span className="text-xs px-2 py-1 bg-neon-teal/20 text-neon-teal rounded-full border border-neon-teal/30">
                          {edu.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;