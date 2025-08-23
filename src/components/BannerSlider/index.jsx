import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./BannerSlider.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BannerSlider = (props) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        slidesOffsetBefore={0}
        className="mySwiper "
      >
        <SwiperSlide>
          <Link to="/">
            <div className="bannerBox rounded-xl overflow-hidden">
              <img
                src="https://cdn.s99.vn/cloud/Banner-quang-cao-dien-thoai-thong-minh-file-PSD-mau-HB3-24122024.jpg"
                alt="banner1"
                className="w-full cover transition-all "
                style={{ height: `${props.heightItem}px` }}
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <div className="bannerBox rounded-xl overflow-hidden">
              <img
                src="https://cdn.s99.vn/cloud/Banner-quang-cao-dien-thoai-thong-minh-file-vector-mau-JH273-03032025.jpg"
                alt="banner1"
                className="w-full cover transition-all "
                style={{ height: `${props.heightItem}px` }}
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <div className="bannerBox rounded-xl overflow-hidden">
              <img
                src="https://prbaochi.com/wp-content/uploads/2021/07/mau-banner-quang-cao-san-pham-15.jpg"
                alt="banner1"
                className="w-full cover transition-all"
                style={{ height: `${props.heightItem}px` }}
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <div className="bannerBox rounded-xl overflow-hidden">
              <img
                src="https://logo.sibic.vn/upload/image/20231202/6383710935847606737329161.jpg"
                alt="banner1"
                className="w-full cover transition-all"
                style={{ height: `${props.heightItem}px` }}
              />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
