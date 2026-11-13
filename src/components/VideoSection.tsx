import React from 'react';
import { Play } from 'lucide-react';
import { showcase } from '../business';

interface VideoSectionProps {
  onOpenVideo: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenVideo }) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16">
      <div 
        onClick={onOpenVideo}
        role="button"
        tabIndex={0}
        aria-label="Assistir ao vídeo do Bellas no Instagram"
        onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpenVideo(); } }}
        className="group relative w-full max-w-[1239px] mx-auto h-[400px] sm:h-[550px] lg:h-[726px] rounded-xl overflow-hidden cursor-pointer shadow-2xl"
        data-node-id="4001:80"
      >
        {/* Main Background Video Thumbnail */}
        <img 
          alt="Finalização loira publicada por Karla Vasconcelos" 
          className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700 motion-reduce:transform-none" 
          src={showcase.videoPoster} 
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

        {/* Play the salon's real Instagram publication. */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[92.25px] h-[56px] sm:h-[64.5px] transition-transform duration-300 group-hover:scale-125 drop-shadow-2xl flex items-center justify-center"
          data-node-id="4001:81"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e8bf96] text-[#272422]" aria-hidden="true"><Play size={28} fill="currentColor" /></span>
        </div>
      </div>
    </section>
  );
};
