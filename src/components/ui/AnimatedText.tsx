import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  speed = 60
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = currentIndex === 0 ? delay : speed;
      
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};