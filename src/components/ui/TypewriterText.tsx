import React, { useEffect, useRef, ReactElement } from 'react';

interface TypewriterTextProps {
  children: ReactElement;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.style.opacity = '1';
                const textElement = elementRef.current.querySelector('.typewriter-text');
                if (textElement) {
                  textElement.classList.add('animate-typing');
                }
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className="opacity-0">
      {React.cloneElement(children, {
        className: `${children.props.className || ''} typewriter-text relative inline-block`.trim()
      })}
    </div>
  );
};

export default TypewriterText;