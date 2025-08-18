import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider =() => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className ="homeSlider">
       <div className="container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={{
                    enabled: true, // control navigation always 
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://logo.sibic.vn/upload/image/20231202/6383710935847606737329161.jpg" alt="Slide 1" className ="w-full h-full object-cover"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://prbaochi.com/wp-content/uploads/2021/07/mau-banner-quang-cao-san-pham-15.jpg" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://chuyenstandee.com/wp-content/uploads/2021/03/banner-quang-cao-du-khach-hang-hieu-qua-3.jpg" alt="Slide 4" />
                </SwiperSlide>
                
                <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
                </div>
            </Swiper>
       </div>
    </div>
  );
}

export default Slider;