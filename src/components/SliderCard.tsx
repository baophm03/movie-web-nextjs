// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardMovie from './CardMovie';
import { Movie } from '@/types/movie';

export default function SliderCard({ data, category, isLoading }: { data?: Movie[], category?: string, isLoading?: boolean }) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={
                {
                    100: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }
            }
        >
            {isLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <SwiperSlide key={i} className="!w-auto">
                        <CardMovie category={category} isLoading={true} />
                    </SwiperSlide>
                ))
                : data?.map((movie: Movie) => (
                    <SwiperSlide key={movie.id}>
                        < CardMovie data={movie} category={category} isLoading={false} />
                    </SwiperSlide>
                ))
            }
        </Swiper >
    )
}

