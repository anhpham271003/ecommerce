import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "./styles.css";
import "inner-image-zoom/lib/styles.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductZoom.css"

const ProductZoom = () => {
  return (
    <div className="flex gap-3 w-full !ml-0">
      <div className="slider w-[20%]">
        <Swiper
         direction={'vertical'}
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          loop ={true}
          modules={[Navigation]}
          slidesOffsetBefore={0}
          className="zoomProduct !h-[500px] overflow-y-hidden"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[80%] !h-[500px]  flex items-center justify-center">
        <InnerImageZoom
          src={
            "https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
          }
          fullscreenOnMobile={true}
          zoomScale={1}
          //   zoomType='hover'
        //    className="w-full h-full !object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProductZoom;
