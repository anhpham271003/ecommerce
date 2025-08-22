import React from "react";
import { MdAccessTime } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="group">
      <div className="w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://bloganchoi.com/wp-content/uploads/2025/08/dien-thoai-man-hinh-gap-3-1068x594.jpg"
          alt="blog image"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[10px] right-[10px] z-50 bg-primary rounded-md gap-2 px-1 text-[12px] font-[600]">
          <MdAccessTime className="text-[16px]" />5 APRIL, 2025
        </span>
      </div>

      <div className="py-4 text-left text-black">
        <Link to="/" className="hover:text-primary transition">
          <h2 className="text-[16px] font-[600]">Chọn smartphone Honor 2025</h2>
        </Link>
        <p className="text-[13px] font-[400] line-clamp-3 text-[rgba(0,0,0,0.8) mb-2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          asperiores? Officia quae ab dolore nemo. Reprehenderit, neque nihil
          harum at, sapiente, iure deleniti fugiat ut repudiandae exercitationem
          laborum voluptatem omnis nesciunt. Amet doloremque distinctio aperiam
          vero laudantium tempora, temporibus, inventore ipsam consequatur
          numquam consequuntur, provident iure ullam dolorem autem animi.
        </p>

        <Link
          to="/"
          className="font-[500] text-[14px] flex items-center justify-start gap-1 w-fit hover:text-primary transition"
        >
          Read More
          <IoMdArrowForward className="w-[14px] h-[14px]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
