import React from "react";
import "./QuantityBox.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import Button from "@mui/material/Button";
import { FiMinusCircle } from "react-icons/fi";

const QuantityBox = () => {
  return (
    <div className="qtyBox flex items-center">
      <Button className="!w-[40px] !h-[40px] !rounded-full !p-0 !text-black">
        <IoMdAddCircleOutline className="text-[30px] !m-0 text-[rgba(0,0,0,0.6)]" />
      </Button>

      <input
        type="number"
        min="1"
        className="w-[50px] h-[40px] p-2 text-center text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
      />

      <Button className="!w-[40px] !h-[40px] !rounded-full !p-0 !text-black">
        <FiMinusCircle className="text-[30px] !m-0 text-[rgba(0,0,0,0.6)]" />
      </Button>
    </div>
  );
};

export default QuantityBox;
