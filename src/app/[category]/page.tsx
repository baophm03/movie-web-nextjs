"use client"

import { useInfiniteQuery } from "@tanstack/react-query";
import { getTrendingTV, getSearch, getPopularTV, getTopTV, getTrendingMovie, getPopularMovie, getTopMovie } from "@/services/api";
import CardMovie from "@/components/CardMovie";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ErrorPage from "@/app/error";
import React from "react";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = React.use(params);

    let key: string | undefined;
    let keysearch: string = "";
    let keyrouter: string = "";

    if (category === "tvseries") {
        key = "TV Series";
        keysearch = "tv";
        keyrouter = "tvseries";
    } else if (category === "movies") {
        key = "Movies";
        keysearch = "movies";
        keyrouter = "movies";
    } else {
        return <ErrorPage />
    }

    const router = useRouter();
    const searchParams = useSearchParams();

    const search = searchParams.get("keyword") || "";
    const type = searchParams.get("type") || "";
    const queryKey = search || type;

    const [input, setInput] = useState(search);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: [key, queryKey],
        initialPageParam: 1,
        queryFn: ({ pageParam = 1 }) => {
            if (queryKey === "") return key === "TV Series" ? getPopularTV(pageParam) : getPopularMovie(pageParam);
            if (queryKey === "trending") return key === "TV Series" ? getTrendingTV(pageParam) : getTrendingMovie(pageParam);
            if (queryKey === "top_rated") return key === "TV Series" ? getTopTV(pageParam) : getTopMovie(pageParam);
            return getSearch(keysearch, queryKey, pageParam);
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1;
            }
            return undefined;
        },
    });

    const getAPI = async () => {
        if (!input) return
        router.push(`/${keyrouter}?keyword=${encodeURIComponent(input)}`);
    }

    useEffect(() => {
        setInput(search)
    }, [search])

    return (
        <div>
            <div className="bg-gradient-to-b from-white to-[#181818] w-full -z-10 ">
                <h1 className="text-center text-3xl p-15 pt-35">{key}</h1>
            </div>
            <div className="pl-10 pr-10 pb-10">

                <div className="relative pt-10 pb-10 w-[35%]">
                    <input
                        className="w-full text-white bg-black rounded-3xl p-2 pl-4"
                        type="text"
                        placeholder="Enter keyword"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        onKeyDown={(e) => { if (e.key == "Enter") getAPI() }}
                    />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 shadow-[1px_1px_15px_3px_rgba(255,0,0,0.7)] hover:shadow-[1px_1px_20px_4px_rgba(255,0,0,1)]  rounded-3xl py-2 px-7 cursor-pointer"
                        onClick={() => getAPI()}
                    >
                        Search
                    </button>
                </div>

                <div className="grid grid-cols-6 gap-6 pb-10">
                    {data?.pages.flatMap((page, pageIndex) =>
                        page.results.map((movie: any) => (
                            <CardMovie key={`${movie.id}-${pageIndex}`} data={movie} category={keysearch} />
                        ))
                    )}
                </div>

                <div className="flex justify-center">
                    {hasNextPage && (
                        <button className="cursor-pointer  bg-black hover:bg-white text-white hover:text-red-500 border-2 border-white rounded-3xl p-1 pl-5 pr-5"
                            onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                            {isFetchingNextPage ? "Loading..." : "Watch more"}
                        </button>
                    )}
                </div>
            </div>
        </div >
    );
}
