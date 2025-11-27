import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Shield, Target, Award } from 'lucide-react';

interface AdvisorCardProps {
  name: string;
  qualification: string;
  university: string;
  location: string;
  index: number;
}

export function AdvisorCard({ name, qualification, university, location, index }: AdvisorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="relative h-full overflow-hidden bg-white border border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl group">
        {/* Subtle blue glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Advisor content */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center">
          {/* Professional headshot placeholder */}
          <motion.div
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mb-6 overflow-hidden shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
              boxShadow: '0 8px 24px rgba(29, 78, 216, 0.25), 0 0 40px rgba(59, 130, 246, 0.15)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground">
            {name}
          </h3>

          {/* Qualification */}
          <p className="text-sm sm:text-base md:text-lg font-semibold mb-1" style={{ color: '#1D4ED8' }}>
            {qualification}
          </p>

          {/* University & Location */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
            {university}<br />
            {location}
          </p>

          {/* Tagline */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 mb-6">
            <p className="text-xs sm:text-sm font-medium" style={{ color: '#1D4ED8' }}>
              Your Step-by-Step Guide
            </p>
          </div>

          {/* Icons for trust, guidance, expertise */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#1D4ED8' }} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Target className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#1D4ED8' }} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#1D4ED8' }} />
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
}
