import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function SparkleParticles() {
  const sparkles = useMemo(() => {
    const colors = [
      '#F3F4F6', // Soft white
      '#D4AF37', // Gold
    ];
    
    const sparkleArray: Sparkle[] = [];
    
    // Create 60 sparkles across the screen
    for (let i = 0; i < 60; i++) {
      sparkleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // 1-4px
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 3 + 2, // 2-5 seconds
        delay: Math.random() * 5, // 0-5 seconds delay
      });
    }
    
    return sparkleArray;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 4}px ${sparkle.color}, 0 0 ${sparkle.size * 8}px ${sparkle.color}`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}
      
      {/* Larger occasional sparkle bursts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {/* Star shape sparkle */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill={i % 2 === 0 ? '#F3F4F6' : '#D4AF37'}
              style={{
                filter: `drop-shadow(0 0 4px ${i % 2 === 0 ? '#F3F4F6' : '#D4AF37'})`,
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 0.6, 0.8, 0.6, 0],
                scale: [0, 1, 1.2, 1, 0],
                rotate: [0, 45, 90, 135, 180],
              }}
              transition={{
                duration: 6 + i * 0.5,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Gentle glowing orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
            width: '8px',
            height: '8px',
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(243, 244, 246, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 70%)',
            filter: 'blur(3px)',
          }}
          animate={{
            opacity: [0.2, 0.6, 0.8, 0.6, 0.2],
            scale: [0.8, 1.1, 1.3, 1.1, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
