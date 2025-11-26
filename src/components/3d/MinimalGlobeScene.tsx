import { Canvas } from '@react-three/fiber';
import { MinimalGlobe3D } from './MinimalGlobe3D';
import { Suspense } from 'react';

export function MinimalGlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <MinimalGlobe3D />
        </Suspense>
      </Canvas>
    </div>
  );
}
