import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import heroAccentImage from '../../assets/Love-At-First-Sale.jpg'
import categoryFashion from '../../assets/Clothing.png'
import categoryCollectibles from '../../assets/Collectibles-Art.png'
import categoryElectronics from '../../assets/Gadgets.png'
import categoryHome from '../../assets/Home-And-Garden.png'
import categoryKids from '../../assets/Kids.png'
import categorySports from '../../assets/Sports.png'
import featuredBag from '../../assets/Gold-Black-White-Crossbody-purse.jpg'
import featuredChain from '../../assets/Sterling-silver-chain.jpg'
import featuredShoes from '../../assets/Mens-White-Shoes.jpg'
import featuredCutlery from '../../assets/24-Piece-Silverware.jpg'
import SellProducts from './sections/SellProducts'
import MostViewedItems from './sections/MostViewedItems'
import Categories from './sections/Categories'

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { name: 'Electronics',   count: '1.2k items', image: categoryElectronics },
  { name: 'Home & Garden', count: '940 items',  image: categoryHome },
  { name: 'Fashion',       count: '2.1k items', image: categoryFashion },
  { name: 'Kids',          count: '680 items',  image: categoryKids },
  { name: 'Sports',        count: '430 items',  image: categorySports },
  { name: 'Collectibles',  count: '320 items',  image: categoryCollectibles },
]

const trustItems = [
  { icon: '🔒', title: 'Verified Sellers',    desc: 'Every seller goes through phone & ID verification so you know exactly who you\'re dealing with.' },
  { icon: '💬', title: 'In-App Chat',         desc: 'Negotiate and communicate safely without ever sharing personal contact details.' },
  { icon: '⭐', title: 'Ratings & Reviews',   desc: 'Buyer and seller ratings after every transaction keep our community trustworthy.' },
  { icon: '🛡️', title: 'Buyer Protection',   desc: 'Dispute resolution and buyer protection on all eligible transactions.' },
]

const collageItems = [
  { label: 'Accessories', price: '$48', image: featuredBag,   span: 'row-span-2' },
  { label: 'Jewelry',     price: '$32', image: featuredChain,  span: '' },
  { label: 'Footwear',    price: '$55', image: featuredShoes,  span: '' },
  { label: 'Kitchen',     price: '$42', image: featuredCutlery, span: 'row-span-2' },
  { label: 'Fashion',     price: '$29', image: heroAccentImage, span: '' },
]

const tickerItems = [
  'Fresh markdowns on premium accessories',
  'Furniture picks from trusted local sellers',
  'Electronics, decor, and fashion in one browse',
  'Sell faster with cleaner listings',
  'Discover quality personal items',
  'Fresh markdowns on premium accessories',
  'Furniture picks from trusted local sellers',
  'Electronics, decor, and fashion in one browse',
  'Sell faster with cleaner listings',
  'Discover quality personal items',
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function FavButton() {
  const [liked, setLiked] = useState(false)
  return (
    <button
      onClick={() => setLiked(l => !l)}
      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
      aria-label="Favourite"
    >
      <span className={liked ? 'text-red-500' : 'text-gray-400'}>{liked ? '❤️' : '🤍'}</span>
    </button>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

function Home() {
  const { user } = useContext(AuthContext)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCategory, setSearchCategory] = useState('All Categories')

  return (
    <main className="bg-[#f8fafd] text-[#283948] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-[90vh] grid lg:grid-cols-2 overflow-hidden">

        {/* Left */}
        <div className="bg-[#eef5fb] px-10 py-16 md:px-16 md:py-24 flex flex-col justify-center animate-fadeUp">
          <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.15em] text-[#1e62a4] mb-6">
            <span className="block w-8 h-px bg-[#1e62a4]" />
            Curated Resale Marketplace
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.0] text-[#283948] mb-7">
            One person's<br />
            <em className="not-italic text-[#3ebd8d]">old</em> is another's<br />
            treasure.
          </h1>

          <p className="text-[#556e82] text-base leading-7 max-w-md mb-12 font-light">
            Buy and sell second-hand goods with zero hassle. Accessories, electronics, clothing, collectibles — incredible deals or declutter your space today.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/qualified-items-list"
              className="bg-primary text-[#eef5fb] rounded px-9 py-4 text-xs uppercase tracking-[0.06em] transition hover:-translate-y-0.5"
            >
              Shop Now
            </Link>
            <Link
              to={user ? '/panel/create' : '/login'}
              state={user ? undefined : { to: '/panel/create', for: 'sell' }}
              className="border border-primary text-primary rounded px-9 py-4 text-xs uppercase tracking-[0.06em] transition hover:bg-primary hover:text-[#eef5fb] hover:-translate-y-0.5"
            >
              Sell an Item
            </Link>
          </div>

          <div className="mt-14 flex gap-10 pt-8 border-t border-[#d5e3f0]">
            {[['12k+', 'Monthly Buyers'], ['4.8★', 'Avg. Rating'], ['24h', 'Avg. Response']].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold text-[#283948]">{num}</div>
                <div className="text-xs text-[#556e82] mt-1 font-light">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo collage */}
        <div className="bg-[#283948] relative overflow-hidden min-h-[420px]">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-1 p-1">
            {collageItems.map((item, i) => (
              <div
                key={item.label}
                className={`relative overflow-hidden cursor-pointer group ${item.span} ${i === 3 ? 'col-start-2' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#283948]/60 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#283948] text-[#eef5fb] text-[0.6rem] uppercase tracking-[0.08em] px-2.5 py-1 z-10">
                  {item.label}
                </span>
                <span className="absolute top-3 right-3 bg-[#3ebd8d] text-[#283948] text-[0.7rem] font-bold px-2.5 py-1 z-10">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR ───────────────────────────────────────────────── */}
      <div className="bg-[#1e62a4] px-8 md:px-16 py-6 flex flex-col md:flex-row items-center gap-4">
        <span className="text-xs uppercase tracking-[0.1em] text-white/80 whitespace-nowrap pr-6 border-r border-white/30 hidden md:block">
          Quick Search
        </span>
        <div className="flex flex-1 border border-white/25 bg-white/10">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="What are you looking for today?"
            className="flex-1 bg-transparent border-none px-5 py-3.5 text-white placeholder-white/50 outline-none text-sm"
          />
          <select
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
            className="bg-white/15 border-none border-l border-white/20 text-white px-4 text-sm outline-none cursor-pointer"
          >
            {['All Categories', 'Electronics', 'Home & Garden', 'Fashion', 'Kids', 'Sports', 'Collectibles'].map(c => (
              <option key={c} value={c} className="text-[#283948] bg-white">{c}</option>
            ))}
          </select>
          <Link
            to="/qualified-items-list"
            className="bg-[#283948] text-[#eef5fb] px-8 py-3.5 text-xs uppercase tracking-[0.06em] transition hover:bg-[#1a2d3d]"
          >
            Search →
          </Link>
        </div>
      </div>

      {/* ── TICKER ───────────────────────────────────────────────────── */}
      <div className="bg-[#3ebd8d] py-3 overflow-hidden whitespace-nowrap">
        <div className="ticker-inner inline-flex gap-12 animate-ticker">
          {tickerItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.08em] text-[#283948]/85">
              <span className="w-1.5 h-1.5 rounded-full bg-[#283948]/40 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <Categories />
      <MostViewedItems />

      {/* ── SELL BANNER ──────────────────────────────────────────────── */}
      <section className="mx-8 md:mx-16 my-16 relative overflow-hidden grid lg:grid-cols-2 gap-12 items-center p-12 md:p-16 bg-[#283948]">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(62,189,141,0.2),_transparent_40%)]" />
        <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-[#1e62a4]/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-black text-[#eef5fb] leading-tight mb-6">
            Have something<br />to sell?{' '}
            <em className="not-italic text-[#3ebd8d]">Make<br />money today.</em>
          </h2>
          <Link
            to={user ? '/panel/create' : '/login'}
            state={user ? undefined : { to: '/panel/create', for: 'sell' }}
            className="inline-block bg-[#3ebd8d] text-[#283948] px-10 py-4 text-xs uppercase tracking-[0.08em] font-bold transition hover:bg-[#35aa7f] hover:-translate-y-0.5 mt-4"
          >
            Start Selling Free →
          </Link>
        </div>

        <div className="relative flex flex-col gap-6">
          {[
            ['01', 'Snap a photo & list it', 'Takes under 2 minutes — photo, description, price and you\'re live.'],
            ['02', 'Connect with buyers', 'Interested buyers reach out directly via secure in-app messaging.'],
            ['03', 'Get paid & hand over', 'Agree on payment, meet locally or ship — entirely your choice.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="flex gap-5 items-start">
              <span className="text-4xl font-black text-[#1e62a4] leading-none w-10 flex-shrink-0">{num}</span>
              <div>
                <div className="font-semibold text-[#eef5fb] text-sm mb-1">{title}</div>
                <div className="text-[#d5e3f0] text-sm font-light leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST ────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16 bg-[#f8fafd] grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {trustItems.map(item => (
          <div
            key={item.title}
            className="text-center p-8 border border-[#d5e3f0] bg-[#eef5fb] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(40,57,72,0.08)]"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <div className="font-bold text-lg text-[#283948] mb-3">{item.title}</div>
            <div className="text-sm text-[#556e82] leading-relaxed font-light">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* ── Global Styles ─────────────────────────────────────────────── */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 28s linear infinite; }
      `}</style>
    </main>
  )
}

export default Home