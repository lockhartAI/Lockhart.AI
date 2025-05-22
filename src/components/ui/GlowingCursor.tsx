import React, { useEffect, useState } from 'react';

const GlowingCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let frame: number;
    
    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointerCursor = window.getComputedStyle(target).cursor === 'pointer';
      
      frame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsPointer(isPointerCursor);
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s'
      }}
    >
      <div 
        className={`
          rounded-full bg-white
          transition-all duration-200 ease-out
          ${isPointer ? 'w-6 h-6' : 'w-4 h-4'}
        `}
      />
    </div>
  );
};

export default GlowingCursor;