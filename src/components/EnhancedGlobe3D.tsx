import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function EnhancedGlobe3D() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
      globeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Main globe with subtle fill */}
      <Sphere args={[2.5, 32, 32]}>
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.03}
        />
      </Sphere>

      {/* Premium blue wireframe */}
      <Sphere args={[2.51, 28, 28]}>
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.4}
        />
      </Sphere>

      {/* Detailed latitude lines */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI - Math.PI / 2;
        const radius = Math.cos(angle) * 2.5;
        const y = Math.sin(angle) * 2.5;
        
        return (
          <mesh key={`lat-${i}`} position={[0, y, 0]}>
            <torusGeometry args={[radius, 0.008, 16, 64]} />
            <meshBasicMaterial
              color="#3B82F6"
              transparent
              opacity={0.35}
            />
          </mesh>
        );
      })}

      {/* Longitude lines */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        
        return (
          <mesh key={`lon-${i}`} rotation={[Math.PI / 2, 0, angle]}>
            <torusGeometry args={[2.5, 0.008, 16, 64]} />
            <meshBasicMaterial
              color="#3B82F6"
              transparent
              opacity={0.3}
            />
          </mesh>
        );
      })}

      {/* Golden energy lines */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        
        return (
          <mesh key={`energy-${i}`} rotation={[0, angle, Math.PI / 4]}>
            <torusGeometry args={[2.5, 0.012, 16, 64]} />
            <meshBasicMaterial
              color="#D4AF37"
              transparent
              opacity={0.25}
            />
          </mesh>
        );
      })}

      {/* Inner glow */}
      <Sphere args={[2.6, 32, 32]}>
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer soft glow */}
      <Sphere args={[2.8, 32, 32]}>
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#D4AF37" />
      <pointLight position={[0, 15, 0]} intensity={0.5} color="#ffffff" />
    </group>
  );
}
