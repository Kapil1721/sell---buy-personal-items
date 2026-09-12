import React from 'react';

export default function MobileStickyCTA({ onOpenAuth }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200/80 p-4 z-40 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lifetime Access</p>
        <p className="text-lg font-black text-midnight-navy font-heading">
          $59 <span className="text-xs font-bold text-emerald-600">one-time</span>
        </p>
      </div>
      <button
        onClick={() => onOpenAuth('join')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md shadow-blue-500/25 transition active:scale-95 cursor-pointer"
      >
        Join Now
      </button>
    </div>
  );
}
