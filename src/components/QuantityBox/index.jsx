import React, { useState } from "react";
import "./QuantityBox.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import Button from "@mui/material/Button";
import { FiMinusCircle } from "react-icons/fi";

const QuantityBox = () => {
  const [qty, setQty] = useState(1);

  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="qtyBox flex items-center">
      <Button
        className="!rounded-full !p-0 flex items-center justify-center !min-w-[35px] !text-black"
        onClick={decrease}
      >
        <FiMinusCircle className="text-[30px] !m-0 text-[rgba(0,0,0,0.6)]" />
      </Button>

      <input
        type="number"
        value={qty}
        min="1"
        className="w-[50px] h-[40px] p-2 text-center text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
      />

      <Button
        className="!rounded-full !p-0 flex items-center justify-center !min-w-[35px] !text-black"
        onClick={increase}
      >
        <IoMdAddCircleOutline className="text-[30px] !m-0 text-[rgba(0,0,0,0.6)]" />
      </Button>
    </div>
  );
};

export default QuantityBox;
