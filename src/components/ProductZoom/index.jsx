import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductZoom.css";
import { FaWindowClose } from "react-icons/fa";

const ProductZoom = () => {

  //control open popup 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const openModal = (img) => {
    setSelectedImg(img);
    setIsOpen(true);
  };
  //
  // control change img slider
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderSml = useRef();
  const zoomSliderBig = useRef();
  const goto = (index) =>{
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }

  return (
    <div className="flex gap-3 w-full !ml-0">
      <div className="slider w-[20%]">
        <Swiper
        ref={zoomSliderSml}
          direction={"vertical"}
          slidesPerView={5}
          spaceBetween={5}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          slidesOffsetBefore={0}
          className="zoomProduct !h-[500px] overflow-y-hidden"
        >
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ?' opacity-100' : 'opacity-30'}`}
              onClick={() => goto(0)}
            >
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ?' opacity-100' : 'opacity-30'}`}
              onClick={() => goto(1)}
            >
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ?' opacity-100' : 'opacity-30'}`}
              onClick={() => goto(2)}
            >
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ?' opacity-100' : 'opacity-30'}`}
              onClick={() => goto(3)}
            >
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ?' opacity-100' : 'opacity-30'}`}
              onClick={() => goto(4)}
            >
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 5 ?' opacity-100' : 'opacity-30'}`}
              onClick={() => goto(5)}
            >
              <img
                src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                alt=""
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[80%] !h-[500px] flex items-center justify-center">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
              alt="Main product"
              className="max-h-full max-w-full object-contain cursor-pointer"
              onClick={() =>
                openModal(
                  "https://cdn.nguyenkimmall.com/images/detailed/711/10048376-dien-thoai-samsung-galaxy-s21-8gb-128gb-tim-1.jpg"
                )
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.nguyenkimmall.com/images/detailed/824/dien-thoai-iphone-14-pro-max-512gb-tim-4.jpg"
              alt="Main product"
              className="max-h-full max-w-full !object-contain cursor-pointer"
              onClick={() =>
                openModal(
                  "https://cdn.nguyenkimmall.com/images/detailed/824/dien-thoai-iphone-14-pro-max-512gb-tim-4.jpg"
                )
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.nguyenkimmall.com/images/detailed/824/dien-thoai-iphone-14-pro-max-256gb-vang-3.jpg"
              alt="Main product"
              className="max-h-full max-w-full object-contain cursor-pointer"
              onClick={() =>
                openModal(
                  "https://cdn.nguyenkimmall.com/images/detailed/824/dien-thoai-iphone-14-pro-max-256gb-vang-3.jpg"
                )
              }
            />
          </SwiperSlide>

          {/* Popup modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
              <div className="relative bg-white rounded-xl p-4 max-w-[80%] max-h-[80%] flex flex-col">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl transition duration-300"
                >
                  <FaWindowClose />
                </button>
                <img
                  src={selectedImg}
                  alt="Zoomed"
                  className="max-h-[70vh] max-w-[70vw] object-contain mx-auto"
                />
              </div>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
