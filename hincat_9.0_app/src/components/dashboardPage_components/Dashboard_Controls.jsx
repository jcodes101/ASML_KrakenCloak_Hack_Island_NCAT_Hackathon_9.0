import { useState } from 'react';

function Dashboard_Controls() {
  const [krakenCloak, setKrakenCloak] = useState(true);
  const [eyeTracking, setEyeTracking] = useState(true);
  const [bgSubstitution, setBgSubstitution] = useState(false);

  const handleCalibrate = async () => {
    await fetch('http://127.0.0.1:8000/calibrate', { method: 'POST' });
    alert("Background Captured! Kraken-Cloak Active.");
  };

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-lg text-primary">tune</span>
        Processing Controls
      </h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button type="button" className="bg-primary hover:bg-deep-tech text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20 text-center">
          Start Process
        </button>
        <button type="button" className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all text-center">
          Stop
        </button>
        <button onClick={handleCalibrate} type="button" className="col-span-2 border border-slate-200 hover:bg-slate-50 py-2.5 px-4 rounded-lg text-sm font-medium transition-all text-center">
          Capture Background
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-slate-600">Kraken Cloak</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={krakenCloak} onChange={(e) => setKrakenCloak(e.target.checked)} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-slate-600">Eye Tracking</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={eyeTracking} onChange={(e) => setEyeTracking(e.target.checked)} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-slate-600">BG Substitution</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={bgSubstitution} onChange={(e) => setBgSubstitution(e.target.checked)} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
      </div>
    </section>
  );
}

export default Dashboard_Controls;
