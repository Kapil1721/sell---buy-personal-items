import React, { useState, useEffect, useMemo } from 'react';
import { Heart, ArrowRight, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { getRealProducts, getProductCategories, formatImageUrl } from '../../services/productsApi';

const fallbackProductsData = [
  {
    id: 'prod-1',
    title: 'Vintage 35mm Camera',
    price: 145,
    category: 'Electronics',
    image: '/images/vintage-camera.jpg',
    condition: 'Excellent',
    conditionColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
    location: 'Chicago, IL',
  },
  {
    id: 'prod-2',
    title: 'Handcrafted Leather Bag',
    price: 220,
    category: 'Fashion',
    image: '/images/leather-bag.jpg',
    condition: 'Like New',
    conditionColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
    location: 'Brooklyn, NY',
  },
  {
    id: 'prod-3',
    title: 'Modern Studio Lamp',
    price: 85,
    category: 'Home',
    image: '/images/desk-lamp.jpg',
    condition: 'Fair',
    conditionColor: 'text-amber-700 bg-amber-50 border-amber-200/60',
    location: 'Austin, TX',
  },
  {
    id: 'prod-4',
    title: 'Pro Over-Ear Headphones',
    price: 160,
    category: 'Electronics',
    image: '/images/headphones.jpg',
    condition: 'Like New',
    conditionColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
    location: 'Seattle, WA',
  },
  {
    id: 'prod-5',
    title: 'Minimalist Designer Sneakers',
    price: 110,
    category: 'Fashion',
    image: '/images/sneakers.jpg',
    condition: 'Excellent',
    conditionColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
    location: 'Los Angeles, CA',
  },
  {
    id: 'prod-6',
    title: 'Eames Style Lounge Chair',
    price: 280,
    category: 'Home',
    image: '/images/showcase-chair.jpg',
    condition: 'Great',
    conditionColor: 'text-blue-700 bg-blue-50 border-blue-200/60',
    location: 'Portland, OR',
  },
];

export default function InteractiveMarketplace({ onOpenAuth }) {
  const [realProducts, setRealProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [prodRes, catRes] = await Promise.all([
          getRealProducts({ limit: 12 }),
          getProductCategories(),
        ]);

        if (prodRes && prodRes.products && prodRes.products.length > 0) {
          const formatted = prodRes.products.map((item) => {
            const rawImg = item.images?.[0]?.image || item.images?.[0]?.url || item.image;
            return {
              id: item.post_id || item.id,
              title: item.name || item.title || 'Marketplace Item',
              price: item.price ?? 0,
              category: item.category?.name || item.category || 'General',
              categoryId: item.categoryId || item.category?.id,
              image: formatImageUrl(rawImg),
              condition: item.itemsType === 'DONATION' ? 'Donation Item' : 'Active Listing',
              conditionColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
              location: item.user?.name ? `Seller: ${item.user.name}` : 'Verified Seller',
            };
          });
          setRealProducts(formatted);
          setIsLive(true);
        }

        if (catRes && catRes.productCategories && catRes.productCategories.length > 0) {
          setCategoriesList(catRes.productCategories);
        }
      } catch (err) {
        console.error('Failed to fetch marketplace products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayProducts = useMemo(() => {
    if (realProducts.length > 0) return realProducts;
    return fallbackProductsData;
  }, [realProducts]);

  const categoryOptions = useMemo(() => {
    const defaultTabs = [{ id: 'all', label: 'All Items' }];
    if (categoriesList.length > 0) {
      return [
        ...defaultTabs,
        ...categoriesList.map((c) => ({ id: String(c.id), label: c.name })),
      ];
    }
    return [
      ...defaultTabs,
      { id: 'electronics', label: 'Electronics' },
      { id: 'fashion', label: 'Fashion' },
      { id: 'home', label: 'Home' },
    ];
  }, [categoriesList]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return displayProducts;
    return displayProducts.filter((p) => {
      if (p.categoryId) return String(p.categoryId) === String(activeCategory);
      return p.category?.toLowerCase() === activeCategory.toLowerCase();
    });
  }, [activeCategory, displayProducts]);

  return (
    <section id="marketplace" className="py-32 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{isLive ? 'Live Backend Marketplace Feed' : 'Featured Marketplace Catalog'}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-heading">
              What's Inside?
            </h2>
            <p className="text-slate-600 text-base font-normal mt-2">
              Explore active listings from verified community sellers.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2.5">
            {categoryOptions.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        )}

        {/* Product Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => {
              const isFav = favorites.has(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
                >
                  <div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/vintage-camera.jpg';
                        }}
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer ${
                          isFav
                            ? 'bg-red-50 text-red-500'
                            : 'bg-white/95 backdrop-blur-md text-slate-600 hover:text-red-500 hover:bg-white'
                        }`}
                        aria-label="Save item"
                      >
                        <Heart
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isFav ? 'fill-red-500 scale-110' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <div className="px-2">
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition font-heading line-clamp-1">
                          {product.title}
                        </h4>
                        <p className="text-blue-600 font-extrabold text-lg flex-shrink-0">
                          ${Number(product.price).toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-2 pt-3 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span
                      className={`border px-2.5 py-0.5 rounded-full font-semibold text-[11px] ${product.conditionColor}`}
                    >
                      {product.condition}
                    </span>
                    <span className="truncate max-w-[150px]">{product.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Entire Marketplace Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => (onOpenAuth ? onOpenAuth('join') : window.location.href = '/register')}
            className="inline-flex items-center gap-3 bg-white text-slate-900 border-2 border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm hover:shadow-lg cursor-pointer text-base"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>View Entire Marketplace</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
