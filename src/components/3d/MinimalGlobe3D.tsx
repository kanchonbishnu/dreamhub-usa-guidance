import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function MinimalGlobe3D() {
  const globeRef = useRef<THREE.Group>(null);

  // Slow rotation animation
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Main globe sphere with wireframe */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial
          color="#0B0F19"
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Glowing wireframe lines */}
      <Sphere args={[2.01, 24, 24]}>
        <meshBasicMaterial
          color="#1D4ED8"
          wireframe
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Additional latitude lines for detail */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI - Math.PI / 2;
        const radius = Math.cos(angle) * 2;
        const y = Math.sin(angle) * 2;
        
        return (
          <mesh key={`lat-${i}`} position={[0, y, 0]} rotation={[0, 0, 0]}>
            <torusGeometry args={[radius, 0.01, 16, 64]} />
            <meshBasicMaterial
              color="#1D4ED8"
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}

      {/* Longitude lines */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        
        return (
          <mesh
            key={`lon-${i}`}
            rotation={[Math.PI / 2, 0, angle]}
          >
            <torusGeometry args={[2, 0.01, 16, 64]} />
            <meshBasicMaterial
              color="#1D4ED8"
              transparent
              opacity={0.35}
            />
          </mesh>
        );
      })}

      {/* Soft glow effect */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#1D4ED8"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer glow layer */}
      <Sphere args={[2.3, 32, 32]}>
        <meshBasicMaterial
          color="#1D4ED8"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#1D4ED8" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#1D4ED8" />
    </group>
  );
}
