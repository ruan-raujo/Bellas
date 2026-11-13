import React from 'react';
import { assets } from '../assets';
import { business } from '../business';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24"
    >
      {/* Top Header Row: Label & Large Heading */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-20 mb-16">
        <div className="shrink-0 pt-2">
          <p 
            className="font-['Manrope'] font-medium text-[16px] md:text-[18px] text-[#b8b0bb] uppercase tracking-widest"
            data-node-id="4001:35"
          >
            Sobre o Bellas
          </p>
        </div>

        <div>
          <h2 
            className="font-['Newsreader'] font-light text-[#f6d9bb] text-[64px] sm:text-[80px] lg:text-[96px] leading-[0.95] tracking-tight"
            data-node-id="4001:46"
          >
            Técnica e <br />cuidado
          </h2>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Photo */}
        <div 
          className="lg:col-span-7 relative h-[320px] sm:h-[380px] rounded-lg overflow-hidden shadow-xl"
          data-node-id="4001:79"
        >
          <img 
            alt="Atendimento de mega hair publicado por Karla Vasconcelos" 
            className="w-full h-full object-cover object-[center_30%] transform hover:scale-105 transition-transform duration-700" 
            src={business.portrait} 
          />
        </div>

        {/* Right Side: Narrative & Experience Metric */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          {/* Paragraphs */}
          <div className="flex flex-col gap-6 text-[#b8b0bb] font-['Manrope'] font-medium text-[16px] md:text-[18px] leading-[30px]">
            <p data-node-id="4001:33">
              O Bellas Espaço da Beleza é dedicado ao cuidado dos cabelos, com formação técnica e especialização em alisamentos.
            </p>
            <p data-node-id="4001:34">
              Nossos trabalhos são personalizados. Conheça os resultados de alisamentos, mechas e mega hair e converse com a gente sobre o seu próximo visual.
            </p>
          </div>

          {/* Center the qualification block when the columns stack. */}
          <div className="mt-12 pt-8 flex w-full items-center justify-center lg:justify-start gap-4 sm:gap-5 border-t border-[#3a3835]/50">
            {/* Technical qualification */}
            <div 
              className="font-['Newsreader'] font-light text-[#f6d9bb] text-[34px] lg:text-[42px] leading-none select-none"
              data-node-id="4001:47"
            >
              Técnica
            </div>

            {/* Vertical Divider */}
            <div className="h-[70px] w-px bg-[#e8bf96]/40 shrink-0">
              <img alt="" className="h-full w-full object-contain" src={assets.dividerVertical} />
            </div>

            {/* "Anos de experience" */}
            <div 
              className="font-['Manrope'] font-medium text-[#b8b0bb] text-[16px] md:text-[18px] uppercase leading-[22px]"
              data-node-id="4001:36"
            >
              <p>Formação</p>
              <p>profissional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
