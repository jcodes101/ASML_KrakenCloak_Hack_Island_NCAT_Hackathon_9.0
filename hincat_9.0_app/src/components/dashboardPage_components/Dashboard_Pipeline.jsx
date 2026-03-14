const STEPS = [
  { icon: 'videocam', label: 'Camera Capture' },
  { icon: 'layers', label: 'Frame Buffer' },
  { icon: 'sync', label: 'Sync Engine' },
  { icon: 'face', label: 'Face Mesh' },
  { icon: 'shield', label: 'Kraken Cloak', highlight: true },
  { icon: 'open_in_new', label: 'Output Stream', dark: true },
];

function FlowArrow() {
  return (
    <div className="flex flex-[2_1_0%] min-w-8 h-10 items-center justify-center" aria-hidden>
      <svg className="w-full h-5" viewBox="0 0 100 20" preserveAspectRatio="none">
        <defs>
          <marker id="pipeline-arrowhead" markerHeight="6" markerWidth="8" orient="auto" refX="0" refY="3">
            <polygon fill="#94a3b8" points="0 0, 8 3, 0 6" />
          </marker>
        </defs>
        <line
          x1="0"
          y1="10"
          x2="100"
          y2="10"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeDasharray="6 4"
          style={{ animation: 'flow-dash 1s linear infinite' }}
          markerEnd="url(#pipeline-arrowhead)"
        />
      </svg>
    </div>
  );
}

function Dashboard_Pipeline() {
  return (
    <footer className="lg:col-span-10">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg text-primary">memory</span>
          Real-time Processing Pipeline
        </h3>
        <div className="flex flex-nowrap items-center w-full min-h-20">
          {STEPS.map((step, index) => (
            <div key={step.label} className="contents">
              <div
                className={`rounded-lg p-3 flex-1 min-w-24 flex flex-col items-center justify-center gap-2 shadow-sm text-center ${
                  step.dark
                    ? 'bg-deep-tech border-2 border-deep-tech shadow-lg'
                    : step.highlight
                      ? 'bg-primary/10 border-2 border-primary/30'
                      : 'bg-slate-50 border-2 border-slate-200'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border shadow-sm shrink-0 ${
                    step.dark
                      ? 'bg-white/10 border-white/20 text-white'
                      : step.highlight
                        ? 'bg-primary border-white text-white'
                        : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{step.icon}</span>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase leading-tight ${
                    step.dark ? 'text-white' : step.highlight ? 'text-primary' : 'text-slate-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < STEPS.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Dashboard_Pipeline;
