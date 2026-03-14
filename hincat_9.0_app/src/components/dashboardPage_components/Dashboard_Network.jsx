import { useState } from 'react';

function Dashboard_Network() {
  const [latency, setLatency] = useState(250);

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Network Simulation</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center text-xs font-medium text-slate-500 mb-2 gap-2">
            <span>Artificial Latency</span>
            <span className="text-primary font-mono tabular-nums shrink-0">{latency}ms</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={latency}
            onChange={(e) => setLatency(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
        <div className="flex gap-2">
          <button type="button" className="flex-1 border border-slate-200 hover:bg-slate-50 py-2 rounded text-[11px] font-bold uppercase tracking-tighter transition-all text-center">
            Simulate Jitter
          </button>
          <button type="button" className="flex-1 border border-slate-200 hover:bg-slate-50 py-2 rounded text-[11px] font-bold uppercase tracking-tighter transition-all text-center">
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard_Network;
