import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { getBuyRoute } from '../config/appConfig';
import {
  getPlans,
  getUserMembership,
  getPayPalMembershipConfig,
  createPayPalMembershipOrder,
  capturePayPalMembershipOrder,
} from '../services/membershipApi';
import { Check, ShieldCheck, Zap, Sparkles, X, AlertCircle, CreditCard, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Membership() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, setTokenAndUser } = useContext(AuthContext);

  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeMembership, setActiveMembership] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal & PayPal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paypalClientId, setPaypalClientId] = useState('');
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const [paypalError, setPaypalError] = useState('');
  const [processingPayment, setProcessingPayment] = useState(false);

  const paypalButtonRef = useRef(null);
  const hasRenderedButtons = useRef(false);

  const buyAppUrl = getBuyRoute('/login?tab=login');

  // Check if user already has active membership
  useEffect(() => {
    const checkActiveMembership = async () => {
      if (user) {
        try {
          const res = await getUserMembership();
          if (res && res.isSubscribed && res.membership && res.membership.status === 'ACTIVE') {
            setActiveMembership(res.membership);
          } else {
            setActiveMembership(null);
          }
        } catch (err) {
          console.error("Error checking existing membership:", err);
          setActiveMembership(null);
        }
      } else {
        setActiveMembership(null);
      }
    };
    checkActiveMembership();
  }, [user]);

  // Load Membership Plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const res = await getPlans();
        if (res && res.plans && res.plans.length > 0) {
          setPlans(res.plans);
          const initialId = searchParams.get('planId');
          const matched = res.plans.find((p) => p.id === Number(initialId)) || res.plans[0];
          setSelectedPlan(matched);
        } else {
          // Fallback plan if backend returns empty list
          const defaultPlan = {
            id: 1,
            name: 'Seller Pro Lifetime Membership',
            price: 59,
            offerValue: 59,
            duration: 1,
            durationType: 'LIFETIME',
            description: 'Full seller access, unlimited item posts, CBBL bridge loans qualification, and verified buyer matching.',
            features: [
              { feature: { name: 'Unlimited Qualified Item Listings' } },
              { feature: { name: 'Collateral Back Bridge Loans (CBBL) Qualification' } },
              { feature: { name: 'Verified Seller Badge' } },
              { feature: { name: 'Direct Buyer Inquiries & Messaging' } },
              { feature: { name: 'Priority Search Placement' } },
            ],
          };
          setPlans([defaultPlan]);
          setSelectedPlan(defaultPlan);
        }
      } catch (err) {
        console.error('Failed to load plans:', err);
        setError('Unable to load membership plans right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [searchParams]);

  // Load PayPal Client Config
  useEffect(() => {
    const loadPayPalConfig = async () => {
      const res = await getPayPalMembershipConfig();
      if (res && res.clientId) {
        setPaypalClientId(res.clientId);
      }
    };
    loadPayPalConfig();
  }, []);

  // Dynamically load PayPal Script when modal opens
  useEffect(() => {
    if (!isModalOpen) {
      hasRenderedButtons.current = false;
      setIsPayPalReady(false);
      if (paypalButtonRef.current) {
        paypalButtonRef.current.innerHTML = '';
      }
      return;
    }

    if (!paypalClientId) return;

    const scriptId = 'paypal-membership-sdk-sellit';
    if (window.paypal) {
      setPaypalScriptLoaded(true);
      return;
    }

    const existingScript = document.getElementById(scriptId);
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
    script.onerror = () => setPaypalError('Unable to load PayPal checkout script.');
    document.body.appendChild(script);
  }, [isModalOpen, paypalClientId]);

  // Render PayPal Buttons inside modal
  useEffect(() => {
    if (!isModalOpen || !paypalScriptLoaded || !paypalButtonRef.current || hasRenderedButtons.current) {
      return;
    }

    if (!window.paypal?.Buttons) return;

    hasRenderedButtons.current = true;
    paypalButtonRef.current.innerHTML = '';

    window.paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: async () => {
          setProcessingPayment(true);
          setPaypalError('');
          try {
            const res = await createPayPalMembershipOrder({
              planId: Number(selectedPlan?.id || 1),
            });
            if (!res?.status || !res?.orderId) {
              throw new Error(res?.message || 'Unable to create PayPal order.');
            }
            return res.orderId;
          } catch (err) {
            setProcessingPayment(false);
            const msg = err.message || 'Order creation failed.';
            setPaypalError(msg);
            if (msg.toLowerCase().includes('already exists') || msg.toLowerCase().includes('active membership')) {
              setTimeout(() => {
                setIsModalOpen(false);
                navigate('/success');
              }, 2000);
            }
            throw err;
          }
        },
        onApprove: async (paypalData) => {
          try {
            const res = await capturePayPalMembershipOrder({
              orderId: paypalData.orderID,
              planId: Number(selectedPlan?.id || 1),
            });

            setProcessingPayment(false);
            if (res?.status) {
              if (res.token) {
                setTokenAndUser(res.token, res.data);
              }
              setIsModalOpen(false);
              navigate('/success', {
                state: {
                  membership: res,
                  plan: selectedPlan,
                },
              });
            } else {
              setPaypalError(res?.message || 'Payment verification failed.');
            }
          } catch (err) {
            setProcessingPayment(false);
            setPaypalError(err.message || 'Payment capture failed.');
          }
        },
        onCancel: () => {
          setProcessingPayment(false);
          setPaypalError('PayPal payment was cancelled.');
        },
        onError: (err) => {
          console.error(err);
          setProcessingPayment(false);
          setPaypalError('PayPal checkout encountered an error. Please try again.');
        },
      })
      .render(paypalButtonRef.current)
      .then(() => setIsPayPalReady(true))
      .catch((err) => {
        console.error(err);
        setProcessingPayment(false);
        setPaypalError('Unable to render PayPal buttons.');
      });
  }, [isModalOpen, paypalScriptLoaded, selectedPlan, navigate, setTokenAndUser]);

  const handleCheckoutClick = (plan) => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (activeMembership && activeMembership.status === 'ACTIVE') {
      navigate('/success');
      return;
    }
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const isAlreadyPurchased = Boolean(activeMembership && activeMembership.status === 'ACTIVE');
  const payableAmount = selectedPlan?.offerValue ?? selectedPlan?.price ?? 39;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Lifetime Membership Access</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
          Unlock Full Selling, Buying &amp; CBBL Access
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Activate your membership with a simple one-time payment. Once activated, log in on the <strong className="text-slate-900">Buy App</strong> to manage your listings, pass on items, and qualify for bridge loans!
        </p>
      </div>

      {/* Already Purchased Membership Banner */}
      {isAlreadyPurchased && (
        <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-500/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>Active Membership Already Purchased</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase">Active</span>
              </h3>
              <p className="text-emerald-100 text-sm mt-1">
                Your account has an active membership. You can already access all seller features and list items!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/success"
              className="w-full sm:w-auto bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl transition text-sm text-center shadow-sm"
            >
              View Membership
            </Link>
            <a
              href={buyAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition text-sm text-center flex items-center justify-center gap-1.5"
            >
              <span>Go to Buy App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {error && (
        <div className="max-w-md mx-auto mb-8 p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-800 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {plans.map((plan) => {
            const isCurrentSelected = selectedPlan?.id === plan.id;
            const features = plan.features?.map((f) => f.feature?.name || f.name || f) || [];
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-8 border-2 transition shadow-xl flex flex-col justify-between ${
                  isCurrentSelected ? 'border-blue-600 ring-4 ring-blue-500/10' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {plan.offerValue && (
                  <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    Special Offer
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-6">{plan.description || 'Full membership benefits across all personal item services.'}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-slate-900">${plan.offerValue || plan.price}</span>
                    <span className="text-sm font-semibold text-slate-500">
                      {plan.durationType?.toUpperCase() === 'LIFETIME'
                        ? 'one-time fee'
                        : `/ ${plan.duration} ${plan.durationType?.toLowerCase() || 'month'}`}
                    </span>
                    {plan.offerValue && plan.price > plan.offerValue && (
                      <span className="text-sm text-slate-400 line-through ml-2">${plan.price}</span>
                    )}
                  </div>

                  <div className="border-t border-slate-100 pt-6 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Included Features</p>
                    <ul className="space-y-3 text-sm text-slate-700">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => handleCheckoutClick(plan)}
                  className={`w-full font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer text-base ${
                    isAlreadyPurchased
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                  }`}
                >
                  <Zap className="w-5 h-5" />
                  <span>
                    {!user
                      ? 'Log In to Join'
                      : isAlreadyPurchased
                      ? 'Membership Already Active'
                      : 'Proceed to Checkout'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* PayPal Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-1">
                <CreditCard className="w-4 h-4" />
                <span>PayPal Secure Gateway</span>
              </div>
              <h3 className="text-xl font-bold">Complete Membership Order</h3>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {paypalError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                  <span>{paypalError}</span>
                </div>
              )}

              <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Plan Name:</span>
                  <span className="font-bold text-slate-900">{selectedPlan?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment Gateway:</span>
                  <span className="font-bold text-blue-600">PayPal Express</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 text-base">
                  <span className="font-bold text-slate-900">Total Amount:</span>
                  <span className="font-black text-slate-900">${Number(payableAmount).toFixed(2)} USD</span>
                </div>
              </div>

              {!paypalClientId && (
                <div className="text-center py-4 text-xs text-slate-500">
                  Loading PayPal Client Configuration...
                </div>
              )}

              {paypalClientId && !isPayPalReady && !paypalError && (
                <div className="text-center py-6">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent mx-auto mb-2"></div>
                  <p className="text-xs text-slate-500">Initializing PayPal Checkout...</p>
                </div>
              )}

              {processingPayment && (
                <div className="text-center py-4 text-xs font-semibold text-blue-600">
                  Processing your transaction securely...
                </div>
              )}

              <div ref={paypalButtonRef} className="mt-2 min-h-[150px]" />

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>256-bit Encrypted SSL Payment</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
