import React from 'react';
import { Page } from '../types';
import { CLOUDINARY_BASE_URL, LOGO_PUBLIC_ID } from '../constants';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; setCurrentPage: (page: Page) => void; children: React.ReactNode }> = ({ page, currentPage, setCurrentPage, children }) => {
    const isActive = currentPage === page;
    return (
        <a
            href={`#${page}`}
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
            }}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary/20'}`}
        >
            {children}
        </a>
    );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const logoUrl = `${CLOUDINARY_BASE_URL}/w_120,f_auto,q_auto/${LOGO_PUBLIC_ID}`;
    
    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                         <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center space-x-2">
                             <img className="h-10 w-auto" src={logoUrl} alt="Logotipo Depaula Placas & Letreiros" loading="eager" fetchPriority="high" />
                             <span className="font-display text-2xl font-bold text-gray-800">Portfólio</span>
                         </a>
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex items-center space-x-4">
                            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
                            <NavLink page="gallery" currentPage={currentPage} setCurrentPage={setCurrentPage}>Galeria</NavLink>
                            <NavLink page="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>Contato</NavLink>
                        </nav>
                    </div>
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-gray-700 hover:text-primary focus:outline-none"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <NavLink page="home" currentPage={currentPage} setCurrentPage={(page) => {setCurrentPage(page); setIsMenuOpen(false);}}>Home</NavLink>
                        <NavLink page="gallery" currentPage={currentPage} setCurrentPage={(page) => {setCurrentPage(page); setIsMenuOpen(false);}}>Galeria</NavLink>
                        <NavLink page="contact" currentPage={currentPage} setCurrentPage={(page) => {setCurrentPage(page); setIsMenuOpen(false);}}>Contato</NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;