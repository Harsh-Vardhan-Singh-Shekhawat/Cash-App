import React from "react";
import { BsApple, BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import MessageIcon from "../assets/Message.png";

const Footer = () => {
  return (
    <footer className="w-full px-[61px] py-[20px] text-white absolute bottom-0 z-10 flex justify-between">
      <div className="md:flex gap-[20px]">
        <div className="md:w-[170px] text-black h-[50px] bg-white rounded-[7px] p-4 border-black border-[1px] cursor-pointer">
          <button className=" leading-[12px] flex items-center gap-[10px]  ">
            <span>
              <BsApple className="text-[#00D54B] text-[20px]" />
            </span>{" "}
            <span className="text-[12px] text-black">APP STORE</span>
          </button>
        </div>
        <div className="md:w-[170px] h-[50px] rounded-[7px] bg-white p-[14px] border-black border-[1px] cursor-pointer">
          <button className=" leading-[12px] flex justify-between items-center ">
            <span>
              <BiLogoPlayStore className="text-[#00D54B] text-[20px] gap-[10px]" />
            </span>{" "}
            <span className="text-[12px] text-black">GOOGLE PLAY</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between text-black items-center gap-[27px]">
        <p className="text-[10px] leading-[13px] font-sans text-left relative right-20 md:w-[363px] text-[#606060] bg-transparent">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <BsTwitch className="w-[24px] text-3xl cursor-pointer" />
        <BsTwitter className="w-[24px] text-3xl cursor-pointer" />
        <BsInstagram className="w-[24px] text-3xl cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
