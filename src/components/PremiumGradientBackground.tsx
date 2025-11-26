import { motion } from 'framer-motion';

export function PremiumGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#0B0F19' }}>
      {/* Base gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Royal blue radial glow - top left */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.25) 0%, rgba(29, 78, 216, 0.1) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gold glow - bottom right */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.08) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Royal blue accent - center right */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/2 h-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.18) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gold accent - top center */}
      <motion.div
        className="absolute top-0 left-1/3 w-1/2 h-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small bloom effects */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bloom-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${(i * 9 + 10)}%`,
            top: `${(i * 7 + 15)}%`,
            width: i % 2 === 0 ? '120px' : '80px',
            height: i % 2 === 0 ? '120px' : '80px',
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(29, 78, 216, 0.3) 0%, transparent 70%)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(29, 78, 216, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 0.4, 0],
            x: [0, Math.sin(i) * 30, 0],
            y: [0, Math.cos(i) * 30, 0],
          }}
          transition={{
            duration: 15 + i * 1.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(11, 15, 25, 0.4) 70%, rgba(11, 15, 25, 0.8) 100%)',
        }}
      />
    </div>
  );
}
