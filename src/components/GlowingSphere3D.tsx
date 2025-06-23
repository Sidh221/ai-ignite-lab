import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSphere = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  console.log('ParticleSphere component rendering');

  // Create particle system for the sphere
  const particleCount = 2000;
  const { positions, colors } = useMemo(() => {
    console.log('Creating particle data');
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Create points on a sphere surface
      const radius = 2 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Color gradient from orange to purple to blue
      const colorIntensity = Math.random();
      if (colorIntensity < 0.3) {
        colors[i * 3] = 1.0; // Orange
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 0.0;
      } else if (colorIntensity < 0.7) {
        colors[i * 3] = 0.8; // Purple
        colors[i * 3 + 1] = 0.2;
        colors[i * 3 + 2] = 1.0;
      } else {
        colors[i * 3] = 0.2; // Blue
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 1.0;
      }
    }
    
    return { positions, colors };
  }, []);

  // Particle material with glow effect
  const particleMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pointSize: { value: 3.0 },
      },
      vertexShader: `
        uniform float time;
        uniform float pointSize;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Add slight animation to particles
          vec3 pos = position;
          pos += sin(time * 0.5 + position.x * 2.0) * 0.1 * normalize(position);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = pointSize * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          float alpha = 1.0 - distance * 2.0;
          alpha = pow(alpha, 2.0);
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  // Inner glow sphere
  const glowMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color('#FF6B35') }, // Orange
        colorB: { value: new THREE.Color('#8B5FBF') }, // Purple
        colorC: { value: new THREE.Color('#4A90E2') }, // Blue
      },
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          
          vec3 pos = position * (1.0 + sin(time * 0.8) * 0.1);
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
        
        void main() {
          float fresnel = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          fresnel = pow(fresnel, 2.0);
          
          // Create color mixing based on position and time
          float mixer = sin(time * 0.5 + vPosition.x * 2.0) * 0.5 + 0.5;
          vec3 color = mix(colorA, colorB, mixer);
          color = mix(color, colorC, sin(time * 0.3 + vPosition.y) * 0.5 + 0.5);
          
          float alpha = fresnel * 0.3;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame((state) => {
    if (pointsRef.current && glowRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Update shader uniforms
      (particleMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      (glowMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      
      // Slow rotation
      pointsRef.current.rotation.y = time * 0.1;
      pointsRef.current.rotation.x = time * 0.05;
      glowRef.current.rotation.y = time * 0.08;
      glowRef.current.rotation.x = time * 0.06;
    }
  });

  return (
    <group>
      {/* Inner glow sphere */}
      <mesh ref={glowRef} material={glowMaterial}>
        <sphereGeometry args={[1.8, 64, 64]} />
      </mesh>
      
      {/* Particle system */}
      <points ref={pointsRef} material={particleMaterial}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
      
      {/* Ambient lighting for the scene */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#FF6B35" />
    </group>
  );
};

const GlowingSphere3D = () => {
  console.log('GlowingSphere3D component rendering');
  
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={() => console.log('Canvas created successfully')}
        onError={(error) => console.error('Canvas error:', error)}
      >
        <color attach="background" args={['#0A0E27']} />
        <fog attach="fog" args={['#0A0E27', 5, 12]} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
};

export default GlowingSphere3D;
