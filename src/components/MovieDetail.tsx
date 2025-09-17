'use client';

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SliderCard from "./SliderCard";
import { getDetailMovie, getDetailMovieCredit, getDetailMovieGetVideo, getDetailMovieSimilar } from "@/services/api";

export default function MovieDetail({ movie }: { movie: { id: string; category: string } }) {

    const { data } = useQuery({
        queryKey: [movie.id, movie.category],
        queryFn: () => getDetailMovie(movie.category, movie.id),
    });

    const { data: credits } = useQuery({
        queryKey: [movie.id, movie.category, 'credits'],
        queryFn: () => getDetailMovieCredit(movie.category, movie.id),
    });

    const { data: getVideos } = useQuery({
        queryKey: [movie.id, movie.category, 'getVideos'],
        queryFn: () => getDetailMovieGetVideo(movie.category, movie.id),

    });

    const { data: similar } = useQuery({
        queryKey: [movie.category, movie.id, "similar"],
        queryFn: () => getDetailMovieSimilar(movie.category, movie.id),

    });

    return (
        <div>
            <div
                style={{
                    backgroundImage: data
                        ? `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`
                        : undefined,
                }}
                className="
                relative bg-center bg-cover bg-no-repeat w-full   
                lg:px-16 md:py-32 py-12 px-4 before:content-[''] before:absolute 
                before:w-full before:left-0 before:right-0  before:bottom-0 
                before:h-1/2 before:bg-[var(--background)] before:bottom-0 
                after:content-[''] after:absolute after:inset-0 after:w-full after:h-1/2 
                after:bg-gradient-to-t after:from-[var(--background)] after:to-transparent"
            >
                <div className="relative z-10 flex max-h-fit   ">
                    <div className="z-50  px-4 mr-4 md:block hidden ">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                            alt="card Image"
                            width={500}
                            height={528}
                            className="object-cover rounded-4xl priority"
                        />
                    </div>
                    <div className="md:px-4 w-full -my-2">
                        <div className="py-4 w-full">
                            <h1 className="text-3xl lg:text-7xl font-bold ">
                                {data?.title}
                            </h1>
                        </div>

                        <div className="flex items-center text-xs lg:text-sm gap-2 py-4 flex-wrap">
                            {data?.genres?.map((item: any) => (
                                <span key={item.id} className="bg-black-main px-4 py-1 border-2 border-white rounded-full text-white text-xs lg:text-sm">
                                    {item.name}
                                </span>
                            ))}
                        </div>

                        <div className="lg:py-4 py-2 text-xs md:text-sm lg:text-base">
                            {data?.overview}
                        </div>

                        {/* Cast */}
                        <div className="py-2 lg:py-4">
                            <h3 className="text-white text-xl font-medium">Casts</h3>

                            <div className="flex  flex-wrap -mx-2 mt-1 ">
                                {credits?.cast?.slice(0, 5).map((item: any) => {
                                    return (
                                        <div className="w-28 px-2 relative px-2" key={item.id}>
                                            <div className="relative w-full   ">
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                                                    alt="card Image"
                                                    className="object-cover rounded-2xl"
                                                    width={96}
                                                    height={144}
                                                />
                                            </div>
                                            <div className=" text-xs md:text-sm">{item.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* youtube */}
            <div className="w-full pr-10 pl-10">
                {getVideos?.results?.slice(0, 3).map((item: any) => {
                    return (
                        <div className="w-full mb-16 " key={item.id}>
                            <div className="w-full mb-4  ">
                                <h3 className="text-base md:text-2xl">{item.name}</h3>
                            </div>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.key}`}
                                    title="YouTube video"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* similar */}
            <div className="pr-10 pl-10 ">
                <h3 className="text-base md:text-2xl">Similar</h3>
                <div className="pt-5 pb-20">
                    <SliderCard data={similar?.results} category={movie.category} />
                </div>
            </div>

        </div >
    );
} 