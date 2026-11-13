import React from 'react';
import { assets } from '../assets';
import { Sparkles } from 'lucide-react';
import { business } from '../business';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="home"
      aria-label="Apresentação"
      className="relative w-full max-w-[1440px] mx-auto min-h-[780px] lg:h-[840px] px-6 md:px-12 lg:px-24 pt-6 pb-20 overflow-hidden flex flex-col justify-center"
      data-node-id="4001:14"
    >
      {/* Decorative Background Curved Lines and Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" data-node-id="4001:15" aria-hidden="true">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1156.5px] h-[771.75px] opacity-70" data-node-id="4001:16">
          <img alt="" className="block w-full h-full object-contain" src={assets.frame112} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[109.5px] w-[1486.5px] h-[578.25px] flex items-center justify-center opacity-40" data-node-id="4001:24">
          <div className="rotate-90">
            <div className="w-[578.25px] h-[1486.5px] relative">
              <img alt="" className="block w-full h-full object-contain" src={assets.frame114} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Column: Typography & Action */}
        <div className="lg:col-span-7 flex flex-col items-start max-w-[600px]">
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8bf96]/10 border border-[#e8bf96]/30 text-[#e8bf96] mb-5 select-none">
            <Sparkles size={13} className="text-[#e8bf96]" aria-hidden="true" />
            <span className="font-['Manrope'] font-semibold text-[11px] tracking-[0.2em] uppercase">
              Especialista em alisamentos
            </span>
          </div>

          {/* Subtitle / Stylist Tag */}
          <p 
            className="font-['Newsreader'] font-light italic text-[#f6d9bb] text-[32px] md:text-[42.482px] leading-[1.1] mb-2"
            data-node-id="4001:43"
          >
            Bellas
          </p>

          {/* Main Headline */}
          <h1 
            className="font-['Newsreader'] font-light text-white text-[56px] sm:text-[72px] lg:text-[91.208px] leading-[1.02] tracking-tight mb-6"
            data-node-id="4001:50"
          >
            Espaço <br className="hidden sm:inline" />da Beleza
          </h1>

          {/* Description */}
          <p 
            className="font-['Manrope'] font-medium text-[#b8b0bb] text-[16px] sm:text-[18px] leading-[30px] max-w-[420px] mb-8"
            data-node-id="4001:32"
          >
            Cabeleireira com formação técnica. Alisamentos e trabalhos personalizados para transformar seu cabelo e valorizar sua beleza.
          </p>

          {/* CTA Button with Emil Kowalski Button Press Microanimation */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              type="button"
              onClick={onOpenBooking}
              aria-label="Agende agora seu atendimento"
              className="btn-animate-press bg-[#e8bf96] text-[#272422] h-[53.25px] w-[176.25px] rounded-[75px] font-['Manrope'] font-bold text-[14.25px] tracking-[1.2825px] uppercase flex items-center justify-center cursor-pointer shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e8bf96]"
              data-node-id="4001:29"
            >
              <span data-node-id="4001:31">Agendar agora</span>
            </button>
            <span className="text-[#b8b0bb]/70 text-xs font-['Manrope'] tracking-wide select-none">
              Atendimento pelo WhatsApp
            </span>
          </div>
        </div>

        {/* Keep the backdrop still; only the transparent portrait moves. */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 min-w-0">
          <div className="hero-portrait-stage">
            <div className="hero-portrait-backdrop" aria-hidden="true" />
            <div className="hero-portrait-cutout">
              <img
                src={business.cutout}
                alt="Retrato da profissional do Bellas Espaço da Beleza"
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="hero-portrait"
                data-node-id="4001:183"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
