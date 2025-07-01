
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
}

const OrbitalDashboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const elementsRef = useRef<OrbitalElement[]>([
    {
      id: 'upload',
      radius: 180,
      speed: 0.8,
      size: 12,
      color: '#EC4899',
      angle: 0,
      label: 'Upload',
      progress: 70
    },
    {
      id: 'processing',
      radius: 220,
      speed: -0.6,
      size: 10,
      color: '#8B5CF6',
      angle: Math.PI / 3,
      label: 'Processing...'
    },
    {
      id: 'analytics',
      radius: 160,
      speed: 1.2,
      size: 8,
      color: '#4F46E5',
      angle: Math.PI,
      label: 'Analytics'
    },
    {
      id: 'output',
      radius: 260,
      speed: -0.4,
      size: 14,
      color: '#10B981',
      angle: Math.PI * 1.5,
      label: 'Output'
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

    const drawGradientCircle = (x: number, y: number, radius: number, color1: string, color2: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawOrbitRing = (centerX: number, centerY: number, radius: number, opacity: number = 0.3) => {
      ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawOrbitalElement = (element: OrbitalElement, centerX: number, centerY: number) => {
      const x = centerX + Math.cos(element.angle) * element.radius;
      const y = centerY + Math.sin(element.angle) * element.radius;

      // Draw connecting line
      ctx.strokeStyle = `${element.color}40`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw orbital element
      ctx.shadowColor = element.color;
      ctx.shadowBlur = 15;
      drawGradientCircle(x, y, element.size, element.color, `${element.color}80`);
      ctx.shadowBlur = 0;

      // Draw label and progress if available
      if (element.label) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(element.label, x, y - element.size - 10);

        if (element.progress) {
          ctx.fillStyle = element.color;
          ctx.font = 'bold 14px Inter, sans-serif';
          ctx.fillText(`${element.progress}%`, x, y + element.size + 20);
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);

      // Draw central core with pulsing effect
      const pulseScale = 1 + Math.sin(Date.now() * 0.003) * 0.1;
      drawGradientCircle(centerX, centerY, 60 * pulseScale, '#FF8A50', '#FF6B35');
      drawGradientCircle(centerX, centerY, 40 * pulseScale, '#FFA366', '#FF8A50');
      drawGradientCircle(centerX, centerY, 20 * pulseScale, '#FFB380', '#FFA366');

      // Draw orbit rings
      elementsRef.current.forEach(element => {
        drawOrbitRing(centerX, centerY, element.radius, 0.2);
      });

      // Update and draw orbital elements
      elementsRef.current.forEach(element => {
        element.angle += element.speed * 0.01;
        drawOrbitalElement(element, centerX, centerY);
      });

      // Draw connecting grid lines
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * 300,
          centerY + Math.sin(angle) * 300
        );
        ctx.stroke();
      }

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
      
      {/* Floating status cards */}
      <div className="absolute top-4 right-4 glass rounded-lg p-3 border border-blue/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Open Dashboard</span>
        </div>
      </div>

      <div className="absolute top-20 right-8 glass rounded-lg p-4 border border-pink/30">
        <div className="text-pink text-sm font-medium">Upload</div>
        <div className="text-2xl font-bold text-white">70%</div>
        <div className="w-20 h-1 bg-gray-700 rounded-full mt-2">
          <div className="w-3/5 h-full bg-gradient-to-r from-pink to-purple rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-20 right-12 glass rounded-lg p-3 border border-purple/30">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-purple to-pink rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">IQ</span>
          </div>
          <div>
            <div className="text-purple text-sm font-medium">IQ-5</div>
            <div className="text-xs text-gray-400">Processing...</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 glass rounded-lg p-3 border border-blue/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue rounded-full"></div>
          <span className="text-sm text-gray-300">Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default OrbitalDashboard;
