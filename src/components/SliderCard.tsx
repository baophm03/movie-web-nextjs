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
        >
            {data?.map((data: Movie) =>
                <SwiperSlide key={data.id}>
                    <CardMovie data={data} category={category} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

