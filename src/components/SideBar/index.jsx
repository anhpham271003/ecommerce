import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./SideBar.css";
import { Collapse } from "react-collapse";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Button } from "@mui/material";

import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenAvailable, setOpenAvailable] = useState(false);
  const [isOpenManufacturer, setOpenManufacturer] = useState(false);

  return (
    <div className="sidebar">
      
      {/* //category filter */}
      <div className="box !mb-3">
        <div className=" flex items-center ">
          <h3 className="text-[18px] !ml-3 font-[700] font-nata text-[rgba(0,0,0,0.7)]">
            Shop by Category
          </h3>
          <Button
            className="!text-black !w-[30px] !h-[30px] !min-w-[30px] !rounded-full "
            onClick={() => setOpenCategory(!isOpenCategory)}
          >
            {isOpenCategory ? <FaAngleDoubleUp /> : <FaAnglesDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenCategory}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Phone"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Laptop"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Desktop"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="EarPhone"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="KeyBoard"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Mouse"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Screen"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      {/* //available filter */}
      <div className="box !mb-3">
        <div className=" flex items-center ">
          <h3 className="text-[18px] font-[700] !ml-3 font-nata text-[rgba(0,0,0,0.7)]">
            Availability
          </h3>
          <Button
            className="!text-black !w-[30px] !h-[30px] !min-w-[30px] !rounded-full "
            onClick={() => setOpenAvailable(!isOpenAvailable)}
          >
            {isOpenAvailable ? <FaAngleDoubleUp /> : <FaAnglesDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenAvailable}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Available"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="In Stock"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Not Available"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      {/* //manufacturer  filter */}
      <div className="box !mb-3">
        <div className=" flex items-center ">
          <h3 className="text-[18px] font-[700] !ml-3 font-nata text-[rgba(0,0,0,0.7)]">
            Manufacturer
          </h3>
          <Button
            className="!text-black !w-[30px] !h-[30px] !min-w-[30px] !rounded-full "
            onClick={() => setOpenManufacturer(!isOpenManufacturer)}
          >
            {isOpenManufacturer ? <FaAngleDoubleUp /> : <FaAnglesDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenManufacturer}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Apple"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="SamSung"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Readme"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Dell"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Vivo"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="Asus"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--color-primary)",
                    },
                  }}
                />
              }
              label="HP"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      {/* range price filter  */}
      <div className="box !mb-3">
        <h3 className="text-[18px] font-[700] !ml-3 !mb-3 font-nata text-[rgba(0,0,0,0.7)]">
          Range Price Filter
        </h3>
        <RangeSlider />
        <div className="flex pt-2 price">
          <span className="text-[rgba(0,0,0,0.7)] font-bold text-[13px]">
            From: $ {0}
          </span>
          <span className="text-[rgba(0,0,0,0.7)] font-bold text-[13px]">
            To: $ {0}
          </span>
        </div>
      </div>

      {/* rating filter  */}
      <div className="box !mb-3">
        <h3 className="text-[18px] font-[700] !ml-3 !mb-3 font-nata text-[rgba(0,0,0,0.7)]">
          Rating Filter
        </h3>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={5} size="medium" readOnly />
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={4} size="medium" readOnly />
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={3} size="medium" readOnly />
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={2} size="medium" readOnly />
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={1} size="medium" readOnly />
        </div>
      </div>

    </div>
  );
};

export default SideBar;
