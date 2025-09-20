'use client'

import { useQuery } from "@tanstack/react-query";
import { getTrendingMovie, getTopMovie, getTrendingTV, getTopTV } from "@/services/api";
import SliderCard from "@/components/SliderCard";
import Image from "next/image";
import SliderPoster from "@/components/SliderPoster";
import Link from "next/link";

export default function Home() {

    const { data } = useQuery({
        queryKey: ["Home"],
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

    return (
        <div >
            {/* SliderPoster */}
            <SliderPoster />
            <div className="p-10">
                {/* Trending Movies */}
                <div>
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Trending Movies</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/movies?type=trending"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.trendingMovie?.results} />
                </div>

                {/* Top Rated Movies */}
                <div>
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Top Rated Movies</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/movies?type=top_rated"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.topMovie?.results} />
                </div>

                {/* Trending TV */}
                <div>
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Trending TV</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/tvseries?type=trending"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.trendingTV?.results} />
                </div>


                {/* Top Rated TV */}
                <div >
                    <div className="flex flex-row justify-between pt-10 mb-10">
                        <h1 className="text-2xl">Top Rated TV</h1>
                        <Link className="border border-white rounded-2xl pl-4 pr-4 flex items-center hover:bg-white hover:text-red-500"
                            href={"/tvseries?type=top_rated"}
                        >
                            <p>View more</p>
                        </Link>
                    </div>

                    {/* slider danh sach phim */}
                    <SliderCard data={data?.topTV?.results} />
                </div>
            </div >
        </div>
    );
}