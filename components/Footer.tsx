import React from 'react';
import { useGlobal } from '../context/GlobalContext';

export default function Footer() {
  const { settings, lang } = useGlobal();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{settings.companyName}</h3>
            <p className="text-slate-400 text-sm">
              Innovating renewable energy solutions for a sustainable tomorrow. Partnering with WELTRUS, HUOWA, and SUNSAIL FREIGHT.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-500">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/#/about" className="hover:text-white">About Us</a></li>
              <li><a href="/#/products" className="hover:text-white">Products</a></li>
              <li><a href="/#/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/#/investors" className="hover:text-white">Investors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-500">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Email: {settings.contactEmail}</li>
              <li>Location: Sydney, Australia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-500">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-2">Subscribe for latest project updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 w-full text-slate-900 rounded-l-md focus:outline-none" />
              <button type="button" className="bg-primary-600 px-4 py-2 rounded-r-md hover:bg-primary-500">Go</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {settings.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}