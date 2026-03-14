import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login_Card() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email?.value ?? '';
    login(email);
    navigate('/');
  }

  return (
    <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 shadow-xl rounded-lg border border-neutral-gray dark:border-slate-800 overflow-hidden">
      {/* Header Section */}
      <div className="p-8 pb-4 text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 bg-primary/5 rounded-full">
          <span className="material-symbols-outlined text-primary text-4xl">visibility</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Kraken Cloak</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Secure access to the AI Vision Platform</p>
      </div>
      <div className="px-8 py-6">
        <form action="#" className="space-y-5" method="POST" onSubmit={handleSubmit}>
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
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" htmlFor="password">
                Password
              </label>
              <a className="text-xs font-medium text-primary hover:underline" href="#">Forgot password?</a>
            </div>
            <div className="relative">
              <input
                className="w-full h-11 px-4 pr-10 rounded border border-neutral-gray dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
                id="password"
                name="password"
                placeholder="••••••••"
                type={passwordVisible ? 'text' : 'password'}
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
          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4 rounded border border-neutral-gray text-primary focus:ring-primary"
              id="remember"
              type="checkbox"
            />
            <label className="text-sm text-slate-600 dark:text-slate-300" htmlFor="remember">
              Remember this device
            </label>
          </div>
          <button
            className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded transition-colors shadow-sm flex items-center justify-center gap-2"
            type="submit"
          >
            <span>Sign In</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-gray dark:border-slate-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-900 px-3 text-slate-500">Or continue with</span>
          </div>
        </div>
        <button
          type="button"
          className="w-full h-11 border border-neutral-gray dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium rounded transition-all flex items-center justify-center gap-3 shadow-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>Sign in with GitHub</span>
        </button>
      </div>
      {/* Footer Note */}
      <div className="bg-slate-50 dark:bg-slate-950/50 p-4 border-t border-neutral-gray dark:border-slate-800 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Enterprise Encrypted Protocol v4.2</p>
      </div>
    </div>
  );
}

export default Login_Card;
