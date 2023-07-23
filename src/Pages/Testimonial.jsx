import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const Testimonial = () => {
    return (
        <div className="mt-20">
            <h1 className="text-center my-3">Testimonial</h1>
            <h1 className="text-center my-3 text-3xl font-bold text-[#05b6d1]">What Parents Say!</h1>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper  text-center h-[20vh] mt-7"
                >
                    <SwiperSlide>
                    <div>
                        <h1>Hello</h1>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    
                </Swiper>
            </div>
        </div >
    );
};

export default Testimonial;