import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./style.css";
import { Autoplay, Navigation, Pagination } from "swiper";

const Slider = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper mb-24 md:mb-28 rounded-lg"
            >
                <SwiperSlide style={{ "backgroundImage": `url(${img1})`, height: 600 }} className="bg-cover bg-center p-14 md:p-28">
                    <div className="flex items-center h-full">
                        <div>
                            <h1 className="text-center md:text-start text-white text-4xl md:text-5xl font-semibold md:w-96">
                                Affordable Price For Car Servicing
                            </h1>
                            <div>
                                <p className="text-white my-5 md:w-[460px] text-center md:text-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                </p>
                            </div>
                            <div className="text-center md:text-start">
                                <button className="btn-fill mr-4">Discover More</button>
                                <button className="btn-transparent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ "backgroundImage": `url(${img2})`, height: 600 }} className="bg-cover bg-center p-14 md:p-28">
                    <div className="flex items-center h-full">
                        <div>
                            <h1 className="text-center md:text-start text-white text-4xl md:text-5xl font-semibold md:w-96">
                                Affordable Price For Car Servicing
                            </h1>
                            <div>
                                <p className="text-white my-5 md:w-[460px] text-center md:text-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                </p>
                            </div>
                            <div className="text-center md:text-start">
                                <button className="btn-fill mr-4">Discover More</button>
                                <button className="btn-transparent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ "backgroundImage": `url(${img3})`, height: 600 }} className="bg-cover bg-center p-14 md:p-28">
                    <div className="flex items-center h-full">
                        <div>
                            <h1 className="text-center md:text-start text-white text-4xl md:text-5xl font-semibold md:w-96">
                                Affordable Price For Car Servicing
                            </h1>
                            <div>
                                <p className="text-white my-5 md:w-[460px] text-center md:text-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                </p>
                            </div>
                            <div className="text-center md:text-start">
                                <button className="btn-fill mr-4">Discover More</button>
                                <button className="btn-transparent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ "backgroundImage": `url(${img4})`, height: 600 }} className="bg-cover bg-center p-14 md:p-28">
                    <div className="flex items-center h-full">
                        <div>
                            <h1 className="text-center md:text-start text-white text-4xl md:text-5xl font-semibold md:w-96">
                                Affordable Price For Car Servicing
                            </h1>
                            <div>
                                <p className="text-white my-5 md:w-[460px] text-center md:text-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                </p>
                            </div>
                            <div className="text-center md:text-start">
                                <button className="btn-fill mr-4">Discover More</button>
                                <button className="btn-transparent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;