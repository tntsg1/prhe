import React from 'react';
import { motion } from 'framer-motion';

const NewspaperHeader = () => {
  const today = new Date("1933-12-05").toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <header className="pt-8 px-4 border-b-8 border-double border-ink bg-paper sticky top-0 z-30 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar info */}
        <div className="flex justify-between items-center border-b border-ink pb-2 font-mono text-xs md:text-sm uppercase tracking-wider mb-4">
          <span>Vol. XIII... No. 420</span>
          <span>Price Two Cents</span>
          <span>{today}</span>
        </div>

        {/* Masthead Title */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-9xl font-headline font-black text-center tracking-tighter leading-none mb-4 text-ink"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          The Prohibition Gazette
        </motion.h1>

        {/* Motto */}
        <div className="text-center font-serif italic text-lg md:text-xl mb-6 text-sepia-dark">
          "All the News That's Fit to Print — And Some That Isn't"
        </div>

        {/* Navigation / Index */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 font-headline font-bold uppercase text-sm md:text-base border-y-2 border-ink py-2 mb-2">
          <a href="#details" className="hover:bg-ink hover:text-paper px-2 transition-colors">The Facts</a>
          <a href="#causes" className="hover:bg-ink hover:text-paper px-2 transition-colors">The Causes</a>
          <a href="#consequences" className="hover:bg-ink hover:text-paper px-2 transition-colors">The Fallout</a>
          <a href="#repeal" className="hover:bg-ink hover:text-paper px-2 transition-colors">Repeal</a>
          <a href="#classifieds" className="hover:bg-ink hover:text-paper px-2 transition-colors">Classifieds</a>
        </nav>
      </div>
    </header>
  );
};

export default NewspaperHeader;