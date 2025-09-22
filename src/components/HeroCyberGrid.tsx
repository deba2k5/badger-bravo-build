import { useEffect, useRef } from 'react';

export const HeroCyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    const gridSize = 50;
    const lines: Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number }> = [];

    // Create grid lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        if (Math.random() > 0.7) {
          lines.push({
            x1: x,
            y1: y,
            x2: x + gridSize,
            y2: y,
            opacity: Math.random() * 0.5,
          });
        }
        if (Math.random() > 0.7) {
          lines.push({
            x1: x,
            y1: y,
            x2: x,
            y2: y + gridSize,
            opacity: Math.random() * 0.5,
          });
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line, index) => {
        line.opacity += (Math.random() - 0.5) * 0.02;
        line.opacity = Math.max(0, Math.min(0.8, line.opacity));

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Add glowing effect
        if (line.opacity > 0.3) {
          ctx.shadowColor = '#00ffff';
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};