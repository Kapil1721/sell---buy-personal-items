import React, { useState, useEffect } from 'react';
import { X, Check, Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, defaultMode = 'join' }) {
  const [mode, setMode] = useState(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMode(defaultMode);
    setSubmitted(false);
  }, [defaultMode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Simulate success
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="bg-midnight-navy text-white px-8 pt-8 pb-6 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Member Access</span>
          </div>
          
          <h3 className="text-2xl font-black text-white tracking-tight font-heading">
            {mode === 'login' ? 'Welcome Back' : 'Join the Marketplace'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'login'
              ? 'Access your saved items, listings, and member dashboard'
              : 'Unlock curated finds and pass on goods with zero hassle'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-slate-800/80 p-1 rounded-xl mt-6">
            <button
              type="button"
              onClick={() => setMode('join')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                mode === 'join' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Start Membership ($19/mo)
            </button>
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                mode === 'login' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Member Log In
            </button>
          </div>
        </div>

        {/* Modal Form Content */}
        <div className="p-8">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-midnight-navy mb-1">
                {mode === 'login' ? 'Login Successful!' : 'Welcome to the Club!'}
              </h4>
              <p className="text-sm text-slate-500">Redirecting to your member dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'join' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              {mode === 'join' && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-start gap-2.5 text-xs text-blue-900">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Includes 30-day risk-free access, unlimited watchlist saves, and direct verified seller messaging.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{mode === 'login' ? 'Log In to Account' : 'Activate Membership ($19/mo)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                {mode === 'login' ? (
                  <p className="text-xs text-slate-500">
                    Not a member yet?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('join')}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Join now
                    </button>
                  </p>
                ) : (
                  <p className="text-xs text-slate-500">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Log in
                    </button>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
