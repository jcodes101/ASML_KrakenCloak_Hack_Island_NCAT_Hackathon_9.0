import { useState, useEffect } from 'react';

const PIPELINE_NODES = [
  { icon: 'videocam', label: 'Camera Input' },
  { icon: 'storage', label: 'Frame Buffer' },
  { icon: 'dynamic_form', label: 'Sync Engine' },
  { icon: 'grid_4x4', label: 'Face Mesh' },
  { icon: 'masks', label: 'Cloak Rendering' },
  { icon: 'sensors', label: 'Output Stream' },
];

const OUTPUT_STREAM_INDEX = 5;
const TOTAL_STEPS = 12; // 6 nodes + 6 arrows (node, arrow, node, arrow, ...)
const GLOW_TRANSITION_MS = 1200;

// Carousel takes this long to scroll one full set of 6 nodes (50% width). One segment = one node+arrow.
const CAROUSEL_DURATION_S = 60;
const SEGMENTS = 6;
// Step duration = time for one segment so the glow advances when the next item reaches center.
const STEP_DURATION_MS = (CAROUSEL_DURATION_S * 1000) / SEGMENTS; // 10000ms = 10s

function PipelineNode({ node, showArrow, nodeIndex, activeStep }) {
  const isNodeStep = activeStep % 2 === 0;
  const isArrowStep = activeStep % 2 === 1;
  const activeNodeIndex = Math.floor(activeStep / 2);
  const activeArrowIndex = (activeStep - 1) / 2;

  const isNodeGlowing = isNodeStep && activeNodeIndex === nodeIndex;
  const isOutputGlow = isNodeGlowing && nodeIndex === OUTPUT_STREAM_INDEX;
  const isArrowGlowing = showArrow && isArrowStep && activeArrowIndex === nodeIndex;

  const nodeBase = 'w-16 h-16 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700';
  // Glow color matches fill: primary #005EB8, ASML orange #FF6600. Strong glow (larger blur + higher opacity).
  const nodeBlueGlow =
    'border-primary bg-primary text-white shadow-[0_0_24px_rgba(0,94,184,0.7),0_0_48px_rgba(0,94,184,0.5),0_0_72px_rgba(0,94,184,0.3)]';
  const nodeOrangeGlow =
    'border-[#FF6600] bg-[#FF6600] text-white shadow-[0_0_24px_rgba(255,102,0,0.7),0_0_48px_rgba(255,102,0,0.5),0_0_72px_rgba(255,102,0,0.3)]';
  const transitionClass = 'transition-all duration-[1200ms] ease-in-out';

  const nodeClasses = [
    nodeBase,
    transitionClass,
    isNodeGlowing && !isOutputGlow && nodeBlueGlow,
    isOutputGlow && nodeOrangeGlow,
  ].filter(Boolean).join(' ');

  const iconBase = 'material-symbols-outlined text-slate-500';
  const iconActive = 'text-white';
  const iconClasses = [
    iconBase,
    transitionClass,
    isNodeGlowing && iconActive,
  ].filter(Boolean).join(' ');

  const labelBase = `text-xs font-bold uppercase tracking-tighter text-center text-slate-500 dark:text-slate-400 ${transitionClass}`;
  const labelHighlight = isNodeGlowing ? (isOutputGlow ? 'text-[var(--color-asml-orange)]' : 'text-primary') : '';
  const labelClasses = [labelBase, labelHighlight].filter(Boolean).join(' ');

  const arrowBase = `material-symbols-outlined text-slate-400/40 dark:text-slate-500/50 rotate-90 lg:rotate-0 ${transitionClass}`;
  const arrowGlowClass = 'text-white';
  const arrowGlowStyle = isArrowGlowing
    ? {
        filter:
          'drop-shadow(0 0 4px rgba(255,255,255,1)) drop-shadow(0 0 12px rgba(255,255,255,0.95)) drop-shadow(0 0 24px rgba(255,255,255,0.8))',
      }
    : undefined;
  const arrowClasses = [arrowBase, isArrowGlowing && arrowGlowClass].filter(Boolean).join(' ');

  return (
    <div className="flex items-center gap-4 shrink-0 py-6">
      <div className="flex flex-col items-center gap-4 min-w-[160px]">
        <div className={nodeClasses} style={{ transitionDuration: `${GLOW_TRANSITION_MS}ms` }}>
          <span className={iconClasses}>{node.icon}</span>
        </div>
        <span className={labelClasses}>{node.label}</span>
      </div>
      {showArrow && (
        <span className={arrowClasses} style={arrowGlowStyle}>
          double_arrow
        </span>
      )}
    </div>
  );
}

function Pipeline_Diagram() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((s) => (s + 1) % TOTAL_STEPS);
    }, STEP_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Architecture</h2>
        <p className="text-3xl font-bold text-deep-tech dark:text-white">Visual Processing Pipeline</p>
      </div>
      <div
        className="overflow-hidden py-8 pb-10 relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex items-center gap-4 w-max py-2"
          style={{
            animation: `pipeline-slide ${CAROUSEL_DURATION_S}s linear infinite`,
          }}
        >
          {[...PIPELINE_NODES, ...PIPELINE_NODES].map((node, index) => {
            const nodeIndex = index % PIPELINE_NODES.length;
            const isLastInSet = nodeIndex === PIPELINE_NODES.length - 1;
            return (
              <PipelineNode
                key={`${node.label}-${index}`}
                node={node}
                showArrow={!isLastInSet}
                nodeIndex={nodeIndex}
                activeStep={activeStep}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pipeline_Diagram;
