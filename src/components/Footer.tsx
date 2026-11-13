import React from 'react';
import { ArrowUp, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';
import { business } from '../business';

interface FooterProps { onOpenContact: () => void; }

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => (
  <footer className="relative w-full bg-[#272422] text-white pt-20 pb-10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
        <div>
          <a href="#home" className="inline-block font-['Syne'] text-4xl uppercase">Bellas<span className="block mt-2 font-['Manrope'] text-[11px] tracking-[0.18em] text-[#e8bf96]">Espaço da Beleza</span></a>
          <p className="mt-6 max-w-xs text-sm leading-6 text-[#b8b0bb]">Cabeleireira com formação técnica, especializada em alisamentos e trabalhos personalizados.</p>
        </div>
        <nav aria-label="Navegação do rodapé" className="flex flex-col items-start gap-2">
          <p className="text-xs uppercase tracking-widest text-[#e8bf96] mb-3">Conheça o Bellas</p>
          {[['#home', 'Início'], ['#services', 'Serviços'], ['#about', 'Sobre o Bellas'], ['#portfolio', 'Galeria']].map(([href, label]) => <a key={href} href={href} className="py-2 text-lg hover:text-[#e8bf96] transition-colors">{label}</a>)}
          <button type="button" onClick={onOpenContact} className="py-2 text-lg hover:text-[#e8bf96] transition-colors">Contato</button>
        </nav>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-widest text-[#e8bf96] mb-5">Vamos conversar</p>
          <a href={business.instagram} target="_blank" rel="noreferrer" className="flex items-start gap-2 py-3 text-sm text-[#f6d9bb] break-all"><Instagram size={20} className="shrink-0" />{business.handle}</a>
          <a href={business.whatsapp} target="_blank" rel="noreferrer" aria-label={`WhatsApp: ${business.phone}`} className="flex items-center gap-2 py-3 text-sm text-[#f6d9bb]"><MessageCircle size={20} className="shrink-0" />{business.phone}</a>
          <p className="text-sm text-[#b8b0bb] leading-6 mt-3">Consulte valores, serviços e disponibilidade diretamente pelo WhatsApp.</p>
          <a href={business.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-3 mt-4 text-[#e8bf96] hover:underline underline-offset-4">Solicitar atendimento<ArrowUpRight size={18} /></a>
        </div>
      </div>
      <div className="border-t border-[#3a3835] pt-8 flex flex-wrap items-center justify-between gap-5">
        <p className="text-xs text-[#b8b0bb]">© {new Date().getFullYear()} Bellas Espaço da Beleza.</p>
        <span className="text-xs text-[#b8b0bb]">Imagens: Karla Vasconcelos.</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} aria-label="Voltar ao topo" className="btn-animate-press flex items-center justify-center w-12 h-12 rounded-full border border-[#e8bf96]/50 text-[#e8bf96]"><ArrowUp size={20} /></button>
      </div>
    </div>
  </footer>
);
