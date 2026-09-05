import React from 'react';

const pillars = [
  {
    num: '01',
    title: 'SAVE',
    desc: 'Make your budget go significantly further by choosing high-quality pre-owned items instead of retail-priced new stock.',
    delay: '0ms',
  },
  {
    num: '02',
    title: 'DISCOVER',
    desc: 'Find products with character, vintage gems, and discontinued classics that you simply cannot find in traditional stores.',
    delay: '100ms',
  },
  {
    num: '03',
    title: 'RECIRCULATE',
    desc: 'Have quality items you no longer need? Sell it, sell it, sell it to give them a second life while earning value back.',
    delay: '200ms',
  },
];

export default function WhyMarketplace() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-24 reveal font-heading">
          Shopping Pre-Owned<br />
          <span className="text-blue-500">Should Feel Better.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="reveal"
              style={{ transitionDelay: pillar.delay }}
            >
              <h3 className="text-7xl font-extrabold text-blue-600/20 mb-6 font-heading tracking-tighter select-none">
                {pillar.num}
              </h3>
              <h4 className="text-3xl font-bold mb-4 font-heading tracking-wide">
                {pillar.title}
              </h4>
              <p className="text-slate-400 leading-relaxed font-light text-base">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
