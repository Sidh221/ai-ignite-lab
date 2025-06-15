import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RobotGeometry = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);

  // Glass-like material with blue tint
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0x87CEEB,
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.8,
      thickness: 0.5,
      envMapIntensity: 1.5,
    });
  }, []);

  // Chrome/metallic material for joints
  const chromeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0xC0C0C0,
      metalness: 0.9,
      roughness: 0.1,
    });
  }, []);

  // Glowing eyes material
  const eyeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0x00FFFF,
      emissive: 0x0099FF,
      emissiveIntensity: 0.8,
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Main group rotation
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      
      // Head movement
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(time * 0.8) * 0.3;
        headRef.current.rotation.x = Math.sin(time * 0.6) * 0.1;
      }
      
      // Body slight breathing motion
      if (bodyRef.current) {
        bodyRef.current.scale.setScalar(1 + Math.sin(time * 1.2) * 0.02);
      }
      
      // Arms movement
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(time * 0.7) * 0.2 + 0.3;
      }
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = -Math.sin(time * 0.7) * 0.2 - 0.3;
      }
      
      // Legs slight movement
      if (leftLegRef.current) {
        leftLegRef.current.rotation.x = Math.sin(time * 0.4) * 0.05;
      }
      if (rightLegRef.current) {
        rightLegRef.current.rotation.x = -Math.sin(time * 0.4) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.5, 0]} material={glassMaterial}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 1.6, 0.41]} material={eyeMaterial}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>
      <mesh position={[0.2, 1.6, 0.41]} material={eyeMaterial}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>
      
      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0.5, 0]} material={glassMaterial}>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
      </mesh>
      
      {/* Chest detail */}
      <mesh position={[0, 0.7, 0.41]} material={chromeMaterial}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
      </mesh>
      
      {/* Left Arm */}
      <group position={[-0.8, 0.8, 0]}>
        <mesh ref={leftArmRef} material={glassMaterial}>
          <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        </mesh>
        <mesh position={[0, -0.6, 0]} material={chromeMaterial}>
          <sphereGeometry args={[0.2, 16, 16]} />
        </mesh>
      </group>
      
      {/* Right Arm */}
      <group position={[0.8, 0.8, 0]}>
        <mesh ref={rightArmRef} material={glassMaterial}>
          <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        </mesh>
        <mesh position={[0, -0.6, 0]} material={chromeMaterial}>
          <sphereGeometry args={[0.2, 16, 16]} />
        </mesh>
      </group>
      
      {/* Left Leg */}
      <group position={[-0.3, -0.8, 0]}>
        <mesh ref={leftLegRef} material={glassMaterial}>
          <cylinderGeometry args={[0.2, 0.2, 1.2, 8]} />
        </mesh>
        <mesh position={[0, -0.7, 0]} material={chromeMaterial}>
          <boxGeometry args={[0.4, 0.2, 0.6]} />
        </mesh>
      </group>
      
      {/* Right Leg */}
      <group position={[0.3, -0.8, 0]}>
        <mesh ref={rightLegRef} material={glassMaterial}>
          <cylinderGeometry args={[0.2, 0.2, 1.2, 8]} />
        </mesh>
        <mesh position={[0, -0.7, 0]} material={chromeMaterial}>
          <boxGeometry args={[0.4, 0.2, 0.6]} />
        </mesh>
      </group>
      
      {/* Floating particles around robot */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={`particle-${i}`}
          position={[
            Math.sin(i * Math.PI * 2 / 6) * 2,
            Math.sin(i * 0.5) * 0.5,
            Math.cos(i * Math.PI * 2 / 6) * 2
          ]}
          material={eyeMaterial}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
        </mesh>
      ))}
    </group>
  );
};

const Robot3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#87CEEB" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#FF69B4" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#00FFFF" />
        <RobotGeometry />
      </Canvas>
    </div>
  );
};

export default Robot3D;