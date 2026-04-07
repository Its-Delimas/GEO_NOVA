import Link from "next/link"

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">   404 - Not Found</p>

            <h1 className="text-8x1 font-bold text-white mb-4">
                Lost?
            </h1>

            <p className='text-white/40 max-w-sm leading-relaxed mb-10'>
                That country or page doesn't exist in our records. Double-check the URl or head back to the explorer.
            </p>

            <Link href="/countres" className="px-6 py-3 bg-red-400 text-black text-sm font-semibold rounded-full hover:bg-red-300 transition-colors">
                Back to Countries
            </Link>
        </main>
    )
}