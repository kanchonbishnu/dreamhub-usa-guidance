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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      <Card className="relative overflow-hidden group bg-white border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8 }}
        />
        
        <CardContent className="p-6 sm:p-8 relative z-10 flex flex-col flex-1">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
            className="mb-4"
          >
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/40" />
          </motion.div>
          
          <p className="text-base sm:text-lg mb-6 italic leading-relaxed text-foreground/90 font-medium flex-1">
            "{quote}"
          </p>
          
          <div className="flex items-center gap-4 mt-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0"
            >
              {author.charAt(0)}
            </motion.div>
            <div>
              <p 
                className="font-bold text-base sm:text-lg mb-1"
                style={{ color: '#1D4ED8' }}
              >
                {author}
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 + i * 0.05 }}
                    className="text-amber-400 text-sm"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
