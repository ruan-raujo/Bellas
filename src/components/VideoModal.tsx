import React from 'react';
import { X } from 'lucide-react';
import { business, showcase } from '../business';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Vídeo do Bellas" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      
      <div className="relative w-full max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-[#e8bf96]/30">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          aria-label="Fechar vídeo"
        >
          <X size={24} />
        </button>

        <div className="relative h-[min(75dvh,680px)] w-full flex items-center justify-center bg-[#1c1d20]">
          <iframe 
            className="w-full h-full"
            src={`${showcase.videoPost}embed/`} 
            title="Transformação capilar do Bellas no Instagram"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <a href={business.instagram} target="_blank" rel="noreferrer" className="block py-4 px-6 text-center text-sm text-[#e8bf96] underline underline-offset-4">Visitar Instagram do Bellas</a>
      </div>
    </div>
  );
};
