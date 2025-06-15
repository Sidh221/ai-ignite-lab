import { useEffect, useRef } from 'react';

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  type: 'particle' | 'shape';
  shapeType?: 'circle' | 'square' | 'triangle';
  rotation?: number;
  rotationSpeed?: number;
}

const PerformantParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationFrameRef = useRef<number>();
  const lastFrameTime = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const createElements = () => {
      const elementCount = 30; // Reduced for better performance
      const colors = [
        { hue: 195, name: 'cyan' },    // #00D4FF
        { hue: 265, name: 'purple' },  // #8B5FBF  
        { hue: 290, name: 'magenta' }, // #C147E9
        { hue: 105, name: 'green' }    // #39FF14
      ];

      elementsRef.current = Array.from({ length: elementCount }, (_, i) => {
        const colorData = colors[Math.floor(Math.random() * colors.length)];
        const isParticle = Math.random() > 0.3;
        
        return {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (isParticle ? 4 : 20) + (isParticle ? 2 : 10),
          speedX: (Math.random() - 0.5) * 0.02,
          speedY: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.4 + 0.1,
          hue: colorData.hue + (Math.random() - 0.5) * 20,
          type: isParticle ? 'particle' : 'shape',
          shapeType: !isParticle ? ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle' : undefined,
          rotation: !isParticle ? Math.random() * 360 : undefined,
          rotationSpeed: !isParticle ? (Math.random() - 0.5) * 2 : undefined
        };
      });

      // Create DOM elements
      container.innerHTML = '';
      elementsRef.current.forEach((element, index) => {
        const div = document.createElement('div');
        div.className = `absolute transition-all duration-1000 ease-linear pointer-events-none`;
        div.id = `floating-element-${index}`;
        
        if (element.type === 'particle') {
          div.style.cssText = `
            width: ${element.size}px;
            height: ${element.size}px;
            background: hsl(${element.hue}, 100%, 60%);
            border-radius: 50%;
            box-shadow: 0 0 ${element.size * 2}px hsl(${element.hue}, 100%, 60%, 0.5);
            opacity: ${element.opacity};
            left: ${element.x}%;
            top: ${element.y}%;
            filter: blur(0.5px);
          `;
        } else {
          const shapeStyles = {
            circle: `border-radius: 50%; border: 2px solid hsl(${element.hue}, 100%, 60%);`,
            square: `border: 2px solid hsl(${element.hue}, 100%, 60%);`,
            triangle: `
              width: 0;
              height: 0;
              border-left: ${element.size / 2}px solid transparent;
              border-right: ${element.size / 2}px solid transparent;
              border-bottom: ${element.size}px solid hsl(${element.hue}, 100%, 60%);
            `
          };

          div.style.cssText = `
            width: ${element.shapeType === 'triangle' ? '0' : element.size + 'px'};
            height: ${element.shapeType === 'triangle' ? '0' : element.size + 'px'};
            ${shapeStyles[element.shapeType!]}
            opacity: ${element.opacity};
            left: ${element.x}%;
            top: ${element.y}%;
            transform: rotate(${element.rotation}deg);
            filter: drop-shadow(0 0 ${element.size / 2}px hsl(${element.hue}, 100%, 60%, 0.3));
          `;
        }
        
        container.appendChild(div);
      });
    };

    createElements();

    // Animation with RAF throttling
    const animate = (currentTime: number) => {
      // Throttle to ~30fps for better performance
      if (currentTime - lastFrameTime.current < 33) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = currentTime;

      elementsRef.current.forEach((element, index) => {
        // Update position
        element.x += element.speedX;
        element.y += element.speedY;

        // Wrap around screen
        if (element.x > 100) element.x = -5;
        if (element.x < -5) element.x = 100;
        if (element.y > 100) element.y = -5;
        if (element.y < -5) element.y = 100;

        // Update rotation for shapes
        if (element.type === 'shape' && element.rotation !== undefined && element.rotationSpeed !== undefined) {
          element.rotation += element.rotationSpeed;
        }

        // Update DOM element
        const domElement = document.getElementById(`floating-element-${index}`);
        if (domElement) {
          domElement.style.left = `${element.x}%`;
          domElement.style.top = `${element.y}%`;
          
          if (element.type === 'shape') {
            domElement.style.transform = `rotate(${element.rotation}deg)`;
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating elements container */}
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      />
      
      {/* Depth layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 95, 191, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(193, 71, 233, 0.05) 0%, transparent 50%)
            `
          }}
        />
      </div>
    </>
  );
};

export default PerformantParticles;