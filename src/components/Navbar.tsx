import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <Bot size={28} className="text-[#4A148C]" />
                <div className="absolute inset-0 bg-[#4A148C] blur-md opacity-50 rounded-full animate-pulse-slow" />
              </div>
              <span className="text-white font-bold text-xl">Lockhart.AI</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button onClick={() => scrollToSection('features')} className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('capabilities')} className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Capabilities
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonials
              </button>
              <Button primary onClick={() => scrollToSection('contact')}>
                Book a Call
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-black/90 backdrop-blur-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-white/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('capabilities')} 
            className="text-white/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Capabilities
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-white/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-[#4A148C] text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left shadow-[0_0_15px_rgba(74,20,140,0.5)]"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;