import React, { useState } from 'react';

// You can change this to the real postal address whenever needed
const DONATION_ADDRESS = `Sell Personal Items LLC
3210 N. Pleasantburg #1006
Greenville, SC 29609`;

function DonationForm() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(DONATION_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col space-y-8 w-full max-w-3xl mx-auto py-4">
            {/* Step-by-Step Mailing Guide */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6">
                <h4 className="text-2xl font-bold text-primary tracking-tight">
                    How it works
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Step 1 */}
                    <div className="flex flex-col space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-md">
                        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                            Step 1
                        </span>
                        <h5 className="font-bold text-primary text-base">
                            Prepare Your Articles
                        </h5>
                        <p className="text-[#556E82] text-sm leading-relaxed">
                            Gather up to 25 gently used items like clothes, shoes, and daily articles.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-md">
                        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                            Step 2
                        </span>
                        <h5 className="font-bold text-primary text-base">
                            Package Securely
                        </h5>
                        <p className="text-[#556E82] text-sm leading-relaxed">
                            Box or wrap your articles securely. No registration or online form submission is required.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-md">
                        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                            Step 3
                        </span>
                        <h5 className="font-bold text-primary text-base">
                            Ship & Mail
                        </h5>
                        <p className="text-[#556E82] text-sm leading-relaxed">
                            Drop off your package at any courier or mail provider of your choice.
                        </p>
                    </div>
                </div>
            </div>

            {/* Donation Shipping Address Box */}
            <div className="bg-gradient-to-br from-[#E6F0FA] to-[#F8FAFD] rounded-2xl border border-indigo-100/60 p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
                <div className="space-y-4 text-center md:text-left w-full md:w-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                        Official Donation Address
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs text-indigo-600 font-semibold tracking-widest uppercase">
                            Mail / Ship To:
                        </p>
                        <div className="bg-white/95 backdrop-blur-sm border border-indigo-200/50 rounded-xl p-5 shadow-inner">
                            <pre className="font-mono text-sm md:text-base leading-relaxed text-slate-800 font-bold whitespace-pre-wrap select-all">
                                {DONATION_ADDRESS}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-auto gap-3 shrink-0">
                    <button
                        type="button"
                        onClick={handleCopy}
                        style={{ height: '56px' }}
                        className={`flex items-center justify-center gap-2 w-full md:w-48 px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-md text-white ${
                            copied 
                                ? 'bg-emerald-600 hover:bg-emerald-700 border-none' 
                                : 'bg-indigo-600 hover:bg-indigo-700 border-none'
                        }`}
                    >
                        {copied ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                </svg>
                                Copy Address
                            </>
                        )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-500 font-medium">
                        Click to copy the address
                    </p>
                </div>
            </div>

            {/* Note on Authentications & Guidelines */}
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                <span className="text-2xl mt-0.5">ℹ️</span>
                <div className="space-y-1">
                    <h5 className="font-bold text-primary text-sm">
                        No Account Required
                    </h5>
                    <p className="text-[#556E82] text-xs leading-relaxed">
                        To simplify donations, you do not need to sign up, log in, or register. Anyone can send donation items directly to our processing center. Your kindness is greatly appreciated!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DonationForm;