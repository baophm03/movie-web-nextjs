"use client"
import { useQuery } from "@tanstack/react-query";
import { getTrendingTV } from "@/services/api";
import CardMovie from "@/components/CardMovie";
import Search from "@/components/Search";

export default function TVseries() {
    const { data } = useQuery({
        queryKey: ["TVSeries"],
        queryFn: getTrendingTV
    });

    return (
        <div>
            <div className="bg-gradient-to-b from-white to-[#181818] w-full -z-10 ">
                <h1 className="text-center text-3xl p-15 pt-35">TV Series</h1>
            </div>
            <div className="pl-10 pr-10 pb-10">
                <Search />
                <div className="grid grid-cols-6 gap-6">
                    {data?.results.map((n: any) =>
                        <CardMovie key={n.id} data={n} />
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
