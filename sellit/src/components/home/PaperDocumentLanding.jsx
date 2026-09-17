import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BACKGROUND_ITEMS = [
  ['$$$$', 'Furniture', '$$$$', 'Clothing', '$$$$', 'Appliances', '$$$$', 'Electronics', '$$$$', 'Sport Equipment', '$$$$', 'Bikes of All Types', '$$$$', 'Quick Cash'],
  ['Sofas & Couches', '$$$$', 'Laptops & Smartphones', '$$$$', 'Washers & Dryers', '$$$$', 'Mountain Bikes', '$$$$', 'Designer Apparel', '$$$$', '4K Smart TVs', '$$$$', 'Cold Hard Cash'],
  ['$$$$', 'Dining Tables', '$$$$', 'Audio & Speakers', '$$$$', 'Gym Weights', '$$$$', 'Refrigerators', '$$$$', 'Road & E-Bikes', '$$$$', 'Cameras & Lenses', '$$$$', 'Personal Properties'],
  ['Home Appliances', '$$$$', 'Sporting Goods', '$$$$', 'Desks & Office Chairs', '$$$$', 'Leather Jackets', '$$$$', 'Bicycles', '$$$$', 'Tablets & Monitors', '$$$$', '$$$$'],
  ['$$$$', 'Luxury Watches', '$$$$', 'Power Tools', '$$$$', 'Musical Instruments', '$$$$', 'Living Room Sets', '$$$$', 'Fitness Gear', '$$$$', '$$$$', 'Liquidate for Cash'],
  ['Microwaves & Ovens', '$$$$', 'Shoes & Boots', '$$$$', 'Bikes of All Types', '$$$$', 'Electronics', '$$$$', 'Furniture', '$$$$', 'Clothing', '$$$$', 'Cold Hard Cash'],
  ['$$$$', 'Cruiser Bikes', '$$$$', 'Bedroom Sets', '$$$$', 'Golf Clubs', '$$$$', 'Antiques & Collectibles', '$$$$', 'Appliances', '$$$$', 'Stereo Systems', '$$$$'],
];

export default function PaperDocumentLanding({ onOpenAuth }) {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth continuous "strolling along" scroll loop from beginning to end and over again
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isResetting = false;
    let resetTimer = null;
    let resumeTimer = null;
    let lastTimestamp = performance.now();

    const stroll = (now) => {
      const delta = (now - lastTimestamp) / 16.67;
      lastTimestamp = now;

      if (!isHovered && !isResetting) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll > 10) {
          // Reached end of document
          if (container.scrollTop >= maxScroll - 3) {
            isResetting = true;
            // Pause at the end for 2.5 seconds so user can read / click "Pay Here!"
            resetTimer = setTimeout(() => {
              container.scrollTo({ top: 0, behavior: 'smooth' });
              // Wait for smooth scroll to finish before resuming strolling from top
              resumeTimer = setTimeout(() => {
                isResetting = false;
              }, 1200);
            }, 2500);
          } else {
            container.scrollTop += 0.65 * Math.min(delta, 2);
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(stroll);
    };

    animationFrameRef.current = requestAnimationFrame(stroll);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (resetTimer) clearTimeout(resetTimer);
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, [isHovered]);

  const handlePayHere = () => {
    if (onOpenAuth) {
      onOpenAuth('join');
    }
    navigate('/membership');
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-slate-950 flex items-center justify-center py-8 px-4">
      {/* 
        ========================================================================
        BACKGROUND: Cash symbols like $$$$ along with item names
        ========================================================================
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20 flex flex-col justify-between py-3">
        {BACKGROUND_ITEMS.map((stream, streamIndex) => {
          const isReverse = streamIndex % 2 === 1;
          const duration = 55 + streamIndex * 7;
          return (
            <div
              key={streamIndex}
              className="flex whitespace-nowrap overflow-hidden text-slate-400 text-sm sm:text-base font-sans font-bold tracking-wider"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              }}
            >
              <div
                className="flex items-center gap-6"
                style={{
                  animation: `bgStream${isReverse ? 'Reverse' : ''} ${duration}s linear infinite`,
                }}
              >
                {[...stream, ...stream, ...stream, ...stream].map((item, idx) => {
                  const isCash = item.includes('$') || item.includes('Cash');
                  return (
                    <span
                      key={idx}
                      className={
                        isCash
                          ? 'text-emerald-400 font-black tracking-widest drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]'
                          : 'text-slate-400 font-medium'
                      }
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90" />

      {/* 
        ========================================================================
        CENTER PAGE: Simple Standard Sheet of Paper (Not doubled, clean block)
        ========================================================================
      */}
      <main className="relative z-10 w-full max-w-7xl my-auto">
        <div
          className="relative w-full bg-[#fdfdfb] text-slate-900 rounded shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.1)] border border-slate-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsHovered(false), 2000);
          }}
        >
          {/* Scrollable Document Container (Single copy of content) */}
          <div
            ref={scrollContainerRef}
            tabIndex={0}
            aria-label="Sellit landing page document"
            className="w-full overflow-y-auto px-6 sm:px-12 py-10 sm:py-12 scroll-smooth focus:outline-none"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 transparent',
            }}
          >
            {/* Header */}
            <header className="text-center pb-6 border-b border-slate-200 mb-6">
              <p className="text-sm tracking-[0.2em] uppercase font-sans font-semibold text-slate-500 mb-1">
                Sellitsellitsellit.com
              </p>
              <h1 className="text-3xl sm:text-4xl font-black tracking-wider text-slate-900 font-sans uppercase">
                SELL IT!
              </h1>
            </header>

            {/* Saying */}
            <div className="mb-8 text-center">
              <p className="text-base italic text-slate-600 mb-2">
                We have an old saying here at Sellitsellitsellit.com. It goes.
              </p>
              <p className="text-lg sm:text-xl font-bold text-slate-900">
                “Sell what you want today! Sell what you can tomorrow!”
              </p>
            </div>

            {/* Body text */}
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-slate-800">
              <p className="font-semibold text-slate-900">
                Times are hard. The Economy is not going well for many Americans.
              </p>

              <p>
                Many are taking inventory of personal items they no longer need or want and are selling them for quick cash. This could be the best time for you to sell some unwanted personal items for Cold Hard Cash!
              </p>

              <p>
                Looking at the current state of our economy — things are not looking well. All the layoffs and announcements of more future layoffs. Add to that the rise of inflation, causing prices for necessities like food, housing and utilities to go up. Not to mention car payments and insurance. Things are bad for individuals and for families alike.
              </p>

              <p>
                Americans are waking up and starting to realize what's more important in their life — it's not more stuff bought on credit while drowning in debt. They are now "liquidating" personal properties Big Time. Including furniture, clothing, appliances, electronics, sport equipment and bikes of all types.
              </p>

              <p>
                Sellitsellitsellit.com is where you can come to convert your no longer wanted personal items into much-needed cash. We are looking for more members to help with the increase in the sale of personal items. This down economy does not have to be down for you. There is a one-time membership fee of just $59 That’s It!
              </p>

              {/* CBBL section */}
              <div className="pt-6 border-t border-slate-200 mt-6 space-y-4">
                <p className="text-sm uppercase tracking-wide text-slate-500 font-sans font-bold">
                  Now lets talk about our
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                  Members’ Collateral Back Bridge Loans Offer (CBBL)
                </h2>
                <p>
                  Become a member today and qualify or a short-term Bridge loan. These CBBLs are made for our member sellers with personal item(s) whose values are high enough to justify for our short-term loans. These Loans are for between 30, 60 or 90 days. Easy to qualify.
                </p>
                <p>
                  Join us now at our one time low fee and put yourself in position to take advantage of CBBL’s as well as other membership opportunities. To start your lifetime membership join now and lock in this low cost. $59.
                </p>
              </div>

              {/* Pay Here Action */}
              <div className="pt-8 pb-4 text-center">
                <button
                  type="button"
                  onClick={handlePayHere}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-sans font-bold text-xl sm:text-2xl rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <span>Pay Here!</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background keyframe animations */}
      <style>{`
        @keyframes bgStream {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bgStreamReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
