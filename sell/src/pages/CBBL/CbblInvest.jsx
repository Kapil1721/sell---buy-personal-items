import { Link } from 'react-router-dom';

function CbblInvest() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32 mb-16">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Put Your Money to Work with <span className="text-secondary">CBBL Investments</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Take advantage of our Collateral Backed Bridge Loans (CBBL) investment opportunity. 
                        Your principal is always protected by high-end physical assets.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/memberships"
                            className="rounded-md bg-secondary px-6 py-3 text-lg font-bold text-white shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all"
                        >
                            Become a Member to Invest
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                            Secure, Asset-Backed Opportunities
                        </h2>
                        <div className="space-y-6 text-light text-lg">
                            <p>
                                Often we encounter sellers of large assets that take more time to sell. In these cases, we offer sellers temporary <span className="font-semibold text-helper">Collateral Backed Bridge Loans (CBBL)</span>.
                            </p>
                            <p>
                                For a short time, we are accepting a few investors for these short-term loans. This is an exclusive opportunity where your principal is always protected by the value of the collateral.
                            </p>
                            <p>
                                All merchandise is evaluated for its current market value by our experts. When a loan is approved, the property is secured. When the property is sold, the principal is returned along with any interest prorated to our investors.
                            </p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-[#F8FAFD] p-8 rounded-2xl border border-bdr shadow-sm">
                            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                <span className="text-secondary text-2xl">💰</span> Investment Terms
                            </h3>
                            <ul className="space-y-4 text-light">
                                <li className="flex items-start gap-3">
                                    <span className="text-helper font-bold">•</span>
                                    <span>Durations of 30, 60, and 90 days.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-helper font-bold">•</span>
                                    <span>Extension options for 30 additional days with interest.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-helper font-bold">•</span>
                                    <span>Interest rates depend on loan amount and duration.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-helper font-bold">•</span>
                                    <span>Principal is returned immediately upon sale of asset.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Membership Call to Action */}
                <div className="bg-[#FFF8EC] border-2 border-secondary/30 p-10 rounded-3xl text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start?</h3>
                    <p className="text-light text-lg mb-8">
                        This is another exclusive offer for all members. Membership is a one-time fee of only <span className="text-2xl font-extrabold text-primary">$59</span> for a limited time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/memberships" className="bg-secondary text-white font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all text-xl">
                            Join Now!
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-gray-500 italic">
                        After confirming your membership, we will provide all the details on this popular money-making opportunity.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CbblInvest;
