import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Globe3D } from './Globe3D';
import { Airplane3D } from './Airplane3D';

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Globe3D />
        <Airplane3D />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
