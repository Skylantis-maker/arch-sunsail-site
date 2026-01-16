import React, { useState } from 'react';
import { useGlobal } from '../../context/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import { BlogPost, Product } from '../../types';

export default function AdminDashboard() {
  const { posts, addPost, deletePost, products, addProduct, deleteProduct, settings, updateSettings, setIsAdmin } = useGlobal();
  const [activeTab, setActiveTab] = useState<'content' | 'products' | 'settings'>('content');
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({ title: '', category: 'News', content: '' });
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ name: '', category: 'Industrial', description: '', specs: [] });
  const [specsInput, setSpecsInput] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
      setIsAdmin(false);
      navigate('/');
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title) return;
    
    addPost({
      id: Date.now().toString(),
      title: newPost.title!,
      date: new Date().toISOString().split('T')[0],
      category: newPost.category || 'News',
      excerpt: newPost.content?.substring(0, 100) + '...',
      content: newPost.content || '',
      image: 'https://picsum.photos/800/600?random=' + Math.random()
    } as BlogPost);
    
    setNewPost({ title: '', category: 'News', content: '' });
    alert("Article added!");
  };

  const handleAddProduct = (e: React.FormEvent) => {
      e.preventDefault();
      if (!newProduct.name) return;

      addProduct({
          id: 'p' + Date.now().toString(),
          name: newProduct.name!,
          category: newProduct.category as any || 'Industrial',
          description: newProduct.description || '',
          specs: specsInput.split(',').map(s => s.trim()).filter(s => s !== ''),
          image: 'https://picsum.photos/800/600?random=' + Math.random()
      } as Product);

      setNewProduct({ name: '', category: 'Industrial', description: '' });
      setSpecsInput('');
      alert("Solution/Product added!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 text-white flex flex-col">
            <div className="p-6 font-bold text-xl border-b border-slate-700">ARCH Admin</div>
            <nav className="flex-1 p-4 space-y-2">
                <button 
                    onClick={() => setActiveTab('content')} 
                    className={`w-full text-left px-4 py-2 rounded ${activeTab === 'content' ? 'bg-primary-600' : 'hover:bg-slate-700'}`}
                >
                    Content Management
                </button>
                 <button 
                    onClick={() => setActiveTab('products')} 
                    className={`w-full text-left px-4 py-2 rounded ${activeTab === 'products' ? 'bg-primary-600' : 'hover:bg-slate-700'}`}
                >
                    Products & Solutions
                </button>
                <button 
                    onClick={() => setActiveTab('settings')} 
                    className={`w-full text-left px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-primary-600' : 'hover:bg-slate-700'}`}
                >
                    Site Settings
                </button>
                 <Link to="/" className="block w-full text-left px-4 py-2 rounded hover:bg-slate-700 text-slate-400">
                    Back to Website
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-700">
                <button onClick={handleLogout} className="text-red-400 hover:text-white text-sm">Logout</button>
            </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 p-10 overflow-y-auto">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">
                {activeTab === 'content' ? 'Manage Articles' : activeTab === 'products' ? 'Manage Solutions' : 'Global Settings'}
            </h1>

            {activeTab === 'content' && (
                <div className="space-y-8">
                    {/* Add Post Form */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-bold mb-4">Add New Article</h3>
                        <form onSubmit={handleAddPost} className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Title" 
                                className="w-full border p-2 rounded"
                                value={newPost.title}
                                onChange={e => setNewPost({...newPost, title: e.target.value})}
                            />
                            <select 
                                className="w-full border p-2 rounded"
                                value={newPost.category}
                                onChange={e => setNewPost({...newPost, category: e.target.value})}
                            >
                                <option>News</option>
                                <option>Projects</option>
                                <option>Business</option>
                            </select>
                            <textarea 
                                placeholder="Content..." 
                                rows={3} 
                                className="w-full border p-2 rounded"
                                value={newPost.content}
                                onChange={e => setNewPost({...newPost, content: e.target.value})}
                            ></textarea>
                            <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700">Publish Article</button>
                        </form>
                    </div>

                    {/* Existing Posts */}
                    <div className="bg-white p-6 rounded-lg shadow">
                         <h3 className="font-bold mb-4">Existing Articles</h3>
                         <div className="space-y-2">
                             {posts.map(post => (
                                 <div key={post.id} className="flex justify-between items-center border-b pb-2">
                                     <div>
                                         <div className="font-medium">{post.title}</div>
                                         <div className="text-xs text-gray-500">{post.date} - {post.category}</div>
                                     </div>
                                     <button onClick={() => deletePost(post.id)} className="text-red-600 text-sm hover:underline">Delete</button>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            )}

            {activeTab === 'products' && (
                <div className="space-y-8">
                     {/* Add Product Form */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-bold mb-4">Add New Solution/Product</h3>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Product Name" 
                                    className="w-full border p-2 rounded"
                                    value={newProduct.name}
                                    onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                                />
                                <select 
                                    className="w-full border p-2 rounded"
                                    value={newProduct.category}
                                    onChange={e => setNewProduct({...newProduct, category: e.target.value as any})}
                                >
                                    <option value="Industrial">Industrial</option>
                                    <option value="Household">Household</option>
                                    <option value="BESS">BESS</option>
                                </select>
                            </div>
                            <textarea 
                                placeholder="Description..." 
                                rows={2} 
                                className="w-full border p-2 rounded"
                                value={newProduct.description}
                                onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                            ></textarea>
                             <input 
                                type="text" 
                                placeholder="Specs (comma separated, e.g. 50kW Power, 100kWh Capacity)" 
                                className="w-full border p-2 rounded"
                                value={specsInput}
                                onChange={e => setSpecsInput(e.target.value)}
                            />
                            <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700">Add Solution</button>
                        </form>
                    </div>

                     {/* Existing Products */}
                    <div className="bg-white p-6 rounded-lg shadow">
                         <h3 className="font-bold mb-4">Existing Solutions</h3>
                         <div className="space-y-2">
                             {products.map(p => (
                                 <div key={p.id} className="flex justify-between items-center border-b pb-2">
                                     <div>
                                         <div className="font-medium">{p.name}</div>
                                         <div className="text-xs text-gray-500">{p.category}</div>
                                     </div>
                                     <button onClick={() => deleteProduct(p.id)} className="text-red-600 text-sm hover:underline">Delete</button>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            )}

            {activeTab === 'settings' && (
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input 
                            type="text" 
                            className="w-full border p-2 rounded"
                            value={settings.companyName}
                            onChange={e => updateSettings({ companyName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Contact Email</label>
                         <input 
                            type="text" 
                            className="w-full border p-2 rounded"
                            value={settings.contactEmail}
                            onChange={e => updateSettings({ contactEmail: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Logo URL</label>
                         <input 
                            type="text" 
                            className="w-full border p-2 rounded"
                            value={settings.logoUrl}
                            placeholder="https://your-domain.com/logo.png"
                            onChange={e => updateSettings({ logoUrl: e.target.value })}
                        />
                         <p className="text-xs text-gray-500 mt-1">Paste a valid image URL (JPG/PNG) to replace the default bolt icon.</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}