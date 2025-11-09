import React, { useEffect, useState } from 'react';
import { ImageItem } from '../types';
import { CLOUDINARY_BASE_URL } from '../constants';

interface LightboxProps {
  image: ImageItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const NavButton: React.FC<{onClick: () => void, children: React.ReactNode, position: 'left' | 'right', 'aria-label': string}> = ({ onClick, children, position, 'aria-label': ariaLabel }) => (
    <button
        onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}
        className={`absolute top-1/2 -translate-y-1/2 ${position === 'left' ? 'left-2 md:-left-12' : 'right-2 md:-right-12'} h-12 w-12 bg-white/20 text-white rounded-full flex items-center justify-center text-2xl hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary`}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Reseta o estado de carregamento ao trocar de imagem para ativar a transição
    setIsLoaded(false);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [image.src, onClose, onPrev, onNext, hasPrev, hasNext]);

  // Constrói a URL de alta resolução otimizada para o lightbox
  const imageUrl = `${CLOUDINARY_BASE_URL}/w_1200,h_900,c_limit,f_auto,q_auto/${image.src}`;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gray-200 p-2 rounded-lg shadow-2xl flex justify-center items-center">
          <img 
            src={imageUrl} 
            alt={image.alt} 
            onLoad={() => setIsLoaded(true)}
            className={`max-w-full max-h-[85vh] object-contain mx-auto transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className={`bg-white/90 p-2 absolute bottom-2 left-2 right-2 rounded-b-md transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h3 id="lightbox-title" className="font-display font-bold text-gray-800">{image.title}</h3>
              <p className="text-sm text-gray-600">{image.categories.join(', ')}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute -top-4 -right-4 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center text-xl hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Fechar"
          >
            &times;
          </button>
        </div>
        
        {hasPrev && (
          <NavButton onClick={onPrev} position="left" aria-label="Imagem anterior">
            <i className="fas fa-chevron-left"></i>
          </NavButton>
        )}

        {hasNext && (
          <NavButton onClick={onNext} position="right" aria-label="Próxima imagem">
            <i className="fas fa-chevron-right"></i>
          </NavButton>
        )}
      </div>
    </div>
  );
};

export default Lightbox;