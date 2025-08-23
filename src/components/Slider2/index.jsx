import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider2.css"

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider2 = () => {
  return (
    <section className="py-5">
      <div className="container flex  !items-center gap-3">
        <div className="part1 w-[70%] h-[400px]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="slider2"
          >
            <SwiperSlide>
              <div className="w-full rounded-md overflow-hidden h-full">
                <img
                  src="https://webmedia.com.vn/images/2020/05/banner-slide-laptop-moi-gia-re-nhat-quang-ninh.jpg"
                  className="h-full object-fit-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-md overflow-hidden h-full">
                <img
                  src="https://shopfile.net/uploads/products/large/file-poster-banner-quang-cao-laptop-14-demo.jpg"
                  className="h-full object-fit-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-md overflow-hidden h-full">
                <img
                  src="https://didongviet.vn/dchannel/wp-content/uploads/2024/01/IP15-3-KHONG_1200x630.jpg"
                  className="h-full object-fit-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="part2 w-[30%] flex items-center justify-between flex-col gap-3">
          <div className="sliderRight w-full rounded-md overflow-hidden group">
            <img
              src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai-dep_103211368.jpg"
              class="img-fluid rounded-top"
              alt=""
              className="w-full h-[200px] object-fit-contain transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <div className="sliderRight w-full rounded-md overflow-hidden group">
            <img
              src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai-dep_103211368.jpg"
              class="img-fluid rounded-top"
              alt=""
              className="w-full h-[200px] object-fit-contain transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider2;
