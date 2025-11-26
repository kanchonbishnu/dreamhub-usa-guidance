import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface BentoServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  size?: 'small' | 'large';
  index: number;
  link: string;
}

export function BentoServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  size = 'small',
  index,
  link 
}: BentoServiceCardProps) {
  return (
    <Link to={link} className={size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ 
          scale: 1.05, 
          rotateZ: size === 'large' ? 0 : 2,
        }}
        className="glass-morphism rounded-3xl p-6 md:p-8 cursor-pointer group relative overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-deep-blue/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Holographic effect */}
      <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-5 md:mb-6"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary via-deep-blue to-secondary flex items-center justify-center glow-elegant">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
        </motion.div>
        
        <h3 className={`font-bold mb-2 sm:mb-3 text-gradient
          ${size === 'large' ? 'text-xl sm:text-2xl md:text-3xl' : 'text-base sm:text-lg md:text-xl'}`}>
          {title}
        </h3>
        
        <p className={`text-muted-foreground leading-relaxed
          ${size === 'large' ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base'}`}>
          {description}
        </p>
        
        <motion.div
          className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2"
          whileHover={{ x: 10 }}
        >
          <span>Explore</span>
          <span className="text-base sm:text-lg">→</span>
        </motion.div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
      </motion.div>
    </Link>
  );
}
