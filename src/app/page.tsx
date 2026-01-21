import Image from "next/image";
import AnalyticsInit from "@/components/AnalyticsInit";
import { Pager } from "@/components/Pager";
import { Intro } from "@/components/Intro";
import { ContactInfo } from "@/components/ContactInfo";
import { RadioProfile } from "@/components/RadioProfile";
import { FriendsList } from "@/components/FriendsList";

export default function Home() {
  return (
    <Pager>
      <AnalyticsInit />
      <header className="mb-8 border-b-2 border-green-800 pb-4 flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-24 h-24 shrink-0 border-2 border-green-500 rounded-full overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.5)] md:self-start">
            <Image 
                src="/avatar.png" 
                alt="Avatar" 
                fill
                sizes="96px"
                className="object-cover"
            />
        </div>
        <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-wide
             text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">M397749490</h1>
            <Intro />
        </div>
      </header>

      <main className="space-y-8">
        <RadioProfile />
        <ContactInfo />
        <FriendsList />
      </main>
      
      <footer className="mt-12 text-center text-green-800 text-xs border-t border-green-900 pt-4 space-y-2">
        <p>Designed By <a href="https://blog.qwq.my">Snowball_233</a> // Copyright © 2025 <a href="/">M397749490.com</a> All Right Reserved.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="https://beian.miit.gov.cn/" target="_blank" className="flex items-center gap-1 hover:text-green-600">
            <Image src="/miit.png" alt="MIIT" width={16} height={16} />
            <span>津ICP备2025036652号-1</span>
          </a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010302002754" target="_blank" className="flex items-center gap-1 hover:text-green-600">
            <Image src="/mps.png" alt="MPS" width={16} height={16} />
            <span>津公网安备12010302002754号</span>
          </a>
          <a target="_blank" title="51la网站统计" href="https://v6.51.la/land/3OWuEgiTrFNp0oGj">
            <img src="https://sdk.51.la/icon/1-3.png" />
          </a>
        </div>
      </footer>
    </Pager>
  );
}

