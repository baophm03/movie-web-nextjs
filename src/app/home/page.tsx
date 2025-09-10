'use client'

import { useQuery } from "@tanstack/react-query";
import { getTrendingMovie, getTopMovie, getTrendingTV, getTopTV } from "@/services/api";
import SliderCard from "@/components/SliderCard";
import Image from "next/image";
import SliderPoster from "@/components/SliderPoster";

export default function Home() {

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
        <div >
            {/* SliderPoster */}
            <SliderPoster />
            <div className="p-10">
                {/* Trending Movies */}
                <div>
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Trending Movies</h1>
                        <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.trendingMovie.results} />
                </div>

                {/* Top Rated Movies */}
                <div>
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Top Rated Movies</h1>
                        <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.topMovie.results} />
                </div>

                {/* Trending TV */}
                <div>
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Trending TV</h1>
                        <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.trendingTV.results} />
                </div>


                {/* Top Rated TV */}
                <div >
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Top Rated TV</h1>
                        <button className="border border-white rounded-2xl pl-4 pr-4">View more</button>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.topTV.results} />
                </div>
            </div >
        </div>
    );
}