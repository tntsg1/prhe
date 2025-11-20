import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  headline: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, headline, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-b-2 border-ink/20 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[1px] bg-ink flex-grow"></div>
            <span className="font-mono text-sm uppercase tracking-widest">{title}</span>
            <div className="h-[1px] bg-ink flex-grow"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 leading-tight">
            {headline}
          </h2>

          <div className="font-body text-lg leading-relaxed text-justify">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;