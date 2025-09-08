'use client'

export async function getTrendingMovie() {
    const trendingMovie = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4f85134e0e3de33d9af45eb9596b5735');
    return trendingMovie.json();
};

export async function getTopMovie() {
    const topMovie = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4f85134e0e3de33d9af45eb9596b5735');
    return topMovie.json();
};

export async function getTrendingTV() {
    const trendingTV = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=4f85134e0e3de33d9af45eb9596b5735');
    return trendingTV.json();
};

export async function getTopTV() {
    const topTV = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=4f85134e0e3de33d9af45eb9596b5735');
    return topTV.json();
};