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
      className="relative flex items-center gap-8"
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
      )}
      
      {/* Step circle */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 animate-pulse-glow" />
      </motion.div>
      
      {/* Content */}
      <motion.div
        whileHover={{ x: 10 }}
        className="glass-morphism p-6 rounded-2xl flex-1"
      >
        <div className="text-sm font-bold text-primary mb-2">STEP {step}</div>
        <h4 className="text-xl font-bold mb-2 text-gradient">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </motion.div>
  );
}
