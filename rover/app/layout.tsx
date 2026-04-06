import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SpaceScope",
  description: "Explore the universe with NASA data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <span className="text-sm font-mono tracking-widest uppercase text-white/60">
            SpaceScope
          </span>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/apod" className="hover:text-white transition-colors">APOD</Link>
            <Link href="/rovers" className="hover:text-white transition-colors">Rovers</Link>
          </div>
        </nav>
        <div className="max-w-6xl mx-auto px-8 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}