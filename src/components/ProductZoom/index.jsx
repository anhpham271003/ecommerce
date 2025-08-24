import React from 'react';
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "./styles.css";
import "inner-image-zoom/lib/styles.min.css";
import "swiper/css";
import "swiper/css/navigation";

const ProductZoom = () => {
  return (
     <InnerImageZoom
          src={'https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85'}
          fullscreenOnMobile={true}
          zoomScale={1}
        //   zoomType='hover'
        />
  );
};

export default ProductZoom;