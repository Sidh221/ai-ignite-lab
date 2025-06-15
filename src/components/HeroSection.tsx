
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
    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // Create globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create point material for stars
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x3366ff,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create points for the sphere
    const points = new THREE.Points(sphereGeometry, pointsMaterial);
    scene.add(points);
    
    // Add markers for key locations
    const markerPositions = [
      { lat: 37.7749, lng: -122.4194, size: 0.08 }, // San Francisco
      { lat: 40.7128, lng: -74.0060, size: 0.08 },  // New York
      { lat: 51.5074, lng: -0.1278, size: 0.08 },   // London
      { lat: 35.6762, lng: 139.6503, size: 0.08 },  // Tokyo
      { lat: -33.8688, lng: 151.2093, size: 0.08 }, // Sydney
    ];
    
    // Convert lat/lng to 3D position
    function latLngToVector3(lat: number, lng: number, radius: number) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      
      return new THREE.Vector3(x, y, z);
    }
    
    // Add markers
    markerPositions.forEach(marker => {
      const markerGeometry = new THREE.SphereGeometry(marker.size, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xff66cc,
        transparent: true,
        opacity: 0.8
      });
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);
      const position = latLngToVector3(marker.lat, marker.lng, 2);
      markerMesh.position.set(position.x, position.y, position.z);
      scene.add(markerMesh);
    });
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Make globe interactive
    let rotationSpeed = 0.001;
    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    
    // Mouse events for interactivity
    canvas.addEventListener('mousedown', (e) => {
      mouseDown = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    canvas.addEventListener('mouseup', () => {
      mouseDown = false;
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (mouseDown) {
        const deltaX = e.clientX - mouseX;
        const deltaY = e.clientY - mouseY;
        
        points.rotation.y += deltaX * 0.005;
        points.rotation.x += deltaY * 0.005;
        
        // Update all markers to match globe rotation
        scene.children.forEach(child => {
          if (child instanceof THREE.Mesh) {
            child.rotation.y += deltaX * 0.005;
            child.rotation.x += deltaY * 0.005;
          }
        });
        
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    });
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      if (!mouseDown) {
        points.rotation.y += rotationSpeed;
        
        // Rotate all markers
        scene.children.forEach(child => {
          if (child instanceof THREE.Mesh) {
            child.rotation.y += rotationSpeed;
          }
        });
      }
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Cleanup
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black z-0"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Creating</span> digital experiences worldwide
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
              Full-stack developer specializing in building immersive, responsive web applications that connect people across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all text-center">
                View my work
              </a>
              <a href="#contact" className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all text-center">
                Contact me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <canvas
                ref={canvasRef}
                style={{ width: 400, height: 400 }}
                width={800}
                height={800}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-4xl font-light mb-1 tracking-tight">Frontend</p>
            <p className="text-gray-400 font-extralight">React, Vue, TailwindCSS</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-1 tracking-tight">Backend</p>
            <p className="text-gray-400 font-extralight">Node.js, Express, MongoDB</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-1 tracking-tight">UX/UI</p>
            <p className="text-gray-400 font-extralight">Figma, Responsive Design</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-1 tracking-tight">DevOps</p>
            <p className="text-gray-400 font-extralight">AWS, CI/CD, Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
