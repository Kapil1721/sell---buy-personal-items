import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    usernameoremail: '',
    password: '',
    accountType: 'SELLER',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await login({
        usernameoremail: formData.usernameoremail,
        password: formData.password,
        accountType: formData.accountType,
      });

      if (res) {
        setSuccess('Login successful! Redirecting to membership...');
        setTimeout(() => {
          navigate('/membership');
        }, 1000);
      }
    } catch (err) {
      setError(err.message || 'Invalid username/email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Member Authentication</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight font-heading">
          Log in to your account
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Access your member dashboard, active listings, and membership options.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 rounded-3xl border border-slate-100 sm:px-10">
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-800 text-sm">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-emerald-800 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>{success}</div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Username or Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  name="usernameoremail"
                  required
                  value={formData.usernameoremail}
                  onChange={handleChange}
                  placeholder="alex@example.com or alex_morgan"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Account Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, accountType: 'SELLER' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                    formData.accountType === 'SELLER'
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Seller
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, accountType: 'BUYER' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                    formData.accountType === 'BUYER'
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Buyer
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
            >
              <span>{loading ? 'Logging In...' : 'Log In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-bold text-blue-600 hover:underline">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
