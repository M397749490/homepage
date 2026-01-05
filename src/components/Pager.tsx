export function Pager({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Pixel Art Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{
               backgroundImage: `radial-gradient(#22c55e 2px, transparent 2px)`,
               backgroundSize: '32px 32px'
           }}>
      </div>

      <div className="w-full max-w-4xl bg-black border-4 border-zinc-800 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative z-10">
        {/* Pager Top Bar */}
        <div className="bg-zinc-900 p-3 flex justify-between items-center border-b-4 border-zinc-800">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            <div className="text-zinc-500 font-mono text-xs tracking-widest">PERSONAL COMMUNICATOR</div>
            <div className="text-green-900 font-mono text-xs bg-green-500/20 px-2 py-0.5 rounded">Online</div>
        </div>
        
        {/* Screen Content */}
        <div className="p-6 md:p-8 text-green-500 font-vt323 relative min-h-[600px] bg-black">
            {/* CRT Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_4px,3px_100%] opacity-20"></div>
            
            {/* Glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(34,197,94,0.1)] z-10 pointer-events-none"></div>

            <div className="relative z-30">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
}
