import { useState } from "react";
import eyeImg from "../assets/eye.png";
import aboutImg from "../assets/Thats Me.png";
import { BsInstagram, BsBehance, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
        >
          <span className="mr-4">
            <img src={eyeImg} alt="eyeImg" />
          </span>
        </button>
        <div
          className={`absolute right-80 w-40 z-10 ${open ? "block" : "hidden"}`}
        >
          <div className="bg-white flex items-center gap-[10px] w-[500px] py-10 rounded-[15px] ">
            <div className="w-1/2">
              <img
                className="w-[192px] h-[192px] ml-10"
                src={aboutImg}
                alt="aboutimg"
              />
            </div>
            <div className="text-[#810EA9] w-1/2 text-left">
              <h1 className="font-extrabold text-[24px] leading-[26px] tracking-[0.5px]">
                OGOLUWA OJEWALE
              </h1>
              <p className="font- font-sans text-[24px] leading-[26px] tracking-[0.5px]">
                UI/UX DESIGNER
              </p>
              <div className="w-full text-left border-[#D560FE] flex flex-col gap-4 border-y-[1px] my-4 py-4">
                <h1 className="font-sans opacity-60 text-[24px] tracking-[3px] leading-[20px]">
                  @ogopedia
                </h1>
                <div className="flex justify-start gap-4 ">
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsBehance className=" text-lg m-2 font-semibold " />
                  </div>
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsTwitter className=" text-lg m-2 font-semibold " />
                  </div>
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsInstagram className=" text-lg m-2 font-semibold " />
                  </div>
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsLinkedin className=" text-lg m-2 font-semibold " />
                  </div>
                </div>
              </div>
              <p className="font-sans font-normal text-[24px] tracking-[0.5px] leading-[26px] opacity-60">
                OGOPEDIA.COM
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
