import { useState, useEffect, useRef } from 'react';

const DURATION_MS = 1800;
const EASING = (t) => 1 - (1 - t) ** 2; // ease-out quadratic

function useCountUp(end, isInView) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const eased = EASING(t);
      setValue(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [end, isInView]);

  return value;
}

function Metrics() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.25, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const streams = useCountUp(12, isInView);
  const syncMs = useCountUp(24, isInView);
  const fps = useCountUp(32, isInView);

  return (
    <section
      ref={sectionRef}
      className="border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-5xl font-black text-primary tabular-nums tracking-tighter">{streams}</div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Active Streams</div>
        </div>
        <div className="space-y-2 border-x border-slate-200 dark:border-slate-800 px-8">
          <div className="text-5xl font-black text-primary tabular-nums tracking-tighter">{syncMs}<span className="text-xl">ms</span></div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Sync Offset</div>
        </div>
        <div className="space-y-2">
          <div className="text-5xl font-black text-primary tabular-nums tracking-tighter">{fps}<span className="text-xl">FPS</span></div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Processing Rate</div>
        </div>
      </div>
    </section>
  );
}

export default Metrics;
