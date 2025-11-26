import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface VisaTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function VisaTypeCard({ icon: Icon, title, description, index }: VisaTypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Card className="glass-morphism border-2 hover:neon-border group cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100" />
        
        <CardContent className="p-8 relative z-10">
          <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-gradient group-hover:text-neon">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <div className="mt-6 text-sm font-semibold text-secondary group-hover:text-neon-blue transition-colors">
            Learn More →
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
