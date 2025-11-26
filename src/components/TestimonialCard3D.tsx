import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCard3DProps {
  quote: string;
  author: string;
  index: number;
}

export function TestimonialCard3D({ quote, author, index }: TestimonialCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        rotateX: 5,
        z: 50 
      }}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: 1000 
      }}
    >
      <Card className="glass-morphism border-2 border-primary/30 hover:border-primary relative overflow-hidden group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Holographic shimmer */}
        <div className="absolute inset-0 holographic" />
        
        <CardContent className="p-8 relative z-10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mb-4"
          >
            <Quote className="w-12 h-12 text-primary opacity-30" />
          </motion.div>
          
          <p className="text-lg mb-6 italic leading-relaxed text-foreground/90">
            "{quote}"
          </p>
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-lg neon-glow"
            >
              {author.charAt(0)}
            </motion.div>
            <div>
              <p className="font-bold text-gradient">{author}</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-accent">★</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        
        {/* 3D depth effect */}
        <div
          className="absolute inset-0 border-2 border-primary/20 rounded-lg pointer-events-none"
          style={{ transform: 'translateZ(10px)' }}
        />
      </Card>
    </motion.div>
  );
}
