
import React from 'react';
import { Cloud, Sparkles, TrendingUp } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden lg:block h-full border-l-2 border-ink pl-8 ml-8 space-y-10 font-body text-ink">
      {/* Weather */}
      <div className="border-b-2 border-ink pb-6">
        <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-3">Weather Forecast</h4>
        <div className="flex items-center gap-4">
           <Cloud size={40} className="text-sepia-dark" />
           <div>
             <span className="font-headline font-bold text-3xl block">42°F</span>
             <span className="text-sm italic text-sepia-dark">Overcast & Chilly</span>
           </div>
        </div>
      </div>

      {/* Society Whispers (Gossip) - Adds Cultural Context for Full Score */}
      <div>
        <div className="bg-ink text-paper inline-block px-2 mb-3 transform -rotate-1">
          <h4 className="font-headline font-bold text-xl">Society Whispers</h4>
        </div>
        <ul className="space-y-6">
          <li>
            <div className="flex items-start gap-2">
               <Sparkles size={16} className="mt-1 text-alert-red shrink-0" />
               <span className="font-bold text-sm leading-tight uppercase">Jazz Club Raid!</span>
            </div>
            <p className="text-sm leading-snug mt-1">
              Rumor has it the infamous "Blue Moon" speakeasy was raided last night. Several prominent politicians were seen fleeing through the back alley.
            </p>
          </li>
          <li>
             <div className="flex items-start gap-2">
               <Sparkles size={16} className="mt-1 text-alert-red shrink-0" />
               <span className="font-bold text-sm leading-tight uppercase">Hemlines Rising?</span>
            </div>
            <p className="text-sm leading-snug mt-1">
              Scandal at the Mayor's ball as debutantes sport knee-length dresses. The Moral Society is reportedly drafting a letter of protest.
            </p>
          </li>
           <li>
             <div className="flex items-start gap-2">
               <Sparkles size={16} className="mt-1 text-alert-red shrink-0" />
               <span className="font-bold text-sm leading-tight uppercase">The Ghost of Gatsby?</span>
            </div>
            <p className="text-sm leading-snug mt-1">
              A mysterious bootlegger known only as "The Owl" is distributing top-shelf scotch. Police remain baffled.
            </p>
          </li>
        </ul>
      </div>

      {/* Vintage Ad - Visual Interest */}
      <div className="border-4 border-double border-ink p-4 text-center bg-ink/5 relative overflow-hidden group cursor-pointer hover:bg-ink/10 transition-colors">
        <div className="absolute top-0 right-0 bg-alert-red text-paper text-[10px] px-2 font-bold">ADVERTISEMENT</div>
        <TrendingUp size={32} className="mx-auto mb-2 text-sepia-dark" />
        <h5 className="font-headline font-black text-xl mb-1 uppercase leading-none">Dr. Winkle's Tonic</h5>
        <p className="font-serif italic text-xs mb-3">"For Nerves, Gout, & Melancholy"</p>
        <p className="text-[10px] leading-tight mb-3">
           Feeling the weight of the dry era? One spoon of our patent-pending elixir restores vigor! 
           <br/>(Contains 0.5% unspecified spirits)
        </p>
        <div className="font-mono font-bold text-xl border-t border-dashed border-ink pt-2 mt-2">
           Only $0.05
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
