import React from 'react';
import { IMAGES } from '../constants';
import { Page } from '../types';
import ImageCard from './ImageCard';

interface GalleryPreviewProps {
  setCurrentPage: (page: Page) => void;
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ setCurrentPage }) => {
  // Seleciona as primeiras 5 imagens para a prévia
  const previewImages = IMAGES.slice(0, 5);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800">
            Projetos em Destaque
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Uma pequena amostra da qualidade e versatilidade que oferecemos. Explore nossa galeria para ver mais trabalhos incríveis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {previewImages.map((image) => (
            <ImageCard 
              key={image.id} 
              image={image} 
              onImageClick={() => setCurrentPage('gallery')} 
            />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => setCurrentPage('gallery')}
            className="px-10 py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg"
          >
            Conheça Nosso Portfólio
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
