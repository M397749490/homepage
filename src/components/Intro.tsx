"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "🎮 Minecraft 爱好者",
  "💻 GitHub 开发者",
  "📡 业余无线电爱好者",
  "🚄 SimRail 爱好者",
  "📕 全日制在读本科生",
  "🤗 苦力怕论坛超级版主"
];

export function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xl md:text-2xl mb-4 font-vt323">
      Hi，我是 <span className="font-bold text-green-300">M397749490</span>，是一名
      <div className="inline-block relative w-[280px] h-[1.2em] align-top ml-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 whitespace-nowrap text-green-400"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
