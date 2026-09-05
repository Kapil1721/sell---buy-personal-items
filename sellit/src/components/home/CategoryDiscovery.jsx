import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Electronics', image: '/images/category-electronics.jpg' },
  { name: 'Furniture', image: '/images/category-furniture.jpg' },
  { name: 'Fashion', image: '/images/category-fashion.jpg' },
  { name: 'Home', image: '/images/category-home.jpg' },
  { name: 'Sports', image: '/images/category-sports.jpg' },
];

export default function CategoryDiscovery() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 340;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="categories" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 reveal">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-midnight-navy font-heading">
              Categories to Explore
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Browse pre-owned collections curated by verified members.
            </p>
          </div>

          {/* Carousel arrow controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-midnight-navy hover:text-white hover:border-midnight-navy transition shadow-sm cursor-pointer"
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-midnight-navy hover:text-white hover:border-midnight-navy transition shadow-sm cursor-pointer"
              aria-label="Next categories"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Snap-X Container */}
        <div
          ref={containerRef}
          className="snap-x-container flex gap-6 overflow-x-auto pb-6 scroll-smooth select-none cursor-grab active:cursor-grabbing"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="snap-item flex-shrink-0 w-72 sm:w-80 group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-white rounded-[36px] overflow-hidden mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-slate-200/60">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold px-4 text-midnight-navy group-hover:text-blue-600 transition font-heading">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
