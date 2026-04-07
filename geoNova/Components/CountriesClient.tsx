"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Country } from "@/types/Country";
import CountryCard from "./CountryCard";

type Props = {
    countries: Country[];
    initialRegion: string;
};

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function CountriesClient({ countries, initialRegion }: Props) {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [activeRegion, setActiveRegion] = useState(initialRegion);

    // Filter countries based on search and region
    const filtered = useMemo(() => {
        return countries.filter((c) => {
            const matchesSearch = c.name.common
                .toLowerCase()
                .includes(search.toLowerCase());
            const matchesRegion = activeRegion
                ? c.region === activeRegion
                : true;
            return matchesSearch && matchesRegion;
        });
    }, [countries, search, activeRegion]);

    function handleRegionClick(region: string) {
        const next = activeRegion === region ? "" : region;
        setActiveRegion(next);
        router.push(next ? `/countries?region=${next}` : "/countries");
    }

    return (
        <div>
            {/* Search + Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-10">
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <div className="flex gap-2 flex-wrap">
                    {REGIONS.map((region) => (
                        <button
                            key={region}
                            onClick={() => handleRegionClick(region)}
                            className={`px-4 py-2 rounded-full text-xs tracking-wide border transition-colors ${activeRegion === region
                                ? "bg-orange-400 text-black border-orange-400 font-semibold"
                                : "border-white/10 text-white/60 hover:border-orange-400 hover:text-orange-400"
                                }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <p className="text-white/30 text-xs tracking-widest uppercase mb-6">
                {filtered.length} countries
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-white/30 text-sm">No countries found for {search}</p>
                </div>
            )}
        </div>
    );
}