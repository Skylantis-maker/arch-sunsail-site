import React, { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';

export default function Contact() {
  const { settings } = useGlobal();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-10">Get in Touch</h1>
        
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Info Side */}
            <div className="bg-slate-900 p-10 text-white md:w-2/5 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="text-slate-300 mb-8">
                        Interested in BESS projects, investment opportunities, or our products? Fill out the form or email us directly.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>{settings.contactEmail}</span>
                        </div>
                        <div className="flex items-center">
                             <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>Sydney, Australia</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12">
                     <p className="text-sm text-slate-500">Links to partners:</p>
                     <div className="flex gap-4 mt-2 text-sm font-semibold text-primary-400">
                         <a href="#" className="hover:text-white">HUOWA</a>
                         <a href="#" className="hover:text-white">SUNSAIL</a>
                     </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:w-3/5 bg-white">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                        <p className="text-gray-600 mt-2">Thank you for contacting ARCH. We will respond shortly.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 text-primary-600 underline">Send another message</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                            <input 
                                required
                                type="text" 
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input 
                                required
                                type="email" 
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                             <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none">
                                 <option>General Inquiry</option>
                                 <option>Project Partnership</option>
                                 <option>Investor Relations</option>
                                 <option>Product Support</option>
                             </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea 
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded-md hover:bg-primary-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}