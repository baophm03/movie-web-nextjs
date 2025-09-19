"use client"
import { useQuery } from "@tanstack/react-query";
import { getTrendingTV, getSearch } from "@/services/api";
import CardMovie from "@/components/CardMovie";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function TVseries() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const query = searchParams.get("keyword") || "";

    const [input, setInput] = useState(query)

    const { data } = useQuery({
        queryKey: ["TVSeries", query],
        queryFn: () => {
            return query ? getSearch('tv', input) : getTrendingTV()
        },
    });

    const getAPI = async () => {
        if (!input) return
        router.push(`/tvseries?keyword=${encodeURIComponent(input)}`);
    }

    useEffect(() => {
        setInput(query)
    }, [query])

    return (
        <div>
            <div className="bg-gradient-to-b from-white to-[#181818] w-full -z-10 ">
                <h1 className="text-center text-3xl p-15 pt-35">TV Series</h1>
            </div>
            <div className="pl-10 pr-10 pb-10">

                <div className="relative pt-10 pb-10 w-[35%]">
                    <input
                        className="w-full text-white bg-black rounded-3xl p-2 pl-4"
                        type="text"
                        placeholder="Enter keyword"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 shadow-[1px_1px_15px_3px_rgba(255,0,0,0.7)] hover:shadow-[1px_1px_20px_4px_rgba(255,0,0,1)]  rounded-3xl py-2 px-7 cursor-pointer"
                        onClick={() => getAPI()}
                    >
                        Search
                    </button>
                </div>

                <div className="grid grid-cols-6 gap-6">
                    {data?.results.map((n: any) =>
                        <CardMovie key={n.id} data={n} category="tvseries" />
                    )}
                </div>

                <div className="flex justify-center">
                    <button className="cursor-pointer  bg-black hover:bg-white text-white hover:text-red-500 border-2 border-white rounded-3xl p-1 pl-5 pr-5">
                        Watch more
                    </button>
                </div>
            </div>
        </div >
    );
}
