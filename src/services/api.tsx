'use client'
const API_KEY = '4f85134e0e3de33d9af45eb9596b5735';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovie() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return {
        ...data,
        results: data.results.map((movie: any) => ({
            ...movie,
            media_type: 'movies',
        })),
    }
};

export async function getTopMovie() {
    const topMovie = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    const data = await topMovie.json();
    return {
        ...data,
        results: data.results.map((movie: any) => ({
            ...movie,
            media_type: 'movies',
        })),
    }
};

export async function getTrendingTV() {
    const trendingTV = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await trendingTV.json();
    return {
        ...data,
        results: data.results.map((tv: any) => ({
            ...tv,
            media_type: 'tvseries',
        })),
    }
};

export async function getTopTV() {
    const topTV = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
    const data = await topTV.json();
    return {
        ...data,
        results: data.results.map((tv: any) => ({
            ...tv,
            media_type: 'tvseries',
        })),
    }
};