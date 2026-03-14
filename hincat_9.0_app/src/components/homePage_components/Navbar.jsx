import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useNavigation } from '../../context/NavigationContext';
import { useAuth } from '../../context/AuthContext';
import asmlLogo from '../../assets/asml_logo.png';

const LOADER_DURATION_MS = 700;
const LOADER_HIDE_AFTER_NAV_MS = 400;
const SCROLL_THRESHOLD_PX = 24;

function Navbar() {
  const navigate = useNavigate();
  const { setShowLoader } = useNavigation();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleTransitionTo(to) {
    return (e) => {
      e.preventDefault();
      setShowLoader(true);
      setTimeout(() => {
        navigate(to);
        setTimeout(() => setShowLoader(false), LOADER_HIDE_AFTER_NAV_MS);
      }, LOADER_DURATION_MS);
    };
  }

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isScrolled
          ? 'bg-background-light/30 dark:bg-background-dark/30 backdrop-blur-sm border-b-0 border-transparent'
          : 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={asmlLogo} alt="ASML" className="h-8 w-auto object-contain" />
          <span className="text-xl font-black tracking-tighter uppercase text-deep-tech dark:text-white">Kraken Cloak</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/">Home</Link>
          <button
            type="button"
            onClick={handleTransitionTo('/dashboard')}
            className="text-sm font-semibold hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 font-inherit"
          >
            Vision Dashboard
          </button>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="https://www.asml.com/en/technology" target="_blank" rel="noopener noreferrer">Technology</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="https://www.asml.com/en/investors" target="_blank" rel="noopener noreferrer">Documentation</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="https://www.asml.com/en/company" target="_blank" rel="noopener noreferrer">About</a>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded"
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleTransitionTo('/login')}
                className="px-4 py-2 text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleTransitionTo('/signup')}
                className="px-4 py-2 text-sm font-bold bg-primary text-white hover:bg-deep-tech transition-colors rounded"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
