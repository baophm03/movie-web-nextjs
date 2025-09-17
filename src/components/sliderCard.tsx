// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import CardMovie from './CardMovie';

export default function SliderCard({ data, category }: { data: any, category?: string }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={6}
        >
            {data?.map((n: any) =>
                <SwiperSlide key={n.id}>
                    <CardMovie data={n} category={category} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

