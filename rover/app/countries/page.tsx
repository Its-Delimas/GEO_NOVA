import { getAllCountries } from "@/lib/countries";
import CountriesClient from "@/Components/CountriesClient";

type Props = {
    searchParams: Promise<{ region?: string }>;
};

export default async function CountriesPage({ searchParams }: Props) {
    const { region } = await searchParams;
    const countries = await getAllCountries();

    return (
        <main className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
            <div className="mb-12">
                <p className="text-orange-400 text-xs tracking-[0.3em] uppercase mb-3">
                    {countries.length} nations
                </p>
                <h1 className="text-5xl font-bold text-white">
                    Explore the World
                </h1>
            </div>

            <CountriesClient
                countries={countries}
                initialRegion={region ?? ""}
            />
        </main>
    );
}