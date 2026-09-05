import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const benefitRows = [
  {
    num: '01',
    title: 'Discover',
    tagline: 'Exclusive early-access to new listings daily.',
    details: 'Get first-priority notifications when pre-owned gems and high-value tech match your saved categories before they go live to general public search.',
    delay: '0ms',
  },
  {
    num: '02',
    title: 'Save',
    tagline: 'Mark items as favorites and track price changes.',
    details: 'Never miss a price reduction. When sellers mark down an item in your favorites list, you receive instant alerts with history insights.',
    delay: '100ms',
  },
  {
    num: '03',
    title: 'Organize',
    tagline: 'Manage your watchlists through a personal dashboard.',
    details: 'Track multiple negotiations, monitor dispatch tracking, and coordinate safe in-person handoffs or verified postal deliveries from a single dashboard.',
    delay: '200ms',
  },
];

export default function MembershipBenefits() {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow((curr) => (curr === index ? null : index));
  };

  return (
    <section className="bg-midnight-navy py-32 text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 reveal">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Member Privileges</p>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Built Exclusively for Collectors & Sellers
          </h3>
        </div>

        <div className="space-y-4">
          {benefitRows.map((row, idx) => {
            const isExpanded = expandedRow === idx;
            return (
              <div
                key={row.num}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() => toggleRow(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleRow(idx);
                  }
                }}
                className={`border-b border-white/10 py-6 sm:py-8 px-5 rounded-2xl transition-all duration-300 cursor-pointer group hover:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  isExpanded ? 'border-blue-500 bg-white/[0.03] shadow-lg shadow-blue-500/5' : 'hover:bg-white/[0.01]'
                }`}
                style={{ transitionDelay: row.delay }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className={`text-4xl sm:text-5xl font-extrabold transition-colors font-heading select-none ${
                      isExpanded ? 'text-blue-500' : 'text-white/20 group-hover:text-blue-400'
                    }`}>
                      {row.num}
                    </span>
                    <div>
                      <h4 className={`text-xl sm:text-2xl font-bold mb-1 font-heading transition-colors ${
                        isExpanded ? 'text-blue-400' : 'text-white group-hover:text-blue-300'
                      }`}>
                        {row.title}
                      </h4>
                      <p className="text-slate-400 text-sm sm:text-base">{row.tagline}</p>
                    </div>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isExpanded ? 'bg-blue-600/30 ring-2 ring-blue-500/40' : 'bg-white/5 group-hover:bg-blue-600/20'
                  }`}>
                    <Plus
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-45 text-blue-400' : 'text-white/40 group-hover:text-blue-400'
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-slate-300 text-sm leading-relaxed">
                      <p className="bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-800/80 shadow-inner">
                        {row.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
