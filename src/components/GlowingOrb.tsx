import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const OrbGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Create sphere geometry with many segments for smooth appearance
  const geometry = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);
  
  // Create glow geometry (slightly larger)
  const glowGeometry = useMemo(() => new THREE.SphereGeometry(1.2, 32, 32), []);

  // Main orb material with blue color and glow
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color('#4F46E5') }, // Indigo
        colorB: { value: new THREE.Color('#EC4899') }, // Pink
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
          
          // Add slight vertex displacement for organic feel
          vec3 pos = position + normal * sin(time * 2.0 + position.x * 5.0) * 0.02;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 colorA;
        uniform vec3 colorB;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Create animated gradient
          float gradient = sin(time * 0.5 + vPosition.x * 2.0 + vPosition.y * 1.5) * 0.5 + 0.5;
          vec3 color = mix(colorA, colorB, gradient);
          
          // Add rim lighting
          float rim = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          rim = pow(rim, 2.0);
          
          // Enhanced glow effect
          float glow = pow(rim, 0.5) * 1.5;
          color += glow * 0.3;
          
          gl_FragColor = vec4(color, 0.9);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  // Outer glow material
  const glowMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        intensity: { value: 0.8 },
      },
      vertexShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float intensity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float rim = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          rim = pow(rim, 1.5);
          
          // Pulsing effect
          float pulse = sin(time * 2.0) * 0.3 + 0.7;
          
          vec3 glowColor = vec3(0.31, 0.275, 0.9); // Blue glow
          float alpha = rim * intensity * pulse * 0.6;
          
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Update shader uniforms
      (material as THREE.ShaderMaterial).uniforms.time.value = time;
      (glowMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      
      // Slow rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
      glowRef.current.rotation.y += 0.005;
      glowRef.current.rotation.x += 0.003;
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef} geometry={glowGeometry} material={glowMaterial} />
      
      {/* Main orb */}
      <mesh ref={meshRef} geometry={geometry} material={material} />
      
      {/* Point lights for additional illumination */}
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#4F46E5" />
      <pointLight position={[-2, -2, 2]} intensity={0.3} color="#EC4899" />
    </group>
  );
};

const GlowingOrb = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.2} />
        <OrbGeometry />
      </Canvas>
    </div>
  );
};

export default GlowingOrb;