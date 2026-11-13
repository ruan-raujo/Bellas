import React from 'react';
import { X, Instagram, MessageCircle } from 'lucide-react';
import { business } from '../business';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ isOpen, onClose, onOpenBooking, onOpenContact }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Menu principal">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-md bg-[#1c1d20] border-l border-[#e8bf96]/20 h-full p-8 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#3a3835]">
            <span className="font-['Syne'] text-2xl uppercase">Bellas <span className="block text-[10px] tracking-widest text-[#e8bf96]">Espaço da Beleza</span></span>
            <button type="button" onClick={onClose} className="p-3 rounded-full hover:bg-white/10" aria-label="Fechar menu"><X size={24} /></button>
          </div>
          <nav className="mt-8 flex flex-col gap-4 font-['Newsreader'] text-3xl">
            {[['#home', 'Início'], ['#services', 'Serviços'], ['#about', 'Sobre o Bellas'], ['#portfolio', 'Galeria'], ['#instagram', 'Instagram']].map(([href, label]) => (
              <a key={href} href={href} onClick={onClose} className="py-1 hover:text-[#e8bf96] transition-colors">{label}</a>
            ))}
            <button type="button" onClick={() => { onClose(); onOpenContact(); }} className="text-left py-1 hover:text-[#e8bf96] transition-colors">Contato</button>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-[#3a3835] flex flex-col gap-6">
          <button type="button" onClick={() => { onClose(); onOpenBooking(); }} className="btn-animate-press w-full py-4 bg-[#e8bf96] text-[#272422] rounded-full font-bold text-sm uppercase tracking-widest">Agendar horário</button>
          <a href={business.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 py-2 text-sm text-[#e8bf96] break-all"><Instagram size={20} className="shrink-0" />{business.handle}</a>
          <a href={business.whatsapp} target="_blank" rel="noreferrer" aria-label={`Conversar pelo WhatsApp: ${business.phone}`} className="flex items-center gap-3 py-2 text-sm text-[#b8b0bb]"><MessageCircle size={20} />{business.phone}</a>
        </div>
      </div>
    </div>
  );
};
