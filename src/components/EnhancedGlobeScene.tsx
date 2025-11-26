import { Canvas } from '@react-three/fiber';
import { EnhancedGlobe3D } from './EnhancedGlobe3D';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

export function EnhancedGlobeScene() {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <EnhancedGlobe3D />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
