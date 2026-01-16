import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import { TRANSLATIONS } from '../constants';
import { Link } from 'react-router-dom';

export default function Home() {
  const { lang, posts, products } = useGlobal();
  const t = TRANSLATIONS[lang];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Solar Farm" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/products" className="bg-primary-600 hover:bg-primary-500 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              {t.hero.cta}
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold py-3 px-8 rounded-full transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'BESS Capacity', value: '100MWh+' },
              { label: 'Projects', value: '50+' },
              { label: 'Partners', value: '20+' },
              { label: 'R&D Investment', value: '$10M+' },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-slate-500 uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">{t.sections.ourProducts}</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">{product.category}</span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  <Link to="/products" className="inline-block mt-4 text-primary-700 font-medium hover:underline">Learn more &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{t.sections.latestNews}</h2>
              <div className="w-24 h-1 bg-primary-600 mt-4"></div>
            </div>
            <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-800">View All News &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.slice(0, 2).map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6 items-start">
                <img src={post.image} alt={post.title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">{post.date} | {post.category}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-primary-600 cursor-pointer">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partner Logos Strip (Mock) */}
      <section className="py-10 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
             {/* Replace with actual partner logos text for now */}
             <div className="text-xl font-bold text-slate-400">WELTRUS</div>
             <div className="text-xl font-bold text-slate-400">HUOWA</div>
             <div className="text-xl font-bold text-slate-400">SUNSAIL FREIGHT</div>
             <div className="text-xl font-bold text-slate-400">SUNGROW</div>
             <div className="text-xl font-bold text-slate-400">CATL</div>
          </div>
      </section>
    </div>
  );
}