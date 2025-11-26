import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BentoServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  size?: 'small' | 'large';
  index: number;
}

export function BentoServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  size = 'small',
  index 
}: BentoServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        rotateZ: size === 'large' ? 0 : 2,
        boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.6)' 
      }}
      className={`glass-morphism rounded-3xl p-8 cursor-pointer group relative overflow-hidden
        ${size === 'large' ? 'col-span-2 row-span-2' : ''}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Holographic effect */}
      <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center neon-glow">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        
        <h3 className={`font-bold mb-3 text-gradient
          ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
          {title}
        </h3>
        
        <p className={`text-muted-foreground
          ${size === 'large' ? 'text-lg' : 'text-sm'}`}>
          {description}
        </p>
        
        <motion.div
          className="mt-6 text-sm font-semibold text-secondary group-hover:text-primary transition-colors"
          whileHover={{ x: 10 }}
        >
          Explore →
        </motion.div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
    </motion.div>
  );
}
