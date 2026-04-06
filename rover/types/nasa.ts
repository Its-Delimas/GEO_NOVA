export type APOD ={
    title:string;
    date:string;
    explanation:string;
    url:string;
    hdurl:string;
    media_type:"image"| "video";
    copyright?:string;
};