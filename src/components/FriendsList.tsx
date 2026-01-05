const FRIENDS = [
  { name: "Snowball_233", url: "https://blog.qwq.my" },
  { name: "damesck", url: "https://damesck.net" },
  { name: "苦力怕论坛", url: "https://klpbbs.com" },
  { name: "瀚海工艺", url: "https://github.com/TeamVastsea" },
];

export function FriendsList() {
  return (
    <div className="border-2 border-green-800 p-4 bg-green-950/20 my-6 font-vt323 text-center">
      <h2 className="text-xl border-b border-green-800 mb-4 pb-1 flex justify-between">
        <span>FRIEND LINKS</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
        {FRIENDS.map((friend) => (
          <a key={friend.name} href={friend.url} className="flex items-center justify-center p-2 hover:bg-green-900/20 hover:border-green-00 transition-all group w-full">
            <div className="flex flex-col items-center w-full">
              <span className="text-green-300 font-bold group-hover:text-green-100">{friend.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
