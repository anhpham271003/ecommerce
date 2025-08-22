import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";

const ProductSlider = (props) => {
  return (
    <div className="productSlider p-2 !mt-[10px]">
      <Swiper
        slidesPerView={props.itemsProduct}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        slidesOffsetBefore={0}
        className="mySwiper "
      >
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
