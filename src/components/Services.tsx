import React from 'react';
import { services } from '../business';

interface ServicesProps { onSelectService: (serviceName: string) => void; }

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => (
  <section id="services" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24">
    <div className="text-center mb-16">
      <span className="font-medium text-xs uppercase tracking-[0.25em] text-[#e8bf96] mb-3 block">Trabalhos personalizados</span>
      <h2 className="font-['Newsreader'] font-light text-[38px] md:text-[48px] text-[#f6d9bb] leading-tight">Seu cabelo, seu estilo</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(service => (
        <button key={service.id} type="button" onClick={() => onSelectService(service.name)} aria-label={`Consultar ${service.name.toLocaleLowerCase('pt-BR')}`} className="group relative h-[380px] rounded-xl overflow-hidden text-left shadow-xl transition-transform duration-300 hover:-translate-y-0.5 border border-white/5">
          <img alt={service.name + ' no Bellas Espaço da Beleza'} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none" src={service.image} />
          <div className="absolute inset-x-0 bottom-0 h-[210px] bg-gradient-to-t from-[#1c1d20] via-[#1c1d20]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-['Newsreader'] font-light text-[27px] leading-tight text-white group-hover:text-[#f6d9bb] transition-colors">{service.name}</h3>
            <span className="block mt-3 text-xs text-[#e8bf96]">Consultar atendimento →</span>
          </div>
        </button>
      ))}
    </div>
  </section>
);
