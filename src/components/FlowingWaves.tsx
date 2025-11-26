import { motion } from 'framer-motion';

export function FlowingWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing wave lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients for the waves */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0" />
            <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          
          {/* Glow filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Blue flowing wave 1 */}
        <motion.path
          d="M-200,400 Q200,300 600,400 T1400,400 T2200,400"
          stroke="url(#blueGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 100, 100, 200]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1]
          }}
        />

        {/* Blue flowing wave 2 */}
        <motion.path
          d="M-200,500 Q300,600 700,500 T1500,500 T2300,500"
          stroke="url(#blueGradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.5, 0.5, 0],
            x: [0, -80, -80, -160]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: 2
          }}
        />

        {/* Gold flowing wave 1 */}
        <motion.path
          d="M-200,600 Q250,500 650,600 T1450,600 T2250,600"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.55, 0.55, 0],
            x: [0, 120, 120, 240]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: 1
          }}
        />

        {/* Gold flowing wave 2 */}
        <motion.path
          d="M-200,300 Q350,250 750,300 T1550,300 T2350,300"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.45, 0.45, 0],
            x: [0, -100, -100, -200]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: 3
          }}
        />

        {/* Intersecting blue wave */}
        <motion.path
          d="M-200,700 Q400,800 800,700 T1600,700 T2400,700"
          stroke="url(#blueGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.4, 0.4, 0],
            x: [0, 90, 90, 180]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: 4
          }}
        />

        {/* Upper gold accent wave */}
        <motion.path
          d="M-200,200 Q300,150 700,200 T1500,200 T2300,200"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.35, 0.35, 0],
            x: [0, -70, -70, -140]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: 5
          }}
        />
      </svg>

      {/* Ambient glow orbs that move with the waves */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.3, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 70, -60, 0],
          scale: [1, 1.2, 1.1, 1],
          opacity: [0.25, 0.45, 0.35, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.1) 0%, transparent 70%)',
          filter: 'blur(65px)',
        }}
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -90, 60, 0],
          scale: [1, 1.4, 0.95, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
