import Link from "next/link";
import { Country } from "@/types/Country";
import Image from "next/image";

type Props = {
    country: Country;
};

export default function CountryCard({ country }: Props) {
    return (
        <Link href={`/countries/${country.cca3.toLowerCase()}`}>
            <div className="group border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-green-400/50 hover:bg-white/10 transition-all durattion-300 cursor-pointer">

                {/* flag */}
                <div className="h-40 overflow-hidden">
                    <Image src={country.flags.svg} alt={country.flags.alt ?? `Flag of ${country.name.common}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Info */}
                <div className="p-5">
                    <h2 className="text-white font-semibold text-base mb-3 truncate">
                        {country.name.common}
                    </h2>
                    <div className="space-y-1">
                        <p className="text-white/40 text-xs">
                            <span className="text-white/60">Capital: </span>
                            {country.capital?.[0] ?? "N/A"}
                        </p>
                        <p className="text-white/40 text-xs">
                            <span className="text-white/60">Region: </span>
                            {country.region}
                        </p>
                        <p className="text-white/40 text-xs">
                            <span className="text-white/6">Population: </span>
                            {country.population.toLocaleString()}
                        </p>
                    </div>
                </div>

            </div>
        </Link>
    )
}