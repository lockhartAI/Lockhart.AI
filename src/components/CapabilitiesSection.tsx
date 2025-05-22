import React from 'react';
import { Check, Zap } from 'lucide-react';
import GlowingAccent from './ui/GlowingAccent';
import TypewriterText from './ui/TypewriterText';

const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Advanced Natural Language Processing',
      description: 'Our AI understands complex queries, sentiment, and context for truly human-like conversations.',
      features: [
        'Contextual understanding of user inquiries',
        'Sentiment analysis and emotional intelligence',
        'Multi-language support for global operations',
        'Custom training on your industry terminology'
      ]
    },
    {
      title: 'Intelligent Lead Qualification',
      description: 'Automatically score and prioritize leads based on behavior patterns and engagement metrics.',
      features: [
        'Behavioral scoring algorithms',
        'Predictive lead qualification',
        'Automated follow-up sequences',
        'Customer journey mapping and optimization'
      ]
    },
    {
      title: 'Seamless CRM Ecosystem',
      description: 'Connect with popular CRM platforms to enrich customer data and streamline workflows.',
      features: [
        'Two-way data synchronization',
        'Automated contact enrichment',
        'Custom field mapping and tagging',
        'Activity logging and interaction history'
      ]
    }
  ];

  return (
    <section id="capabilities" className="relative py-16 md:py-24 bg-black overflow-visible">
      <GlowingAccent color="accent" size="lg" position="absolute top-1/2 right-[-100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <TypewriterText delay={200}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 whitespace-normal break-words">
              AI-Powered Capabilities
            </h2>
          </TypewriterText>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg whitespace-normal break-words">
            Our platform leverages cutting-edge AI technology to deliver exceptional results across multiple business areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden"
            >
              <div className="bg-white/5 rounded-xl p-6 md:p-8 h-full border border-white/10 group-hover:border-[#4A148C] 
                transition-all duration-300 relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4A148C]/20 text-[#4A148C] relative">
                    <Zap size={20} className="relative z-10" />
                    <div className="absolute inset-0 bg-[#4A148C] blur-md opacity-30 rounded-lg" />
                  </div>
                  <TypewriterText delay={index * 300}>
                    <h3 className="text-lg sm:text-xl font-semibold text-white whitespace-normal break-words">{capability.title}</h3>
                  </TypewriterText>
                </div>
                
                <p className="text-white/70 mb-6 whitespace-normal break-words">
                  {capability.description}
                </p>
                
                <ul className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check size={18} className="text-[#4A148C] mt-1 flex-shrink-0" />
                      <span className="text-white/80 whitespace-normal break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute inset-0 bg-[#4A148C]/5 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500 z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;