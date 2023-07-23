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
            <div className="flex text-center justify-center mx-auto mt-10">
                <input className="border w-[500px] p-3 rounded-s-md" type="search" name="" id="" placeholder="Search" />
                <input className="border p-3 bg-[#05b6d1] rounded-e-md font-semibold hover:bg-[#0b96ac] duration-300" type="button" value="Search" />
            </div>
            <div className="mt-6">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper md:h-[75vh]"
                >
                    <div>
                        <SwiperSlide><img src={ban1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ban2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ban3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ban2} alt="" /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;