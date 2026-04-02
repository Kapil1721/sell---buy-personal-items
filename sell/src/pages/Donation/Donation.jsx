import donationImage from '../../assets/donate.jpg'
import { Outlet, useLocation } from 'react-router-dom'

function Donation() {
    const { pathname } = useLocation()
    const isMoneyPage = pathname.includes('/money')

    return (
        <div className="bg-[#F0F4FA]">
            <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 sm:py-16 lg:px-8">
                <div className="mx-auto lg:mt-16 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:max-w-none overflow-hidden">

                    {/* ── Hero header ── */}
                    <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
                        <div className="relative w-full">
                            <h3 className="text-4xl font-bold tracking-tight text-primary text-center lg:text-left">
                                Donate to Make The Difference
                            </h3>
                            <p className="mt-6 pr-10 text-base leading-7 text-light max-w-xl text-center lg:text-left">
                                {isMoneyPage
                                    ? 'Your monetary donation goes directly toward helping individuals and families in need. Every dollar makes a real difference in someone\'s life during difficult economic times.'
                                    : 'We accept non-cash donations of all sorts. Your gently used items go a very long way in helping those falling on hard times who are willing to put in the necessary work to improve their lives.'}
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="" src={donationImage} alt="Donate to make a difference" />
                        </div>
                    </div>

                    {/* ── Info banner (items page only) ── */}
                    {!isMoneyPage && (
                        <div className="mx-5 lg:mx-10 mb-8 rounded-xl overflow-hidden border border-secondary/30">
                            {/* Top accent bar */}
                            <div className="bg-secondary px-6 py-3 flex items-center gap-3">
                                <span className="text-white text-lg">🎁</span>
                                <span className="text-white font-bold text-sm tracking-wide uppercase">
                                    Donation Guidelines — Please Read
                                </span>
                            </div>

                            <div className="bg-amber-50 px-6 py-6 space-y-4">
                                {/* Point 1 */}
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                                    <p className="text-primary text-sm leading-relaxed">
                                        We do accept non-cash donations of all sorts. These small donated items go a very long way
                                        in helping those falling on hard times who are willing to put in the necessary work to
                                        improve their lives.
                                    </p>
                                </div>

                                {/* Point 2 */}
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                                    <p className="text-primary text-sm leading-relaxed">
                                        All your high-end, more expensive items — we are <strong>not</strong> asking for those.
                                        Those you should post and sell for your own benefit.
                                    </p>
                                </div>

                                {/* Point 3 */}
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                                    <p className="text-primary text-sm leading-relaxed">
                                        The amount would need to be limited for each donor. Just a few gently used items you
                                        would perhaps give away under similar circumstances.{' '}
                                        <strong>Upward of about 25 items at any one given time</strong> would be appreciated.
                                    </p>
                                </div>

                                {/* Point 4 */}
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                                    <p className="text-primary text-sm leading-relaxed">
                                        Mostly clothes and shoes for men, women, and children — items still with enough value
                                        to be priced low enough for those in need to afford. Unlike Goodwill and others who
                                        sell second-hand products they get for free as if they were new.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom limit badge */}
                            <div className="bg-primary px-6 py-3 flex items-center justify-between flex-wrap gap-2">
                                <span className="text-white/70 text-xs">Per-donor limit</span>
                                <span className="text-secondary font-bold text-sm">Max 25 items per donation</span>
                            </div>
                        </div>
                    )}

                    {/* ── Form (Outlet) ── */}
                    <div className="-mt-2 p-5 lg:p-10 lg:mt-0 lg:w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation