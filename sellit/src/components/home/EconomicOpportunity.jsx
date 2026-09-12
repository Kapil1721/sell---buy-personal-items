import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Quote, 
  CheckCircle2,
  Armchair,
  Shirt,
  Tv,
  Smartphone,
  Trophy,
  Bike,
  TrendingDown,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

const liquidationItems = [
  { icon: Armchair, name: 'Furniture', examples: 'Couches, dining sets, desks & decor' },
  { icon: Shirt, name: 'Clothing', examples: 'Designer wear, jackets & vintage apparel' },
  { icon: Tv, name: 'Appliances', examples: 'Refrigerators, washers & kitchen gear' },
  { icon: Smartphone, name: 'Electronics', examples: 'Laptops, phones, consoles & audio' },
  { icon: Trophy, name: 'Sport Equipment', examples: 'Weights, golf sets, camping gear' },
  { icon: Bike, name: 'Bikes of All Types', examples: 'Road, mountain, e-bikes & cruisers' },
];

export default function EconomicOpportunity({ onOpenAuth }) {
  return (
    <section id="marketplace" className="py-24 bg-slate-50 text-slate-900 border-t border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header & Human Editorial Quote */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            Marketplace Perspective • Sellitsellitsellit.com
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Times Are Hard. Turn Unwanted Items Into Cold Hard Cash!
          </h2>

          {/* Authentic Editorial Quote Box */}
          <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-start gap-3">
              <Quote className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  We have an old saying here at Sellitsellitsellit.com. It goes:
                </p>
                <p className="text-xl sm:text-2xl font-black text-slate-900 font-heading italic leading-snug">
                  “Sell what you want today! Sell what you can tomorrow!”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Realistic Narrative: Economic Reality vs Liquidating for Cash */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          
          {/* Column 1: The Economic Squeeze */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Economic Climate</span>
                  <h3 className="text-xl font-black text-slate-900 font-heading">The Current State of the Economy</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                The economy is not going well for many Americans. Looking at the current state of our economy — things are not looking well. All the layoffs and announcements of more future layoffs.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                Add to that the rise of inflation, causing prices for necessities like food, housing, and utilities to go up. Not to mention car payments and insurance. Things are bad for individuals and for families alike.
              </p>

              <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-4 text-xs sm:text-sm text-rose-900">
                <strong>The challenge:</strong> Everyday living expenses keep rising while corporate job security shrinks. Living on high-interest credit is no longer sustainable.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Personal liquidity gives you control when the economy feels uncertain.
            </div>
          </div>

          {/* Column 2: The Liquidation Shift */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">The Great Realization</span>
                  <h3 className="text-xl font-black text-slate-900 font-heading">Liquidating Personal Properties Big Time</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                Americans are waking up and starting to realize what's more important in their life — it's not more stuff bought on credit while drowning in debt.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                Many are taking inventory of personal items they no longer need or want and are selling them for quick cash. They are now <strong>"liquidating" personal properties Big Time.</strong> This could be the best time for you to sell unwanted personal items for Cold Hard Cash!
              </p>

              <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Sellitsellitsellit.com is where you can come to convert your no longer wanted personal items into much-needed cash. This down economy does not have to be down for you.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 uppercase font-semibold">One-Time Lifetime Fee</span>
                <p className="text-2xl font-black text-slate-900 font-heading">$59 <span className="text-xs font-bold text-emerald-600 uppercase">That's It!</span></p>
              </div>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition"
              >
                <span>Join for $59</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Categories Section - Clean, Human Grid */}
        <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Popular Liquidation Inventory</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1">
                What Americans Are Liquidating Big Time
              </h3>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              From living rooms to garages, members are taking inventory and turning these categories into immediate cash:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liquidationItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition group"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.examples}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Invitation callout */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 font-medium text-center sm:text-left">
              We are looking for more members to help with the increase in the sale of personal items.
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition flex-shrink-0"
            >
              <span>Get Started — $59 One-Time</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
