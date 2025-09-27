// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardMovie from './CardMovie';
import { Movie } from '@/types/movie';

export default function SliderCard({ data, category }: { data: Movie[], category: string }) {
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
            {data?.map((data: Movie) =>
                <SwiperSlide key={data.id}>
                    <CardMovie data={data} category={category} />
                </SwiperSlide>
            )
            }
        </Swiper >
    )
}

