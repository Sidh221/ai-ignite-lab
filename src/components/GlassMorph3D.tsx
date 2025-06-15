import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlassMorphGeometry = () => {
  const groupRef = useRef<THREE.Group>(null);
  const centerSphereRef = useRef<THREE.Mesh>(null);
  const innerRingsRef = useRef<THREE.Group>(null);
  const outerParticlesRef = useRef<THREE.Group>(null);

  // Glass material with blue tint and transparency
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0x87CEEB,
      transparent: true,
      opacity: 0.3,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 0.8,
      envMapIntensity: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
  }, []);

  // Frosted glass material for inner elements
  const frostedGlassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0xB0E0E6,
      transparent: true,
      opacity: 0.4,
      roughness: 0.3,
      metalness: 0.0,
      transmission: 0.7,
      thickness: 0.5,
    });
  }, []);

  // Glowing particle material
  const particleMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0x4F46E5,
      emissive: 0x2563EB,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8,
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Main group gentle rotation
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      
      // Center sphere breathing effect
      if (centerSphereRef.current) {
        const scale = 1 + Math.sin(time * 1.5) * 0.1;
        centerSphereRef.current.scale.setScalar(scale);
        centerSphereRef.current.rotation.x = time * 0.2;
        centerSphereRef.current.rotation.z = time * 0.15;
      }
      
      // Inner rings orbital motion
      if (innerRingsRef.current) {
        innerRingsRef.current.rotation.y = time * 0.3;
        innerRingsRef.current.rotation.x = time * 0.2;
      }
      
      // Outer particles floating
      if (outerParticlesRef.current) {
        outerParticlesRef.current.children.forEach((particle, index) => {
          const offset = index * 0.5;
          particle.position.y = Math.sin(time + offset) * 0.3;
          particle.rotation.x = time * (0.5 + index * 0.1);
          particle.rotation.y = time * (0.3 + index * 0.05);
        });
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center core sphere */}
      <mesh ref={centerSphereRef} material={glassMaterial}>
        <icosahedronGeometry args={[0.8, 2]} />
      </mesh>
      
      {/* Inner floating elements */}
      <group ref={innerRingsRef}>
        {/* Torus rings */}
        <mesh position={[0, 0, 0]} material={frostedGlassMaterial}>
          <torusGeometry args={[1.2, 0.1, 16, 100]} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={frostedGlassMaterial}>
          <torusGeometry args={[1.0, 0.08, 16, 100]} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={frostedGlassMaterial}>
          <torusGeometry args={[1.4, 0.06, 16, 100]} />
        </mesh>
        
        {/* Inner octahedron */}
        <mesh material={glassMaterial}>
          <octahedronGeometry args={[0.5, 0]} />
        </mesh>
      </group>
      
      {/* Outer floating particles */}
      <group ref={outerParticlesRef}>
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 2.5;
          return (
            <mesh
              key={`particle-${i}`}
              position={[
                Math.cos(angle) * radius,
                Math.sin(i * 0.3) * 0.5,
                Math.sin(angle) * radius
              ]}
              material={particleMaterial}
            >
              <tetrahedronGeometry args={[0.08, 0]} />
            </mesh>
          );
        })}
      </group>
      
      {/* Outer glass shell segments */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={`shell-${i}`}
            position={[
              Math.cos(angle) * 1.8,
              0,
              Math.sin(angle) * 1.8
            ]}
            rotation={[0, angle, 0]}
            material={glassMaterial}
          >
            <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
          </mesh>
        );
      })}
      
      {/* Ambient lighting particles */}
      {[...Array(8)].map((_, i) => (
        <pointLight
          key={`light-${i}`}
          position={[
            Math.cos(i * 0.8) * 3,
            Math.sin(i * 0.6) * 2,
            Math.sin(i * 0.8) * 3
          ]}
          intensity={0.3}
          distance={5}
          color={i % 2 === 0 ? "#4F46E5" : "#8B5CF6"}
        />
      ))}
    </group>
  );
};

const GlassMorph3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#87CEEB" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#4F46E5" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#8B5CF6" />
        <GlassMorphGeometry />
      </Canvas>
    </div>
  );
};

export default GlassMorph3D;