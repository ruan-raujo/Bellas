import React from 'react';

interface CtaSectionProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
  return (
    <section 
      aria-label="Agendamento e contato"
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-28 text-center" 
      data-node-id="4001:131"
    >
      {/* Stacked Heading */}
      <div className="flex flex-col items-center justify-center mb-12" data-node-id="4001:132">
        <h2 
          className="font-['Newsreader'] font-light text-[56px] sm:text-[76px] lg:text-[96px] leading-[1.05] text-[#e8bf96] tracking-tight"
          data-node-id="4001:133"
        >
          Agende seu atendimento
        </h2>
        <h2 
          className="font-['Newsreader'] font-light text-[56px] sm:text-[76px] lg:text-[96px] leading-[1.05] text-[#f07a60] tracking-tight"
          data-node-id="4001:134"
        >
          Transforme seu visual
        </h2>
      </div>

      {/* Action Buttons with Emil Kowalski press physics */}
      <div className="flex flex-wrap items-center justify-center gap-[18px]" data-node-id="4001:135">
        {/* Book Now (Outlined) */}
        <button
          type="button"
          onClick={onOpenBooking}
          aria-label="Agende agora seu atendimento"
          className="btn-animate-press h-[53.25px] w-[176.25px] rounded-[75px] border border-white hover:border-[#e8bf96] hover:text-[#e8bf96] font-['Manrope'] font-bold text-[14.25px] text-white tracking-[1.2825px] uppercase flex items-center justify-center cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-[#e8bf96]"
          data-node-id="4001:136"
        >
          <span data-node-id="4001:138">Agendar agora</span>
        </button>

        {/* Contact Us (Solid Champagne) */}
        <button
          type="button"
          onClick={onOpenContact}
          aria-label="Fale com a equipe para uma consulta"
          className="btn-animate-press h-[53.25px] w-[176.25px] rounded-[75px] bg-[#e8bf96] hover:bg-[#dfb185] font-['Manrope'] font-bold text-[14.25px] text-[#272422] tracking-[1.2825px] uppercase flex items-center justify-center cursor-pointer shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e8bf96]"
          data-node-id="4001:139"
        >
          <span data-node-id="4001:141">Fale conosco</span>
        </button>
      </div>
    </section>
  );
};
