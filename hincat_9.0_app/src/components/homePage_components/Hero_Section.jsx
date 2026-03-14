import { Link, useNavigate } from 'react-router-dom';
import { PiEyeThin } from 'react-icons/pi';
import { useNavigation } from '../../context/NavigationContext';
import DecryptedText from '../DecryptedText';
import asmlVid from '../../assets/asml_vid_2.mp4';

const LOADER_DURATION_MS = 700;
const LOADER_HIDE_AFTER_NAV_MS = 400;

function Hero_Section() {
  const navigate = useNavigate();
  const { setShowLoader } = useNavigation();

  function handleLaunchDashboard(e) {
    e.preventDefault();
    setShowLoader(true);
    setTimeout(() => {
      navigate('/dashboard');
      setTimeout(() => setShowLoader(false), LOADER_HIDE_AFTER_NAV_MS);
    }, LOADER_DURATION_MS);
  }

  return (
    <section className="relative w-full pt-4">
      {/* Full-bleed video background — edge to edge, no container */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen h-full min-h-full object-cover pointer-events-none"
        aria-hidden
      >
        <source src={asmlVid} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background-light/85 dark:bg-background-dark/45 pointer-events-none" aria-hidden />
      {/* Graph-line grid overlay (ASML-style) — light mode */}
      <div
        className="absolute inset-0 pointer-events-none bg-[length:80px_80px] bg-[image:linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] dark:opacity-0"
        aria-hidden
      />
      {/* Graph-line grid overlay — dark mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 bg-[length:80px_80px] bg-[image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        aria-hidden
      />
      {/* Content stays in centered container; video is unrestricted behind it */}
      <div className="relative z-0 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">System v9.2 Stable</span>
        </div>
        <div className="max-w-4xl min-h-[3rem] lg:min-h-[4.5rem]">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none text-deep-tech dark:text-white">
            Real-Time Vision{' '}
            <span className="text-primary inline-block w-[16ch] min-w-[16ch] align-baseline tabular-nums" style={{ verticalAlign: 'baseline' }}>
              <DecryptedText
                text="Synchronization"
                animateOn="view"
                speed={85}
                sequential
                revealDirection="start"
                useOriginalCharsOnly={false}
              />
            </span>
          </h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          Precision engineering for multi-camera environments. Deploy advanced AI synchronization, millisecond-accurate gaze detection, and adaptive neural masking for industrial-grade visual processing.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleLaunchDashboard}
            className="px-8 py-4 bg-primary text-white font-bold flex items-center gap-2 hover:bg-deep-tech rounded-sm transition-all shadow-lg shadow-primary/20"
          >
            Launch Dashboard
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <a
            href="https://www.asml.com/en/technology"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold hover:border-primary transition-all rounded-sm inline-flex items-center"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="relative z-10">
        <div className="aspect-square bg-gradient-to-br from-primary/10 to-light-accent/5 rounded-2xl border border-primary/20 p-8 flex items-center justify-center">
          <div className="w-full h-full rounded border border-dashed border-primary/30 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
            <img
              alt="Technical AI vision interface visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply dark:mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFNIXaXrjICmk5mTzDwswsu4q_PqVgdaZh_s5BrQ8D8NB9kevVbkLx31ZDnppJInMSfMqB-XU8UZXY-GXKluq8P5Z9Qx_xI0Tegxba1fI8HpqEqcLZEXi8-uWOXUHYIla_hlhckKF01xGuyS-goheEVMXmxDPDLNyqIBamAJ0ELWdH2vWNXJWIaeRc0hR3Y4YogFEUf-KajPipWIHb6MpeijYH-oz4cVaFvtXKfYMoQhU7sOADwKqF_VKOPjJwk1a-0qqYyojisdVO"
            />
            {/* Tracker circle drifts around the entire card */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
            >
              <div
                className="absolute w-44 h-44 -translate-x-1/2 -translate-y-1/2 animate-[tracker-drift_18s_ease-in-out_infinite] left-1/2 top-1/2"
              >
                <svg
                  className="w-full h-full animate-[tracker-lock-in_2.5s_ease-out_infinite] text-primary"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="tracker-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#tracker-stroke)"
                    strokeWidth="0.8"
                    strokeDasharray="4 6"
                    className="animate-[tracker-rotate_12s_linear_infinite]"
                  />
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5" />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="0.6"
                    className="animate-[tracker-ring-pulse_2s_ease-in-out_infinite]"
                  />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <line
                      key={deg}
                      x1="50"
                      y1="50"
                      x2={50 + 42 * Math.cos((deg * Math.PI) / 180)}
                      y2={50 + 42 * Math.sin((deg * Math.PI) / 180)}
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="0.4"
                    />
                  ))}
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="1.2"
                    strokeDasharray="55 228"
                    strokeLinecap="round"
                    className="animate-[tracker-sweep_2s_linear_infinite]"
                    style={{ transformOrigin: '50px 50px' }}
                  />
                  {Array.from({ length: 24 }, (_, i) => {
                    const a = (i * 15 * Math.PI) / 180;
                    const r = 45;
                    const inX = 50 + (r - 3) * Math.cos(a);
                    const inY = 50 + (r - 3) * Math.sin(a);
                    const outX = 50 + r * Math.cos(a);
                    const outY = 50 + r * Math.sin(a);
                    return (
                      <line
                        key={i}
                        x1={inX}
                        y1={inY}
                        x2={outX}
                        y2={outY}
                        stroke="currentColor"
                        strokeOpacity={i % 6 === 0 ? 0.5 : 0.2}
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
            <div className="z-10 text-center p-6">
              {/* Eye fixed in center */}
              <div className="relative inline-flex items-center justify-center mb-4 w-40 h-40">
                <div className="relative inline-flex items-center justify-center w-20 h-20">
                  <div
                    className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-[eye-glow-pulse_4s_ease-in-out_infinite]"
                    aria-hidden
                  />
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <PiEyeThin className="w-14 h-14 text-primary shrink-0" strokeWidth={0.5} />
                    <span
                      className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-[eye-track_5s_ease-in-out_infinite]"
                      aria-hidden
                    />
                  </div>
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden rounded-full pointer-events-none"
                    aria-hidden
                  >
                    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[eye-scan-line_3s_linear_infinite]" />
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono text-primary/60 uppercase tracking-[0.2em] mb-2">Neural Link Active</div>
              <div className="h-1 w-32 bg-slate-200 dark:bg-slate-700 mx-auto rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full min-w-[15%] animate-[buffer-load_6s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero_Section;
