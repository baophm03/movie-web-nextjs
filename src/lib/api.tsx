'use client'

export async function trendingMovie() {
    const trendingMovie = 'https://api.themoviedb.org/3/movie/popular?api_key=4f85134e0e3de33d9af45eb9596b5735';
    const trendingMovieRaw = await fetch(trendingMovie);
    return trendingMovieRaw.json();
};

const topMovie = async () => {
    const topMovie = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4f85134e0e3de33d9af45eb9596b5735';
    const topMovieRaw = await fetch(topMovie);
    return topMovieRaw.json();
};

const trendingTV = async () => {
    const trendingTV = 'https://api.themoviedb.org/3/tv/popular?api_key=4f85134e0e3de33d9af45eb9596b5735';
    const trendingTVRaw = await fetch(trendingTV);
    return trendingTVRaw.json();
};

const topTV = async () => {
    const topTV = 'https://api.themoviedb.org/3/tv/top_rated?api_key=4f85134e0e3de33d9af45eb9596b5735';
    const topTVRaw = await fetch(topTV);
    return topTVRaw.json();
};