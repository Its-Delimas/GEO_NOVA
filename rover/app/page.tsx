import Link from "next/link";
import { getAllCountries } from "@/lib/countries";

export default async function Home() {
  const countries = await getAllCountries();

  // Derive stats from the data on the server
  const totalPopulation = countries.reduce((sum, c) => sum + c.population, 0);
  const regions = [...new Set(countries.map((c) => c.region))].filter(Boolean);
  const totalCountries = countries.length;

  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

      {/* Hero */}
      <section className="text-center mb-20">
        <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">
          Powered by RestCountries API
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
          World<span className="text-red-400">Scope</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed mb-10">
          Explore every nation on Earth. Population, geography, languages,
          currencies — all in one place.
        </p>
        <Link
          href="/countries"
          className="inline-block px-8 py-3 bg-red-400 text-black text-sm font-semibold tracking-wide rounded-full hover:bg-red-300 transition-colors"
        >
          Explore Countries →
        </Link>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Total Countries</p>
          <p className="text-5xl font-bold text-white">{totalCountries}</p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">World Population</p>
          <p className="text-5xl font-bold text-white">
            {(totalPopulation / 1_000_000_000).toFixed(1)}
            <span className="text-red-400 text-2xl ml-1">B</span>
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Regions</p>
          <p className="text-5xl font-bold text-white">{regions.length}</p>
        </div>

      </section>

      {/* Region Pills */}
      <section className="mt-12">
        <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Browse by Region</p>
        <div className="flex flex-wrap gap-3">
          {regions.map((region) => (
            <Link
              key={region}
              href={`/countries?region=${region}`}
              className="px-4 py-2 border border-white/10 rounded-full text-white/60 text-sm hover:border-green-400 hover:text-red-400 transition-colors"
            >
              {region}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}