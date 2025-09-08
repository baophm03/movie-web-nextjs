"use client";

import { useQuery } from "@tanstack/react-query";
import { getTopMovie, getTopTV, getTrendingMovie, getTrendingTV } from "@/services/api";
export default function Movies() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["Movie"],
        queryFn: async () => {
            const [trendingMovie, topMovie, trendingTV, topTV] = await Promise.all([
                getTrendingMovie(),
                getTopMovie(),
                getTrendingTV(),
                getTopTV()
            ]);
            return { trendingMovie, topMovie, trendingTV, topTV };
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error!</div>;

    return (
        <div className="p-10">
            <h1 className="text-center text-3xl p-5">Movies</h1>
            <div className="pt-10 pb-10">
                <input className="text-white bg-gray-500 rounded-3xl p-1 pl-5 pr-5" type="text" />
                <button className="bg-red-500 rounded-3xl p-1 pl-5 pr-5 cursor-pointer">Search</button>
            </div>

            <div>
                {data?.topMovie.results.map((n: any) =>
                    <div key={n.id} className="cursor-pointer" >
                        <img
                            src={`https://image.tmdb.org/t/p/original${n.poster_path}`}
                            alt={n.title}
                            className="rounded-xl"
                        />
                        <div>{n.title}</div>
                    </div>
                )}

            </div>

            <div className="flex justify-center">
                <button className="cursor-pointer
                bg-black hover:bg-white text-white hover:text-red-500 
                border-2 border-white rounded-3xl p-1 pl-5 pr-5">
                    Watch more
                </button>
            </div>
        </div >
    );
}
