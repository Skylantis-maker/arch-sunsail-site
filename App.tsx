import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider, useGlobal } from './context/GlobalContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import RD from './pages/RD';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/Admin/AdminDashboard';

// Investors page placeholder
const Investors = () => (
    <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Investor Relations</h1>
        <p className="mb-6">Please login to view financial reports.</p>
        <a href="#/login" className="bg-primary-600 text-white px-6 py-2 rounded">Go to Login</a>
    </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
    const { isAdmin } = useGlobal();
    if (!isAdmin) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};

const MainLayout = ({ children }: { children?: React.ReactNode }) => (
    <>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
    </>
);

const AppContent = () => {
  return (
    <Router>
        <Routes>
            <Route path="/admin" element={
                <ProtectedRoute>
                    <AdminDashboard />
                </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            
            {/* Public Routes */}
            <Route path="*" element={
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/rd" element={<RD />} />
                        <Route path="/investors" element={<Investors />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </MainLayout>
            } />
        </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}