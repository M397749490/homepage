import { GithubOutlined } from "@ant-design/icons";
import React from "react";
import "./Pager.css";

const Pager = React.memo(function Pager({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="pager-bg-pattern absolute inset-0 opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-4xl bg-black border-4 border-zinc-800 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative z-10">
        <div className="bg-zinc-900 p-3 flex justify-between items-center border-b-4 border-zinc-800">
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-zinc-500 font-mono text-xs tracking-widest">M397749490's Homepage</div>
            <div className="text-zinc-500 font-mono text-xs px-2 py-0.5 rounded">
              <a href="https://github.com/M397749490/homepage" target="_blank" rel="noopener noreferrer" title="GitHub 仓库">
                <span className="sr-only">GitHub</span>
                <GithubOutlined style={{ fontSize: 16 }} />
              </a>
            </div>
        </div>
        
        <div className="p-6 md:p-8 text-green-500 font-vt323 relative min-h-[600px] bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_4px,3px_100%] opacity-20"></div>
            
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(34,197,94,0.1)] z-10 pointer-events-none"></div>

            <div className="relative z-30">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
});

export { Pager };
