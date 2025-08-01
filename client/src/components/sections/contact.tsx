import { useState } from 'react';
import { Mail, MapPin, Briefcase, Send, Linkedin, Github, Twitter, Facebook } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'devpmadhu@gmail.com',
    href: 'mailto:devpmadhu@gmail.com',
    color: 'text-cyan-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Washington, DMV Area',
    color: 'text-pink-500'
  },
  {
    icon: Briefcase,
    label: 'Current Role',
    value: 'Software Developer at DOL/BLS',
    color: 'text-green-400'
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/madhunepal/',
    color: 'text-cyan-400 hover:bg-cyan-400 hover:text-black'
  },
  {
    icon: Github,
    href: 'https://github.com/madhunepal',
    color: 'text-pink-500 hover:bg-pink-500 hover:text-white'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/themadhunepal',
    color: 'text-green-400 hover:bg-green-400 hover:text-black'
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/Manepal',
    color: 'text-cyan-400 hover:bg-cyan-400 hover:text-black'
  }
];

export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(248,20%,16%)] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Let's Connect</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Ready to collaborate on your next project? Whether you need a skilled developer, want to discuss 
              technology trends, or seeking motivation and different perspectives, I'm here to help.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-4">
                    <Icon className={color} />
                  </div>
                  <div>
                    <p className="font-semibold">{label}</p>
                    {href ? (
                      <a href={href} className={`${color} hover:text-white transition-colors duration-300`}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="font-bold mb-4 text-cyan-400">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 glass rounded-full flex items-center justify-center transition-all duration-300 ${color}`}
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`glass-dark rounded-2xl p-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-pink-500">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="glass bg-transparent border-gray-600 focus:border-cyan-400 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="glass bg-transparent border-gray-600 focus:border-cyan-400 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  className="glass bg-transparent border-gray-600 focus:border-cyan-400 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  className="glass bg-transparent border-gray-600 focus:border-cyan-400 text-white resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full glass bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
