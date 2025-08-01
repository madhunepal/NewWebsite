import { Briefcase, GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const experiences = [
  {
    period: '2023 - Present',
    title: 'Software Developer',
    company: 'DOL / BLS',
    location: 'Washington, DMV',
    description: 'Developing and deploying .NET Core applications within an Agile framework. Leveraging GitLab CI/CD pipelines to implement DevSecOps practices. Proactively monitoring and resolving production issues across diverse technology stacks.'
  },
  {
    period: '2018 - 2023',
    title: 'Software Developer',
    company: 'Florida Dept. of Revenue',
    location: 'Tallahassee, FL',
    description: 'Worked on 9 .NET projects using technologies like .NET MVC, .NET Core, Entity Framework, C#, LINQ, HTML5, JS, CSS3, Bootstrap, Json, JQuery, RDBMS, MSSMS.'
  },
  {
    period: '2017',
    title: 'Full-Stack Developer Training',
    company: 'I/O Avenue',
    location: 'Tallahassee, FL',
    description: 'Intensive training in back-end coding using Ruby on Rails, code management with GitHub, and front-end development using HTML5, CSS3, and JavaScript with jQuery.'
  },
  {
    period: '2015',
    title: 'QA Tester',
    company: 'IT America',
    location: 'Albany, NY',
    description: 'Worked as QA specialist focusing on manual testing processes and quality assurance protocols.'
  }
];

const education = [
  {
    period: '2019 - 2023',
    title: 'Masters of Science in Information Technology',
    company: 'Florida State University',
    location: 'Tallahassee, FL',
    description: 'Studied Advanced Web Development, Cyber Security, Database Management, Information System Management, Data Mining, and Analytics.'
  },
  {
    period: '2019 - 2021',
    title: 'Graduate Certificate in Information Architecture',
    company: 'Florida State University',
    location: 'Tallahassee, FL',
    description: 'Specialized in Information Architecture, Usability Analysis, Network Administration, and Advanced Web Development.'
  },
  {
    period: '2008 - 2010',
    title: 'Masters in Zoology',
    company: 'Tribhuwan University',
    location: 'Kathmandu, Nepal',
    description: 'Studied advanced Biology, Research Methodology, and Statistics.'
  },
  {
    period: '2007 - 2009',
    title: 'Masters in Anthropology',
    company: 'Tribhuwan University',
    location: 'Kathmandu, Nepal',
    description: 'Studied Human Development, Statistics, and Project Management.'
  }
];

function TimelineItem({ item, index, color }: { item: any; index: number; color: string }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`timeline-item transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4">
        <h4 className="text-xl font-bold text-white">{item.title}</h4>
        <p className={`${color} font-semibold`}>{item.company}</p>
        <p className="text-sm text-gray-400">{item.period} • {item.location}</p>
      </div>
      <p className="text-gray-300 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Professional Journey</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center">
              <Briefcase className="mr-3" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <TimelineItem 
                  key={index} 
                  item={exp} 
                  index={index}
                  color="text-cyan-400"
                />
              ))}
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-pink-500 flex items-center">
              <GraduationCap className="mr-3" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <TimelineItem 
                  key={index} 
                  item={edu} 
                  index={index}
                  color="text-pink-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
