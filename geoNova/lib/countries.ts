import { Country } from '@/types/Country'

const BASE_URL = "https://restcountries.com/v3.1";

// Fetch all countries - only the fields we need
export async function getAllCountries(): Promise<Country[]>{
    const res = await fetch (
        `${BASE_URL}/all?fields=name,cca3,capital,population,region,subregion,flags,area`,
        {
            next: {revalidate: 86400}, //cache for 24hrs
        }
    );
    if(!res.ok){
        throw new Error('Failed to fetch countries');
    }
    return res.json();
}

// fetch a single country by its 3 letter code
export async function getCountryByCode (code:string): Promise<Country>{
    const res = await fetch(
        `${BASE_URL}/alpha/${code}?fields=name,cca3,capital,population,region,subregion,flags,area,languages,currencies,borders`,
        {
            next : {revalidate: 86400},
        }
    );
    if(!res.ok){
        throw new Error (`Failed to fetch country: ${code}`)
    }
    const data = await res.json()
    return data;
}