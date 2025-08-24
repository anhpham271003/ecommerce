import React from "react";
import SideBar from "../../components/SideBar";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import ProductItem from "../../components/ProductItem";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const ProductSList = () => {
  return (
    <section className="py-5">
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
          <div className="sidebarWrapper w-[20%] h-full bg-white p-3 !ml-10">
            <SideBar />
          </div>
          {/* listProducts */}
          <div className="listProducts w-[80%]">
            <div className="grid grid-cols-4  ">
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSList;
