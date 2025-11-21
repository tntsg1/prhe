import React from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  caption?: string;
}

export const VintageVideoPlayer: React.FC<VideoPlayerProps> = ({ src, caption }) => {
  // 简单的判断逻辑：如果后缀是视频格式，就认为是本地文件；否则认为是网页嵌入
  const isNativeVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);

  return (
    <div className="relative max-w-4xl mx-auto my-12">
      {/* Film Strip Decoration Top */}
      <div className="h-8 bg-ink flex gap-2 px-2 mb-2 overflow-hidden select-none">
        {[...Array(30)].map((_, i) => (
          <div key={`top-${i}`} className="w-4 h-5 bg-paper/80 rounded-[1px] mt-1.5 flex-shrink-0" />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-black p-2 border-x-4 border-ink shadow-[10px_10px_0px_0px_rgba(44,41,37,0.5)]"
      >
        {/* Screen Container */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-900">
          {isNativeVideo ? (
            <video 
              className="absolute top-0 left-0 w-full h-full filter sepia-[0.4] contrast-125 grayscale-[0.2] object-cover"
              controls
              playsInline
              src={src}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe 
              className="absolute top-0 left-0 w-full h-full filter sepia-[0.4] contrast-125 grayscale-[0.2]"
              src={src} 
              title="Vintage Newsreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          )}
          
          {/* Old Film Flicker/Grain Overlay (CSS only) */}
          <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
        </div>
      </motion.div>

      {/* Film Strip Decoration Bottom */}
      <div className="h-8 bg-ink flex gap-2 px-2 mt-2 overflow-hidden select-none">
        {[...Array(30)].map((_, i) => (
          <div key={`bottom-${i}`} className="w-4 h-5 bg-paper/80 rounded-[1px] mt-1.5 flex-shrink-0" />
        ))}
      </div>

      {caption && (
        <div className="text-center mt-4">
            <span className="font-mono text-sm italic text-sepia-dark border-b border-sepia inline-block px-4 pb-1">
            Fig 2. {caption}
            </span>
        </div>
      )}
    </div>
  );
};