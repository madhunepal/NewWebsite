import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-dark rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Animated Code Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="text-xs font-mono text-cyan-400 leading-relaxed">
                  <div className="animate-pulse">public class Developer {`{`}</div>
                  <div className="ml-4 animate-pulse delay-100">string Name = "Madhu Nepal";</div>
                  <div className="ml-4 animate-pulse delay-200">string[] Skills = {`{`}</div>
                  <div className="ml-8 animate-pulse delay-300">".NET Core", "C#",</div>
                  <div className="ml-8 animate-pulse delay-400">"DevSecOps", "SQL Server"</div>
                  <div className="ml-4 animate-pulse delay-500">{`}`};</div>
                  <div className="ml-4 animate-pulse delay-600">int Experience = 5;</div>
                  <div className="ml-4 animate-pulse delay-700">bool IsLearning = true;</div>
                  <div className="animate-pulse delay-800">{`}`}</div>
                </div>
              </div>
              
              {/* Central Icon */}
              <div className="relative z-10">
                <div className="w-32 h-32 glass rounded-full flex items-center justify-center animate-glow">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-center mt-4">
                  <div className="text-lg font-bold text-gradient">Full-Stack Developer</div>
                  <div className="text-sm text-gray-400">Building the Future</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-green-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Full-Stack Developer & Tech Enthusiast</h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in self-learning and practical experience, I recognized the need for formal training to advance as a proficient full stack developer. This insight led me to comprehensive instruction in backend development, code management, and frontend technologies.
              </p>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Today, I'm confident in my ability to code across multiple languages and frameworks. My passion for technology drives me to continually expand my skill set and stay current with emerging trends in software development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-500">9+</div>
                  <div className="text-sm text-gray-400">.NET Projects</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">MS</div>
                  <div className="text-sm text-gray-400">IT Degree</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm text-gray-400">Learning Mode</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="glass-dark px-4 py-2 rounded-full text-sm border border-cyan-400 text-cyan-400">.NET Core</span>
                <span className="glass-dark px-4 py-2 rounded-full text-sm border border-pink-500 text-pink-500">C#</span>
                <span className="glass-dark px-4 py-2 rounded-full text-sm border border-green-400 text-green-400">DevSecOps</span>
                <span className="glass-dark px-4 py-2 rounded-full text-sm border border-cyan-400 text-cyan-400">SQL Server</span>
                <span className="glass-dark px-4 py-2 rounded-full text-sm border border-pink-500 text-pink-500">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
