export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    name?: string;
    profile_path?: string | null;
    key?: string;
    type?: string;
    first_air_date?: string;
    genres?: { id: number; name: string }[];
}