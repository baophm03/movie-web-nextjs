// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardMovie from './CardMovie';

export default function SliderCard({ data, category }: { data: any, category?: string }) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            autoplay={{ delay: 3000 }}
            loop={true}
        >
            {data?.map((n: any) =>
                <SwiperSlide key={n.id}>
                    <CardMovie data={n} category={category} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

