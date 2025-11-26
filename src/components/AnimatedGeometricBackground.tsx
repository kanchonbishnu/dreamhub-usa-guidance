import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'node';
  size: number;
  x: number;
  y: number;
  color: string;
  duration: number;
  delay: number;
}

export function AnimatedGeometricBackground() {
  const shapes = useMemo(() => {
    const shapeArray: Shape[] = [];
    const colors = ['#1D4ED8', '#D4AF37']; // Royal blue and gold
    
    // Generate circles
    for (let i = 0; i < 15; i++) {
      shapeArray.push({
        id: i,
        type: 'circle',
        size: Math.random() * 80 + 40,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      });
    }
    
    // Generate squares
    for (let i = 15; i < 25; i++) {
      shapeArray.push({
        id: i,
        type: 'square',
        size: Math.random() * 60 + 30,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 25 + 18,
        delay: Math.random() * 5,
      });
    }
    
    // Generate network nodes
    for (let i = 25; i < 35; i++) {
      shapeArray.push({
        id: i,
        type: 'node',
        size: Math.random() * 12 + 8,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 3,
      });
    }
    
    return shapeArray;
  }, []);

  // Generate connection lines between nearby nodes
  const connections = useMemo(() => {
    const nodeShapes = shapes.filter(s => s.type === 'node');
    const lines: Array<{ x1: number; y1: number; x2: number; y2: number; color: string }> = [];
    
    for (let i = 0; i < nodeShapes.length; i++) {
      for (let j = i + 1; j < nodeShapes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodeShapes[i].x - nodeShapes[j].x, 2) +
          Math.pow(nodeShapes[i].y - nodeShapes[j].y, 2)
        );
        
        // Only connect nodes that are close enough
        if (distance < 30) {
          lines.push({
            x1: nodeShapes[i].x,
            y1: nodeShapes[i].y,
            x2: nodeShapes[j].x,
            y2: nodeShapes[j].y,
            color: nodeShapes[i].color,
          });
        }
      }
    }
    
    return lines;
  }, [shapes]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#0B0F19' }}>
      {/* Render connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        {connections.map((line, index) => (
          <motion.line
            key={`line-${index}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke={line.color}
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Render shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0, shape.type === 'node' ? 0.4 : 0.08, 0],
            rotate: shape.type === 'square' ? [0, 360] : 0,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="rounded-full"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                backgroundColor: shape.color,
                filter: 'blur(2px)',
              }}
            />
          )}
          
          {shape.type === 'square' && (
            <div
              className="rounded-sm"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                backgroundColor: shape.color,
                filter: 'blur(1.5px)',
              }}
            />
          )}
          
          {shape.type === 'node' && (
            <div
              className="rounded-full"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                backgroundColor: shape.color,
                boxShadow: `0 0 ${shape.size * 2}px ${shape.color}`,
              }}
            />
          )}
        </motion.div>
      ))}
      
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(11, 15, 25, 0.4) 100%)'
        }}
      />
    </div>
  );
}
