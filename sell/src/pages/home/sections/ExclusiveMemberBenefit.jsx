import { Link } from 'react-router-dom'

const loanTerms = ['30 Days', '60 Days', '90 Days', 'Extended (Interest Only)']

function ExclusiveMemberBenefit() {
  return (
    <section className="bg-[#F8FAFD] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary text-secondary text-xs font-bold tracking-[2px] uppercase px-5 py-2 mb-5">
            Exclusive Member Benefit
          </span>
          <h2 className="text-primary text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Collateral Back Bridge Loan <span className="text-secondary">(CBBL)</span>
          </h2>
          <p className="text-light text-base max-w-2xl mx-auto leading-relaxed">
            We at SellPersonalItems.com are proud to offer a new and exciting addition available to all members at no cost.
          </p>
        </div>

        {/* ── Body paragraphs ── */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-light text-base leading-relaxed">
            Depending on certain requirements you may be able to qualify for a short-term loan while waiting for the sale of
            your personal item(s) to be completed. These CBBLs will be designed for sellers with item(s) whose values are
            high enough to justify a short-term loan for between 30 or 90 days.
          </p>
          <p className="text-light text-base leading-relaxed">
            Because normally big-ticket items do take a little more time to sell, especially if you are trying to get your
            best price possible — and you should. During hard economic times and recessions, the cost for non-essential and
            some luxury items falls in price. If you are thinking about selling some items for whatever reason, now might be
            the best time.
          </p>
        </div>

        {/* ── Pull quote ── */}
        <div className="my-10 bg-primary text-white rounded-sm flex gap-6 p-8 lg:p-12 items-start">
          <span
            className="text-secondary flex-shrink-0 leading-none"
            style={{ fontFamily: 'Georgia, serif', fontSize: '72px', lineHeight: '0.75' }}
          >
          &ldquo;
          </span>
          <blockquote className="text-white text-lg lg:text-xl italic leading-relaxed">
            Imagine having access to capital to address some needed emergencies and not feeling rushed into accepting far
            less than your item(s) are actually worth. Get thousands in your CBBL to hold you over while your high-end
            item(s) are being viewed and you get your price.
          </blockquote>
        </div>

        {/* ── More body ── */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-light text-base leading-relaxed">
            A CBBL can be for as little as 30 days, 60, 90 days or more with no early payoff penalties. Just pay interest
            and extend if necessary.
          </p>
          <p className="text-light text-base leading-relaxed">
            All the details will be made available upon membership. Become a member now and let&apos;s get things moving.
          </p>
        </div>

        {/* ── Loan term pills ── */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {loanTerms.map((term, i) => (
            <span
              key={term}
              className={`px-6 py-2.5 text-sm font-bold border-2 rounded-sm transition-colors ${
                i === 0
                  ? 'border-secondary bg-amber-50 text-amber-700'
                  : 'border-bdr bg-white text-primary hover:border-secondary'
              }`}
            >
              {term}
            </span>
          ))}
        </div>

        {/* ── CTA link ── */}
        <div className="text-center mt-6">
          <Link to="/memberships" className="text-secondary font-semibold text-sm hover:underline">
            Become a member to learn more →
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ExclusiveMemberBenefit
