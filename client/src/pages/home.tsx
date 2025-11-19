import { Navigation } from '@/components/ui/navigation';
import { Particles } from '@/components/ui/particles';
import { SocialFloat } from '@/components/ui/social-float';
import { HeroSection } from '@/components/sections/home';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { BlogSection } from '@/components/sections/blog';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(248,39%,8%)] text-white font-sans overflow-x-hidden">
      <Particles />
      <Navigation />
      <SocialFloat />
      
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-[hsl(248,39%,8%)] border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Madhu Nepal. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
