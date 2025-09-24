'use client'
import { Movie } from '@/types/movie';

const API_KEY = '4f85134e0e3de33d9af45eb9596b5735';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovie(PageNumber: number) {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${PageNumber}&include_adult=false`);
    const data = await res.json();
    return {
        ...data,
        results: data.results.map((movie: Movie) => ({
            ...movie,
            media_type: 'movies',
        })),
    }
};

export async function getTopMovie(PageNumber: number) {
    const topMovie = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${PageNumber}&include_adult=false`);
    const data = await topMovie.json();
    return {
        ...data,
        results: data.results.map((movie: Movie) => ({
            ...movie,
            media_type: 'movies',
        })),
    }
};

export async function getPopularMovie(PageNumber: number) {
    const popularMovie = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${PageNumber}&include_adult=false`);
    const data = await popularMovie.json();
    return {
        ...data,
        results: data.results.map((movie: Movie) => ({
            ...movie,
            media_type: 'movies',
        })),
    }
};

export async function getTrendingTV(PageNumber: number) {
    const trendingTV = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}&page=${PageNumber}&include_adult=false`);
    const data = await trendingTV.json();
    return {
        ...data,
        results: data.results.map((tv: Movie) => ({
            ...tv,
            media_type: 'tvseries',
        })),
    }
};

export async function getTopTV(PageNumber: number) {
    const topTV = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=${PageNumber}&include_adult=false`);
    const data = await topTV.json();
    return {
        ...data,
        results: data.results.map((tv: Movie) => ({
            ...tv,
            media_type: 'tvseries',
        })),
    }
};

export async function getPopularTV(PageNumber: number) {
    const popularTV = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${PageNumber}&include_adult=false`);
    const data = await popularTV.json();
    return {
        ...data,
        results: data.results.map((tv: Movie) => ({
            ...tv,
            media_type: 'tvseries',
        })),
    }
};

export async function getDetailMovie(category: string, id: string) {
    const detailMovie = await fetch(`${BASE_URL}/${category}/${id}?api_key=${API_KEY}`);
    return detailMovie.json();
};
export async function getDetailMovieCredit(category: string, id: string) {
    const detailMovie = await fetch(`${BASE_URL}/${category}/${id}/credits?api_key=${API_KEY}`);
    return detailMovie.json();
};

export async function getDetailMovieGetVideo(category: string, id: string) {
    const detailMovie = await fetch(`${BASE_URL}/${category}/${id}/videos?api_key=${API_KEY}&language=en-US`);
    return detailMovie.json();
};

export async function getDetailMovieSimilar(category: string, id: string) {
    const detailMovie = await fetch(`${BASE_URL}/${category}/${id}/similar?api_key=${API_KEY}&language=en-US`);
    return detailMovie.json();
};

export async function getSearch(category: string, query: string, PageNumber: number) {
    const data = await fetch(`${BASE_URL}/search/${category}?api_key=${API_KEY}&query=${query}&page=${PageNumber}&include_adult=false`);
    return data.json();
}