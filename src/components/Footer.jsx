import React from "react";
import { BsApple, BsArrowDown, BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import MessageIcon from "../assets/Message.png";

const Footer = () => {
  return (
    <footer className="w-full md:px-[61px] py-[20px] text-white absolute bottom-0 flex justify-between">
      <div className="md:flex md:gap-[20px]">
        <div className="md:w-[170px] h-[50px] rounded-[7px] p-4 bg-black border-[1px] cursor-pointer">
          <button className=" leading-[12px] flex items-center  gap-[10px]  ">
            <span>
              <BsApple className="text-[#00D54B] text-[20px]" />
            </span>{" "}
            <span className="text-[12px]">APP STORE</span>
          </button>
        </div>
        <div className="md:w-[170px] h-[50px] rounded-[7px] p-[14px] bg-black border-[1px] cursor-pointer">
          <button className=" leading-[12px] flex justify-between items-center ">
            <span>
              <BiLogoPlayStore className="text-[#00D54B] text-[20px]" />
            </span>{" "}
            <span className="text-[12px]">GOOGLE PLAY</span>
          </button>
        </div>
      </div>
      <button className="relative md:left-20">
        <BsArrowDown className="text-[#00D54B] text-3xl" />
      </button>
      <div className="flex justify-between items-center md:gap-[27px]">
        <p className="text-[10px] leading-[13px] font-sans text-left relative md:right-20 md:w-[363px] text-[#B6B6B6] bg-transparent">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <BsTwitch className="w-[24px] text-3xl cursor-pointer hover:text-[#00D54B]" />
        <BsTwitter className="w-[24px] text-3xl cursor-pointer hover:text-[#00D54B]" />
        <BsInstagram className="w-[24px] text-3xl cursor-pointer hover:text-[#00D54B]" />
      </div>
    </footer>
  );
};

export default Footer;
