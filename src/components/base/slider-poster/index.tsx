"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getTopMovie, getTopTV } from '@/services/api';
import Link from 'next/link';
import { Autoplay } from "swiper/modules";
import { Movie } from '@/types/movie';

export default function SliderPoster() {
  const { data } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const [topMovie, topTV] = await Promise.all([
        getTopMovie(1),
        getTopTV(1)
      ]);
      return { topTV, topMovie };
    }
  });

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      {data?.topMovie.results.map((n: Movie) => (
        <SwiperSlide key={n.id}>
          <div className="relative w-full min-h-[100dvh]">
            {/* Background */}
            <Image
              src={`https://image.tmdb.org/t/p/original${n.backdrop_path}`}
              alt={n.title}
              fill
              className="object-cover h-full w-auto opacity-30"
              priority
            />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:justify-between md:pt-20 md:px-16 md:flex-row text-white">
              {/* image */}
              <img
                src={`https://image.tmdb.org/t/p/original${n.poster_path}`}
                alt={n.title}
                className="w-[150px] h-auto rounded-xl object-cover 
                                mb-6 md:mb-0 md:order-2 md:w-[230px] xl:w-[350px]"
              />

              {/* Text */}
              <div className="w-full text-center md:w-3/5 md:text-left lg:w-2/3 lg:text-left">
                <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">{n.title}</h2>

                <p className="text-justify mt-10 mb-10 text-sm md:text-lg lg:text-xl xl:text-2xl line-clamp-4">
                  {n.overview}
                </p>

                {/* button */}
                <div className="flex flex-row gap-3 justify-center md:justify-start lg:justify-start">
                  <Link
                    href={`/movies/${n.id}`}
                    className="font-bold text-[13px] lg:text-xl bg-red-600 cursor-pointer rounded-full py-2 lg:py-3 px-6 lg:px-8 shadow-[1px_1px_15px_3px_rgba(255,0,0,0.7)] hover:shadow-[1px_1px_20px_4px_rgba(255,0,0,1)]"
                  >
                    Watch Now
                  </Link>

                  <button className="font-bold text-[13px] lg:text-xl border border-white rounded-full py-2 lg:py-3 px-6 lg:px-8 hover:text-red-600 hover:bg-white">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}