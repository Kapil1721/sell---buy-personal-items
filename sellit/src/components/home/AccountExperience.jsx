import React from 'react';
import { Package, Bell, ShieldCheck } from 'lucide-react';

export default function AccountExperience({ onOpenAuth }) {
  return (
    <section className="py-32 bg-white px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Left Explanation */}
        <div className="lg:w-1/2 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Dedicated Dashboard</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-midnight-navy mb-8 leading-tight font-heading">
            Everything You Need in One Place.
          </h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
            Your membership includes a dedicated personal account. Manage your billing, track saved items, and view your purchase history with a refined, modern interface.
          </p>
          <button
            onClick={() => onOpenAuth('join')}
            className="inline-flex items-center gap-3 bg-midnight-navy text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer"
          >
            Join the Marketplace
          </button>
        </div>

        {/* Right Browser UI Mockup */}
        <div className="lg:w-1/2 w-full reveal" style={{ transitionDelay: '200ms' }}>
          <div className="bg-white border border-slate-200 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Window title bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-xs font-semibold text-slate-400">app.sellit.com/dashboard</span>
              <div className="w-4"></div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                    Dashboard
                  </h4>
                  <p className="text-2xl font-extrabold text-midnight-navy font-heading">
                    Welcome back, Alex
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black text-lg font-heading shadow-inner">
                  A
                </div>
              </div>

              {/* Quick Stat Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 hover:bg-blue-50/50 transition">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Saved Items</p>
                  <p className="text-3xl font-black text-midnight-navy font-heading">24</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 hover:bg-emerald-50/50 transition">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Membership</p>
                  <p className="text-3xl font-black text-emerald-500 font-heading">Active</p>
                </div>
              </div>

              {/* Progress & Live Activity Rows */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50/80 rounded-xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Package className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-blue-900">
                      <span>Dispatch: Vintage 35mm Camera</span>
                      <span>In Transit</span>
                    </div>
                    <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 flex-shrink-0">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-600">
                      <span>Price Drop Alert</span>
                      <span>15m ago</span>
                    </div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
