import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ProductItem = () => {
  return (
    <div className="productItem h-fit overflow-hidden rounded-lg shadow-md group">
      <div className="imgWrapper w-full h-[220px] overflow-hidden relative">
        <Link to="/">
          <div className= "img h-[220px] overflow-hidden">
            <img
            src="https://gizmobo.com/wp-content/uploads/2022/08/Apple-iPhone-14-Pro-gold.jpg"
            class="h-[220px] !object-contain object-center"
            alt=""
          />
            <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487267_sd.jpg"
            class="h-[220px] !object-contain object-center transition-all duration-800 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            alt=""
          />
          </div>
        </Link>
        <span className="flex items-center absolute z-50 top-[10px] left-[10px] text-white bg-primary rounded-lg p-1 text-[12px] font-[500]">
          -10%
        </span>
        <div
          className="actions absolute top-[-150px] right-[3px] z-50 flex items-center gap-1 flex-col w-[50px] opacity-0
        transition-all duration-400 group-hover:top-[10px] group-hover:opacity-100"
        >
          <Tooltip title="WishList" placement="right" arrow>
            <Button className=" !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-sky-300 text-white hover:!bg-primary hover:text-white group">
              <FaRegHeart className="text-[18px] !text-white group-hover:text-white hover:!text-white pointer-events-none" />
            </Button>
          </Tooltip>

          <Tooltip title="Compare" placement="right" arrow>
            <Button className=" !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-sky-300 text-white hover:!bg-primary hover:text-white group">
              <GoGitCompare className="text-[18px] !text-white group-hover:text-white hover:!text-white pointer-events-none" />
            </Button>
          </Tooltip>

          <Tooltip title="Zoom" placement="right" arrow>
            <Button className=" !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-sky-300 text-white hover:!bg-primary hover:text-white group">
              <MdOutlineZoomOutMap className="text-[18px] !text-white group-hover:text-white hover:!text-white pointer-events-none" />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="info p-2 text-left bg-[#f1f1f1]">
        <h5 className="text-[16px] font-liber tracking-widest">
          <Link to="/" className="transition-all hover:text-[#ff5252]">
            Iphone 12{" "}
          </Link>
        </h5>
        <h3 className="text-[15px] font-nata leading-[18px] !mt-2 mb-1 font-[500]">
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
