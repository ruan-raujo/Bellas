import React, { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { business, posts } from '../business';

const tabs = [
  { id: 'all', label: 'Todos os trabalhos' },
  { id: 'alisamentos', label: 'Alisamentos' },
  { id: 'mechas', label: 'Mechas' },
  { id: 'mega-hair', label: 'Mega hair' },
  { id: 'penteados', label: 'Penteados' },
];
const gallery = posts.filter(post => post.category !== 'bastidores');

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selected, setSelected] = useState<(typeof posts)[number] | null>(null);
  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [selected]);
  return (
    <section id="portfolio" aria-label="Trabalhos do Bellas Espaço da Beleza" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sm text-[#e8bf96] uppercase tracking-[0.25em] mb-3">Portfólio Bellas</span>
        <h2 className="font-['Newsreader'] font-light text-[48px] sm:text-[68px] lg:text-[88px] leading-[1.05] mb-5">Nossas <span className="text-[#f6d9bb]">transformações</span></h2>
        <p className="text-base text-[#b8b0bb] max-w-xl">Conheça alguns dos trabalhos publicados no nosso Instagram.</p>
        <div role="group" aria-label="Filtros da galeria" className="flex flex-wrap justify-center gap-2 mt-8">
          {tabs.map(tab => <button key={tab.id} type="button" aria-pressed={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-pill px-5 py-3 rounded-full text-xs uppercase tracking-wider ${activeTab === tab.id ? 'bg-[#e8bf96] text-[#272422] font-bold' : 'bg-white/5 text-[#b8b0bb] hover:bg-white/10 hover:text-white'}`}>{tab.label}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gallery.filter(post => activeTab === 'all' || post.category === activeTab).map(post => (
          <button key={post.id} type="button" onClick={() => setSelected(post)} aria-label={`Ampliar: ${post.title}`} className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5">
            <img src={post.image} alt={post.title + ' no Bellas Espaço da Beleza'} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"><ZoomIn size={30} /></span>
          </button>
        ))}
      </div>
      {selected && (
        <div role="dialog" aria-modal="true" aria-label="Foto ampliada" className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-5 bg-black/95 backdrop-blur-md" onClick={() => setSelected(null)}>
          <button type="button" onClick={() => setSelected(null)} aria-label="Fechar foto ampliada" className="absolute right-4 top-4 p-3 text-white hover:text-[#e8bf96]"><X size={30} /></button>
          <img src={selected.image} alt={selected.title} className="max-w-full max-h-[76vh] object-contain rounded-lg" onClick={event => event.stopPropagation()} />
          <a href={business.instagram} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()} className="py-3 px-5 text-sm text-[#e8bf96] underline underline-offset-4">Ver mais no Instagram do Bellas</a>
        </div>
      )}
    </section>
  );
};
