// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

export default function SliderCard({ data }: { data: any }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={6}
        >
            {data.map((n: any) =>
                <SwiperSlide key={n.id} className="cursor-pointer" >
                    <img
                        src={`https://image.tmdb.org/t/p/original${n.poster_path}`}
                        alt={n.title}
                        className="rounded-xl"
                    />
                    <div>{n.title}</div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}