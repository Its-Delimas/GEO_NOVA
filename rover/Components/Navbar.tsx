import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">

            {/* Logo */}
            <Link href="/" className="text-white font-bold text-xl tracking-widest uppercase">
                Space<span className="text-green-400">Scope</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
                <Link href="/" className="text-white/60 hover:text-white text-sm tracking-wide transition-colors">
                    Home
                </Link>
                <Link href="/apod" className="text-white/60 hover:text-white text-sm tracking-wide transition-colors">
                    APOD
                </Link>
                <Link href="/rovers" className="text-white/60 hover:text-white text-sm tracking-wide transition-colors">
                    Rovers
                </Link>
            </div>

        </nav>
    );
}