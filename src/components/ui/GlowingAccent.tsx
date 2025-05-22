import React from 'react';

interface GlowingAccentProps {
  color?: 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: string;
  className?: string;
}

const GlowingAccent: React.FC<GlowingAccentProps> = ({
  size = 'md',
  position = 'absolute top-0 right-0',
  className = '',
}) => {
  const sizeVariants = {
    sm: 'w-32 h-32 blur-[50px]',
    md: 'w-64 h-64 blur-[80px]',
    lg: 'w-96 h-96 blur-[100px]',
    xl: 'w-[40rem] h-[40rem] blur-[120px]',
  };

  return (
    <div
      className={`
        ${position} 
        ${sizeVariants[size]} 
        rounded-full 
        bg-white/10
        opacity-20 
        -z-10
        animate-pulse-slow
        ${className}
      `}
    />
  );
};

export default GlowingAccent;