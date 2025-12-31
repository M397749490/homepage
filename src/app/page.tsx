import Image from "next/image";
import { Pager } from "@/components/Pager";
import { Intro } from "@/components/Intro";
import { ContactInfo } from "@/components/ContactInfo";
import { RadioProfile } from "@/components/RadioProfile";
import { MorseTransmitter } from "@/components/MorseTransmitter";
import { Spectrum } from "@/components/Spectrum";

export default function Home() {
  return (
    <Pager>
      <header className="mb-8 border-b-2 border-green-800 pb-4 flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-24 h-24 shrink-0 border-2 border-green-500 rounded-full overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            <Image 
                src="/avatar.png" 
                alt="Avatar" 
                fill
                className="object-cover"
            />
        </div>
        <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tighter text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">M397749490</h1>
            <Intro />
        </div>
      </header>

      <main className="space-y-8">
        <RadioProfile />
        
        <div className="grid grid-cols-1 gap-8">
            <MorseTransmitter />
            <Spectrum />
        </div>

        <ContactInfo />

        <div className="border-2 border-green-800 p-4 bg-green-950/20">
            <h3 className="text-xl border-b border-green-800 mb-3 pb-1 text-green-400">FRIEND LINKS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <a href="https://blog.qwq.my" target="_blank" className="hover:text-green-300 hover:underline">雪球 (blog.qwq.my)</a>
                <a href="https://damesck.net" target="_blank" className="hover:text-green-300 hover:underline">damesck (damesck.net)</a>
                <a href="https://klpbbs.com" target="_blank" className="hover:text-green-300 hover:underline">苦力怕论坛 (klpbbs.com)</a>
                <a href="https://github.com/TeamVastsea" target="_blank" className="hover:text-green-300 hover:underline">瀚海工艺 (TeamVastsea)</a>
            </div>
        </div>
      </main>
      
      <footer className="mt-12 text-center text-green-800 text-xs border-t border-green-900 pt-4 space-y-2">
        <p>DESIGNED BY Snowball_233 // SYSTEM READY // {new Date().getFullYear()}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010302000000" target="_blank" className="flex items-center gap-1 hover:text-green-600">
                <Image src="/mps.png" alt="MPS" width={16} height={16} />
                <span>津公网安备 12010302000000号</span>
            </a>
            <a href="https://beian.miit.gov.cn/" target="_blank" className="flex items-center gap-1 hover:text-green-600">
                <Image src="/miit.png" alt="MIIT" width={16} height={16} />
                <span>津ICP备2025036652号-1</span>
            </a>
        </div>
      </footer>
    </Pager>
  );
}

