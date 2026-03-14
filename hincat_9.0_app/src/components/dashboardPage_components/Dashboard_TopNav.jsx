import { Link } from 'react-router-dom';
import asmlBlueLogo from '../../assets/asml_blue_logo.png';

function Dashboard_TopNav() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm font-sans">
      <div className="flex items-center gap-4 min-w-0">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={asmlBlueLogo} alt="ASML" className="h-9 w-auto object-contain object-center" />
          <h1 className="text-xl font-bold tracking-tight text-deep-tech whitespace-nowrap">Kraken Cloak</h1>
        </Link>
        <div className="h-6 w-px bg-slate-200 shrink-0" aria-hidden />
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-3 w-3 shrink-0" aria-hidden>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600" />
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">System Online</span>
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <button type="button" className="p-2 rounded-md text-slate-400 hover:text-primary hover:bg-slate-50 transition-colors" aria-label="Help">
          <span className="material-symbols-outlined text-xl">help</span>
        </button>
        <button type="button" className="p-2 rounded-md text-slate-400 hover:text-primary hover:bg-slate-50 transition-colors" aria-label="Settings">
          <span className="material-symbols-outlined text-xl">settings</span>
        </button>
        <div className="h-6 w-px bg-slate-200" aria-hidden />
        <div className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-lg text-slate-600">person</span>
          </div>
          <span className="text-sm font-medium text-slate-700 truncate max-w-[140px]">Research_Lead_01</span>
        </div>
      </div>
    </header>
  );
}

export default Dashboard_TopNav;
