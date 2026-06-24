import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBuyRoute } from '../../config/appConfig';
import { AuthContext } from '../../auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import {
    GETPLANS,
    GETPAYPALMEMBERSHIPCONFIG,
    CREATEPAYPALMEMBERSHIPORDER,
    CAPTUREPAYPALMEMBERSHIPORDER
} from '../../services/operations/membershipApi';
import { toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';

function CbblApply() {
    const { user, setUser } = useContext(AuthContext);

    // Scroll to #become-a-member on mount if hash is present
    useEffect(() => {
        if (window.location.hash === '#become-a-member') {
            const element = document.getElementById('become-a-member');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                const timer = setTimeout(() => {
                    const el = document.getElementById('become-a-member');
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    // PayPal states
    const [isLoading, setIsLoading] = useState(false);
    const [paypalClientId, setPaypalClientId] = useState('');
    const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);
    const [isPayPalReady, setIsPayPalReady] = useState(false);
    const paypalButtonRef = useRef(null);
    const hasRenderedPayPalButtons = useRef(false);

    // Get the basic plan to subscribe to
    const { data: plansData } = useQuery({
        queryKey: ['getplans_cbbl'],
        queryFn: async () => await GETPLANS()
    });
    
    const plan = plansData?.plans?.[0];
    const planID = plan?.id || 1;
    const offerValue = plan?.offerValue || 59;

    // Load PayPal configuration
    useEffect(() => {
        let isMounted = true;
        const loadPayPalConfig = async () => {
            const res = await GETPAYPALMEMBERSHIPCONFIG();
            if (isMounted && res?.clientId) {
                setPaypalClientId(res.clientId);
            }
        };
        loadPayPalConfig();
        return () => {
            isMounted = false;
        };
    }, []);

    // Load PayPal SDK script
    useEffect(() => {
        if (user?.isSubscribed || !paypalClientId) return;

        const scriptId = 'paypal-membership-sdk-cbbl';
        const existingScript = document.getElementById(scriptId);

        if (window.paypal) {
            setPaypalScriptLoaded(true);
            return;
        }

        if (existingScript) {
            const handleLoad = () => setPaypalScriptLoaded(true);
            existingScript.addEventListener('load', handleLoad);
            return () => existingScript.removeEventListener('load', handleLoad);
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&intent=capture`;
        script.async = true;
        script.onload = () => setPaypalScriptLoaded(true);
        script.onerror = () => toast.error('Unable to load PayPal checkout.');
        document.body.appendChild(script);
    }, [paypalClientId, user?.isSubscribed]);

    // Render PayPal buttons inline
    useEffect(() => {
        if (user?.isSubscribed || !paypalScriptLoaded || !paypalButtonRef.current || hasRenderedPayPalButtons.current) {
            return;
        }

        if (!window.paypal?.Buttons) return;

        hasRenderedPayPalButtons.current = true;

        window.paypal.Buttons({
            style: {
                layout: 'vertical',
                shape: 'rect',
                label: 'paypal',
            },
            createOrder: async () => {
                setIsLoading(true);
                const res = await CREATEPAYPALMEMBERSHIPORDER({ planId: Number(planID) });
                if (!res?.status || !res?.orderId) {
                    setIsLoading(false);
                    throw new Error(res?.message || 'Unable to create PayPal order.');
                }
                return res.orderId;
            },
            onApprove: async (paypalData) => {
                const res = await CAPTUREPAYPALMEMBERSHIPORDER({
                    orderId: paypalData.orderID,
                    planId: Number(planID),
                });

                setIsLoading(false);

                if (res?.status) {
                    toast.success(res.message);
                    if (res.token) {
                        localStorage.setItem('_sell_Token', res.token);
                        const decoded = jwtDecode(res.token);
                        setUser({ ...decoded, ...res.data });
                    } else {
                        setUser((prev) => ({ ...prev, isSubscribed: true }));
                    }
                    return;
                }

                throw new Error(res?.message || 'Unable to confirm PayPal payment.');
            },
            onCancel: () => {
                setIsLoading(false);
                toast.error('PayPal payment was cancelled.');
            },
            onError: (error) => {
                console.error(error);
                setIsLoading(false);
                toast.error('PayPal checkout failed. Please try again.');
            },
        }).render(paypalButtonRef.current).then(() => {
            setIsPayPalReady(true);
        }).catch((error) => {
            console.error(error);
            setIsLoading(false);
            toast.error('Unable to render PayPal checkout.');
        });
    }, [paypalScriptLoaded, planID, setUser, user?.isSubscribed]);

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
                        <p className="mb-8 text-gray-300">Follow these simple steps if you are interested in applying for a membership loan offer:</p>
                        
                        <ul className="space-y-6 text-left">
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">1</div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Gather Your Collateral</h4>
                                    <p className="text-gray-300">{`Identify one item or a group of items you'd like to use. Total value must be high enough to qualify.`}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">2</div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Submit Documentation</h4>
                                    <p className="text-gray-300">Send us a copy of your estimate along with clear photos of the items.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">3</div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Receive Your Offer</h4>
                                    <p className="text-gray-300">We will review your info to determine a CBBL Offer along with rates and the loan term.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
                            <p className="text-center italic font-medium text-white">
                                "Meanwhile you should post all your items on our <span className="text-secondary font-bold">Buypersonalitems.com</span> platform as well as any other items you would like to sell."
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

                {/* Gateway Integration Card / Subscribed State */}
                <div id="become-a-member">
                    {user?.isSubscribed ? (
                        <div className="mt-16 bg-emerald-50 border border-emerald-200 rounded-3xl p-8 max-w-2xl mx-auto text-center shadow-md">
                            <span className="text-4xl">🎉</span>
                            <h3 className="text-2xl font-bold text-primary mt-4 mb-2">You are a Registered Member!</h3>
                            <p className="text-[#556E82] text-sm leading-relaxed mb-6">
                                Thank you for being a member of our community. You are fully eligible to apply for the Collateral Backed Bridge Loan (CBBL) program.
                            </p>
                            <a href="mailto:info@sellpersonalitems.com" className="inline-block bg-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-indigo-700 transition-all text-center">
                                Email Application Documents
                            </a>
                        </div>
                    ) : (
                        <div className="mt-16 bg-white border border-[#D5E3EE] rounded-3xl p-8 max-w-3xl mx-auto shadow-lg text-left">
                            <h3 className="text-2xl font-bold text-primary text-center mb-2">Become a Member to Apply for CBBL</h3>
                            <p className="text-sm text-[#556E82] text-center mb-6 max-w-lg mx-auto">
                                You must be an active registered member to apply for the loan. Purchase your membership today for a one-time fee of only <span className="font-bold text-indigo-600">${offerValue}</span>.
                            </p>

                            <div className="max-w-md mx-auto space-y-6 mt-8">
                                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                                    <h5 className="font-bold text-primary text-sm mb-1">Order Summary:</h5>
                                    <p className="text-xs text-[#556E82] mb-1">Plan: Basic Lifetime Member</p>
                                    <p className="text-xs text-[#556E82]">Price: ${offerValue}</p>
                                </div>

                                <div className="space-y-4">
                                    {!paypalClientId && <p className="text-sm text-danger text-center">PayPal is not configured yet on the server.</p>}
                                    {paypalClientId && !isPayPalReady && <p className="text-sm text-primary text-center">Loading PayPal checkout...</p>}
                                    <div ref={paypalButtonRef} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CbblApply;
