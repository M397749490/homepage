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
    <html lang="zh_CN">
      <head>
        <Script
          id="LA_COLLECT"
          src="https://sdk.51.la/js-sdk-pro.min.js"
          strategy="afterInteractive"
        />
        <script dangerouslySetInnerHTML={{ __html: `LA.init({id:"3OWuEgiTrFNp0oGj",ck:"3OWuEgiTrFNp0oGj",autoTrack:true,hashMode:true})` }} />
        <Script
          src="https://sdk.51.la/perf/js-sdk-perf.min.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script dangerouslySetInnerHTML={{ __html: `new LingQue.Monitor().init({id:"3ObUIOp5x9WjHh2a",sendSuspicious:true,sendSpaPv:true});` }} />
      </head>
      <body className={`${vt323.variable} font-mono antialiased bg-zinc-950 text-green-500 selection:bg-green-900 selection:text-green-100`}>
        {children}
      </body>
    </html>
  );
}
