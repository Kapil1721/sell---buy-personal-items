import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star, CheckCircle } from 'lucide-react';

export default function HeroSplit({ onOpenAuth }) {
  return (
    <section className="relative min-h-[92vh] flex flex-col lg:flex-row overflow-hidden bg-slate-950">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Column: Dark Navy Hero & Content */}
      <div className="lg:w-1/2 p-8 sm:p-16 lg:p-20 flex flex-col justify-center text-white relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-extrabold mb-6 w-fit backdrop-blur-md shadow-lg shadow-blue-500/5">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>SellIt Member Platform</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 font-semibold">Verified Sellers & Buyers</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] mb-6 font-heading tracking-tight">
          Turn Pre-Loved Items Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-200">Instant Value.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-normal">
          Got items to pass along? Sell it, sell it, sell it! Looking for curated finds? Unlock our exclusive member marketplace for seamless listing, direct buyer connections, and PayPal payouts.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-12">
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 text-center shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Activate Membership</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#marketplace"
            className="inline-flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-2xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-base backdrop-blur-md"
          >
            <span>Explore Marketplace</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PayPal Verified Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Instant Listing Activation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>100% Guaranteed Buyers</span>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Showcase Grid with Glass Cards */}
      <div className="lg:w-1/2 bg-slate-900/50 relative overflow-hidden flex items-center justify-center p-8 md:p-14 border-l border-white/5">
        <div className="grid grid-cols-2 gap-5 w-full max-w-lg relative z-10">
          {/* Column 1 */}
          <div className="space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-slate-900">
              <img
                src="/images/watch.jpg"
                alt="Vintage Watch"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Curated Listing
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <h4 className="font-bold text-sm">Luxury Chrono Watch</h4>
                  <p className="text-xs text-slate-300">$290 • Like New</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl translate-x-2 group border border-white/10 bg-slate-900">
              <img
                src="/images/sneakers.jpg"
                alt="Classic Sneakers"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <h4 className="font-bold text-xs">Designer Kicks</h4>
                <p className="text-[11px] text-emerald-400 font-semibold">$110</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-5 pt-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-slate-900">
              <img
                src="/images/headphones.jpg"
                alt="Wireless Headphones"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Floating Animated Glass Badge */}
              <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-xl text-white px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2 border border-white/15">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-200">Active Listing</span>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl -translate-x-2 group border border-white/10 bg-slate-900">
              <img
                src="/images/phone.jpg"
                alt="Smartphone"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Verified Seller
              </span>
              <div className="absolute bottom-3 left-4 text-white">
                <h4 className="font-bold text-xs">Smart Flagship</h4>
                <p className="text-[11px] text-slate-300">$450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
