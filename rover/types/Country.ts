export type Country = {
    name: {
        common:string;
        official: string;
    };
    cca3: string;
    capital?:string;
    population:number;
    region:string;
    subregion?:string;
    flags: {
        svg:string;
        png:string;
        alt?:string;
    };
    area:number;
    languages: Record<string, string>
    currencies?:Record<string,{name:string; symbol:string}>;
    borders?:string[];
};