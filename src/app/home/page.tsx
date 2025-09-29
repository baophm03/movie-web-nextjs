'use client'

import { useQuery } from "@tanstack/react-query";
import { getTrendingMovie, getTopMovie, getTrendingTV, getTopTV } from "@/services/api";
import SliderCard from "@/components/SliderCard";
import SliderPoster from "@/components/SliderPoster";
import Link from "next/link";

export default function Home() {

    const { data } = useQuery({
        queryKey: ["Home"],
        queryFn: async () => {
            const [trendingMovie, topMovie, trendingTV, topTV] = await Promise.all([
                getTrendingMovie(1),
                getTopMovie(1),
                getTrendingTV(1),
                getTopTV(1)
            ]);
            return { trendingMovie, topMovie, trendingTV, topTV };
        }
    });

    return (
        <div>
            {/* SliderPoster */}
            <SliderPoster />
            <div className="pl-3 pr-3 md:pl-10 md:pr-10 pb-10">
                {/* Trending Movies */}
                <div>
                    <div className="flex flex-row justify-between pt-10 pb-7">
                        <h1 className="text-2xl">Trending Movies</h1>
                        <Link className="border border-white font-bold rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/movies?type=trending"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.trendingMovie?.results} category="movie" />
                </div>

                {/* Top Rated Movies */}
                <div>
                    <div className="flex flex-row justify-between pt-10 pb-7">
                        <h1 className="text-2xl">Top Rated Movies</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/movies?type=top_rated"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.topMovie?.results} category="movie" />
                </div>

                {/* Trending TV */}
                <div>
                    <div className="flex flex-row justify-between pt-10 pb-7">
                        <h1 className="text-2xl">Trending TV</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/tvseries?type=trending"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.trendingTV?.results} category="tv" />
                </div>


                {/* Top Rated TV */}
                <div >
                    <div className="flex flex-row justify-between pt-10 pb-7">
                        <h1 className="text-2xl">Top Rated TV</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/tvseries?type=top_rated"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.topTV?.results} category="tv" />
                </div>
            </div >
        </div>
    );
}