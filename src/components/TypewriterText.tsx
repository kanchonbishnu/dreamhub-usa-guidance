import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
}

export function TypewriterText({ 
  text, 
  className = '', 
  typingSpeed = 100,
  cursorBlinkSpeed = 0.8 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Start cursor blinking after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, cursorBlinkSpeed * 1000);

      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text, typingSpeed, cursorBlinkSpeed]);

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-[1em] ml-1 bg-gold"
          style={{
            boxShadow: '0 0 8px hsl(45 100% 59% / 0.6), 0 0 16px hsl(45 100% 59% / 0.4)',
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
      {currentIndex === text.length && showCursor && (
        <motion.span
          className="inline-block w-0.5 h-[1em] ml-1 bg-gold"
          style={{
            boxShadow: '0 0 8px hsl(45 100% 59% / 0.6), 0 0 16px hsl(45 100% 59% / 0.4)',
          }}
        />
      )}
    </motion.p>
  );
}
