import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  glowSize: number;
  duration: number;
  delay: number;
}

export function PremiumFloatingParticles() {
  const particles = useMemo(() => {
    const colors = [
      { color: '#1D4ED8', glow: 'rgba(29, 78, 216, 0.4)' }, // Blue
      { color: '#C62828', glow: 'rgba(198, 40, 40, 0.4)' },  // Red
      { color: '#D4AF37', glow: 'rgba(212, 175, 55, 0.4)' }, // Gold
    ];
    
    const particleArray: Particle[] = [];
    
    for (let i = 0; i < 40; i++) {
      const colorSet = colors[i % colors.length];
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 3,
        color: colorSet.color,
        glowSize: Math.random() * 30 + 20,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 8,
      });
    }
    
    return particleArray;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.glowSize}px ${particle.color}, 0 0 ${particle.glowSize * 1.5}px ${particle.color}`,
            filter: 'blur(1px)',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              0,
              Math.sin(particle.id) * 50,
              Math.cos(particle.id) * 40,
              0
            ],
            y: [
              0,
              Math.cos(particle.id) * -60,
              Math.sin(particle.id) * -40,
              0
            ],
            opacity: [0, 0.6, 0.8, 0.6, 0],
            scale: [0, 1, 1.2, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
      
      {/* Additional larger ambient glows */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${(i * 15 + Math.random() * 10)}%`,
            top: `${(i * 12 + Math.random() * 10)}%`,
            width: '150px',
            height: '150px',
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(198, 40, 40, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.4, 0.6, 0.4, 0],
            scale: [0.8, 1.2, 1.4, 1.2, 0.8],
            x: [0, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * 30 - 15, 0],
          }}
          transition={{
            duration: 25 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
