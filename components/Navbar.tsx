import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobal } from '../context/GlobalContext';
import { Icons, TRANSLATIONS } from '../constants';

export default function Navbar() {
  const { lang, setLang, settings, isAdmin } = useGlobal();
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;
  const location = useLocation();

  // Hide public navbar if in admin panel
  if (location.pathname.startsWith('/admin')) return null;

  const links = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.products, path: '/products' },
    { name: t.rd, path: '/rd' },
    { name: t.investors, path: '/investors' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              {settings.logoUrl ? (
                <img src={settings.logoUrl} alt={settings.companyName} className="h-10 w-auto object-contain" />
              ) : (
                <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center text-white">
                  <Icons.Bolt />
                </div>
              )}
              <span className="font-bold text-2xl text-slate-800 tracking-tight">
                {settings.companyName}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.path ? 'text-primary-600' : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center text-gray-500 hover:text-primary-600"
            >
              <Icons.Globe />
              <span className="ml-1 uppercase text-xs font-bold">{lang}</span>
            </button>
            
            <Link to="/login" className="text-gray-400 hover:text-gray-600">
               <Icons.User />
            </Link>
             {isAdmin && (
                <Link to="/admin" className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Admin</Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
             <button
              onClick={() => {
                setLang(lang === 'en' ? 'zh' : 'en');
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              Switch to {lang === 'en' ? 'Chinese' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}