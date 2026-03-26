import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../auth/AuthContext'
import heroAccentImage from '../../assets/Love-At-First-Sale.jpg'
import featuredBag from '../../assets/Gold-Black-White-Crossbody-purse.jpg'
import featuredChain from '../../assets/Sterling-silver-chain.jpg'
import featuredShoes from '../../assets/Mens-White-Shoes.jpg'
import featuredCutlery from '../../assets/24-Piece-Silverware.jpg'
import MostViewedItems from './sections/MostViewedItems'
import Categories from './sections/Categories'
import { GET_PRODUCT_CATEGORY } from '../../services/operations/productsApi'

const trustItems = [
  { icon: '🔒', title: 'Verified Sellers', desc: "Every seller goes through phone & ID verification so you know exactly who you're dealing with." },
  { icon: '💬', title: 'In-App Chat', desc: 'Negotiate and communicate safely without ever sharing personal contact details.' },
  { icon: '⭐', title: 'Ratings & Reviews', desc: 'Buyer and seller ratings after every transaction keep our community trustworthy.' },
  { icon: '🛡️', title: 'Buyer Protection', desc: 'Dispute resolution and buyer protection on all eligible transactions.' },
]

const collageItems = [
  {
    label: 'Accessories',
    image: featuredBag,
    tileClass: 'row-span-2 lg:col-span-7 lg:row-span-7',
  },
  {
    label: 'Jewelry',
    image: featuredChain,
    tileClass: 'sm:col-span-1 lg:col-start-8 lg:row-start-1 lg:col-span-5 lg:row-span-3',
  },
  {
    label: 'Footwear',
    image: featuredShoes,
    tileClass: 'row-span-2 sm:col-span-1 lg:col-start-8 lg:row-start-4 lg:col-span-5 lg:row-span-3',
  },
  {
    label: 'Kitchen',
    image: featuredCutlery,
    tileClass: 'lg:col-start-8 lg:row-start-7 lg:col-span-5 lg:row-span-4',
  },
  {
    label: 'Fashion',
    image: heroAccentImage,
    tileClass: 'lg:col-start-1 lg:row-start-8 lg:col-span-7 lg:row-span-3 hidden lg:block',
  },
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

function Home() {
  const { user } = useContext(AuthContext)

  const { isPending, data } = useQuery({
    queryKey: ['GET_PRODUCT_CATEGORY'],
    queryFn: async () => await GET_PRODUCT_CATEGORY(),
  })

  return (
    <main className="bg-[#f8fafd] text-[#283948] overflow-x-hidden">
      <section className="grid overflow-hidden lg:min-h-[90vh] lg:grid-cols-2">
        <div className="bg-[#eef5fb] px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-24 flex flex-col justify-center animate-fadeUp">
          <p className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.15em] text-[#1e62a4] mb-5 sm:text-[0.7rem] sm:mb-6">
            <span className="block w-8 h-px bg-[#1e62a4]" />
            Curated Resale Marketplace
          </p>

          <h1 className="max-w-[12ch] text-[2.4rem] font-black leading-[0.95] text-[#283948] mb-6 sm:text-5xl sm:leading-[0.98] lg:text-5xl lg:mb-7">
            {"One person's"}<br />
            <em className="not-italic text-[#3ebd8d]">old</em>{" is another's"}<br />
            treasure.
          </h1>

          <p className="text-[#556e82] text-[0.98rem] leading-7 max-w-md mb-10 font-light sm:text-base sm:mb-12">
            Buy and sell second-hand goods with zero hassle. Accessories, electronics, clothing, collectibles - incredible deals or declutter your space today.
          </p>

          <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Link
              to="/qualified-items-list"
              className="bg-primary text-center text-[#eef5fb] rounded px-7 py-4 text-xs uppercase tracking-[0.06em] transition hover:-translate-y-0.5 sm:px-9"
            >
              Shop Now
            </Link>
            <Link
              to={user ? '/panel/create' : '/login'}
              state={user ? undefined : { to: '/panel/create', for: 'sell' }}
              className="border border-primary text-primary text-center rounded px-7 py-4 text-xs uppercase tracking-[0.06em] transition hover:bg-primary hover:text-[#eef5fb] hover:-translate-y-0.5 sm:px-9"
            >
              Sell an Item
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-[#d5e3f0] sm:mt-14 sm:flex sm:gap-10 sm:pt-8">
            {[['12k+', 'Monthly Buyers'], ['4.8★', 'Avg. Rating'], ['24h', 'Avg. Response']].map(([num, label]) => (
              <div key={label}>
                <div className="text-[1.75rem] font-bold text-[#283948] sm:text-3xl">{num}</div>
                <div className="text-[0.68rem] text-[#556e82] mt-1 font-light sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#283948] relative overflow-hidden lg:min-h-[420px]">
          <div className="grid grid-cols-2 auto-rows-[120px] gap-1 p-1 sm:auto-rows-[170px] lg:absolute lg:inset-0 lg:grid-cols-12 lg:grid-rows-[repeat(10,minmax(0,1fr))] lg:auto-rows-auto">
            {collageItems.map(item => (
              <div
                key={item.label}
                className={`relative min-h-[120px] overflow-hidden cursor-pointer group ${item.tileClass}`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <Categories isPending={isPending} data={data?.productCategories} />
      <MostViewedItems />

      <section className="mx-8 md:mx-16 my-16 relative overflow-hidden grid lg:grid-cols-2 gap-12 items-center p-12 md:p-16 bg-[#283948]">
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
            ['01', 'Snap a photo & list it', "Takes under 2 minutes - photo, description, price and you're live."],
            ['02', 'Connect with buyers', 'Interested buyers reach out directly via secure in-app messaging.'],
            ['03', 'Get paid & hand over', 'Agree on payment, meet locally or ship - entirely your choice.'],
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
