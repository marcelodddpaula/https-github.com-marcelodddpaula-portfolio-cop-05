import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-display font-bold text-gray-800">Entre em Contato</h1>
                <p className="mt-2 text-lg text-gray-600">Vamos conversar sobre o seu projeto?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-display font-bold mb-6">Nossas Informações</h2>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 className="font-semibold text-lg">Endereço</h3>
                                <p className="text-gray-600">{CONTACT_INFO.address}</p>
                                <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold text-sm mt-1 inline-block">Ver no mapa</a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <i className="fas fa-phone text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 className="font-semibold text-lg">Telefone</h3>
                                <a href={CONTACT_INFO.phoneUrl} className="text-gray-600 hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fab fa-instagram text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 className="font-semibold text-lg">Instagram</h3>
                                <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">@{CONTACT_INFO.instagramUser}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.158732104445!2d-47.6627244!3d-22.7086097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631612803c51b%3A0xfe7a85fdd0a7c2cb!2sR.%20Dona%20Santina%2C%20644%20-%20S%C3%A3o%20Luiz%2C%20Piracicaba%20-%20SP%2C%2013405-369!5e0!3m2!1sen!2sbr!4v1672532400000!5m2!1sen!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização no Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;