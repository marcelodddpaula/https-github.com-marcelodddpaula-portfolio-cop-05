
import React from 'react';
import Hero from '../components/Hero';
import { Page } from '../types';
import GalleryPreview from '../components/GalleryPreview';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <>
            <Hero />
            <GalleryPreview setCurrentPage={setCurrentPage} />
        </>
    );
};

export default HomePage;