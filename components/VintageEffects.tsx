import React from 'react';

export const GrainOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 opacity-10 mix-blend-multiply">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.65" 
          numOctaves="3" 
          stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export const SepiaFilter = () => (
  <div className="pointer-events-none fixed inset-0 z-40 bg-sepia opacity-10 mix-blend-overlay"></div>
);

export const Vignette = () => (
  <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle,transparent_60%,rgba(44,41,37,0.4)_100%)]"></div>
);