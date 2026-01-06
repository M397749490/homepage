import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import Script from "next/script";
import React from "react";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "M397749490's Homepage",
  description: "M397749490的个人主页",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={vt323.variable}>
      <head>
        <Script
          id="LA_COLLECT"
          src="https://sdk.51.la/js-sdk-pro.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://sdk.51.la/perf/js-sdk-perf.min.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-mono antialiased bg-zinc-950 text-green-500 selection:bg-green-900 selection:text-green-100">
        {children}
      </body>
    </html>
  );
}
