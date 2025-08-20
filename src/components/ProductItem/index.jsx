import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="product-item h-fit overflow-hidden rounded-lg shadow-md">
      <div className="imgWrapper w-full h-[220px] overflow-hidden relative">
        <img
          src="https://didongviet.vn/dchannel/wp-content/uploads/2023/09/5-hinh-anh-iphone-15-pro-max-didongviet.jpg"
          class="w-full !cover"
          alt=""
        />
        <span className="flex items-center absolute z-50 top-[10px] left-[10px] text-white bg-primary rounded-lg p-1 text-[12px] font-[500]">
          -10%
        </span>
      </div>
      <div className="info p-3 text-left bg-[#f1f1f1]">
        <h5 className="text-[17px] font-liber tracking-widest">
          <Link to="/" className="transition-all hover:text-[#ff5252]">
            Iphone 12{" "}
          </Link>
        </h5>
        <h3 className="text-[16px] font-nata leading-[20px] !mt-2 mb-1 font-[500]">
          <Link to="/" className="transition-all hover:text-[#ff5252]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
            omnis?
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        <div className="flex items-center gap-4 ">
          <span className="line-through text-gray-500 text-[15px] font-[500]">
            $60.00
          </span>
          <span className="text-primary text-[15px] font-[500]"> $500.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
