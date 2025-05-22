import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-md font-medium transition-all duration-300
        ${primary 
          ? 'bg-[#4A148C] text-white hover:bg-[#311B92] shadow-[0_0_15px_rgba(74,20,140,0.5)]'
          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
        }
        before:content-[""] before:absolute before:inset-0 before:rounded-md before:opacity-0
        before:transition-opacity before:duration-300 hover:before:opacity-100
        before:bg-white/5 before:-z-10
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;