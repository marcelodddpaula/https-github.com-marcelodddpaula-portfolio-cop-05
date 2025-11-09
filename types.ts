
export interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  categories: string[];
  tags: string[];
}

export type Page = 'home' | 'gallery' | 'contact';
