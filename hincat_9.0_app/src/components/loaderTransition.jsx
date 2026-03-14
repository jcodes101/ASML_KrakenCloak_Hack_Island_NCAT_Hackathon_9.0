function LoaderTransition() {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="loader" aria-hidden />
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
          Loading
        </p>
      </div>
    </div>
  );
}

export default LoaderTransition;
