import { Canvas } from '@react-three/fiber';
import { MinimalGlobe3D } from './MinimalGlobe3D';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

export function MinimalGlobeScene() {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <MinimalGlobe3D />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
