import React from 'react';
import FeatureCard from './ui/FeatureCard';
import GlowingAccent from './ui/GlowingAccent';
import TypewriterText from './ui/TypewriterText';
import { Bot, LineChart, RefreshCcw, Shield, MessageSquare, Users, Database, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'AI Chat Agents',
      description: 'Deploy intelligent conversational agents that understand context and provide human-like responses to your customers.',
      icon: MessageSquare
    },
    {
      title: 'Lead Generation',
      description: 'Automatically identify and qualify potential customers using our AI-powered lead scoring and nurturing system.',
      icon: Users
    },
    {
      title: 'CRM Integration',
      description: 'Seamlessly connect with your existing CRM systems to enhance customer data management and analysis.',
      icon: Database
    },
    {
      title: 'Automation Workflows',
      description: 'Build custom automation sequences that trigger based on user behavior and engagement patterns.',
      icon: RefreshCcw
    },
    {
      title: 'Performance Analytics',
      description: 'Track and measure conversion rates, engagement metrics, and ROI with comprehensive dashboards.',
      icon: LineChart
    },
    {
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with encrypted communications and compliant data handling practices.',
      icon: Shield
    }
  ];

  return (
    <section id="features" className="relative py-16 md:py-24 bg-black overflow-visible">
      <GlowingAccent color="accent" size="lg" position="absolute top-1/4 left-[-200px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <TypewriterText delay={200}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 whitespace-normal break-words">
              Supercharge Your Business With AI
            </h2>
          </TypewriterText>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg whitespace-normal break-words">
            Our intelligent platform combines advanced AI capabilities with seamless integrations to transform your customer interactions and business processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;