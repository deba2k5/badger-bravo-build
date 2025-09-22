import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Text3D } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
};

const FloatingGeometry = () => {
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < 50; i++) {
      pos.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ]);
    }
    return pos;
  }, []);

  return (
    <>
      {positions.map((position, index) => (
        <Float key={index} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={position}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color={`hsl(${180 + Math.random() * 60}, 100%, 70%)`}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export const ThreeScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} />
        
        <AnimatedSphere position={[-3, 0, 0]} color="#00ffff" />
        <AnimatedSphere position={[3, 2, -2]} color="#ffff00" />
        <AnimatedSphere position={[0, -2, -4]} color="#ff00ff" />
        
        <FloatingGeometry />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};