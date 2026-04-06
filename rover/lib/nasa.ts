import { APOD } from "@/types/nasa";

const API_KEY = process.env.NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov";

console.log("API KEY:", process.env.NASA_API_KEY); 
export async function getAPOD(): Promise<APOD> {
  const res = await fetch(
    `${BASE_URL}/planetary/apod?api_key=${API_KEY}`,
    {
      next: { revalidate: 86400 }, // cache for 24 hours
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch APOD");
  }

  return res.json();
}