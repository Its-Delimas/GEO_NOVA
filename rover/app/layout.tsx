import type { Metadata } from 'next';
import "./globals.css";
import Navbar from '@/Components/Navbar';

export const metadata: Metadata = {
  title: "Rover",
  description: "Explore the universe with NASA data",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
