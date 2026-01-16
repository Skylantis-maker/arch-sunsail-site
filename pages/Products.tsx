import React from 'react';
import { useGlobal } from '../context/GlobalContext';

export default function Products() {
  const { products } = useGlobal();

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products & Solutions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From household units to grid-scale containers, ARCH delivers reliable energy storage systems tailored to your needs.
          </p>
        </div>

        {/* BESS Project Highlight Service */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
             <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-800 opacity-20 transform skew-x-12 translate-x-12"></div>
             <div className="relative z-10 md:w-2/3">
                 <h2 className="text-3xl font-bold mb-4">Grid-Scale BESS Project Development</h2>
                 <p className="text-primary-100 text-lg mb-6">
                     We specialize in quick payback BESS projects, particularly those <strong>&lt;5MW / 10MWh</strong>. 
                     Our full-service development includes site acquisition, grid connection, engineering, and funding.
                 </p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                     <li className="flex items-center"><span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>Feasibility Studies</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>Grid Connection Agreements</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>EPC Management</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>Asset Management</li>
                 </ul>
                 <button className="bg-secondary-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-secondary-400 transition-colors">
                     Partner with us on a Project
                 </button>
             </div>
        </div>

        {/* Product Grid */}
        <h2 className="text-2xl font-bold text-slate-800 mb-8 px-2 border-l-4 border-primary-500">Hardware Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                    <div className="h-56 relative group">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                             <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 border border-slate-200 px-2 py-1 rounded">{product.category}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
                        
                        <div className="bg-slate-50 p-3 rounded-lg mb-4">
                            <h4 className="text-xs font-bold text-slate-700 mb-2 uppercase">Key Specs</h4>
                            <ul className="text-xs text-slate-600 space-y-1">
                                {product.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center">
                                        <svg className="w-3 h-3 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <button className="w-full py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded hover:bg-primary-50 transition-colors">
                            Download Spec Sheet
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}