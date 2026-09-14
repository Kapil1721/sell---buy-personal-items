import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Membership from './pages/Membership';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import AuthModal from './components/common/AuthModal';

export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'join' });

  const handleOpenAuth = (mode = 'join') => {
    setAuthModal({ isOpen: true, mode });
  };
  const handleCloseAuth = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <Navbar onOpenAuth={handleOpenAuth} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenAuth={handleOpenAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/membership-purchase" element={<Membership />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer onOpenAuth={handleOpenAuth} />
        <AuthModal
          isOpen={authModal.isOpen}
          defaultMode={authModal.mode}
          onClose={handleCloseAuth}
        />
      </div>
    </AuthProvider>
  );
}
