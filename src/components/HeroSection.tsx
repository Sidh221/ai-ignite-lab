
import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Initialize scene
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(600, 600);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 8;
    
    // Create neural network visualization
    const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00D4FF,
      transparent: true,
      opacity: 0.8
    });
    
    // Create nodes
    const nodes = [];
    for (let i = 0; i < 50; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      nodes.push(node);
      scene.add(node);
    }
    
    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x8B5FBF, 
      transparent: true, 
      opacity: 0.3 
    });
    
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 3) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          connections.push(line);
          scene.add(line);
        }
      }
    }
    
    // Add floating geometric shapes
    const shapes = [];
    for (let i = 0; i < 10; i++) {
      const geometry = Math.random() > 0.5 
        ? new THREE.BoxGeometry(0.5, 0.5, 0.5)
        : new THREE.OctahedronGeometry(0.3);
      const material = new THREE.MeshBasicMaterial({ 
        color: Math.random() > 0.5 ? 0x39FF14 : 0xC147E9,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      shapes.push(shape);
      scene.add(shape);
    }
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00D4FF, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Make scene interactive
    let mouseX = 0;
    let mouseY = 0;
    
    // Mouse events for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      // Rotate camera based on mouse position
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      // Animate nodes
      nodes.forEach((node, index) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
        node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
        shape.rotation.z += 0.005;
      });
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00D4FF] to-[#39FF14] rounded-full filter blur-[120px] opacity-15 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="flex items-center mb-8">
              <img src="/lovable-uploads/3dd70e90-927f-4504-840a-a044bc9c7860.png" alt="NextSynthAI Logo" className="h-16 w-16 mr-4" />
              <div className="text-3xl font-bold tracking-tight text-white">NextSynthAI</div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#8B5FBF] to-[#C147E9] animate-gradient-text">
                Artificial Intelligence
              </span>
              <br />
              <span className="text-white">meets</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#00D4FF]">
                limitless possibility
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed">
              We craft autonomous agents and intelligent automation systems that don't just work for your business, they evolve with it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-xl px-8 py-4 hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">Experience Intelligent Automation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="glass border border-[#00D4FF]/30 text-white font-semibold rounded-xl px-8 py-4 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1">
                Deploy Your AI Agent Today
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00D4FF] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Intelligent Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#39FF14] mb-2">∞</div>
                <div className="text-gray-400 text-sm">Scalable Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C147E9] mb-2">AI</div>
                <div className="text-gray-400 text-sm">Next-Gen Technology</div>
              </div>
            </div>
          </div>
          
          {/* Right content - 3D Scene */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[600px] w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#8B5FBF]/10 to-[#C147E9]/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600 }}
                width={1200}
                height={1200}
                className="relative z-10 rounded-xl"
              />
              
              {/* Floating UI elements */}
              <div className="absolute top-10 right-10 glass rounded-xl p-4 animate-float">
                <div className="text-[#00D4FF] text-sm font-semibold">Neural Processing</div>
                <div className="text-white text-xs">Active Connections: 847</div>
              </div>
              
              <div className="absolute bottom-10 left-10 glass rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-[#39FF14] text-sm font-semibold">AI Learning</div>
                <div className="text-white text-xs">Optimization: 99.7%</div>
              </div>
              
              <div className="absolute top-1/2 left-0 glass rounded-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-[#C147E9] text-sm font-semibold">Automation</div>
                <div className="text-white text-xs">Tasks Completed: 2,847</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
