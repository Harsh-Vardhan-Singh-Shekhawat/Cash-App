import React from "react";
import { BsApple, BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import MessageIcon from "../assets/Message.png";

const Footer = () => {
  return (
    <footer className="w-full md:px-[61px] md:py-[20px] text-white absolute bottom-0 z-10 flex flex-col md:flex-row justify-between">
      <div className="w-full flex md:justify-start justify-evenly  md:mt-0 mt-10 md:gap-[20px]">
        <div className="w-[150px] text-black h-[50px] m-1 bg-white rounded-[7px] p-4 border-black border-[1px] cursor-pointer transition ease-in-out active:scale-90 duration-300">
          <button className=" leading-[12px] flex items-center gap-[10px]  ">
            <span>
              <BsApple className="text-[#00D54B] text-[20px]" />
            </span>{" "}
            <span className="text-[12px] text-black">APP STORE</span>
          </button>
        </div>
        <div className="w-[150px] h-[50px] rounded-[7px] m-1 bg-white p-[14px] border-black border-[1px] cursor-pointer transition ease-in-out active:scale-90 duration-300">
          <button className=" leading-[12px] flex justify-between items-center ">
            <span>
              <BiLogoPlayStore className="text-[#00D54B] text-[20px] gap-[10px]" />
            </span>{" "}
            <span className="text-[12px] text-black">GOOGLE PLAY</span>
          </button>
        </div>
      </div>

      <div className="flex mx-2 my-2 text-black items-center md:gap-[27px]">
        <p className="md:text-[10px] text-[8px] md:leading-[13px] font-sans text-left relative md:right-20 md:w-[363px] w-7/12 text-[#606060] bg-transparent">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <div className="flex md:gap-[24px] mx-10 gap-[12px]">
        <BsTwitch className="md:w-[24px]  md:text-3xl text-xl cursor-pointer hover:-translate-y-2 hover:text-[#00D54B] transition duration-150 ease-in-out" />
        <BsTwitter className="md:w-[24px]  md:text-3xl text-xl cursor-pointer hover:-translate-y-2 hover:text-[#00D54B] transition duration-150 ease-in-out" />
        <BsInstagram className="md:w-[24px]  md:text-3xl text-xl cursor-pointer hover:-translate-y-2 hover:text-[#00D54B] transition duration-150 ease-in-out" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
