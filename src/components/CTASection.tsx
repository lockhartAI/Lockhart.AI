import React from 'react';
import ContactForm from './ui/ContactForm';
import GlowingAccent from './ui/GlowingAccent';
import TypewriterText from './ui/TypewriterText';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-black overflow-visible">
      <GlowingAccent color="accent" size="lg" position="absolute top-0 right-0" />
      <GlowingAccent color="accent" size="md" position="absolute bottom-0 left-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 lg:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="max-w-xl">
              <TypewriterText delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 whitespace-normal break-words">
                  Ready To Transform?
                </h2>
              </TypewriterText>
              
              <p className="text-white/80 mb-8 whitespace-normal break-words">
                Schedule a personalized demo to see how Lockhart.AI can automate your customer interactions, 
                generate qualified leads, and seamlessly integrate with your existing systems.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4A148C]/20 flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-[#4A148C] font-bold relative z-10">1</span>
                    <div className="absolute inset-0 bg-[#4A148C] blur-md opacity-30 rounded-full" />
                  </div>
                  <div>
                    <TypewriterText delay={400}>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 whitespace-normal break-words">Book a Call</h3>
                    </TypewriterText>
                    <p className="text-white/70 whitespace-normal break-words">Fill out the form and select a time that works for you.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4A148C]/20 flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-[#4A148C] font-bold relative z-10">2</span>
                    <div className="absolute inset-0 bg-[#4A148C] blur-md opacity-30 rounded-full" />
                  </div>
                  <div>
                    <TypewriterText delay={600}>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 whitespace-normal break-words">Custom Demo</h3>
                    </TypewriterText>
                    <p className="text-white/70 whitespace-normal break-words">We'll show you specific solutions tailored to your business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4A148C]/20 flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-[#4A148C] font-bold relative z-10">3</span>
                    <div className="absolute inset-0 bg-[#4A148C] blur-md opacity-30 rounded-full" />
                  </div>
                  <div>
                    <TypewriterText delay={800}>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 whitespace-normal break-words">Implementation</h3>
                    </TypewriterText>
                    <p className="text-white/70 whitespace-normal break-words">Our team will guide you through a smooth onboarding process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10">
              <TypewriterText delay={200}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 whitespace-normal break-words">Book Your Free Consultation</h3>
              </TypewriterText>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;