import { getCountryByCode, getAllCountries } from "@/lib/countries";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
    params: Promise<{ code: string }>;
};

// Pre-generate all country pages at build time
export async function generateStaticParams() {
    const countries = await getAllCountries();
    return countries.map((c) => ({
        code: c.cca3.toLowerCase(),
    }));
}

export default async function CountryPage({ params }: Props) {
    const { code } = await params;

    let country;
    try {
        country = await getCountryByCode(code);
    } catch {
        notFound();
    }

    if (!country) notFound();

    const languages = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A";

    const currencies = country.currencies
        ? Object.values(country.currencies)
            .map((c) => `${c.name} (${c.symbol})`)
            .join(", ")
        : "N/A";

    return (
        <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

            {/* Back button */}
            <Link

                href="/countries"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors"
            >
                ← Back to Countries
            </Link>

            {/* Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">

                {/* Flag */}
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt ?? `Flag of ${country.name.common}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Core Info */}
                <div>
                    <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-3">
                        {country.region}{country.subregion ? ` · ${country.subregion}` : ""}
                    </p>
                    <h1 className="text-5xl font-bold text-white mb-2">
                        {country.name.common}
                    </h1>
                    <p className="text-white/40 text-sm mb-8">
                        {country.name.official}
                    </p>

                    <div className="space-y-3">
                        <InfoRow label="Capital" value={country.capital?.[0] ?? "N/A"} />
                        <InfoRow label="Population" value={country.population.toLocaleString()} />
                        <InfoRow label="Area" value={`${country.area.toLocaleString()} km²`} />
                        <InfoRow label="Languages" value={languages} />
                        <InfoRow label="Currencies" value={currencies} />
                    </div>
                </div>

            </div>

            {/* Border Countries */}
            {
                country.borders && country.borders.length > 0 && (
                    <div>
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                            Border Countries
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {country.borders.map((border) => (
                                <Link

                                    key={border}
                                    href={`/countries/${border.toLowerCase()}`}
                                    className="px-4 py-2 border border-white/10 rounded-full text-white/60 text-xs hover:border-red-400 hover:text-red-400 transition-colors"
                                >
                                    {border}
                                </Link>
                            ))}
                        </div>
                    </div >
                )
            }

        </main >
    );
}

// Small reusable component — defined in the same file since it's only used here
function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex gap-3">
            <span className="text-white/40 text-sm w-28 shrink-0">{label}</span>
            <span className="text-white text-sm">{value}</span>
        </div>
    );
}