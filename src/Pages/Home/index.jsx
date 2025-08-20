import React from "react";
import Slider from "../../components/Slider";
import CategorySlider from "../../components/CategorySlider";
import BannerSlider from "../../components/BannerSlider";
import { FaShippingFast } from "react-icons/fa";
//tab for products Popular
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box';
import ProductSlider from "../../components/ProductSlider";

const Home = () => {
  //state for tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Slider />
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
		  <ProductSlider itemsProduct ={6}/>

        </div>
      </section>


      <section className=" py-10 bg-white">
        <div className="container">
          {/* Free Shipping Banner */}
          <div className="freeShipping  !m-auto p-4  border-4 border-amber-500 rounded-md flex items-center justify-between">
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
          <BannerSlider items={3} />
        </div>
      </section>

      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;
