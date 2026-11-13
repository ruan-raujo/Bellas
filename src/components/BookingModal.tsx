import React, { useEffect, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { services, whatsappLink } from '../business';

interface BookingModalProps { isOpen: boolean; onClose: () => void; initialService?: string; }

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService = services[0].name }) => {
  const [service, setService] = useState(initialService);
  useEffect(() => { if (isOpen) setService(initialService); }, [isOpen, initialService]);
  if (!isOpen) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="booking-title" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg bg-[#272422] border border-[#e8bf96]/30 rounded-2xl p-6 md:p-8 shadow-2xl z-10">
        <button type="button" onClick={onClose} aria-label="Fechar agendamento" className="absolute top-3 right-3 p-3 text-[#b8b0bb] hover:text-white"><X size={22} /></button>
        <span className="block pr-8 text-xs uppercase tracking-widest text-[#e8bf96]">Bellas Espaço da Beleza</span>
        <h2 id="booking-title" className="font-['Newsreader'] text-3xl text-[#f6d9bb] font-light mt-3 mb-6">Agende seu atendimento</h2>
        <label htmlFor="booking-service" className="block text-sm text-[#b8b0bb] mb-2">Qual serviço você procura?</label>
        <select id="booking-service" value={service} onChange={e => setService(e.target.value)} className="w-full bg-[#1c1d20] border border-[#3a3835] rounded-lg px-4 py-3 text-sm text-white">
          {services.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
        </select>
        <p className="mt-5 text-sm leading-6 text-[#b8b0bb]">Para {service.toLocaleLowerCase('pt-BR')}, consulte valores e disponibilidade pelo WhatsApp. Seu horário será confirmado diretamente com a equipe.</p>
        <a href={whatsappLink(`Olá! Gostaria de agendar um atendimento para ${service.toLocaleLowerCase('pt-BR')} no Bellas Espaço da Beleza.`)} target="_blank" rel="noreferrer" className="btn-animate-press mt-6 flex items-center justify-center gap-3 w-full py-4 px-3 bg-[#e8bf96] text-[#272422] rounded-full font-bold text-sm"><MessageCircle size={20} />Solicitar horário no WhatsApp</a>
      </div>
    </div>
  );
};
