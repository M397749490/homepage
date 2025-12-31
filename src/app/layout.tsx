import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "M397749490 - Radio Enthusiast",
  description: "Personal homepage of M397749490, Amateur Radio Operator BI3BFG",
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
    <html lang="en">
      <body
        className={`${vt323.variable} font-mono antialiased bg-zinc-950 text-green-500 selection:bg-green-900 selection:text-green-100`}
      >
        {children}
      </body>
    </html>
  );
}
