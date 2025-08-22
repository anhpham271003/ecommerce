import React from "react";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";

import { FaFacebookMessenger, FaFacebook, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-white flex py-10">
      {/* footerLeft */}
      <div className="leftPart w-[25%] border-r-2 pl-8 border-[rgba(0,0,0,0.2)]">
        <h2 className="text-[20px] font-[600] !mb-6">Contact Me</h2>
        <p className="text-[14px] font-[500] pb-3 font-liber">
          MegaShop - Address:
          <br />
          Hoàng Mai - Đồng Thái - An Hải - Hai Phòng
        </p>
        <Link
          className="hover:text-primary font-liber"
          to="mailto:anhp39911@gmail.com"
        >
          anhp39911@gmail.com
        </Link>

        <span className="text-[16px] font-[500] block w-full !mt-5 font-liber">
          Phone Number:
        </span>
        <span className="text-[20px] font-[600] block w-full  text-primary">
          (+84) 362025195
        </span>
        <div className="flex items-center gap-2 !mt-5">
          <IoChatbubblesOutline className="text-[40px] !m-0 text-primary" />
          <span className="text-[20px] font-[600] !m-0">
            Online Chat
            <br /> Get Expert Help
          </span>
        </div>
      </div>
      {/* FooterCenter */}
      <div className="centerPart w-[40%] pl-8 flex">
        <div className="centerCol1 w-[50%] !my-0">
          <h2 className="text-[20px] font-[600] !mb-6">Category Products</h2>
          <ul className="list">
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Phone
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Laptop
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Desktop
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Earphone
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Keyboard
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Mouse
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Screen
              </Link>
            </li>
          </ul>
        </div>
        <div className="centerCol2 w-[50%] !my-0">
          <h2 className="text-[20px] font-[600] !mb-6">My Company</h2>
          <ul className="list">
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Stores
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Contact Me
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Terms and Conditions Of Use
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Secure Payment
              </Link>
            </li>
            <li className="list-none text-[14px] w-full !mb-2">
              <Link to="/" className="hover:text-primary font-nata font-[600]">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* FooterRight */}
      <div className="rightPart w-[35%] !my-0">
        <h2 className="text-[20px] font-[600] !mb-6 ">Site Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.05388683454643!2d106.64560072124003!3d20.83727071146793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7107a9c1e5ad%3A0xec7bac66bc65f06f!2sHo%C3%A0ng%20mai!5e0!3m2!1sen!2s!4v1755848353289!5m2!1sen!2s"
          className="w-[100%] h-[90%]"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* //contact */}
      <div className="fixed bottom-5 left-5 flex flex-col !gap-2 z-50">
        {/* Messenger */}
        <div>
          <Link
            to="https://m.me/phamducanh271003"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-all opacity-90"
          >
            <FaFacebookMessenger size={24} />
          </Link>
        </div>

        {/* Facebook */}
        <div>
          <Link
            to="https://www.facebook.com/phamducanh271003"
            className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-all opacity-90"
          >
            <FaFacebook size={24} />
          </Link>
        </div>

        {/* Zalo */}
        <div>
          <Link
            to="https://zalo.me/0362025195"
            className="w-10 h-10 flex items-center justify-center bg-cyan-500 text-white rounded-full shadow-lg hover:scale-110 transition-all opacity-90"
          >
            <SiZalo size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
