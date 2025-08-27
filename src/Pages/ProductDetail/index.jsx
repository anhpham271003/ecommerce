import React, { useState } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import Rating from "@mui/material/Rating";

import ProductZoom from "../../components/ProductZoom";
import Button from "@mui/material/Button";
import QuantityBox from "../../components/QuantityBox";

const ProductDetail = () => {
  const [typeProduct, setTypeProduct] = useState(null);

  const changeTypeProduct = (index) => {
    if (index === typeProduct) {
      setTypeProduct(null);
    } else {
      setTypeProduct(index);
    }
  };
  return (
    <>
      {/* breadcrumb */}
      <div className="container py-5">
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

      {/* zoom product */}
      <section className="bg-white py-5 ">
        <div className="container flex gap-4">
          <div className="productZoom w-[40%] overflow-hidden">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] !mt-5 !ml-5">
            <h1 className="text-[25px] font-[600] !mb-2"> IPhone 12 Promax</h1>
            <div className="flex items-center justify-start !w-fit !m-0">
              <span className="text-gray-500 text-[13px] ">
                Manufacturer :{" "}
                <span className="font-[600] text-black opacity-75">Apple</span>
              </span>
              <Rating
                name="size-small"
                defaultValue={2}
                size="small"
                readOnly
                className="!ml-2"
              />
              <span className="!text-[13px] cursor-pointer !ml-2  opacity-65">
                Review (5)
              </span>
            </div>
            <div className="flex items-center gap-4 !my-3">
              <span className="line-through text-gray-500 text-[17px] font-[500] !m-0">
                $60.00
              </span>
              <span className="text-primary text-[17px] font-[500] !m-0">
                $500.00
              </span>
            </div>

            <div className="!mb-3">
              <span className="font-bold">Available In Stock: </span>
              <span className="font-bold text-green-600">147 Products</span>
            </div>

            <p className="line-clamp-5 text-[rgba(0,0,0,0.7)] font-liber !text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              totam vero exercitationem illo saepe aspernatur mollitia
              laudantium quibusdam quasi ratione vel unde excepturi corporis
              voluptatem ex in eligendi, labore a voluptatum autem. Dolore natus
              nostrum accusamus voluptatum eligendi provident, enim placeat
              cumque labore? Minus repellat, assumenda distinctio illum a omnis.
            </p>

            <div className="flex items-center gap-3 !mt-5">
              <span className="text-[16px] font-bold !m-0">Type : </span>
              <div className="flex items-center actions gap-1  !m-0">
                <Button
                  className={`!min-w-[40px] !h-[30px] !border-1 !border-gray-200 !text-[rgba(0,0,0,0.7)] ${
                    typeProduct === 0 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => changeTypeProduct(0)}
                >
                  64 GB
                </Button>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border-1 !border-gray-200 !text-[rgba(0,0,0,0.7)] ${
                    typeProduct === 1 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => changeTypeProduct(1)}
                >
                  128 GB
                </Button>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border-1 !border-gray-200 !text-[rgba(0,0,0,0.7)] ${
                    typeProduct === 2 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => changeTypeProduct(2)}
                >
                  256 GB
                </Button>
              </div>
            </div>

            <div className="flex items-center !mt-4">
              <div className="quantityBox  !m-0">
                <QuantityBox/>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
