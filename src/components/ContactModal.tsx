import React from 'react';
import { X, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { business } from '../business';

interface ContactModalProps { isOpen: boolean; onClose: () => void; }

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="contact-title" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg bg-[#272422] border border-[#e8bf96]/30 rounded-2xl p-6 md:p-8 shadow-2xl z-10">
        <button type="button" onClick={onClose} aria-label="Fechar contato" className="absolute top-3 right-3 p-3 text-[#b8b0bb] hover:text-white"><X size={22} /></button>
        <span className="block pr-8 text-xs uppercase tracking-widest text-[#e8bf96]">Bellas Espaço da Beleza</span>
        <h2 id="contact-title" className="font-['Newsreader'] text-3xl text-[#f6d9bb] font-light mt-3 mb-4">Vamos conversar?</h2>
        <p className="text-sm leading-6 text-[#b8b0bb] mb-6">Tire suas dúvidas sobre os serviços, consulte valores e combine seu atendimento com a equipe pelo WhatsApp.</p>
        <a href={business.whatsapp} target="_blank" rel="noreferrer" className="btn-animate-press flex items-center justify-center gap-3 py-4 px-3 bg-[#e8bf96] text-[#272422] rounded-full font-bold text-sm"><MessageCircle size={20} />Conversar pelo WhatsApp<ArrowUpRight size={18} /></a>
        <a href={business.whatsapp} target="_blank" rel="noreferrer" className="block text-center py-3 mt-2 text-sm text-[#f6d9bb]">{business.phone}</a>
        <a href={business.instagram} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 py-3 text-[#e8bf96] text-sm break-all"><Instagram size={18} className="shrink-0" />{business.handle}</a>
      </div>
    </div>
  );
};
