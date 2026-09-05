import React from 'react';

export default function ConversionCTA({ onOpenAuth }) {
  return (
    <section className="py-32 bg-slate-950 text-white px-6 text-center relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 reveal leading-tight font-heading">
          Ready to Start<br />
          <span className="text-blue-500">Shopping &amp; Selling?</span>
        </h2>
        <p
          className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto reveal font-light leading-relaxed"
          style={{ transitionDelay: '100ms' }}
        >
          Join thousands of members discovering great finds and passing on quality goods today.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center reveal"
          style={{ transitionDelay: '200ms' }}
        >
          <button
            onClick={() => onOpenAuth('join')}
            className="bg-blue-600 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl hover:bg-blue-700 transition shadow-2xl shadow-blue-900/50 active:scale-95 cursor-pointer"
          >
            Join Sell it, sell it, sell it Today
          </button>
          <button
            onClick={() => onOpenAuth('login')}
            className="bg-white/10 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/20 transition cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
    </section>
  );
}
