import { Link } from 'react-router-dom';

function CbblApply() {
    return (
        <div className="bg-[#F8FAFD] min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                {/* Hero Section */}
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-helper uppercase tracking-wider">Exclusive Member Benefit</h2>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                        Collateral Backed Bridge Loan <span className="text-secondary">(CBBL)</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-light">
                        Get a short-term loan while waiting for the sale of your personal items. 
                        Designed for high-value items to give you financial flexibility without rushing your sale.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Content Section */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-bdr">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">About the CBBL Program</h2>
                        <div className="space-y-6 text-light leading-relaxed">
                            <p>
                                We at <span className="font-semibold text-helper">SellPersonalItems.com</span> are proud to offer a new and exciting addition available to all members.
                            </p>
                            <p>
                                Depending on certain requirements you may be able to qualify for a short-term loan while waiting for the sale of your personal item(s) to be completed. The CBBLs were designed for sellers with item(s) whose values are high enough to justify a short-term loan for between 30, 60 or 90 days.
                            </p>
                            <p>
                                Because normally big-ticket items do take a little more time to sell, especially if you are trying to get your best price possible—and you should. During hard economic times and recessions, the cost for non-essential and some luxury items falls in price. If you are thinking about selling some items for whatever reason, now might be the best time.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-primary mb-4">Loan Durations</h3>
                            <div className="flex flex-wrap gap-4">
                                {['30 Days', '60 Days', '90 Days'].map((term) => (
                                    <div key={term} className="px-6 py-3 bg-helper/10 text-helper font-bold rounded-full border border-helper/20">
                                        {term}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Application Steps */}
                    <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
                        <h2 className="text-2xl font-bold text-secondary mb-6">How to Apply</h2>
                        <p className="mb-8 text-gray-300">Now that you are a registered member, follow these steps if you are interested in this membership loan offer:</p>
                        
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">1</div>
                                <div>
                                    <h4 className="font-bold text-lg">Gather Your Collateral</h4>
                                    <p className="text-gray-300">{`Identify one item or a group of items you'd like to use. Total value must be high enough to qualify.`}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">2</div>
                                <div>
                                    <h4 className="font-bold text-lg">Submit Documentation</h4>
                                    <p className="text-gray-300">Send us a copy of your estimate along with clear photos of the items.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">3</div>
                                <div>
                                    <h4 className="font-bold text-lg">Receive Your Offer</h4>
                                    <p className="text-gray-300">We will review your info to determine a CBBL Offer along with rates and the loan term.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
                            <p className="text-center italic font-medium">
                                "Meanwhile you should post all your items on our <span className="text-secondary">Buypersonalitems.com</span> platform as well as any other items you would like to sell."
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm mb-2">Send all correspondence to:</p>
                            <a href="mailto:info@sellpersonalitems.com" className="text-xl font-bold text-secondary hover:underline">
                                info@sellpersonalitems.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link to="/login-register?tab=login" className="inline-block bg-secondary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-secondary/90 transition-all transform hover:scale-105">
                        Log In to Your Member Portal
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CbblApply;
