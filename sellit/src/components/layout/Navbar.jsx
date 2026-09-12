import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { Menu, X, ArrowRight, User, LogOut, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'h-20 bg-white/90 backdrop-blur-md border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-slate-900 font-heading flex items-center gap-1 group"
          >
            <span>Sell</span>
            <span className="text-blue-600 group-hover:scale-110 transition-transform">It</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/membership" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <span>Membership</span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-blue-100 text-blue-700 rounded-full">
                Plans
              </span>
            </Link>
          </div>

          {/* Desktop Actions / User Controls */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs font-bold text-slate-900 truncate max-w-[120px]">
                    {user.name || user.username || user.email}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Member</span>
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                  title="Log out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-1.5"
                >
                  <span>Join Now</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/60 backdrop-blur-sm pt-20">
          <div className="bg-white px-6 py-8 border-b border-slate-200 shadow-2xl animate-fade-in">
            <div className="flex flex-col gap-4 text-base font-bold text-slate-800 mb-6">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between text-slate-700"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to="/membership"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between text-slate-700"
              >
                <span>Membership Plans</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between text-slate-700"
              >
                <span>Register Account</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between text-slate-700"
              >
                <span>Member Log In</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {user ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="w-full py-3 text-center rounded-xl bg-rose-50 text-rose-700 font-bold text-sm"
              >
                Log Out
              </button>
            ) : (
              <div className="space-y-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center rounded-xl border border-slate-200 font-bold text-sm text-slate-800"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3.5 text-center rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
