function Dashboard_Sync() {
  const bars = [60, 40, 70, 30, 50, 90, 60, 20];

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg text-primary">activity</span>
          Sync Engine
        </h3>
        <span className="text-[10px] font-mono font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded shrink-0">SYNCED</span>
      </div>
      <div className="mb-4">
        <div className="text-2xl font-mono font-bold text-slate-800 tabular-nums">12.4<span className="text-sm font-normal text-slate-400 ml-0.5">ms</span></div>
        <div className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Current Offset</div>
      </div>
      <div className="h-12 w-full flex items-end gap-[2px]">
        {bars.map((height, i) => {
          let barClass = 'bg-slate-100';
          if (i === 3) barClass = 'bg-primary/20';
          else if (i === 4) barClass = 'bg-primary/40';
          else if (i === 5 || i === 6) barClass = 'bg-primary';
          return <div key={i} className={`w-full rounded-t-sm ${barClass}`} style={{ height: `${height}%` }} />;
        })}
      </div>
    </section>
  );
}

export default Dashboard_Sync;
