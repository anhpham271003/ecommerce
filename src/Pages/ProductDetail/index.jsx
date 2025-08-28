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
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  //control state type product
  const [typeProduct, setTypeProduct] = useState(null);
  //control open product detail and review
  const [openDescription, setOpenDescription] = useState(0);

  //control function type product
  const changeTypeProduct = (index) => {
    if (index === typeProduct) {
      setTypeProduct(null);
    } else {
      setTypeProduct(index);
    }
  };

  //control function open description
  const setOpenActive = (index) => {
    setOpenDescription(index);
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
          {/* zoom product */}
          <div className="productZoom w-[40%] overflow-hidden">
            <ProductZoom />
          </div>
          {/* //CONTENT PRODUCT */}
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
            <p className="text-[14px] opacity-70 !mt-4 !mb-2">
              Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center ">
              <div className="quantityBox  !m-0">
                <QuantityBox />
              </div>
              <Button className="!bg-primary !text-white !rounded-full hover:!bg-red-500 transition !capitalize !px-10 !mx-5">
                <MdOutlineShoppingCart className="text-[22px] !mr-2" /> Add to
                Cart
              </Button>
            </div>

            <div className="flex items-center gap-5 !mt-3">
              <span className="flex items-center gap-2 text-[15px] hover:!text-primary cursor-pointer font-liber !m-0">
                <FaRegHeart className="text-[18px]" /> Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[15px] hover:!text-primary cursor-pointer font-liber !m-0">
                <IoGitCompareOutline className="text-[18px]" /> Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10 ">
          <div className="flex items-center gap-8 ">
            <span
              className={`text-[18px] cursor-pointer font-[500] hover:!text-primary transition !m-0 !ml-10 ${
                openDescription === 0 && "!text-primary"
              }`}
              onClick={() => setOpenActive(0)}
            >
              Description
            </span>

            <span
              className={`text-[18px] cursor-pointer font-[500] hover:!text-primary transition !m-0 !ml-5 ${
                openDescription === 1 && "!text-primary"
              }`}
              onClick={() => setOpenActive(1)}
            >
              Product Detail
            </span>
            <span
              className={`text-[18px] cursor-pointer font-[500] hover:!text-primary transition !m-0 !ml-5 ${
                openDescription === 2 && "!text-primary"
              }`}
              onClick={() => setOpenActive(2)}
            >
              Review (5)
            </span>
          </div>

          {openDescription === 0 && (
            <div className="shadow-md w-full !py-5 !px-10 !mt-5 rounded-md !h-[70vh] overflow-auto">
              <h3 className="font-bold text-[18px]">Thông tin sản phẩm:</h3>
              <h4 className="!my-2 font-[500]">
                1. Thiết kế và các chi tiết nổi bật
              </h4>
              <p>
                - TECNO POVA 7 không chỉ mạnh mẽ mà còn sở hữu thiết kế "Cyber
                Romance" độc đáo và cá tính. Mặt lưng mô phỏng kính trong suốt
                với họa tiết tam giác đặc trưng và đèn Mini-LED nổi bật, không
                chỉ tạo hiệu ứng ánh sáng bắt mắt mà còn hiển thị thông báo một
                cách tinh tế. - Hệ thống loa kép stereo tích hợp Dolby Audio
                mang đến trải nghiệm âm thanh sống động, chân thực. Các tính
                năng AI hỗ trợ gaming như Game Assistant, chế độ chống làm
                phiền, giả giọng và tối ưu âm thanh e-sport sẽ giúp bạn hoàn
                toàn tập trung vào trận đấu. - Kháng nước và bụi chuẩn IP64 cùng
                các màu sắc ấn tượng như Đen Siêu Bền (Geek Black), Bạc Siêu Tốc
                (Magic Silver) và Nâu Titanium (Gray Titanium), em máy này chính
                là một tuyên ngôn phong cách của TECNO!
              </p>
              <h4 className="!my-2 font-[500]">
                2. Trải nghiệm thị giác vượt trội
              </h4>
              <p>
                POVA 7 256GB được nâng tầm tối đa với màn hình IPS LCD 6.78
                inches, độ phân giải FHD+ (2460x1080) sắc nét đến từng chi tiết.
                Kích thước lớn cùng tỷ lệ hiển thị tối ưu sẽ đưa bạn vào thế
                giới giải trí sống động, từ những trận chiến nảy lửa đến những
                bộ phim bom tấn. - Đặc biệt, màn hình sở hữu tần số quét 120Hz,
                mang lại mọi chuyển động cực kỳ mượt mà và phản hồi siêu nhanh.
                Độ sáng tối đa lên tới 900 nits đảm bảo hiển thị rõ ràng ngay cả
                dưới ánh nắng gay gắt, kết hợp cùng chế độ Travel Mode 1.0.
              </p>
              <h4 className="!my-2 font-[500]">3. Camera AI sắc nét</h4>
              <p>
                - Với camera sau 108MP đỉnh cao cùng công nghệ AI thông minh,
                mọi bức ảnh của bạn sẽ trở nên sống động và chi tiết tuyệt vời.
                Từ những bức chân dung nghệ thuật, ảnh panorama toàn cảnh đến
                khả năng chụp đêm ấn tượng, POVA 7 đều đáp ứng hoàn hảo. -
                Camera trước 8MP tích hợp AI làm đẹp và xóa phông tự nhiên, giúp
                bạn tự tin tỏa sáng trong mọi cuộc gọi video và ảnh selfie. Đây
                chính là sự cân bằng hoàn hảo giữa hiệu năng gaming và khả năng
                chụp ảnh chuyên nghiệp.
              </p>
            </div>
          )}

          {openDescription === 1 && (
            <div className="shadow-lg w-full !py-6 !px-10 !mt-5 rounded-xl h-[70vh] overflow-auto">
              <h3 className="font-bold text-xl mb-6 border-b pb-2">
                Product Detail:
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/2 py-3 text-gray-700 ">
                      Manufaturer
                    </td>
                    <td className="py-3 text-gray-600">Apple</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/3 py-3 text-gray-700">
                      Model
                    </td>
                    <td className="py-3 text-gray-600">iPhone 12 Pro Max</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/3 py-3 text-gray-700">
                      Screen
                    </td>
                    <td className="py-3 text-gray-600">
                      OLED, 6.7" Super Retina XDR
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/3 py-3 text-gray-700">
                      Camera
                    </td>
                    <td className="py-3 text-gray-600">
                      Triple 12MP + 12MP + 12MP / 12MP Selfie
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/3 py-3 text-gray-700">
                      Rom
                    </td>
                    <td className="py-3 text-gray-600">64GB / 128GB / 256GB</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/3 py-3 text-gray-700">
                      Battery
                    </td>
                    <td className="py-3 text-gray-600">
                      3687 mAh, sạc nhanh 20W
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="font-semibold w-1/3 py-3 text-gray-700">
                      Operating system
                    </td>
                    <td className="py-3 text-gray-600">
                      iOS 14 (có thể nâng cấp)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {
            openDescription === 2 && (
               <div className="shadow-lg w-full !py-6 !px-10 !mt-5 rounded-xl h-[70vh] overflow-auto">
                  <h2 className="font-bold text-xl !mb-3 border-b pb-2">Customer Review Product</h2>
                  <div className="review !w-full max-h-[300px] flex items-center justify-between">
                    <div className="info flex items-center gap-2 w-[80%] !m-0">
                        <div className="img overflow-hidden rounded-full !w-[80px] !h-[80px] !ml-5">
                          <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                          />
                        </div>
                        <div className="w-[70%]">
                          <h4 className="text-[16px]">Pham Duc Anh</h4>
                        </div>
                    </div>
                  </div>
               </div>
            )
          }
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
