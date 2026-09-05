import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  'Full Marketplace & Listing Access',
  'Personal Seller & Buyer Dashboard',
  'PayPal Instant Payment Integration',
  'Priority Search Item Placement',
  'Verified Member Badge & 24/7 Support',
];

export default function MembershipPricing({ onOpenAuth }) {
  return (
    <section id="membership" className="py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 relative overflow-hidden text-white">
      {/* Ambient background glow nodes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold mb-4 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-blue-300" />
          <span>Flexible Membership Plans</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-16 font-heading tracking-tight">
          One Membership.<br />
          Unlimited Marketplace Access.
        </h2>

        <div className="max-w-lg mx-auto bg-white/95 backdrop-blur-xl rounded-[40px] p-8 sm:p-12 md:p-14 text-slate-900 shadow-2xl shadow-slate-950/40 border border-white/40 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Special Member Offer</span>
          </div>

          <div className="mb-8 pt-2">
            <h3 className="text-xl font-black text-slate-900 mb-3 font-heading tracking-wider uppercase">
              SELLER PRO ACCESS
            </h3>
            <div className="flex items-end justify-center gap-1">
              <span className="text-6xl font-black tracking-tight text-blue-600 font-heading">
                $39
              </span>
              <span className="text-slate-400 font-bold mb-2 text-base">/ month</span>
              <span className="text-sm text-slate-400 line-through mb-2.5 ml-2">$59</span>
            </div>
          </div>

          <ul className="text-left space-y-4 mb-10 border-t border-slate-100 pt-6">
            {benefits.map((text, idx) => (
              <li key={idx} className="flex items-center gap-3.5 font-semibold text-slate-700 text-sm">
                <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/membership"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-5 rounded-2xl font-bold text-lg transition shadow-xl shadow-blue-500/25 active:scale-[0.98] text-center"
          >
            Choose Plan & Subscribe
          </Link>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Cancel anytime. PayPal secured.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
