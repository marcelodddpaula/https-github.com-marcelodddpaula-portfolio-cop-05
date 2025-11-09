import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;