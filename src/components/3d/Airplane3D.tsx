import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

export function Airplane3D() {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    if (groupRef.current) {
      // Circular flight path
      const radius = 4;
      groupRef.current.position.x = Math.cos(time.current * 0.5) * radius;
      groupRef.current.position.z = Math.sin(time.current * 0.5) * radius;
      groupRef.current.position.y = Math.sin(time.current * 0.8) * 0.5;
      
      // Rotate airplane to face direction of movement
      groupRef.current.rotation.y = time.current * 0.5 + Math.PI / 2;
      groupRef.current.rotation.z = Math.sin(time.current * 2) * 0.1;
    }
  });

  return (
    <Trail
      width={0.5}
      length={8}
      color="#00d4ff"
      attenuation={(t) => t * t}
    >
      <group ref={groupRef}>
        {/* Simple airplane shape */}
        {/* Fuselage */}
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Wings */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.2, 0.02, 0.3]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Tail */}
        <mesh position={[0, 0.15, -0.25]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.4, 0.02, 0.15]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Glow effect */}
        <pointLight position={[0, 0, 0]} intensity={2} color="#00d4ff" distance={3} />
      </group>
    </Trail>
  );
}
