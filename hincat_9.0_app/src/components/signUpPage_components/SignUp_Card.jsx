import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function SignUp_Card() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const name = (form.elements.name?.value ?? '').trim();
    const email = (form.elements.email?.value ?? '').trim();
    const password = form.elements.password?.value ?? '';
    const confirmPassword = form.elements.confirmPassword?.value ?? '';

    if (!name) {
      setError('Please enter your full name.');
      return;
    }
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Please enter a password.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.elements.terms?.checked) {
      setError('Please accept the terms and conditions.');
      return;
    }

    login(email);
    navigate('/');
  }

  return (
    <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 shadow-xl rounded-lg border border-neutral-gray dark:border-slate-800 overflow-hidden">
      <div className="p-8 pb-4 text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 bg-primary/5 rounded-full">
          <span className="material-symbols-outlined text-primary text-4xl">person_add</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Create account</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Join the AI Vision Platform</p>
      </div>
      <div className="px-8 py-6">
        <form action="#" className="space-y-5" method="POST" onSubmit={handleSubmit} noValidate>
          {error && (
            <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded border border-red-200 dark:border-red-800" role="alert">
              {error}
            </div>
          )}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full h-11 px-4 rounded border border-neutral-gray dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
              id="name"
              name="name"
              placeholder="Jane Smith"
              type="text"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2" htmlFor="email">
              Enterprise Email
            </label>
            <input
              className="w-full h-11 px-4 rounded border border-neutral-gray dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full h-11 px-4 pr-10 rounded border border-neutral-gray dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
                id="password"
                name="password"
                placeholder="At least 8 characters"
                type={passwordVisible ? 'text' : 'password'}
                autoComplete="new-password"
                minLength={8}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                onClick={() => setPasswordVisible((v) => !v)}
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              >
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="w-full h-11 px-4 pr-10 rounded border border-neutral-gray dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                type={confirmVisible ? 'text' : 'password'}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                onClick={() => setConfirmVisible((v) => !v)}
                aria-label={confirmVisible ? 'Hide password' : 'Show password'}
              >
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input
              className="w-4 h-4 mt-0.5 rounded border border-neutral-gray text-primary focus:ring-primary shrink-0"
              id="terms"
              name="terms"
              type="checkbox"
              required
            />
            <label className="text-sm text-slate-600 dark:text-slate-300" htmlFor="terms">
              I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
            </label>
          </div>
          <button
            className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded transition-colors shadow-sm flex items-center justify-center gap-2"
            type="submit"
          >
            <span>Create account</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <div className="bg-slate-50 dark:bg-slate-950/50 p-4 border-t border-neutral-gray dark:border-slate-800 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Enterprise Encrypted Protocol v4.2</p>
      </div>
    </div>
  );
}

export default SignUp_Card;
