function BackgroundDecor() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[length:40px_40px] bg-[radial-gradient(circle,#005EB8_1px,transparent_1px)]" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,94,184,0.03)_10px,rgba(0,94,184,0.03)_11px)]" />
    </>
  );
}

export default BackgroundDecor;
