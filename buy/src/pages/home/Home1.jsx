import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import heroImage from '../../assets/Banner-10.jpg'
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
import sellImage from '../../assets/If-You-Want-To-Sell-Your-Items-.png'

const categories = [
  {
    name: 'Electronics',
    count: '1.2k active finds',
    image: categoryElectronics,
    accent: 'from-[#1e62a4] to-[#3ebd8d]',
  },
  {
    name: 'Home & Garden',
    count: '940 ready to ship',
    image: categoryHome,
    accent: 'from-[#3ebd8d] to-[#d5e3f0]',
  },
  {
    name: 'Fashion',
    count: '2.1k trending picks',
    image: categoryFashion,
    accent: 'from-[#283948] to-[#1e62a4]',
  },
  {
    name: 'Kids',
    count: '680 family favorites',
    image: categoryKids,
    accent: 'from-[#3ebd8d] to-[#8fe0bf]',
  },
  {
    name: 'Sports',
    count: '430 outdoor deals',
    image: categorySports,
    accent: 'from-[#1e62a4] to-[#283948]',
  },
  {
    name: 'Collectibles',
    count: '320 rare pieces',
    image: categoryCollectibles,
    accent: 'from-[#556e82] to-[#d5e3f0]',
  },
]

const featuredListings = [
  {
    title: 'Crossbody Purse in Gold, Black & White',
    category: 'Accessories',
    location: 'Greenville',
    price: '$48',
    originalPrice: '$89',
    seller: 'Emily J.',
    image: featuredBag,
    badge: 'Featured',
    badgeClass: 'bg-[#1e62a4] text-white',
  },
  {
    title: 'Sterling Silver Chain With Minimal Finish',
    category: 'Jewelry',
    location: 'Spartanburg',
    price: '$32',
    originalPrice: '$60',
    seller: 'Clara L.',
    image: featuredChain,
    badge: 'Just In',
    badgeClass: 'bg-[#3ebd8d] text-[#283948]',
  },
  {
    title: 'Men\'s White Shoes, Barely Worn',
    category: 'Footwear',
    location: 'Anderson',
    price: '$55',
    originalPrice: '$110',
    seller: 'Brian H.',
    image: featuredShoes,
    badge: 'Hot Deal',
    badgeClass: 'bg-[#283948] text-white',
  },
  {
    title: '24-Piece Silverware Set for Dinner Hosting',
    category: 'Kitchen',
    location: 'Columbia',
    price: '$42',
    originalPrice: '$74',
    seller: 'Grace K.',
    image: featuredCutlery,
    badge: 'Best Value',
    badgeClass: 'bg-[#d5e3f0] text-[#283948]',
  },
]

const trustItems = [
  {
    title: 'Verified community',
    description: 'Profiles, messaging, and moderation help buyers and sellers connect with more confidence.',
    icon: '01',
  },
  {
    title: 'Quality-first listings',
    description: 'The homepage highlights cleaner, better-presented items so the experience feels curated.',
    icon: '02',
  },
  {
    title: 'Easy seller flow',
    description: 'From account creation to posting an item, every CTA points back to your existing workflow.',
    icon: '03',
  },
  {
    title: 'Built for repeat visits',
    description: 'Sections create momentum for browsing, subscribing, and coming back for the next great find.',
    icon: '04',
  },
]

function Home() {
  const { user } = useContext(AuthContext)

  const tickerItems = useMemo(
    () => [
      'Fresh markdowns on premium accessories',
      'Furniture picks sourced from trusted local sellers',
      'Electronics, decor, and fashion in one browse',
      'Sell faster with cleaner listings and stronger visuals',
      'Discover quality personal items with a lighter footprint',
    ],
    [],
  )

  return (
    <main className="bg-[#f8fafd] text-[#283948]">
      <section className="relative overflow-hidden bg-[#f8fafd]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(62,189,141,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(30,98,164,0.18),_transparent_42%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-[#d5e3f0] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#1e62a4] shadow-[0_10px_30px_rgba(40,57,72,0.06)]">
              Curated resale marketplace
            </span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-[#283948] md:text-6xl lg:text-[82px] lg:leading-[0.95]">
              A more curated way to buy and sell personal items.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#556e82] md:text-lg">
              We kept the spirit of your reference layout, but grounded it in your current brand system so the home page feels sharper, more premium, and clearly part of the existing site.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/qualified-items-list"
                className="inline-flex items-center rounded-md bg-[#3ebd8d] px-7 py-4 text-base font-semibold text-[#283948] shadow-[0_12px_30px_rgba(62,189,141,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#35aa7f]"
              >
                Explore Items
              </Link>
              <Link
                to={user ? '/panel/create' : '/login'}
                state={user ? { to: '/panel/create' } : { to: '/panel/create', for: 'sell' }}
                className="inline-flex items-center rounded-md border border-[#283948] px-7 py-4 text-base font-semibold text-[#283948] transition duration-300 hover:-translate-y-1 hover:bg-[#283948] hover:text-white"
              >
                List an Item
              </Link>
            </div>
            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ['12k+', 'monthly buyers'],
                ['4.8/5', 'seller satisfaction'],
                ['24h', 'average response'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-[0_12px_34px_rgba(40,57,72,0.06)] backdrop-blur-sm">
                  <div className="text-3xl font-extrabold tracking-[-0.05em] text-[#283948]">{value}</div>
                  <div className="mt-1 text-sm text-[#556e82]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[540px] items-center justify-center lg:min-h-full">
            <div className="absolute right-4 top-4 h-28 w-28 rounded-full bg-[#3ebd8d]/20 blur-2xl md:h-44 md:w-44" />
            <div className="absolute bottom-12 left-0 h-32 w-32 rounded-full bg-[#1e62a4]/20 blur-2xl md:h-52 md:w-52" />
            <div className="grid w-full max-w-2xl grid-cols-2 gap-4 md:gap-5">
              <div className="relative col-span-2 overflow-hidden rounded-[32px] bg-[#283948] p-3 shadow-[0_24px_60px_rgba(40,57,72,0.18)]">
                <img src={heroImage} alt="Featured personal items" className="h-[280px] w-full rounded-[24px] object-cover md:h-[360px]" />
                <div className="absolute inset-x-8 bottom-8 rounded-[24px] bg-white/92 p-5 shadow-lg backdrop-blur-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1e62a4]">Fresh arrivals</div>
                  <div className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#283948]">Thoughtful finds for everyday life</div>
                  <div className="mt-2 text-sm leading-6 text-[#556e82]">Clean presentation, clear pricing, and a browsing flow inspired by the layout you shared.</div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_20px_50px_rgba(40,57,72,0.12)]">
                <img src={heroAccentImage} alt="Seller spotlight" className="h-52 w-full rounded-[22px] object-cover" />
                <div className="absolute left-6 top-6 rounded-full bg-[#283948] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">Seller story</div>
              </div>
              <div className="rounded-[28px] bg-[#283948] p-6 text-white shadow-[0_20px_50px_rgba(40,57,72,0.14)]">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3ebd8d]">Why it works</div>
                <div className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em]">Browse faster, trust the listing, act with confidence.</div>
                <div className="mt-4 text-sm leading-7 text-[#d5e3f0]">This adapts the reference page�s editorial rhythm without dropping your current palette, typography, or conversion paths.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5e3f0] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 md:px-8 lg:flex-row lg:items-center lg:px-10">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e62a4]">Quick search</div>
          <div className="grid flex-1 gap-3 md:grid-cols-[1.3fr_0.8fr_auto]">
            <input
              type="text"
              placeholder="Search accessories, decor, electronics, and more"
              className="h-14 rounded-xl border border-[#d5e3f0] bg-[#f8fafd] px-5 text-[#283948] outline-none transition focus:border-[#1e62a4] focus:ring-2 focus:ring-[#1e62a4]/15"
            />
            <select className="h-14 rounded-xl border border-[#d5e3f0] bg-[#f8fafd] px-5 text-[#283948] outline-none transition focus:border-[#1e62a4] focus:ring-2 focus:ring-[#1e62a4]/15">
              <option>All categories</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
              <option>Electronics</option>
              <option>Collectibles</option>
            </select>
            <Link
              to="/qualified-items-list"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-[#1e62a4] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#184f84]"
            >
              Search now
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#283948] py-4 text-white">
        <div className="ticker-track flex min-w-max gap-10 whitespace-nowrap px-5 text-sm font-medium tracking-[0.14em] md:px-8 lg:px-10">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3 uppercase text-[#d5e3f0]">
              <span className="h-2 w-2 rounded-full bg-[#3ebd8d]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#1e62a4]">Browse by category</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#283948] md:text-5xl">Familiar structure, refreshed for your existing brand.</h2>
          </div>
          <Link to="/qualified-items-list" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3ebd8d]">
            View all items
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.name}
              className="group relative overflow-hidden rounded-[28px] border border-[#d5e3f0] bg-white p-5 shadow-[0_16px_45px_rgba(40,57,72,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(40,57,72,0.12)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accent}`} />
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[22px] bg-[#f8fafd] p-3 ring-1 ring-[#d5e3f0]">
                  <img src={category.image} alt={category.name} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#283948]">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#556e82]">{category.count}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#1e62a4]">Featured picks</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#283948] md:text-5xl">The same editorial energy, tuned to your marketplace theme.</h2>
            </div>
            <Link to="/qualified-items-list" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3ebd8d]">
              Browse catalog
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredListings.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-[#d5e3f0] bg-[#f8fafd] shadow-[0_16px_40px_rgba(40,57,72,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#1e62a4]/35 hover:shadow-[0_24px_55px_rgba(40,57,72,0.12)]"
              >
                <div className="relative overflow-hidden p-3">
                  <img src={item.image} alt={item.title} className="h-64 w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-105" />
                  <span className={`absolute left-7 top-7 rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="px-5 pb-6">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#556e82]">
                    <span>{item.category}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.03em] text-[#283948]">{item.title}</h3>
                  <div className="mt-5 flex items-end justify-between border-t border-[#d5e3f0] pt-5">
                    <div>
                      <span className="text-3xl font-extrabold tracking-[-0.04em] text-[#1e62a4]">{item.price}</span>
                      <span className="ml-2 text-sm text-[#556e82] line-through">{item.originalPrice}</span>
                    </div>
                    <div className="text-sm font-medium text-[#556e82]">{item.seller}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[36px] bg-[#283948] px-6 py-10 text-white shadow-[0_24px_60px_rgba(40,57,72,0.18)] md:px-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-14 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(62,189,141,0.25),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.04),_transparent)]" />
          <div className="relative">
            <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#3ebd8d]">Sell with confidence</div>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] md:text-5xl">Make your existing seller journey feel more premium from the very first scroll.</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#d5e3f0]">
              This section borrows the strong conversion feel of your reference while keeping your actual actions and pathways intact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={user ? '/panel/create' : '/login'}
                state={user ? { to: '/panel/create' } : { to: '/panel/create', for: 'sell' }}
                className="inline-flex items-center rounded-md bg-[#3ebd8d] px-7 py-4 text-base font-semibold text-[#283948] transition hover:-translate-y-1 hover:bg-[#35aa7f]"
              >
                Start selling
              </Link>
              {!user && (
                <Link to="/login" className="inline-flex items-center rounded-md border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                  Log in
                </Link>
              )}
            </div>
          </div>
          <div className="relative mt-10 grid gap-6 lg:mt-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <img src={sellImage} alt="Sell your products" className="h-72 w-full rounded-[22px] object-cover" />
            </div>
            <div className="space-y-5">
              {[
                ['01', 'Create a polished listing', 'Use clear imagery, better hierarchy, and stronger calls to action.'],
                ['02', 'Connect with intent', 'The page leads shoppers toward item discovery and seller trust.'],
                ['03', 'Keep users in your flow', 'Everything still points into your existing auth and posting routes.'],
              ].map(([step, title, body]) => (
                <div key={step} className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3ebd8d]">{step}</div>
                  <div className="mt-2 text-xl font-bold tracking-[-0.03em] text-white">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-[#d5e3f0]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5fb] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#1e62a4]">Trust signals</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#283948] md:text-5xl">A homepage that feels more considered without abandoning the current brand.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_14px_40px_rgba(40,57,72,0.06)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#283948] text-sm font-bold tracking-[0.14em] text-[#3ebd8d]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#283948]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#556e82]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ticker-track {
          animation: homepageTicker 28s linear infinite;
        }

        @keyframes homepageTicker {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  )
}

export default Home
