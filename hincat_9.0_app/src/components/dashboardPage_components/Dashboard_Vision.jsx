import { useState } from 'react';

const CAMERA_A_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnHvPa5Rx7ZbR5dEuNNugAKRTXF0OND5mK2oD_qSuupyLsaQ1znR3e8moNb8xge9_Fl1WaKayrygjzP8MWoVHKfleThnUnrCTyrfTP5uCcpNFC22kkCIGvZfsdfQ61uNypFp-yvJRbx2s5Ye16_BcpRkb6EcVFkGxWIie7bROvb3aTLuzbsPU_v8z1ja2V3574_VgLsn7-jj-vCDFelTrvRlv2xYnL25KRbvbb484if-9xeDHU_9QCv5GEg5tZND8Q7GjKN7oRg8xc';
const CAMERA_B_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaZHK2ThJBf42rY6uJxFlnP4Pglp859BMwQ7jylLK4wLoxVypZP5zuxNKI8id38s6uOMsFG_u4w7pGIDM_exl6YuxStydwDwoDRUCQmp50KrrARie0hHpI_Lbwj6zJeBQ2zT2kfiQYqnyKgZl7r_gSTwaG4xRtPCLu4poi3-vf9HUmM5dyyextdQYfq32VQZI9D1zcmApJeuVz7aboljORtYlcKK4_tXDKOUmxCrhegHId3RxeQCYlaMepRgDhht-PAohxmbiuSx3V';

const STREAM_A_URL = 'http://127.0.0.1:8000/video_feed'

function Dashboard_Vision() {
  const [viewMode, setViewMode] = useState('split');
  const [demoMode, setDemoMode] = useState(true);

  return (
    <section className="lg:col-span-7 flex flex-col gap-6">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-slate-500">videocam</span>
              Live Vision Processing
            </h2>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`px-3 py-1 text-xs font-semibold rounded-md shadow-sm transition-colors ${viewMode === 'split' ? 'bg-white text-primary' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Split View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('overlay')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${viewMode === 'overlay' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Overlay View
              </button>
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs font-medium text-slate-600">Demo Mode</span>
            <input
              type="checkbox"
              checked={demoMode}
              onChange={(e) => setDemoMode(e.target.checked)}
              className="rounded text-primary focus:ring-primary w-4 h-4 border-slate-300"
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-px bg-slate-200 p-2 grow aspect-video">
          <div className="relative bg-black rounded-lg overflow-hidden group">
            <img alt="Camera A Feed" className="w-full h-full object-cover opacity-50" src={STREAM_A_URL} />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              <span className="bg-primary text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase">Camera A</span>
              <span className="text-white text-[10px] opacity-70">1920x1080 @ 60FPS</span>
            </div>
            <div className="absolute top-4 right-4 text-green-400 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> 132ms
            </div>
            <div className="absolute inset-0 p-8 flex items-center justify-center pointer-events-none">
              <div className="border border-light-accent/40 w-1/3 h-1/3 rounded-full relative animate-pulse flex items-center justify-center">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-light-accent font-mono uppercase bg-deep-tech/80 px-2 py-0.5 rounded">Face Mesh Active</span>
              </div>
            </div>
          </div>
          <div className="relative bg-black rounded-lg overflow-hidden group">
            <img alt="Camera B Feed" className="w-full h-full object-cover opacity-50" src={CAMERA_B_IMG} />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              <span className="bg-primary text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase">Camera B</span>
              <span className="text-white text-[10px] opacity-70">1920x1080 @ 60FPS</span>
            </div>
            <div className="absolute top-4 right-4 text-green-400 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> 145ms
            </div>
            <div className="absolute inset-0 p-8 pointer-events-none">
              <div className="w-full h-full border border-primary/20 rounded flex items-end justify-start p-4">
                <span className="text-[10px] text-primary font-mono">EYE_TRACKING: 0.985 CONF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard_Vision;
