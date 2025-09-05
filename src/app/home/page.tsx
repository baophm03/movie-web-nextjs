'use client'

import { useQuery } from "@tanstack/react-query";
import { trendingMovie } from "../../lib/api";

export default function Home() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['trendingMovie'],
        queryFn: trendingMovie
    });

    if (isLoading) return <p>loading..</p>
    if (isError) return <p>Error</p>

    return (
        <div className="p-10">
            <div>
                <div className="flex flex-row justify-between mb-10">
                    <h1>Trending Movies</h1>
                    <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
                </div>
                <div>
                    <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {data.results.map((n: any) =>
                            <li key={n.id}>
                                {n.title}
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="flex flex-row justify-between mb-10">
                <h1>Top Rated Movies</h1>
                <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
            </div>
            <div className="flex flex-row justify-between mb-10">
                <h1>Trending TV</h1>
                <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
            </div>

            <div className="flex flex-row justify-between mb-10">
                <h1>Top Rated TV</h1>
                <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
            </div>
        </div>

    );
}