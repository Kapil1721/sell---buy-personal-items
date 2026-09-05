import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { getBuyRoute } from '../config/appConfig';
import { CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Sparkles, ShoppingBag, Store } from 'lucide-react';

export default function Success() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const stateData = location.state || {};
  const planInfo = stateData.plan || {};
  const membershipInfo = stateData.membership || {};

  const buyAppLoginUrl = getBuyRoute('/login?tab=login');

  return (
    <div className="min-h-[85vh] bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Top Decorative Banner */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />

        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce-short">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Membership Active & Verified</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading mb-3">
          Congratulations!
        </h1>
        <p className="text-slate-600 text-base max-w-md mx-auto mb-8">
          Your account registration and membership purchase have been completed successfully.
        </p>

        {/* Membership Details Card */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-8 text-left space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-2 mb-3">
            Transaction Details
          </h3>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Account Name:</span>
            <span className="font-bold text-slate-900">{user?.name || user?.username || 'Verified Member'}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Account Email:</span>
            <span className="font-semibold text-slate-800">{user?.email || 'N/A'}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Subscription Plan:</span>
            <span className="font-bold text-blue-600">{planInfo.name || 'Seller Membership Plan'}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Payment Status:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Paid via PayPal</span>
            </span>
          </div>
        </div>

        {/* CRITICAL CALLOUT: MESSAGE TO LOGIN ON BUY APP */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl mb-8 text-left border border-blue-800/50 relative overflow-hidden">
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-300">
              <Store className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                <span>Continue Selling & Purchasing</span>
                <span className="bg-blue-500/30 text-blue-200 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border border-blue-400/30">Next Step</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Please log in on the <strong className="text-white font-bold">Buy App</strong> (`http://localhost:5174`) to access your seller profile, manage listed items, and process buyer transactions!
              </p>

              <a
                href={buyAppLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-500/30 cursor-pointer text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Log In on Buy App Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buyAppLoginUrl}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <span>Proceed to Buy App</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            to="/"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-xl transition flex items-center justify-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
