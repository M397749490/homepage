import { ExternalLink } from "lucide-react";

const FRIENDS = [
  { name: "雪球", url: "https://blog.qwq.my", desc: "qwq.my" },
  { name: "damesck", url: "https://damesck.net", desc: "damesck.net" },
  { name: "苦力怕论坛", url: "https://klpbbs.com", desc: "klpbbs.com" },
  { name: "瀚海工艺", url: "https://github.com/TeamVastsea", desc: "Vastsea" },
];

export function FriendsList() {
  return (
    <div className="border-2 border-green-700 p-4 bg-green-950/30 my-6 font-vt323">
      <h2 className="text-xl border-b-2 border-green-700 mb-4 pb-1 flex justify-between">
        <span>FRIEND LINKS</span>
        <span className="animate-pulse">CONNECTING...</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FRIENDS.map((friend) => (
          <a
            key={friend.name}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 border border-green-800 hover:bg-green-900/50 hover:border-green-500 transition-all group"
          >
            <div className="flex flex-col">
              <span className="text-green-300 font-bold group-hover:text-green-100">{friend.name}</span>
              <span className="text-xs text-green-700 group-hover:text-green-500">{friend.desc}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-green-700 group-hover:text-green-300" />
          </a>
        ))}
      </div>
    </div>
  );
}
