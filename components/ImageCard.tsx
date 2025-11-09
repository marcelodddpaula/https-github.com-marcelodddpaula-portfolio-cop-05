import React, { useState } from 'react';
import { ImageItem } from '../types';
import { CLOUDINARY_BASE_URL } from '../constants';

interface ImageCardProps {
  image: ImageItem;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Constrói a URL otimizada para o card da galeria
  const imageUrl = `${CLOUDINARY_BASE_URL}/w_400,h_400,c_fill,f_auto,q_auto/${image.src}`;

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square bg-gray-200"
      onClick={onImageClick}
    >
      <img 
        src={imageUrl} 
        alt={image.alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h3 className="font-display text-lg font-bold">{image.title}</h3>
          <p className="text-sm opacity-90 mt-1">{image.categories.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;