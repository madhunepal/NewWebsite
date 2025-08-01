import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'DevSecOps Engineer', 
    'Tech Innovation Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    if (!isVisible) return;

    const currentText = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (typedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting backward
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [isVisible, typedText, isDeleting, currentRole, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20" ref={ref}>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Advanced technology and data visualization" 
          className="w-full h-full object-cover opacity-15" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(248,39%,8%)] via-[hsl(248,20%,16%)] to-[hsl(248,39%,8%)] opacity-85"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className={`glass rounded-3xl p-12 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Professional headshot */}
          <div className="mb-8">
            <img 
              src="/madhu-nepal-photo.jpg" 
              alt="Madhu Nepal - Professional developer" 
              className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl animate-glow object-cover" 
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
            Madhu Nepal
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 font-mono min-h-[3rem] flex items-center justify-center">
            <span className="border-r-2 border-cyan-400 pr-1">
              {typedText}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experienced software developer with 5+ years building enterprise applications using .NET Core, C#, and modern web technologies. 
            Currently implementing DevSecOps practices at DOL/BLS with expertise in GitLab CI/CD pipelines.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-lg mx-auto">
            <div className="glass-dark rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="glass-dark rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-500">9+</div>
              <div className="text-sm text-gray-400">.NET Projects</div>
            </div>
            <div className="glass-dark rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">MS</div>
              <div className="text-sm text-gray-400">IT Degree</div>
            </div>
          </div>
          
          {/* Technology Stack */}
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-4">Current Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="glass-dark px-4 py-2 rounded-full text-sm border border-cyan-400 text-cyan-400">.NET Core</span>
              <span className="glass-dark px-4 py-2 rounded-full text-sm border border-pink-500 text-pink-500">C#</span>
              <span className="glass-dark px-4 py-2 rounded-full text-sm border border-green-400 text-green-400">GitLab CI/CD</span>
              <span className="glass-dark px-4 py-2 rounded-full text-sm border border-cyan-400 text-cyan-400">SQL Server</span>
              <span className="glass-dark px-4 py-2 rounded-full text-sm border border-pink-500 text-pink-500">JavaScript</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-dark px-8 py-4 rounded-full text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-dark px-8 py-4 rounded-full text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Get In Touch
            </button>
            <a 
              href="https://www.linkedin.com/in/madhunepal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-dark px-8 py-4 rounded-full text-green-400 border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <ChevronDown className="w-4 h-4 text-cyan-400 mt-2 animate-bounce" />
        </div>
      </button>
    </section>
  );
}
