import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Zap, Sparkles, CreditCard, Lock } from 'lucide-react';

const benefits = [
  'Full Marketplace & Unlimited Item Listings',
  'Collateral Back Bridge Loans (CBBL) Qualification',
  'Personal Seller & Buyer Dashboard Access',
  'Direct Buyer Inquiries & PayPal Instant Payouts',
  'Verified Member Badge & Priority Support',
];

export default function MembershipPricing({ onOpenAuth }) {
  return (
    <section id="membership" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            Simple &amp; Transparent Membership
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight mb-4">
            One Membership Fee. <br className="hidden sm:inline" />
            Lifetime Marketplace &amp; CBBL Access.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            There are no recurring monthly subscriptions or hidden charges. Pay a one-time fee of just $59 and unlock your permanent seller account.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg text-left relative">
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Lifetime Access
            </span>
            <span className="text-xs font-bold text-slate-500">No Monthly Dues</span>
          </div>

          <h3 className="text-xl font-black text-slate-900 mb-2 font-heading">
            Seller Pro &amp; CBBL Membership
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Permanent access to list unwanted personal items for cold hard cash and apply for bridge loans.
          </p>

          <div className="mb-6 pb-6 border-b border-slate-200 flex items-baseline gap-2">
            <span className="text-5xl font-black text-slate-900 font-heading tracking-tight">
              $59
            </span>
            <span className="text-sm font-bold text-slate-500">one-time payment</span>
          </div>

          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              What’s Included For Life
            </p>
            <ul className="space-y-3.5">
              {benefits.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/membership"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-xl transition shadow-lg shadow-blue-600/20 active:scale-[0.98] text-center"
          >
            Pay Here! — Get Lifetime Access ($59)
          </Link>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>One-time fee of $59. That’s It! PayPal secured.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
