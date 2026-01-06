"use client";
import React from "react";

export default function AnalyticsInit() {
  React.useEffect(() => {
    // LA统计脚本
    if (typeof window !== "undefined") {
      try {
        // LA.init
        window.LA && window.LA.init && window.LA.init({
          id: "3OWuEgiTrFNp0oGj",
          ck: "3OWuEgiTrFNp0oGj",
          autoTrack: true,
          hashMode: true
        });
        // LingQue.Monitor
        window.LingQue && window.LingQue.Monitor && new window.LingQue.Monitor().init({
          id: "3ObUIOp5x9WjHh2a",
          sendSuspicious: true,
          sendSpaPv: true
        });
      } catch (e) {
        // ignore
      }
    }
  }, []);
  return null;
}
