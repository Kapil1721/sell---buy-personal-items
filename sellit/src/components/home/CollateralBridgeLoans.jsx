import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Check,
  Building2,
  Info
} from 'lucide-react';

const loanTerms = [
  {
    days: '30 Days',
    title: 'Short-Term Relief',
    desc: 'Rapid bridge financing against qualifying personal items for immediate cash flow needs.',
    tag: 'Quick Liquidity'
  },
  {
    days: '60 Days',
    title: 'Standard Bridge Term',
    desc: 'Balanced period allowing sellers ample time to sell items or settle short-term obligations.',
    tag: 'Most Flexible'
  },
  {
    days: '90 Days',
    title: 'Extended Loan Window',
    desc: 'Longer term bridge support designed for higher-value personal properties and luxury goods.',
    tag: 'Extended Term'
  },
];

export default function CollateralBridgeLoans({ onOpenAuth }) {
  const [selectedTerm, setSelectedTerm] = useState('60 Days');

  return (
    <section id="cbbl-loans" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            Member Financial Privileges
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight mb-4">
            Members’ Collateral Back Bridge Loans Offer (CBBL)
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Now let's talk about our Members’ Collateral Back Bridge Loans Offer (CBBL). Become a member today and qualify for a short-term Bridge loan.
          </p>
        </div>

        {/* 3 Loan Term Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {loanTerms.map((term) => {
            const isSelected = selectedTerm === term.days;
            return (
              <div
                key={term.days}
                onClick={() => setSelectedTerm(term.days)}
                className={`rounded-2xl p-6 border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-amber-400 shadow-xl ring-1 ring-amber-400/50'
                    : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                      {term.tag}
                    </span>
                    <Clock className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                  </div>

                  <div className="text-3xl font-black font-heading text-white mb-2">
                    {term.days}
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2 font-heading">
                    {term.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {term.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Easy to Qualify
                  </span>
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'Active Selection' : 'Select Term'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Details and Pay Here Box */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-7 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mb-4">
                How Collateral Back Bridge Loans Work
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                These CBBLs are made for our member sellers with personal item(s) whose values are high enough to justify for our short-term loans. These Loans are for between 30, 60 or 90 days. Easy to qualify.
              </p>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>High-value personal items qualify as collateral</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Choice of 30, 60, or 90-day flexible loan duration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Puts you in position to take advantage of CBBLs and other member sales</span>
                </div>
              </div>
            </div>

            {/* Pay Here Callout Card */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                One-Time Low Fee • Lifetime Access
              </span>
              <h4 className="text-lg font-black text-white font-heading mb-2">
                Join Now &amp; Lock In This Low Cost
              </h4>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Join us now at our one time low fee and put yourself in position to take advantage of CBBL’s as well as other membership opportunities.
              </p>

              <div className="py-2.5 px-5 bg-slate-800 rounded-lg inline-block mb-5 border border-slate-700">
                <span className="text-xs text-slate-400 uppercase font-bold block">Lifetime Membership Fee</span>
                <span className="text-4xl font-black text-white font-heading">$59</span>
              </div>

              {/* Pay Here Button */}
              <Link
                to="/membership"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base py-3.5 px-6 rounded-xl transition shadow-lg shadow-amber-500/20 active:scale-95 text-center"
              >
                <DollarSign className="w-5 h-5 stroke-[3]" />
                <span>Pay Here!</span>
              </Link>
              
              <p className="text-[11px] text-slate-400 mt-3">
                One-time payment of $59. No recurring fees. PayPal secured.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
