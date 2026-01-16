export type Language = 'en' | 'zh';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'BESS' | 'Household' | 'Industrial';
  description: string;
  specs: string[];
  image: string;
}

export interface SiteSettings {
  companyName: string;
  logoUrl: string; // For simulation, we'll allow changing the logo text or generic URL
  contactEmail: string;
}

export interface GlobalContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
}