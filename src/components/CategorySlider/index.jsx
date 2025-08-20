import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CategorySlider.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const CategorySlider = () => {
  return (
    <div className="categorySlider py-4">
      <div className="container">
        <Swiper
          slidesPerView={8}
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
          className="mySwiper !py-0 !mt-10px !h-[150px]"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.overshopping.pk/images/uploads/2812023085224.webp"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 1
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81K0hVHGq4L.jpg"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 2
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://demoda.vn/wp-content/uploads/2022/05/hinh-anh-may-tinh.jpg"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 3
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://freepngimg.com/download/headphones/3-headphones-png-image.png"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 4
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://techbroll.com/wp-content/uploads/2020/04/A6408408-2048x1365.jpg"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 5
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://4.bp.blogspot.com/-ksxFo-EVxL8/WskNQPBq8bI/AAAAAAAAA1U/mgJuqExDzSEyLyVhMtTLwXio5-66JxX2gCLcBGAs/s1600/Viotek-H250-LED.jpg"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 6
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://m.media-amazon.com/images/I/61QY3V6A-NL.jpg"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 7
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://4.bp.blogspot.com/-ksxFo-EVxL8/WskNQPBq8bI/AAAAAAAAA1U/mgJuqExDzSEyLyVhMtTLwXio5-66JxX2gCLcBGAs/s1600/Viotek-H250-LED.jpg"
                  alt="Category 1"
                  className="!w-[100px]  !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 8
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.overshopping.pk/images/uploads/2812023085224.webp"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 9
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.overshopping.pk/images/uploads/2812023085224.webp"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 10
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.overshopping.pk/images/uploads/2812023085224.webp"
                  alt="Category 1"
                  className="!w-[100px] !h-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3 h-auto">
                  Category 1
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
