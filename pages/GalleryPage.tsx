
import React from 'react';
import ImageGallery from '../components/ImageGallery';

const GalleryPage: React.FC = () => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
                <h1 className="text-4xl font-display font-bold text-gray-800">Nossa Galeria</h1>
                <p className="mt-2 text-lg text-gray-600">Explore nosso portfólio de projetos.</p>
            </div>
            <ImageGallery />
        </>
    );
};

export default GalleryPage;
