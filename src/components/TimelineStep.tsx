import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export function TimelineStep({ step, title, description, index, isLast }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start gap-3 sm:gap-6 md:gap-8"
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-4 sm:left-5 md:left-6 top-12 sm:top-14 md:top-16 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
      )}
      
      {/* Step circle */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 animate-pulse-glow" />
      </motion.div>
      
      {/* Content */}
      <motion.div
        whileHover={{ x: 10 }}
        className="glass-morphism p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl flex-1"
      >
        <div className="text-xs sm:text-sm font-bold text-primary mb-1 sm:mb-2">STEP {step}</div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-gradient">{title}</h4>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}
