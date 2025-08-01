import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/madhunepal/',
    icon: Linkedin,
    label: 'LinkedIn',
    color: 'hover:text-cyan-400'
  },
  {
    href: 'https://github.com/madhunepal',
    icon: Github,
    label: 'GitHub',
    color: 'hover:text-pink-500'
  },
  {
    href: 'https://twitter.com/themadhunepal',
    icon: Twitter,
    label: 'Twitter',
    color: 'hover:text-green-400'
  },
  {
    href: 'https://www.facebook.com/Manepal',
    icon: Facebook,
    label: 'Facebook',
    color: 'hover:text-cyan-400'
  },
];

export function SocialFloat() {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="glass-dark rounded-full p-4 space-y-4">
        {socialLinks.map(({ href, icon: Icon, label, color }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-white ${color} text-xl transition-colors duration-300`}
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
