import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}) => {
  return (
    <div 
      className="relative bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm 
        group hover:border-white/30 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-white/10 text-white">
          <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300 whitespace-normal break-words">
          {title}
        </h3>
        
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 whitespace-normal break-words">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent 
        transform translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </div>
  );
};

export default FeatureCard;