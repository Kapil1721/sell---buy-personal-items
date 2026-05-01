function WhyNow() {
  const stats = [
    { num: '60s', label: 'To list your first item' },
    { num: '$59', label: 'One-time membership fee' },
    { num: '∞', label: 'Items you can sell' },
  ]

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,179,0,0.03) 40px, rgba(255,179,0,0.03) 80px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-block bg-secondary text-white text-xs font-bold tracking-widest uppercase px-5 py-2 mb-6">
          ⚡ Why Now
        </div>

        {/* Headline */}
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug mb-8 max-w-3xl mx-auto">
          Times are hard.{' '}
          <span className="text-secondary">The Economy is not going well for many Americans.</span>
        </h2>

        {/* Body paragraphs */}
        <div className="text-left max-w-3xl mx-auto space-y-5">
          <p className="text-white/75 text-base lg:text-lg leading-relaxed">
            Many are taking inventory of personal items they no longer need or want anymore and selling them for quick cash.
            This could be the best time for you to sell some unwanted personal items for Cold Hard Cash!
          </p>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed">
            Looking at the current state of our economy — things are not looking well. All the layoffs and announcements of more
            future layoffs. Add to that the rise of inflation, causing prices for necessities like food, housing and utilities to
            go up. Not to mention car payments and insurance. Things are bad for individuals and for families alike.
          </p>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed">
            Americans are waking up and starting to realize what's more important in their life — it's not more stuff bought on
            credit while drowning in debt. They are now <strong className="text-white">"liquidating Big Time"</strong> &mdash; personal
            properties including furniture, clothing, appliances, electronics, sport equipment and bikes of all types.
          </p>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed">
            <strong className="text-secondary">SellPersonalItems.com</strong> is where you can go to convert your no longer
            wanted personal items into much-needed cash. We are looking for more members to help with the increase in the sale
            of personal items.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-secondary font-bold text-4xl lg:text-5xl" style={{ fontFamily: 'Lexend Deca, sans-serif' }}>
                {s.num}
              </div>
              <div className="text-white/55 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyNow
