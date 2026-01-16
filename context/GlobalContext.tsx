import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalContextType, Language, BlogPost, SiteSettings, Product } from '../types';
import { INITIAL_POSTS, INITIAL_PRODUCTS } from '../constants';

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children?: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [isAdmin, setIsAdmin] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>({
    companyName: 'ARCH Group',
    logoUrl: '', 
    contactEmail: 'info@arch-sunsail.com.au'
  });

  const addPost = (post: BlogPost) => {
    setPosts([post, ...posts]);
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <GlobalContext.Provider value={{
      lang, setLang,
      posts, addPost, deletePost,
      settings, updateSettings,
      isAdmin, setIsAdmin,
      products, addProduct, deleteProduct
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within GlobalProvider");
  return context;
};