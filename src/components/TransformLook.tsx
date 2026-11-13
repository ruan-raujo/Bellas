import React from 'react';
import { showcase } from '../business';

interface TransformLookProps {
  onOpenContact: () => void;
}

export const TransformLook: React.FC<TransformLookProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24">
      {/* Massive Statement Heading */}
      <div className="max-w-[1100px] mb-16 lg:mb-24" data-node-id="4001:119">
        <h2 className="font-['Newsreader'] font-light text-[56px] sm:text-[76px] lg:text-[96px] leading-[1.05] tracking-tight">
          <span className="text-[#e8bf96]">Transformando seu visual</span>
          <span className="text-white">, valorizando seu estilo.</span>
        </h2>
      </div>

      {/* Three photographs first, followed by a single centered action. */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
        {[
          { src: showcase.left, alt: 'Mechas e ondas em trabalho de Karla Vasconcelos' },
          { src: showcase.center, alt: 'Cabelos longos e lisos em trabalho de Karla Vasconcelos' },
          { src: showcase.right, alt: 'Resultado de mega hair em tons caramelo' },
        ].map(photo => (
          <div key={photo.src} className="group aspect-[4/5] rounded-[7.5px] overflow-hidden shadow-xl">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105 motion-reduce:transform-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 mx-auto max-w-2xl flex flex-col items-center gap-5 text-center">
          <p 
            className="font-['Manrope'] font-medium text-[16px] md:text-[18px] text-[#b8b0bb] leading-[30px]"
            data-node-id="4001:121"
          >
            Uma mudança no cabelo começa com uma conversa sobre o que você quer. Conheça os trabalhos de alisamento, mechas e mega hair para encontrar o seu próximo visual.
          </p>
          
          <p 
            className="font-['Manrope'] font-medium text-[16px] md:text-[18px] text-[#b8b0bb] leading-[30px]"
            data-node-id="4001:122"
          >
            Fale conosco para conversar sobre suas ideias.
          </p>

          <button 
            type="button"
            onClick={onOpenContact}
            className="btn-animate-press mt-3 bg-[#e8bf96] hover:bg-[#dfb185] text-[#272422] h-[53.25px] w-full sm:w-[176.25px] rounded-[75px] font-['Manrope'] font-bold text-[14.25px] tracking-[1.2825px] uppercase flex items-center justify-center shadow-lg cursor-pointer"
            data-node-id="4001:128"
          >
            <span data-node-id="4001:130">Fale conosco</span>
          </button>
      </div>
    </section>
  );
};
