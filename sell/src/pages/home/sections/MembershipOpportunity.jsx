import { Link } from 'react-router-dom'

const benefits = [
  'Post personal items to sell for yourself',
  'Sell for families and friends',
  'Access to CBBL loan program',
  'One time membership fee of $59',
  'Early member pricing locked in',
]

function MembershipOpportunity() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

        {/* ── Left: text ── */}
        <div className="flex-1">
          {/* Label */}
          <p className="text-secondary text-xs font-bold tracking-[3px] uppercase mb-3">
            Membership Opportunity
          </p>

          <h2 className="text-primary text-3xl lg:text-4xl font-bold leading-snug mb-6">
            One of the Best Opportunities for Everyday Individuals to Earn Money
          </h2>

          <p className="text-light text-base leading-relaxed mb-4">
            You pay a one-time membership fee of just <strong className="text-primary">$59</strong> to become one of our
            affiliates. Our program is designed for everyone &mdash; whether you want to post personal items to sell for yourself
            or use it to sell for families and friends to generate a good income, which is most needed in these challenging
            economic times.
          </p>

          <p className="text-light text-base leading-relaxed mb-6">
            We at SellPersonalItems.com believe we have hands-down one of the best opportunities for everyday individuals
            to earn money while helping others &mdash; all in a very long time. A down economy doesn&apos;t have to be down for you.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-secondary bg-amber-50 px-5 py-4 my-6 text-primary text-base lg:text-lg font-semibold italic leading-relaxed">
            &ldquo;Sell what you want today! Sell what you can tomorrow!&rdquo;
          </blockquote>
        </div>

        {/* ── Right: price card ── */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <div className="bg-primary text-white p-9 rounded-sm shadow-lg">
            <p className="text-xs tracking-[2px] uppercase text-white/50 mb-2">One-Time Membership Fee</p>
            <div className="text-secondary font-bold leading-none mb-1" style={{ fontSize: '72px' }}>
              $59
            </div>

            <ul className="border-t border-white/10 divide-y divide-white/[0.07]">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 py-3 text-sm text-white/80">
                  <span className="text-secondary font-bold flex-shrink-0 mt-[1px]">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <Link
              to="/memberships"
              className="block w-full text-center bg-secondary hover:bg-amber-500 transition-colors text-white font-bold py-4 mt-6 rounded-sm text-sm tracking-wide"
            >
              Become a Member Now →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MembershipOpportunity
