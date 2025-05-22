import React, { useEffect, useRef } from 'react';
import Button from './ui/Button';
import GlowingAccent from './ui/GlowingAccent';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '1');
        const xOffset = x * speed * 20;
        const yOffset = y * speed * 20;
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25"></div>
      
      {/* Spline animation positioned as background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/G2FzLT7Ip4fwaBFA/scene.splinecode" class="w-full h-full"></spline-viewer>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      
      <GlowingAccent color="accent" size="xl" position="absolute top-[-200px] right-[-200px]" />
      <GlowingAccent color="accent" size="lg" position="absolute bottom-[-100px] left-[-100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-courier font-bold text-white leading-tight mb-6">
              <span className="block">Automate Your Future</span>
              <div className="typewriter inline-flex">
                <span className="block text-white/80">With Advanced AI</span>
              </div>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 font-mono">
              Lockhart.AI delivers cutting-edge AI chat agents, lead generation, and seamless CRM integrations to transform your customer interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button primary onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Call
              </Button>
              <Button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2 font-mono">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div className="w-1 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;