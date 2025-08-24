import React, { useState } from "react";
import SideBar from "../../components/SideBar";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGrid, IoMenuSharp } from "react-icons/io5";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const ProductSList = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="pt-5">
      {/* breadcrumb */}
      <div className="container ">
        <div className="w-fit !ml-8">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              MUI
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Core
            </Link>
            <Typography
              sx={{
                color: "text.primary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      {/* sidebar & listProduct*/}
      <div className="bg-white !mt-5">
        <div className="container flex gap-3 ">
          {/* sidebar */}
          <div className="sidebarWrapper w-[20%] h-full bg-white p-3 !ml-5 !mt-5">
            <SideBar />
          </div>
          {/* listProducts */}
          <div className="listProducts w-[80%]">
            <div className="flex bg-[#f1f1f1] p-2 w-full !my-3 rounded-md items-center justify-between">
              <div className="flex items-center !justify-start !m-0">
                <Button
                  className="!text-black !w-[40px] !h-[40px] !min-w-[40px] !rounded-full"
                  onClick={() => setItemView("list")}
                >
                  <IoMenuSharp
                    className={`text-[18px] transition ${
                      itemView === "list"
                        ? "text-primary"
                        : "text-[rgba(0,0,0,.7)]"
                    }`}
                  />
                </Button>
                <Button
                  className="!text-black !w-[40px] !h-[40px] !min-w-[40px] !rounded-full"
                  onClick={() => setItemView("grid")}
                >
                  <IoGrid
                    className={` transition ${
                      itemView === "grid"
                        ? "text-primary"
                        : "text-[rgba(0,0,0,.7)]"
                    }`}
                  />
                </Button>
                <span className="text-[14px] font-[500] pl-3 !text-[rgba(0,0,0,0.7)]">
                  {" "}
                  There are 30 products
                </span>
              </div>

              <div className="flex items-center !justify-end !m-0">
                <span className="text-[14px] font-[500] pl-3 !text-[rgba(0,0,0,0.7)]">
                  Sort By:
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-black !text-[14px] !mx-3 !capitalize"
                >
                  Select option
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-black !text-[13px] !capitalize"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-black !text-[13px] !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-black !text-[13px] !capitalize"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-black !text-[13px] !capitalize"
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-black !text-[13px] !capitalize"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>
            {/* //product list */}
            <div
              className={`grid !mr-2 ${
                itemView === "grid"
                  ? "grid-cols-2 gap-5 lg:grid-cols-4"
                  : "grid-cols-1 gap-5 lg:grid-cols-1"
              }`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            {/* //pagi */}
            <div className="flex items-center justify-center !my-4">
              <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton variant="outlined" color="primary"/>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSList;
