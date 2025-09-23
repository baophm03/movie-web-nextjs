// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardMovie from './CardMovie';

export default function SliderCard({ data }: { data: any }) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            autoplay={{ delay: 3000 }}
            loop={true}
        >
            {data?.map((data: any) =>
                <SwiperSlide key={data.id}>
                    <CardMovie data={data} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

