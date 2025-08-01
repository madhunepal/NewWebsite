import { ExternalLink, Mic, Video, Rocket, Eye, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const services = [
  {
    icon: Rocket,
    title: 'Web Development',
    description: 'Stay up-to-date with the latest advancements in web development and learn how to leverage technology to drive business success.',
    color: 'text-cyan-400'
  },
  {
    icon: Eye,
    title: 'Different Perspectives',
    description: 'I bring a unique ability to examine issues from various angles, fostering creative and informed thinking that drives new perspectives.',
    color: 'text-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Motivation',
    description: 'Discover inspiration and motivation through a diverse range of stories, spiritual insights, and philosophical perspectives.',
    color: 'text-green-400'
  }
];

export function BlogSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="blog" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Blog & Media</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
              <ExternalLink className="mr-3" />
              Blog Posts
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Welcome to my blog, where I share my thoughts, experiences, and knowledge on various topics 
              including software development, technology trends, and personal growth.
            </p>
            <a 
              href="https://madhunepal.blogspot.com/?view=flipcard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 inline-flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Explore My Blog
            </a>
          </div>
          
          {/* Radio Show */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-6 text-pink-500 flex items-center">
              <Mic className="mr-3" />
              Radio Show
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Listen to my radio show FM TOP, where I discuss technology, motivation, and share different perspectives 
              on various topics that matter in today's world.
            </p>
            <div className="mb-4 rounded-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="120" 
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fmadhunepal%2Ffm-top-falgun-22%2F" 
                frameBorder="0" 
                className="rounded-lg"
                title="FM TOP Radio Show"
              />
            </div>
          </div>
          
          {/* Podcast */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
              <Video className="mr-3" />
              Podcast Shows
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to my podcast shows on YouTube and stay updated with my latest episodes featuring 
              inspiring conversations and insightful discussions.
            </p>
            <a 
              href="https://www.youtube.com/playlist?list=PL0v3CftaVmRJAGAUD-ul40_Oavi7QLmwn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full text-green-400 border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 inline-flex items-center"
            >
              <Video className="w-4 h-4 mr-2" />
              Watch on YouTube
            </a>
          </div>
        </div>
        
        {/* Services */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">What I Bring to the Table</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className={`glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 glass rounded-full flex items-center justify-center">
                    <Icon className={`text-2xl ${service.color}`} />
                  </div>
                  <h4 className={`text-xl font-bold mb-4 ${service.color}`}>{service.title}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
