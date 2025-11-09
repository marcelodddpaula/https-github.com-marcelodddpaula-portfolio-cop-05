
import React, { useState, useMemo } from 'react';
import { IMAGES, MAIN_CATEGORIES, CATEGORIES_WITH_TAGS } from '../constants';
import ImageCard from './ImageCard';
import Lightbox from './Lightbox';

const ImageGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    const imagesAfterCategoryFilter = activeCategory === 'Todas'
      ? IMAGES
      : IMAGES.filter(image => image.categories.includes(activeCategory));

    return activeTag
      ? imagesAfterCategoryFilter.filter(image => image.tags.includes(activeTag))
      : imagesAfterCategoryFilter;
  }, [activeCategory, activeTag]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveTag(null);
    setSelectedIndex(null);
  };

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    setSelectedIndex(null);
  };
  
  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };
  
  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const currentImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;
  const currentTags = activeCategory !== 'Todas' ? CATEGORIES_WITH_TAGS[activeCategory as keyof typeof CATEGORIES_WITH_TAGS] : [];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center flex-wrap gap-2 mb-4">
        {MAIN_CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            aria-pressed={activeCategory === category}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 border-2 ${
              activeCategory === category
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-light-gray hover:border-primary hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {currentTags.length > 0 && (
        <div className="flex justify-center flex-wrap gap-2 mb-8 border-t border-gray-200 pt-4">
            <button
                 onClick={() => handleTagClick(null)}
                 aria-pressed={!activeTag}
                 className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                    !activeTag
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                 }`}
            >
                Todas as Tags
            </button>
          {currentTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              aria-pressed={activeTag === tag}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                activeTag === tag
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="sr-only" aria-live="polite" role="status">
        {`Exibindo ${filteredImages.length} projetos`}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredImages.map((image, index) => (
          <ImageCard key={image.id} image={image} onImageClick={() => handleOpenLightbox(index)} />
        ))}
      </div>
      {currentImage && selectedIndex !== null && (
        <Lightbox 
            image={currentImage} 
            onClose={handleCloseLightbox} 
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={filteredImages.length > 1}
            hasNext={filteredImages.length > 1}
        />
      )}
    </div>
  );
};

export default ImageGallery;