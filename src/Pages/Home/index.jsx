import React from "react";
import Slider from "../../components/Slider";
import CategorySlider from "../../components/CategorySlider";
import BannerSlider from "../../components/BannerSlider";
import { FaShippingFast } from "react-icons/fa";

//tab for products Popular
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../components/ProductSlider";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";

//
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { IoGiftOutline, IoWalletOutline  } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiExchangeLine } from "react-icons/ri";
import Slider2 from "../../components/Slider2";

const Home = () => {
  //state for tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Slider />
      <Slider2 />

      <CategorySlider />
      {/* //products popular */}
      <section className="bg-white py-5">
        {/* //title and tabs for products popular */}
        <div className="container w-full">
          {/* //title and tabs */}
          <div className="flex justify-between items-center">
            {/* //title popular productts */}
            <div className="leftSection">
              <h2 className="text-[25px] font-bold">Popular Products</h2>
              <p className="font-nata">
                Don't miss out on the products on sale!
              </p>
            </div>
            {/* //tabs for products */}
            <div className="rightSection w-[60%] flex justify-end">
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "var(--color-primary)",
                  },
                }}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab
                  label="Phone"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
                <Tab
                  label="Laptop"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
                <Tab
                  label="Desktop"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
                <Tab
                  label="Earphone"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
                <Tab
                  label="Keyboard"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
                <Tab
                  label="Mouse"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
                <Tab
                  label="Screen"
                  sx={{
                    "&.Mui-selected": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              </Tabs>
            </div>
          </div>

          {/* //products popular */}
          <ProductSlider itemsProduct={6} />
        </div>
      </section>

      {/* Shipping and banner */}
      <section className=" pt-10 bg-white">
        <div className="container">
          {/* Free Shipping Banner */}
          <div className="freeShipping !m-auto p-4  border-4 border-amber-500 rounded-md flex items-center justify-between">
            <div className="col-1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]"></FaShippingFast>
              <span className="text-[20px] font-bold">FREE SHIPPING</span>
            </div>

            <div className="col-2 !px-[100px] border-x-3 border-x-gray-400 ">
              <p className=" font-liber text-[23px]  ">
                {" "}
                Free Delivery on all orders over $500
              </p>
            </div>

            <div className="col-3">
              <p className="font-bold text-[25px]">- Only $500*</p>
            </div>
          </div>

          {/* //adsBanner */}
          <BannerSlider items={3} heightItem ={220}/>
        </div>
      </section>

      {/* //banner2 featured products*/}
      <section className=" pt-0 bg-white">
        <div className="container">
          <h2 className="px-[10px] text-[22px] font-[600]">
            Featured Products
          </h2>
          <ProductSlider itemsProduct={6} />
          <BannerSlider items={2} heightItem = {330}/>
        </div>
      </section>

      {/* blog */}
      <section className="py-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            slidesOffsetBefore={0}
            className="mySwiper "
          >
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
          
      {/* benefits */}
      <section className="bg-white border-t-1 border-b-1 py-5 border-gray-300">
        <div className="container">
          <div className="flex items-center justify-center gap-3">
            {/* shipping */}
            <div className="flex items-center justify-center flex-col group w-[20%]">
              <LiaShippingFastSolid className="text-[50px] transition-all group-hover:text-primary duration-250 group-hover:-translate-y-2" />
              <h3 className="text-[18px] font-[600] !mt-2">Free Shipping</h3>
              <p className="text-[13px] font-nata font-[600]">For all Orders Over $500</p>
            </div>
            {/* return */}
            <div className="flex items-center justify-center flex-col group w-[20%]">
              <RiExchangeLine className="text-[50px] transition-all group-hover:text-primary duration-250 group-hover:-translate-y-2" />
              <h3 className="text-[18px] font-[600] !mt-2">30 Days Return</h3>
              <p className="text-[13px] font-nata font-[600]">For an Exchange Product</p>
            </div>

            <div className="flex items-center justify-center flex-col group w-[20%]">
              <IoWalletOutline className="text-[50px] transition-all group-hover:text-primary duration-250 group-hover:-translate-y-2" />
              <h3 className="text-[18px] font-[600] !mt-2">Secured Payment</h3>
              <p className="text-[13px] font-nata font-[600]">Payment Card Accepted</p>
            </div>
            
            <div className="flex items-center justify-center flex-col group w-[20%]">
              <IoGiftOutline className="text-[50px] transition-all group-hover:text-primary duration-250 group-hover:-translate-y-2" />
              <h3 className="text-[18px] font-[600] !mt-2">Special Gift</h3>
              <p className="text-[13px] font-nata font-[600]">My First Product Order</p>
            </div>
            <div className="flex items-center justify-center flex-col group w-[20%]">
              <TfiHeadphoneAlt className="text-[50px] transition-all group-hover:text-primary duration-250 group-hover:-translate-y-2" />
              <h3 className="text-[18px] font-[600] !mt-2">Support 24/7</h3>
              <p className="text-[13px] font-nata font-[600]">Contact me Anytime</p>
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
