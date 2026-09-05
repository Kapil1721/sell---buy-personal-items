import React from 'react';
import { Sparkles } from 'lucide-react';

export default function EditorialProductWall() {
  return (
    <section className="bg-slate-900 py-32 overflow-hidden relative text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
        {/* Left Editorial Text */}
        <div className="md:col-span-4 reveal">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 font-heading">
            Every listing is another possibility.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed font-light text-base">
            Our catalog is dynamic. Thousands of unique items uploaded by members weekly.
          </p>
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide">
            <Sparkles className="w-5 h-5" />
            <span>Updated every 15 minutes</span>
          </div>
        </div>

        {/* Right Gallery Showcase */}
        <div className="md:col-span-8 flex flex-wrap gap-4 justify-center md:justify-end items-center">
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <img
              src="/images/showcase-camera.jpg"
              alt="Showcase Camera"
              className="w-36 sm:w-40 h-56 sm:h-60 object-cover rounded-3xl opacity-50 hover:opacity-100 transition-all duration-500 hover:scale-105 shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <img
              src="/images/showcase-chair.jpg"
              alt="Showcase Lounge Chair"
              className="w-56 sm:w-64 h-72 sm:h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 border border-slate-800"
              loading="lazy"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <img
              src="/images/showcase-bottle.jpg"
              alt="Showcase Accessory"
              className="w-40 sm:w-48 h-52 sm:h-56 object-cover rounded-3xl opacity-50 hover:opacity-100 transition-all duration-500 hover:scale-105 shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <img
              src="/images/headphones.jpg"
              alt="Showcase Headphones"
              className="w-48 sm:w-56 h-64 sm:h-72 object-cover rounded-3xl shadow-xl hover:scale-105 transition-all duration-500 border border-slate-800"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
