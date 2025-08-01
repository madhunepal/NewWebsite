import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const projects = [
  {
    title: '.NET Core Enterprise Application',
    description: 'Scalable enterprise application built with .NET Core, implementing clean architecture patterns, Entity Framework, and comprehensive testing strategies.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    tags: ['.NET Core', 'C#', 'SQL Server'],
    colors: ['border-cyan-400 text-cyan-400', 'border-pink-500 text-pink-500', 'border-green-400 text-green-400']
  },
  {
    title: 'DevSecOps Pipeline',
    description: 'Automated CI/CD pipeline with GitLab, implementing security scanning, automated testing, and deployment strategies for enterprise applications.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    tags: ['GitLab CI', 'Docker', 'Security'],
    colors: ['border-cyan-400 text-cyan-400', 'border-pink-500 text-pink-500', 'border-green-400 text-green-400']
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and analytics, featuring real-time updates, advanced filtering, and responsive design patterns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    tags: ['JavaScript', 'D3.js', 'Bootstrap'],
    colors: ['border-cyan-400 text-cyan-400', 'border-pink-500 text-pink-500', 'border-green-400 text-green-400']
  }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`project-card glass-dark rounded-2xl p-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <img 
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-6" 
      />
      
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">{project.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string, tagIndex: number) => (
          <span 
            key={tag}
            className={`glass px-3 py-1 rounded-full text-xs border ${project.colors[tagIndex]}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <button className="text-cyan-400 hover:text-white transition-colors duration-300 flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </button>
        <a 
          href="https://github.com/madhunepal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-white transition-colors duration-300 flex items-center"
        >
          <Github className="w-4 h-4 mr-2" />
          Source Code
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-[hsl(248,20%,16%)] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="https://github.com/madhunepal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-dark px-8 py-4 rounded-full text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <Github className="mr-3" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
