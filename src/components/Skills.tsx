const Skills = () => {
  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-600' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-500' },
    { name: 'JavaScript', icon: '💛', color: 'from-yellow-300 to-yellow-400' },
    { name: 'HTML5', icon: '🧡', color: 'from-orange-400 to-red-400' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
    { name: 'Git', icon: '📚', color: 'from-red-400 to-red-500' },
    { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-teal-400' },
    { name: 'Angular', icon: '🔺', color: 'from-red-500 to-red-600' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-800' },
    { name: 'GraphQL', icon: '🌐', color: 'from-pink-400 to-purple-400' },
    { name: 'Redis', icon: '🔴', color: 'from-red-500 to-red-600' },
    { name: 'Kubernetes', icon: '⎈', color: 'from-blue-500 to-indigo-500' }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 rounded-full aspect-square flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/20 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full`} />
                
                {/* Icon */}
                <div className="text-lg sm:text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <span className="text-xs font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                  {skill.name}
                </span>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-neon-blue/30 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Animated skill categories */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-bold text-neon-blue mb-2 sm:mb-3">Frontend</h3>
            <p className="text-xs sm:text-sm text-gray-300">Creating engaging user interfaces with modern frameworks and responsive designs</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-bold text-neon-purple mb-2 sm:mb-3">Backend</h3>
            <p className="text-xs sm:text-sm text-gray-300">Building robust server-side applications and APIs with scalable architectures</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-bold text-neon-teal mb-2 sm:mb-3">DevOps</h3>
            <p className="text-xs sm:text-sm text-gray-300">Implementing CI/CD pipelines, containerization, and cloud infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;