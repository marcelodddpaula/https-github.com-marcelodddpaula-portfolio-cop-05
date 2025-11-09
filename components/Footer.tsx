import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-lg mb-2">Entre em Contato</p>
        <p className="mb-4">{CONTACT_INFO.address}</p>
        <p className="mb-4 font-semibold">{CONTACT_INFO.phone}</p>
        <div className="flex justify-center space-x-6">
          <a 
            href={CONTACT_INFO.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-light-gray hover:text-primary transition-colors duration-300 text-3xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href={CONTACT_INFO.phoneUrl} 
            className="text-light-gray hover:text-primary transition-colors duration-300 text-3xl"
            aria-label="Telefone"
          >
            <i className="fas fa-phone"></i>
          </a>
          <a 
            href={CONTACT_INFO.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-light-gray hover:text-primary transition-colors duration-300 text-3xl"
            aria-label="Mapa"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">&copy; {new Date().getFullYear()} Depaula Placas & Letreiros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;