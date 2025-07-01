
import { useEffect, useRef } from 'react';

interface OrbitalElement {
  id: string;
  radius: number;
  speed: number;
  size: number;
  color: string;
  angle: number;
  label?: string;
  progress?: number;
  type: 'planet' | 'satellite' | 'data';
}

const OrbitalSystemDashboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const elementsRef = useRef<OrbitalElement[]>([
    {
      id: 'upload',
      radius: 200,
      speed: 0.5,
      size: 8,
      color: '#4F46E5',
      angle: 0,
      label: 'Upload',
      progress: 70,
      type: 'satellite'
    },
    {
      id: 'processing',
      radius: 160,
      speed: -0.8,
      size: 12,
      color: '#8B5CF6',
      angle: Math.PI / 3,
      label: 'IQ-5',
      type: 'planet'
    },
    {
      id: 'analytics',
      radius: 280,
      speed: 0.3,
      size: 6,
      color: '#10B981',
      angle: Math.PI,
      label: 'Analytics',
      type: 'data'
    },
    {
      id: 'output',
      radius: 240,
      speed: -0.4,
      size: 10,
      color: '#EC4899',
      angle: Math.PI * 1.5,
      label: 'Output',
      type: 'satellite'
    },
    {
      id: 'small-sat-1',
      radius: 120,
      speed: 1.2,
      size: 4,
      color: '#F59E0B',
      angle: Math.PI / 6,
      type: 'data'
    },
    {
      id: 'small-sat-2',
      radius: 320,
      speed: -0.2,
      size: 5,
      color: '#06B6D4',
      angle: Math.PI * 0.8,
      type: 'data'
    }
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / (2 * devicePixelRatio);
    const centerY = canvas.height / (2 * devicePixelRatio);

    const drawGradientSphere = (x: number, y: number, radius: number, color1: string, color2: string, glow = true) => {
      if (glow) {
        // Outer glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
        glowGradient.addColorStop(0, `${color1}40`);
        glowGradient.addColorStop(0.5, `${color1}20`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Main sphere
      const gradient = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.7, color2);
      gradient.addColorStop(1, `${color2}80`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Highlight
      const highlightGradient = ctx.createRadialGradient(x - radius * 0.4, y - radius * 0.4, 0, x - radius * 0.2, y - radius * 0.2, radius * 0.5);
      highlightGradient.addColorStop(0, `${color1}60`);
      highlightGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawOrbitRing = (centerX: number, centerY: number, radius: number, opacity: number = 0.2) => {
      ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawConnectionLine = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.5, `${color}40`);
      gradient.addColorStop(1, 'transparent');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const drawOrbitalElement = (element: OrbitalElement, centerX: number, centerY: number) => {
      const x = centerX + Math.cos(element.angle) * element.radius;
      const y = centerY + Math.sin(element.angle) * element.radius;

      // Draw connection line
      drawConnectionLine(centerX, centerY, x, y, element.color);

      // Draw orbital element based on type
      if (element.type === 'planet') {
        drawGradientSphere(x, y, element.size, element.color, `${element.color}60`, true);
      } else {
        // Draw smaller satellites/data points
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, element.size);
        gradient.addColorStop(0, element.color);
        gradient.addColorStop(1, `${element.color}40`);
        ctx.fillStyle = gradient;
        ctx.shadowColor = element.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, element.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      return { x, y };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);

      // Draw background grid
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * 350,
          centerY + Math.sin(angle) * 350
        );
        ctx.stroke();
      }

      // Draw orbit rings
      elementsRef.current.forEach(element => {
        drawOrbitRing(centerX, centerY, element.radius, 0.15);
      });

      // Draw central core with enhanced golden glow
      const pulseScale = 1 + Math.sin(Date.now() * 0.002) * 0.1;
      const coreSize = 50 * pulseScale;
      
      // Multiple glow layers for central core
      drawGradientSphere(centerX, centerY, coreSize * 1.5, '#FFA366', '#FF8A50', true);
      drawGradientSphere(centerX, centerY, coreSize, '#FFB380', '#FFA366', false);
      drawGradientSphere(centerX, centerY, coreSize * 0.7, '#FFC999', '#FFB380', false);
      drawGradientSphere(centerX, centerY, coreSize * 0.4, '#FFE6CC', '#FFC999', false);

      // Update and draw orbital elements
      elementsRef.current.forEach(element => {
        element.angle += element.speed * 0.008;
        drawOrbitalElement(element, centerX, centerY);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced floating status cards */}
      <div className="absolute top-4 right-4 glass rounded-xl p-4 border border-green-500/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          <span className="text-sm text-gray-200 font-medium">Open Dashboard</span>
        </div>
      </div>

      <div className="absolute top-16 right-8 glass rounded-xl p-5 border border-blue/40 backdrop-blur-md">
        <div className="text-blue text-sm font-semibold mb-1">Upload</div>
        <div className="text-3xl font-bold text-white mb-2">70%</div>
        <div className="w-24 h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <div className="w-[70%] h-full bg-gradient-to-r from-blue to-purple rounded-full shadow-lg shadow-blue/30"></div>
        </div>
      </div>

      <div className="absolute bottom-24 right-12 glass rounded-xl p-4 border border-purple/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple to-pink rounded-lg flex items-center justify-center shadow-lg shadow-purple/30">
            <span className="text-white text-xs font-bold">IQ</span>
          </div>
          <div>
            <div className="text-purple text-sm font-semibold">IQ-5</div>
            <div className="text-xs text-gray-400">Processing...</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 glass rounded-xl p-4 border border-green/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
          <span className="text-sm text-gray-200 font-medium">Analytics</span>
        </div>
      </div>

      <div className="absolute top-32 left-8 glass rounded-xl p-3 border border-pink/30 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-pink rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-300">Smart AI</span>
        </div>
      </div>
    </div>
  );
};

export default OrbitalSystemDashboard;
