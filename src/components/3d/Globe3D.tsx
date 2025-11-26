import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

export function Globe3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b537ff" />
      
      <Sphere ref={meshRef} args={[2.5, 64, 64]} scale={1}>
        <MeshDistortMaterial
          color="#0a0a1f"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#1a1a3f"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Glowing rings around globe */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#b537ff" transparent opacity={0.4} />
      </mesh>
    </>
  );
}
