import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ban1 from "../assets/banner/banner-1.jpg"
import ban2 from "../assets/banner/banner-2.png"
import ban3 from "../assets/banner/banner-3.webp"


const Banner = () => {
    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="w-full md:h-[600px]">
                        <SwiperSlide><img src={ban1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ban2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ban3} alt="" /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;