import { getAPOD } from "@/lib/nasa";

export default async function Home() {

  const apod = await getAPOD();

  return (
    <main className='relative min-h-screen'>
      {/* bg-image */}
      {apod.media_type === "image" && (
        <div className="fixed inset-0 bg-cover bg-center opacity-20 -z-10" style={{ backgroundImage: `url(${apod.url})` }} />
      )}

      {/* Hero content */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-4">
          {new Date(apod.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h1 className="text-5x1 md:text-7x1 font-bold text-white max-w-4x1 leading-tight mb-6">
          {apod.title}
        </h1>

        <p className="text-white/60 max-w-2x1 text-base leading-relaxed mb-10">
          {apod.explanation.slice(0, 220)}...
        </p>

        <div className="flex items-center gap-4">
          <a href="/apod"
            className="px-6 py-3 bg-green-400 text-black text-sm font-semibold tracking-wide rounded-full hover:bg-green-300 transition-coolors"
          > View Full Image</a>
          <a href="/rovers"
            className="px-6 py-3 border border-white/20 text-white/70 text-sm tracking-wide rounded-full hover:border-white/50 hover:text-white transition-colors"
          >
            Explore Rovers →
          </a>
        </div>

        {apod.copyright && (
          <p className="mt-12 text-white/30 text-xs">
            Image © {apod.copyright}
          </p>
        )}

      </section>
    </main>
  )
}