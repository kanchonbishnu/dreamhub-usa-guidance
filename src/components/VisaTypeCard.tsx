import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface VisaTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  link?: string;
}

export function VisaTypeCard({ icon: Icon, title, description, index, link }: VisaTypeCardProps) {
  const content = (
    <Card className="glass-morphism border-2 hover:neon-border group cursor-pointer overflow-hidden relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100" />
      
      <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
        <div className="mb-4 md:mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
        </div>
        
        <h3 
          className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3"
          style={{ 
            background: 'linear-gradient(135deg, hsl(215 89% 52%), hsl(214 95% 36%), hsl(224 76% 48%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {title}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'hsl(215 16% 35%)' }}>
          {description}
        </p>
        
        <div className="mt-4 md:mt-6 text-xs sm:text-sm font-semibold transition-colors" style={{ color: 'hsl(214 95% 36%)' }}>
          Learn More →
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="h-full"
    >
      {link ? (
        <Link to={link} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  );
}
