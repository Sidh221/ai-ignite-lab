import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const VolcanicEruption = () => {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const lavaRef = useRef<THREE.Mesh>(null);

  // Create volcanic particle system
  const particleCount = 1000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4; // x
      positions[i * 3 + 1] = Math.random() * 5; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4; // z
    }
    return positions;
  }, []);

  // Lava material
  const lavaMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color('#FF4500') }, // Orange
        colorB: { value: new THREE.Color('#FF0000') }, // Red
        colorC: { value: new THREE.Color('#8B0000') }, // Dark red
      },
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          vUv = uv;
          
          // Add volcanic displacement
          vec3 pos = position;
          pos.y += sin(time * 2.0 + position.x * 3.0) * 0.3;
          pos.y += cos(time * 1.5 + position.z * 2.0) * 0.2;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform vec3 colorC;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Create lava-like pattern
          float pattern = sin(time * 2.0 + vPosition.x * 5.0) * 0.5 + 0.5;
          pattern += cos(time * 1.5 + vPosition.z * 4.0) * 0.3;
          
          vec3 color = mix(colorC, colorA, pattern);
          color = mix(color, colorB, sin(time + vPosition.y) * 0.5 + 0.5);
          
          // Add glow effect
          float rim = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          rim = pow(rim, 2.0);
          color += rim * colorA * 0.5;
          
          gl_FragColor = vec4(color, 0.9);
        }
      `,
      transparent: true,
    });
  }, []);

  // Particle material
  const particleMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#FF4500',
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current && particlesRef.current && lavaRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Update shader uniforms
      (lavaMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      
      // Animate particles (eruption effect)
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Create eruption effect
        positions[i3 + 1] += Math.sin(time * 2 + i * 0.1) * 0.02; // y movement
        
        // Reset particles that go too high
        if (positions[i3 + 1] > 8) {
          positions[i3 + 1] = 0;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Rotate the whole volcanic scene
      groupRef.current.rotation.y = time * 0.1;
      
      // Animate lava flow
      lavaRef.current.rotation.y = time * 0.5;
      lavaRef.current.position.y = Math.sin(time) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Volcanic mountain/cone */}
      <mesh ref={lavaRef} position={[0, -1, 0]} material={lavaMaterial}>
        <coneGeometry args={[2, 4, 32]} />
      </mesh>
      
      {/* Lava pool at base */}
      <mesh position={[0, -2.8, 0]} material={lavaMaterial}>
        <cylinderGeometry args={[2.5, 2.5, 0.5, 32]} />
      </mesh>
      
      {/* Particle eruption */}
      <points ref={particlesRef} material={particleMaterial}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
      
      {/* Glowing embers */}
      {[...Array(20)].map((_, i) => (
        <mesh
          key={`ember-${i}`}
          position={[
            Math.sin(i * 0.5) * 3,
            Math.random() * 6,
            Math.cos(i * 0.5) * 3
          ]}
          material={new THREE.MeshBasicMaterial({ 
            color: i % 2 === 0 ? '#FF4500' : '#FF0000',
            transparent: true,
            opacity: 0.8
          })}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
        </mesh>
      ))}
      
      {/* Lighting for volcanic glow */}
      <pointLight position={[0, 2, 0]} intensity={2} color="#FF4500" />
      <pointLight position={[2, 1, 2]} intensity={1} color="#FF0000" />
      <pointLight position={[-2, 1, -2]} intensity={1} color="#DC143C" />
    </group>
  );
};

const Volcano3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.2} />
        <fog attach="fog" args={['#1a1a1a', 5, 15]} />
        <VolcanicEruption />
      </Canvas>
    </div>
  );
};

export default Volcano3D;