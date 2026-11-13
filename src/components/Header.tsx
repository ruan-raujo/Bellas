import React from 'react';
import { assets } from '../assets';

interface HeaderProps {
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  return (
    <header className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-10 pb-4 flex items-center justify-between z-30">
      {/* Logo */}
      <a 
        href="#" 
        className="font-['Syne'] font-semibold text-[28px] md:text-[36.293px] tracking-tight uppercase text-white hover:opacity-90 transition-opacity"
        data-node-id="4001:187"
      >
        <span className="block leading-none">Bellas</span>
        <span className="block mt-2 text-[10px] md:text-[11px] font-['Manrope'] tracking-[0.18em] font-medium">Espaço da Beleza</span>
      </a>

      {/* Botão de Menu */}
      <button 
        type="button"
        onClick={onOpenMenu}
        className="flex items-center gap-[15.75px] group cursor-pointer p-1"
        data-node-id="4001:37"
        aria-label="Abrir menu de navegação"
      >
        <span 
          className="font-['Manrope'] font-medium text-[12px] text-white uppercase tracking-wider group-hover:text-[#e8bf96] transition-colors"
          data-node-id="4001:38"
        >
          Menu
        </span>
        <div className="w-[42px] h-[24px] relative shrink-0 transition-transform group-hover:scale-105" data-node-id="4001:39">
          <img 
            alt="Ícone de Menu" 
            className="block w-full h-full object-contain" 
            src={assets.menuLines} 
          />
        </div>
      </button>
    </header>
  );
};
