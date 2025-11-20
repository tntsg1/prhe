import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Cross, Factory, Flag, Swords, DollarSign, AlertTriangle, Wine, Gavel, TrendingUp } from 'lucide-react';

// --- Timeline Component ---
interface TimelineEvent {
  year: number;
  event: string;
  desc: string;
}

export const Timeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  return (
    <div className="my-12 py-8 border-y-4 border-ink border-double relative">
      <h3 className="font-headline text-2xl text-center mb-8 uppercase tracking-widest">Chronology of Events</h3>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 px-4">
        {/* Horizontal Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-ink -z-10 transform -translate-y-1/2" />
        
        {events.map((item, index) => (
          <motion.div 
            key={index}
            className="relative flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveYear(activeYear === index ? null : index)}
          >
            <div className={`w-6 h-6 rounded-full border-4 border-paper transition-colors duration-300 z-10 ${activeYear === index ? 'bg-alert-red' : 'bg-ink group-hover:bg-sepia'}`} />
            <span className="font-headline font-bold text-xl mt-2 bg-paper px-2">{item.year}</span>
            
            <AnimatePresence>
              {(activeYear === index) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-16 w-48 md:w-64 bg-paper border-2 border-ink p-4 shadow-[4px_4px_0px_0px_rgba(44,41,37,1)] z-20 text-center"
                >
                  <h4 className="font-bold font-mono mb-2 border-b border-sepia pb-1">{item.event}</h4>
                  <p className="text-sm font-body italic">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-xs font-mono mt-8 text-sepia-dark opacity-60">Click year to inspect archives</p>
    </div>
  );
};

// --- Cause Card ---
const iconMap: any = {
  Scale, Cross, Factory, Flag, Swords, DollarSign
};

export const CauseCard: React.FC<{ title: string; icon: string; desc: string }> = ({ title, icon, desc }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[icon] || AlertTriangle;

  return (
    <div 
      className="perspective-1000 w-full h-48 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-ink text-paper border-2 border-sepia p-4 flex flex-col items-center justify-center shadow-md">
          <Icon size={48} className="mb-4 text-sepia" />
          <h4 className="font-headline text-lg text-center uppercase">{title}</h4>
          <span className="absolute bottom-2 right-2 text-xs font-mono opacity-50">TAP TO FLIP</span>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-paper text-ink border-2 border-ink p-4 flex items-center justify-center shadow-md" 
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="font-body text-center leading-snug">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

// --- Stat Chart ---
export const StatBar: React.FC<{ label: string; value: string; detail: string; delay: number }> = ({ label, value, detail, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4 mb-6 border-b border-sepia border-dashed pb-4 last:border-0"
    >
      <div className="p-3 bg-sepia/20 rounded-full">
        <TrendingUp className="text-ink" size={24} />
      </div>
      <div className="flex-grow">
        <h5 className="font-mono text-sm uppercase tracking-widest text-sepia-dark">{label}</h5>
        <div className="flex items-baseline gap-2">
          <span className="font-headline text-3xl md:text-4xl font-bold text-alert-red">{value}</span>
          <span className="font-body italic text-sm opacity-80 max-w-[200px]">{detail}</span>
        </div>
      </div>
    </motion.div>
  );
}

// --- Animated Stamp ---
export const RepealStamp = () => {
  return (
    <motion.div
      initial={{ scale: 2, opacity: 0, rotate: -15 }}
      whileInView={{ scale: 1, opacity: 1, rotate: -15 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="absolute top-0 right-0 md:right-10 border-4 border-alert-red text-alert-red px-4 py-2 z-10 mask-stamp"
      style={{ mixBlendMode: 'multiply' }}
    >
      <span className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter opacity-80">
        REPEALED
      </span>
    </motion.div>
  );
}