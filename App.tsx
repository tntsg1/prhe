import React, { useState } from 'react';
import { GrainOverlay, SepiaFilter, Vignette } from './components/VintageEffects';
import NewspaperHeader from './components/NewspaperHeader';
import Section from './components/Section';
import { content } from './data/content';
import { Timeline, CauseCard, StatBar, RepealStamp } from './components/InteractiveComponents';
import { motion } from 'framer-motion';
import { ChevronDown, Archive } from 'lucide-react';

const App: React.FC = () => {
  const [showRefs, setShowRefs] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-sepia selection:text-paper overflow-x-hidden">
      {/* FX Layers */}
      <GrainOverlay />
      <SepiaFilter />
      <Vignette />

      <NewspaperHeader />

      <main className="relative z-10 pb-20">
        
        {/* Hero / Intro */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b-4 border-ink">
          {/* Lead Image */}
          <div className="md:col-span-7 relative group">
             <div className="overflow-hidden border-4 border-ink shadow-[8px_8px_0px_0px_rgba(44,41,37,1)]">
              <img 
                src="https://picsum.photos/seed/prohibition/800/600?grayscale" 
                alt="Prohibition Scene" 
                className="w-full h-auto filter sepia contrast-125 brightness-90 transition-transform duration-700 group-hover:scale-105"
              />
             </div>
             <p className="font-mono text-xs mt-2 italic text-center">Fig 1. Agents pouring confiscated alcohol into the sewers.</p>
          </div>

          {/* Lead Story */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline font-bold text-3xl md:text-5xl mb-6 leading-tight">
              THE NOBLE EXPERIMENT: <br/>
              <span className="text-sepia-dark">Salvation or Ruin?</span>
            </h2>
            <div className="first-letter:text-6xl first-letter:font-bold first-letter:font-headline first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              <p className="text-lg leading-relaxed text-justify mb-4 font-body">
                {content.intro.summary}
              </p>
            </div>
            <div className="mt-8 text-center">
              <motion.a 
                href="#details"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-flex flex-col items-center text-sm font-mono uppercase tracking-widest hover:text-alert-red transition-colors"
              >
                Read Full Report
                <ChevronDown size={16} className="mt-1" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Section 1: Details */}
        <Section id="details" title={content.section1.title} headline={content.section1.headline}>
          <div className="columns-1 md:columns-2 gap-8 mb-8">
            <p className="mb-4">{content.section1.text}</p>
            <p className="mb-4">The Bureau of Prohibition was created to oversee enforcement, though it faced massive challenges due to inadequate funding. 
            Urban areas like Chicago became hotspots for illegal activity, while the "dry" movement had roots going back to the 19th century.</p>
          </div>
          <Timeline events={content.section1.timeline} />
        </Section>

        {/* Section 2: Causes */}
        <Section id="causes" title={content.section2.title} headline={content.section2.headline} className="bg-sepia/5">
          <p className="text-center max-w-2xl mx-auto mb-12 text-xl italic">
            "Prohibition was not the result of a single cause but a confluence of social, economic, and political factors."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.section2.causes.map((c, i) => (
              <CauseCard key={i} title={c.title} icon={c.icon} desc={c.desc} />
            ))}
          </div>
        </Section>

        {/* Section 3: Consequences */}
        <Section id="consequences" title={content.section3.title} headline={content.section3.headline}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                While intended to reduce crime and corruption, the "Noble Experiment" inadvertently fueled the rise of organized crime. 
                Illegal production known as "bootlegging" became a massive underground economy.
              </p>
              <p className="text-lg mb-6">
                Gangsters like Al Capone capitalized on the black market. The Bureau of Prohibition was notorious for corruption, 
                and the legal system was overwhelmed.
              </p>
            </div>
            <div className="bg-paper border-2 border-ink p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-headline font-bold text-2xl mb-6 border-b border-sepia pb-2">The Cost of Prohibition</h4>
              {content.section3.stats.map((s, i) => (
                <StatBar key={i} label={s.label} value={s.value} detail={s.detail} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </Section>

        {/* Section 4: Repeal */}
        <Section id="repeal" title={content.section4.title} headline={content.section4.headline}>
          <div className="relative p-8 border-4 border-ink/50 bg-paper-texture">
            <RepealStamp />
            <div className="columns-1 md:columns-2 gap-8 text-lg font-body leading-relaxed">
              <p className="mb-4">
                {content.section4.text} The economic pressures of the Great Depression made the tax revenue from alcohol too tempting to ignore.
                President Franklin D. Roosevelt championed repeal as part of his New Deal.
              </p>
              <p>
                Today, the legacy of Prohibition reminds us of the complexities of legislating morality. It left a lasting impact on American 
                governance and inspired later debates on drug policy. The 21st Amendment remains the only time a constitutional amendment 
                was passed to overturn a previous one.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block border-t-2 border-b-2 border-ink py-2 px-8">
                <h3 className="font-headline text-3xl">"A DRINK FOR EVERY MAN"</h3>
              </div>
            </div>
          </div>
        </Section>

        {/* References / Classifieds */}
        <section id="classifieds" className="max-w-4xl mx-auto px-6 pt-12">
          <div className="border-t-4 border-black pt-4">
            <div 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setShowRefs(!showRefs)}
            >
              <h3 className="font-headline text-2xl uppercase">Classifieds & References</h3>
              <Archive className={`transition-transform duration-300 ${showRefs ? 'rotate-180' : ''}`} />
            </div>
            
            <motion.div 
              initial={false}
              animate={{ height: showRefs ? 'auto' : 0, opacity: showRefs ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 font-mono text-xs bg-ink/5 p-4">
                {content.references.map((ref, i) => (
                  <div key={i} className="mb-2">
                    <span className="font-bold mr-2">[{i + 1}]</span>
                    {ref}
                  </div>
                ))}
                <div className="col-span-full text-center pt-4 italic opacity-60">
                  ...and 140+ additional archived documents from the Bureau of Prohibition.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="text-center mt-20 mb-8 font-mono text-xs opacity-60">
          <p>Est. 1920 • The Prohibition Gazette • Printed in U.S.A.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;