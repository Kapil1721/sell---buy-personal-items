import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Join the membership and unlock the live marketplace feed.',
    style: 'bg-blue-600 shadow-2xl shadow-blue-600/40 text-white',
    delay: '0ms',
  },
  {
    num: '02',
    title: 'Save',
    desc: 'Save items you like to your personal account for easy access.',
    style: 'bg-slate-900 border-2 border-blue-600/50 text-white',
    delay: '100ms',
  },
  {
    num: '03',
    title: 'Compare',
    desc: 'Review conditions and prices to find the absolute best value.',
    style: 'bg-slate-900 border-2 border-blue-600/30 text-white',
    delay: '200ms',
  },
  {
    num: '04',
    title: 'Buy & Sell',
    desc: "Checkout securely for finds you love, or sell it, sell it, sell it when you're ready to pass items on.",
    style: 'bg-slate-900 border-2 border-white/10 text-white',
    delay: '300ms',
  },
];

export default function BuyerJourney() {
  return (
    <section id="how-it-works" className="py-32 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-24 reveal text-center font-heading">
          Your Journey to<br />
          <span className="text-blue-500">Smarter Shopping.</span>
        </h2>

        <div className="relative grid md:grid-cols-4 gap-12">
          {/* Connector dashed line for desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] w-[76%] h-0.5 border-t border-dashed border-white/20"></div>

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative reveal flex flex-col items-center text-center group"
              style={{ transitionDelay: step.delay }}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110 select-none font-heading ${step.style}`}
              >
                {step.num}
              </div>
              <h4 className="text-2xl font-bold mb-4 font-heading">{step.title}</h4>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
