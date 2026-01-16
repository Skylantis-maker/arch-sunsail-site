import React from 'react';
import { BlogPost, Product } from './types';

// Icons
export const Icons = {
  Menu: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>,
  X: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  ChevronDown: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>,
  Globe: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.546-3.118 1.503-4.331" /></svg>,
  Bolt: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  Building: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5M12 6.75h1.5M15 6.75h1.5M9 10.5h1.5M12 10.5h1.5M15 10.5h1.5M9 14.25h1.5M12 14.25h1.5M15 14.25h1.5M9 18h1.5M12 18h1.5M15 18h1.5" /></svg>,
  Battery: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
  User: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
};

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'ARCH Secures 5MW BESS Project Approval',
    date: '2023-10-15',
    category: 'Projects',
    excerpt: 'The local council has green-lit our newest grid-scale battery storage facility, paving the way for quicker payback periods.',
    content: 'Full content goes here...',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'New Strategic Partnership with HUOWA',
    date: '2023-09-22',
    category: 'Business',
    excerpt: 'Strengthening our supply chain capabilities through deep integration with HUOWA manufacturing.',
    content: 'Full content goes here...',
    image: 'https://picsum.photos/800/600?random=2'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Yileen Distributed Solutions',
    category: 'Industrial',
    description: 'Mobile plug & Play Battery + PV + Inverter solution designed for rapid deployment in remote areas.',
    specs: ['All-in-one design', 'Rapid deployment', 'Remote monitoring'],
    image: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: 'p2',
    name: 'WELTRUS Integrated System',
    category: 'Industrial',
    description: '50kw/100kwh integrated battery and inverter system optimized for commercial applications.',
    specs: ['50kW Power', '100kWh Capacity', 'Smart EMS'],
    image: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: 'p3',
    name: 'Hyxi Household Storage',
    category: 'Household',
    description: 'Residential energy storage from our sister company, bringing clean energy to every home.',
    specs: ['Modular design', 'Silent operation', 'App control'],
    image: 'https://picsum.photos/800/600?random=12'
  },
   {
    id: 'p4',
    name: 'WELTRUS BESS Container',
    category: 'BESS',
    description: '5MW Grid-scale BESS container for large scale energy shifting and frequency regulation.',
    specs: ['Liquid cooling', 'High density', 'Grid support ready'],
    image: 'https://picsum.photos/800/600?random=13'
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', about: 'About', business: 'Our Business', products: 'Products', projects: 'Projects', rd: 'R&D', investors: 'Investors', contact: 'Contact' },
    hero: {
      title: 'Powering a Sustainable Future',
      subtitle: 'Union development organization within WELTRUS, HUOWA, & SUNSAIL FREIGHT.',
      cta: 'Explore Solutions'
    },
    sections: {
      latestNews: 'Latest News & Updates',
      ourProducts: 'Our Core Products',
      partners: 'Strategic Partners',
      stats: 'Impact at a Glance'
    }
  },
  zh: {
    nav: { home: '首页', about: '关于我们', business: '业务领域', products: '产品中心', projects: '项目案例', rd: '研发创新', investors: '投资者', contact: '联系我们' },
    hero: {
      title: '致力可持续能源未来',
      subtitle: 'WELTRUS, HUOWA, SUNSAIL FREIGHT 联合开发组织',
      cta: '探索解决方案'
    },
    sections: {
      latestNews: '最新动态',
      ourProducts: '核心产品',
      partners: '战略合作伙伴',
      stats: '关键数据'
    }
  }
};