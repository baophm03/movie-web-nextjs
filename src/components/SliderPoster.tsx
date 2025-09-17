"use client";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getTopMovie, getTopTV } from '@/services/api';

export default function SliderPoster() {
    const { data } = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
            const [topMovie, topTV] = await Promise.all([
                getTopMovie(),
                getTopTV()
            ]);
            return { topTV, topMovie };
        }
    });

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}

        >
            {data?.topMovie.results.map((n: any) => (
                <SwiperSlide key={n.id}>
                    <div className='relative flex justify-center items-center'>
                        <Image
                            src={`https://image.tmdb.org/t/p/original${n.backdrop_path}`}
                            alt={n.title}
                            width={1000}
                            height={100}
                            className='h-full w-full opacity-30'
                        />
                        <div className='absolute flex justify-center items-center gap-20'>
                            <div className='w-[40%]'>
                                <h2 className='text-5xl font-bold'>{n.title}</h2>
                                <p className='pt-10 pb-10 text-xl'>{n.overview}</p>
                                <div className='flex gap-3'>
                                    <button className='font-bold bg-red-600 cursor-pointer rounded-full py-3 px-6 shadow-[1px_1px_15px_3px_rgba(255,0,0,0.7)] hover:shadow-[1px_1px_20px_4px_rgba(255,0,0,1)]'>Watch Now</button>
                                    <button className='font-bold border border-white rounded-full py-3 px-6 hover:text-red-600 hover:bg-white'>Watch Trailer</button>
                                </div>
                            </div>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${n.poster_path}`}
                                alt={n.title}
                                width={250}
                                height={100}
                                className='rounded-2xl object-cover h-auto w-auto'
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))
            }
        </Swiper >
    );
}