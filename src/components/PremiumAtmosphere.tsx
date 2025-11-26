import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface StarDust {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function PremiumAtmosphere() {
  const starDust = useMemo(() => {
    const particles: StarDust[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      });
    }
    return particles;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Warm to cool gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-blue-50/30 to-blue-100/40" />
      
      {/* Glowing star dust */}
      {starDust.map((dust) => (
        <motion.div
          key={dust.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${dust.x}%`,
            top: `${dust.y}%`,
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(212, 175, 55, 0.4)',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            y: [0, -30, -60],
          }}
          transition={{
            duration: dust.duration,
            delay: dust.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Soft light streaks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-px"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 12}%`,
            width: '200px',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            x: [-100, 100],
          }}
          transition={{
            duration: 8 + i,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Golden sparkle bursts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 12}%`,
            top: `${10 + (i % 4) * 25}%`,
          }}
        >
          <motion.div
            className="relative w-12 h-12"
            animate={{
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + i * 0.5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-radial from-amber-300/40 to-transparent rounded-full blur-md"
              style={{
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Dreamy floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 18}%`,
            top: `${30 + (i % 2) * 30}%`,
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            background: i % 2 === 0
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
