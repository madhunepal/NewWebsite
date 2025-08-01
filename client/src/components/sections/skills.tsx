import { useEffect, useState } from 'react';
import { Code, Bolt } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const programmingSkills = [
  { name: 'C# Programming', percentage: 90 },
  { name: 'Bootstrap / CSS3', percentage: 90 },
  { name: '.NET MVC / Core', percentage: 85 },
  { name: 'SQL Server', percentage: 85 },
  { name: 'JavaScript', percentage: 75 },
];

const tools = [
  { name: 'Git / GitLab', icon: '🔧' },
  { name: 'SQL Server', icon: '🗄️' },
  { name: 'CI/CD', icon: '☁️' },
  { name: 'DevSecOps', icon: '🛡️' },
  { name: 'Bootstrap', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
];

function SkillBar({ name, percentage, delay = 0 }: { name: string; percentage: number; delay?: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimatedWidth(percentage);
      }, delay);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-cyan-400">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-[hsl(248,20%,16%)] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Technical Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center">
              <Code className="mr-3" />
              Programming Skills
            </h3>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
          
          {/* Bolt & Technologies */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-pink-500 flex items-center">
              <Bolt className="mr-3" />
              Bolt & Technologies
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className={`glass rounded-lg p-4 text-center hover:border-cyan-400 border border-transparent transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="font-semibold text-sm">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
