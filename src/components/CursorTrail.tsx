import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let id = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: id++ }];
        return newTrail.slice(-15); // Keep only last 15 points
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 bg-cyber-cyan rounded-full opacity-80 transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.6), 0 0 40px hsl(var(--neon-cyan) / 0.3)',
        }}
      />
      
      {/* Trail points */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-2 h-2 bg-cyber-cyan rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index / trail.length) * 0.6,
            transform: `scale(${(index / trail.length) * 0.8 + 0.2})`,
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
          }}
        />
      ))}
    </div>
  );
};