import React, { useState, useEffect } from 'react';
import { HERO_IMAGES, CLOUDINARY_BASE_URL } from '../constants';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-96 bg-gray-900 overflow-hidden">
      {HERO_IMAGES.map((publicId, index) => (
        <div
          key={publicId}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={`${CLOUDINARY_BASE_URL}/w_1200,h_800,c_fill,f_auto,q_auto/${publicId}`} 
            alt={`Hero Image ${index + 1}`} 
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'} // Carrega a primeira imagem imediatamente, as outras sob demanda
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold drop-shadow-lg">Letreiros e Fachadas que Atraem Clientes</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">Projetos de comunicação visual em Piracicaba e região, com foco em durabilidade e design exclusivo.</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {HERO_IMAGES.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)} 
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Ir para a imagem ${index + 1}`}
            ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;