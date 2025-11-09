import { ImageItem } from './types';

export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dr5936gfv/image/upload';

export const LOGO_PUBLIC_ID = 'portfolio/logo_depaula_v1';

export const CATEGORIES_WITH_TAGS = {
  "Fachadas": ["Estrutura ACM", "ACM Vazado", "Letra Caixa", "Placas", "Iluminadas"],
  "Letras Alto Relevo": ["Pintura Dourada", "Pintura Alumínio", "Pintura Cores", "Inox", "Iluminadas"],
  "Letras 3D": ["Relevo 3D", "Relevo em 2 Partes"],
  "Letras Grandes Formatos": ["Letras Alto Relevo"],
  "Placas": ["com Adesivo", "Relevo e Adesivo", "ACM Vazado", "Sinalização", "Consultórios", "Madeira", "Iluminadas"],
  "Totem": ["Iluminado", "ACM e Adesivos", "Relevos 3D", "Letra Caixa"],
  "Adesivos": ["Paredes", "Placas Vinil Adesivo", "Jateados", "Jateados Colorido"]
};

export const MAIN_CATEGORIES: string[] = ['Todas', ...Object.keys(CATEGORIES_WITH_TAGS)];

export const IMAGES: ImageItem[] = [
  { id: 1, src: 'portfolio/letras-alto-relevo/caracol_ (1)', alt: 'Fachada moderna com letra caixa', title: 'Fachada Comercial', categories: ['Fachadas', 'Letras 3D', 'Letras Grandes Formatos'], tags: ['Letra Caixa', 'Relevo 3D', 'Letras Alto Relevo'] },
  { id: 2, src: 'portfolio/letras-alto-relevo/caracol_ (2)', alt: 'Letras em alto relevo coloridas', title: 'Letras de Acrílico', categories: ['Fachadas', 'Letras Alto Relevo'], tags: ['Letra Caixa', 'Pintura Cores'] },
  { id: 3, src: 'portfolio/letras-alto-relevo/caracol_ (3)', alt: 'Placa de consultório médico em relevo', title: 'Placa de Recepção', categories: ['Placas', 'Letras Grandes Formatos'], tags: ['Consultórios', 'Relevo e Adesivo'] },
  { id: 4, src: 'portfolio/letras-alto-relevo/caracol_ (4)', alt: 'Fachada de loja com placa em ACM', title: 'Comunicação Visual Loja', categories: ['Fachadas'], tags: ['Placas', 'Estrutura ACM'] },
  { id: 5, src: 'portfolio/fachadas/CrossFit_ (1)', alt: 'Letras 3D iluminadas para academia', title: 'Letreiro Iluminado', categories: ['Letras Alto Relevo', 'Fachadas'], tags: ['Iluminadas'] },
  { id: 6, src: 'portfolio/fachadas/CrossFit_ (2)', alt: 'Placa para escritório de advocacia', title: 'Placa Advocacia', categories: ['Placas', 'Totem'], tags: ['Consultórios', 'Inox', 'Relevos 3D'] },
  { id: 7, src: 'portfolio/letras-alto-relevo/CrossFit_ (3)', alt: 'Fachada CrossFit com letra caixa', title: 'Academia', categories: ['Fachadas', 'Letras Grandes Formatos'], tags: ['Letra Caixa', 'Estrutura ACM', 'Letras Alto Relevo'] },
  { id: 8, src: 'testeportfolio-01/yztwjcwrd8v3c4qgetpn', alt: 'Detalhe de letra em relevo de inox', title: 'Detalhe Relevo Inox', categories: ['Letras Alto Relevo'], tags: ['Inox'] },
  { id: 9, src: 'testeportfolio-01/m1ry1v7kyobksmqsghk7', alt: 'Placa de consultório odontológico', title: 'Placa Odontologia', categories: ['Placas'], tags: ['Consultórios', 'Madeira'] },
  { id: 10, src: 'testeportfolio-01/jgrarvoe4ejc4ngfzliz', alt: 'Fachada de empresa de tecnologia com ACM vazado', title: 'Empresa Tech', categories: ['Fachadas', 'Letras Alto Relevo'], tags: ['ACM Vazado', 'Iluminadas'] },
  { id: 11, src: 'eigby8dtiazt4shagmln', alt: 'Logotipo em alto relevo na parede com pintura', title: 'Logo 3D', categories: ['Letras Alto Relevo'], tags: ['Pintura Cores'] },
  { id: 12, src: 'samples/chair-and-coffee-table', alt: 'Placa de identificação de sala com adesivo', title: 'Identificação de Sala', categories: ['Placas', 'Adesivos'], tags: ['Sinalização', 'Placas Vinil Adesivo'] },
  { id: 13, src: 'testeportfolio-01/usddqczic1ylquhxbyjo', alt: 'Placa de sinalização com adesivo', title: 'Sinalização Interna', categories: ['Placas'], tags: ['Sinalização', 'com Adesivo'] },
  { id: 14, src: 'testeportfolio-01/uxjl792ioidgyuiwhtrv', alt: 'Letra em relevo com pintura de alumínio', title: 'Letra Alumínio', categories: ['Letras Alto Relevo', 'Totem'], tags: ['Pintura Alumínio', 'Iluminado'] },
  { id: 15, src: 'IMG-20150519-WA0002_g2yvbs', alt: 'Totem moderno para empresa de engenharia', title: 'Totem Corporativo', categories: ['Totem'], tags: ['Iluminado', 'ACM e Adesivos', 'Iluminado'] },
  { id: 16, src: 'main-sample', alt: 'Adesivo de parede para decoração de escritório', title: 'Decoração de Parede', categories: ['Adesivos', 'Totem'], tags: ['Paredes', 'Iluminado'] },
  { id: 17, src: 'cld-sample-2', alt: 'Letras douradas para recepção de hotel', title: 'Recepção de Luxo', categories: ['Letras Alto Relevo', 'Totem'], tags: ['Pintura Dourada', 'Inox', 'Iluminado'] },
];

export const HERO_IMAGES = [
  'portfolio/id431',
  'portfolio/id532',
  'portfolio/id559',
  'portfolio/id582'
];

export const CONTACT_INFO = {
    address: 'Rua Dona Santina, 644 - Piracicaba - SP',
    mapUrl: 'https://www.google.com/maps/place/R.+Dona+Santina,+644+-+S%C3%A3o+Luiz,+Piracicaba+-+SP,+13405-369',
    instagramUser: 'depaula.placas.letreiros',
    instagramUrl: 'https://www.instagram.com/depaula.placas.letreiros',
    phone: '(19) 3421-7790',
    phoneUrl: 'tel:+551934217790',
    siteUrl: 'https://depaulaplacas.com.br' // Adicionado para meta tags
};