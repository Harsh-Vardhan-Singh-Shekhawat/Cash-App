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
          <span className="my-4 relative md:-right-44 ">
            <img  className='md:w-[60px] ' src={eyeImg} alt="eyeImg" />
          </span>
        </button>
        <div
          className={`absolute md:right-40 right-32 md:top-10 bottom-16 md:w-40 w-20 z-10 ${open ? "block" : "hidden"}`}
        >
          <div className="bg-white flex items-center gap-[10px] md:w-[500px] w-[340px] md:h-[320px] h-[240px]  md:py-10 rounded-[15px]">
            <div className="w-1/2">
              <img
                className="md:w-[192px] md:h-[192px] md:ml-10 ml-2"
                src={aboutImg}
                alt="aboutimg"
              />
            </div>
            <div className="text-[#810EA9] w-1/2 text-left flex flex-col justify-start">
              <h1 className="font-extrabold md:text-[24px] text-[20px] leading-[26px] tracking-[0.5px]">
                OGOLUWA OJEWALE
              </h1>
              <p className="mr-6 font-sans md:text-[24px] text-[16px] leading-[26px] tracking-[0.5px]">
                UI/UX DESIGNER
              </p>
              <div className="w-full text-left border-[#D560FE] flex flex-col gap-4 border-y-[1px] md:my-4 my-1 py-1 md:py-4">
                <h1 className="font-sans opacity-60 text-[24px] tracking-[3px] leading-[20px]">
                  @ogopedia
                </h1>
                <div className="flex justify-start gap-4 ">
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsBehance className=" md:text-lg md:m-2 m-1 font-semibold " />
                  </div>
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsTwitter className=" md:text-lg md:m-2 m-1 font-semibold " />
                  </div>
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsInstagram className=" md:text-lg md:m-2 m-1 font-semibold " />
                  </div>
                  <div className="border-[1px] border-[#810EA9] rounded-full">
                    <BsLinkedin className=" md:text-lg md:m-2 m-1  font-semibold " />
                  </div>
                </div>
              </div>
              <p className="font-sans font-normal md:text-[24px] text-[20px] tracking-[0.5px] leading-[26px] opacity-60">
                OGOPEDIA.COM
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
