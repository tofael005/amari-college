
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { BsStarFill, BsStarHalf } from 'react-icons/bs';



const Testimonial = () => {
    const { user } = useContext(AuthContext)
    const [feedback, useFeedback] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/feedback")
            .then(res => res.json())
            .then(data => useFeedback(data))
    }, [])
    return (
        <div className="mt-20 mb-7">
            <h1 className="text-center my-1 text-[#05b6d1] font-bold">Testimonial</h1>
            <h1 className="text-center my-3 text-3xl font-bold text-[#05b6d1]">What Parents Say!</h1>
            <div className="w-[1240px] mx-auto shadow-md border rounded-md">
                <Swiper
                    spaceBetween={40}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,

                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper text-center h-[30vh] mt-8">
                    {
                        feedback.map((feed, index) => <SwiperSlide>
                            <div className='mt-6 p-4'>
                                <h1 className="text-2xl font-bold">{feed.name}</h1>
                                <div className='flex gap-3 mt-4 font-bold items-center justify-center'>
                                    <div className="flex text-orange-400 gap-2 items-center">
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </div>
                                    <p>{feed.rating}</p>
                                </div>
                                <p className="w-[450px] mx-auto">{feed.text}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;


