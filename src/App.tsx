import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Lockhart.AI | Advanced AI Automation Solutions';
    
    // Add scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;