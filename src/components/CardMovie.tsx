import Link from "next/link";
import { Movie } from "@/types/movie";
import Skeleton from '@mui/material/Skeleton';

export default function CardMovie({ data, category, isLoading }: { data?: Movie, category?: string, isLoading?: boolean }) {

    if (category === 'tv') category = 'tvseries';
    if (category === 'movie') category = 'movies';

    return (
        <div>
            {isLoading ? (
                <div className="relative rounded-xl overflow-hidden pr-3">
                    <div className="relative w-[200px] h-[250px] rounded-xl overflow-hidden">
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                            className="block"
                        />
                    </div>
                    <div className="pt-3 pb-5 w-[100px]">
                        <Skeleton variant="text" width="70%" height={20} />
                    </div>
                </div>
            ) : (
                <Link href={`/${category}/${data?.id}`}>
                    <div className="relative rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                            alt="poster"
                            className="w-full h-auto object-cover aspect-[2/3] group-hover:opacity-50 transition-all duration-300"
                            onError={(e) => {
                                e.currentTarget.src = "/fallback.png";
                            }}
                        />

                        <button className="absolute bg-red-600 cursor-pointer opacity-0 group-hover:opacity-100 rounded-full outline-none py-4 px-8  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:shadow-[1px_1px_15px_3px_rgba(255,0,0,0.7)] hover:shadow-[1px_1px_20px_4px_rgba(255,0,0,1)] transition-all duration-300">
                            <svg stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='pt-3 pb-5 group-hover:text-red-500'>{data?.title || data?.name}</div>
                </Link>
            )}
        </div>
    )
}
