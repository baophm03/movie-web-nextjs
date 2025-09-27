'use client';

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SliderCard from "./SliderCard";
import { getDetailMovie, getDetailMovieCredit, getDetailMovieGetVideo, getDetailMovieSimilar } from "@/services/api";
import { Movie } from "@/types/movie";
import { usePathname } from "next/navigation";
import ErrorPage from "../app/error";

export default function MovieDetail({ movie }: { movie: { category: string; id: string } }) {

    let category = movie.category;

    if (category === 'tvseries') category = 'tv';
    if (category === 'movies') category = 'movie';

    const pathname = usePathname();
    const isTV = pathname.startsWith('/tvseries/');
    const isMovie = pathname.startsWith('/movies/');

    const { data } = useQuery({
        queryKey: [movie.id, category],
        queryFn: () => getDetailMovie(category, movie.id),
    });

    const { data: credits } = useQuery({
        queryKey: [movie.id, category, 'credits'],
        queryFn: () => getDetailMovieCredit(category, movie.id),
    });

    const { data: getVideos } = useQuery({
        queryKey: [movie.id, category, 'getVideos'],
        queryFn: () => getDetailMovieGetVideo(category, movie.id),
    });

    const { data: similar } = useQuery({
        queryKey: [movie.id, category, "similar"],
        queryFn: () => getDetailMovieSimilar(category, movie.id),
    });

    if (!isTV && !isMovie) {
        return <ErrorPage />;
    }

    return (
        <div>
            <div
                style={{
                    backgroundImage: data
                        ? `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`
                        : `url(/fallback.png)`,
                }}
                className="
                    pb-10
                    relative w-full bg-center bg-cover bg-no-repeat
                    md:py-32 lg:px-16
                    before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:content-[''] before:bg-[var(--background)]
                    after:absolute after:inset-0 after:h-1/2 after:content-[''] after:bg-gradient-to-t after:from-[var(--background)] after:to-transparent
                "
            >
                <div className="relative z-10 flex max-h-fit pl-3 pr-3 sm:pl-5 sm:pr-5 md:pl-7 md:pr-7 lg:pl-10 lg:pr-10">
                    {/* poster */}
                    <div className="z-50 px-4 mr-4 md:block hidden ">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                            alt="card Image"
                            width={500}
                            height={528}
                            className="object-cover rounded-4xl priority"
                            onError={(e) => {
                                e.currentTarget.src = "/fallback.png";
                            }} />
                    </div>

                    {/* information */}
                    <div className="md:px-4 w-full -my-2">
                        {/* title */}
                        <div className="py-4 w-full">
                            <h1 className="text-3xl lg:text-7xl font-bold ">
                                {data?.title || data?.name}
                            </h1>
                        </div>

                        {/* genres */}
                        <div className="flex items-center text-xs lg:text-sm gap-2 py-4 flex-wrap">
                            {data?.genres?.map((item: Movie) => (
                                <span key={item.id} className="bg-black-main px-4 py-1 border-2 border-white rounded-full text-white text-xs lg:text-sm">
                                    {item.name}
                                </span>
                            ))}
                        </div>

                        {/* overview */}
                        <div className="lg:py-4 py-2 text-xs md:text-sm lg:text-base">
                            {data?.overview}
                        </div>

                        {/* Cast */}
                        <div className="py-2 lg:py-4">
                            <h3 className="text-white text-xl font-medium">Casts</h3>
                            <div className="flex flex-wrap -mx-2 mt-1 ">
                                {credits?.cast?.slice(0, 5).map((item: Movie) => {
                                    return (
                                        <div className="w-28 px-2 relative px-2" key={item.id}>
                                            <div className="relative w-full">
                                                <Image
                                                    src={
                                                        item.profile_path
                                                            ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                                                            : "/fallback.png"
                                                    } alt="card Image"
                                                    className="object-cover rounded-2xl"
                                                    width={96}
                                                    height={144}
                                                />
                                            </div>
                                            <div className="text-xs md:text-sm">{item.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-3 pr-3 sm:pl-5 sm:pr-5 md:pl-7 md:pr-7 lg:pl-10 lg:pr-10">
                {/* youtube */}
                <div className="w-full">
                    {getVideos?.results?.slice(0, 3).map((item: Movie) => {
                        return (
                            <div key={item.id} className="pb-5">
                                {/* title */}
                                <div className="pt-3 pb-3">
                                    <h3>{item.name}</h3>
                                </div>
                                {/* youtube video */}
                                <div className="relative pb-[56.25%]">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${item.key}`}
                                        title="YouTube video"
                                        className="absolute top-0 left-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* similar */}
                <div className="pt-5 pb-15">
                    <h3 className="pt-3 pb-3">Similar</h3>
                    <SliderCard data={similar?.results} category={category} />
                </div>
            </div>
        </div>
    );
} 