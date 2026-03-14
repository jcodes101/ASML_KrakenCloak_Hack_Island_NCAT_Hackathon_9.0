import { useState, useEffect, useRef } from 'react';

const STAGGER_MS = 350;
const DURATION_MS = 600;

function Features() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: 'sync_alt',
      title: 'Multi-Camera Sync',
      description: 'Sub-millisecond temporal alignment across distributed sensor arrays. Phase-locked capture ensures frame-accurate correlation.',
    },
    {
      icon: 'eye_tracking',
      title: 'AI Eye Tracking',
      description: 'High-fidelity gaze detection and attention heatmapping. Real-time focus analysis with neural network acceleration.',
    },
    {
      icon: 'privacy_tip',
      title: 'Kraken Cloak Masking',
      description: 'Dynamic neural privacy layers. Automatically obfuscate sensitive visual data while maintaining full scene context.',
    },
  ];

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Core Capabilities</h2>
          <p className="text-3xl font-bold text-deep-tech dark:text-white leading-tight">Precision engineering for mission-critical visual surveillance.</p>
        </div>
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 mx-8 mb-4 hidden md:block" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group ease-out"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity ${DURATION_MS}ms ease-out, transform ${DURATION_MS}ms ease-out`,
              transitionDelay: isInView ? `${index * STAGGER_MS}ms` : '0ms',
            }}
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</span>
            <h3 className="text-xl font-bold mb-3 text-deep-tech dark:text-white">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
