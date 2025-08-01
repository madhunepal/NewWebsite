import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const navigationItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'experience', 'projects', 'contact']);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full glass-dark z-40 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient font-mono">
          Madhu Nepal
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`transition-colors duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark mt-4 mx-6 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-left transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
