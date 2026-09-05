import React from 'react';
import { Link } from 'react-router-dom';
import { getBuyRoute } from '../../config/appConfig';
import { ShoppingBag, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const buyAppUrl = getBuyRoute('/login?tab=login');

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-black tracking-tight text-white mb-4 block font-heading">
            Sell<span className="text-blue-500">It</span>
          </Link>
          <p className="max-w-sm text-slate-400 leading-relaxed mb-6 text-sm">
            Discover more. Spend smarter. A circular marketplace built on quality, community, and transparency. Got things worth passing on? Sell it!
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PayPal Verified Security & Member Protection</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 font-heading text-sm tracking-wider uppercase">Marketplace</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#marketplace" className="hover:text-white transition">Live Marketplace Feed</a></li>
            <li><Link to="/membership" className="hover:text-white transition">Membership Plans</Link></li>
            <li><Link to="/register" className="hover:text-white transition">Become a Seller</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Member Log In</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 font-heading text-sm tracking-wider uppercase">Buy & Sell Cross-App</h4>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Already registered? Log in on the Buy App to access listings and manage buyer negotiations.
          </p>
          <a
            href={buyAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-md shadow-blue-500/20"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Go to Buy App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs font-semibold flex flex-col sm:flex-row justify-between gap-4 text-slate-500">
        <span>&copy; {new Date().getFullYear()} SellIt Marketplace Inc. All rights reserved.</span>
        <span className="text-slate-400">Designed with ultra-premium member aesthetics</span>
      </div>
    </footer>
  );
}
