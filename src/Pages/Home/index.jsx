import React from 'react'
import Slider from '../../components/Slider';
import CategorySlider from '../../components/CategorySlider';
import { FaShippingFast } from "react-icons/fa";

const Home  = () => {
    return (
        <>
            <Slider/>
            <CategorySlider/>
        
            <section className = "py-15 bg-white">
                <div className="container">
                    <div className="freeShipping w-full p-4  border-4 border-amber-500 rounded-md flex items-center justify-between">
                        <div className="col-1 flex items-center gap-4">
                            <FaShippingFast className ="text-[50px]"></FaShippingFast>
                            <span className = "text-[20px] font-bold">FREE SHIPPING</span>
                        </div>

                        <div className="col-2 !px-[100px] border-x-3 border-x-gray-400 " >
                            <p className =" font-liber text-[23px]  ">  Free Delivery on all orders over $500</p>
                        </div>

                        <div className="col-3">
                            <p className ="font-bold text-[25px]">- Only $500*</p>
                        </div>
                    </div>
                </div>
            </section>
            <br /> <br /> <br /> <br /> <br /> <br />
        </>
    )
}

export default Home;