function Dashboard_VisionMetrics() {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Vision Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
          <div className="text-xs font-semibold text-slate-400 mb-1">Faces</div>
          <div className="text-xl font-bold text-slate-700 tabular-nums">02</div>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
          <div className="text-xs font-semibold text-slate-400 mb-1">FPS</div>
          <div className="text-xl font-bold text-slate-700 tabular-nums">59.8</div>
        </div>
        <div className="col-span-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <div className="text-xs font-semibold text-slate-400 mb-2">Tracking Confidence</div>
          <div className="flex items-center gap-3">
            <div className="h-2 flex-1 min-w-0 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-light-accent w-[94%]" />
            </div>
            <span className="text-xs font-bold text-slate-600 tabular-nums shrink-0">94%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard_VisionMetrics;
