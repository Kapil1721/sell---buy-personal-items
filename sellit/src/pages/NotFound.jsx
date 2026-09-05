import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 bg-slate-50">
      <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">404 Error</p>
      <h1 className="text-5xl md:text-7xl font-extrabold text-midnight-navy font-heading mb-6">
        Page Not Found
      </h1>
      <p className="text-slate-500 max-w-md mb-8 text-base leading-relaxed">
        The page you are looking for might have been moved, removed, or is temporarily unavailable in this preview.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-midnight-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-slate-900/10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Marketplace</span>
      </Link>
    </div>
  );
}
