import React from "react";
import InvestingFooter from "./InvestingFooter";
import investingRayImg from "../assets/investing-rays 1.png";
import investingFloorImg from "../assets//investing-floor 1.png";
import investingStocksImg from "../assets/investing-stocks.png";
import investingBitcoinImg from "../assets/investing-bitcoin.png";
import investingGraphImg from "../assets/investing-graph-1.png";
import investingGraphImg2 from "../assets/investing-graph-2.png";

const Investing = () => {
  return (
    <section className="absolute w-full h-screen overflow-hidden bg-[#00D54B]">
      <div className="w-full md:h-screen">
        <img className="w-full" src={investingRayImg} alt="inv-img"></img>
      </div>
      <div className="absolute bottom-0 w-full">
        <img className="w-full" src={investingFloorImg} alt="inv-floor-img" />
      </div>

      <div className="absolute md:top-20 top-4 z-10 w-full">
        <h1 className="text-4xl text-white">Investing</h1>
        <div className="flex md:flex-row flex-col justify-evenly items-center md:mt-10 mt-4 w-full">
          <div className="md:mb-40 text-left flex px-4 gap-[10px] md:gap-[60px]">
            <div className="mt-10 md:w-[350px]">
              <h1 className=" font-extrabold text-[22px]">Stocks</h1>
              <p className="font-medium font-sans  md:text-[18px] leading-[22px] text-black">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <img className="md:w-[160px] w-[100px]" src={investingStocksImg} alt="stockimg"></img>
          </div>
          
          <div className="md:mb-40 mb-4 text-left flex px-4  md:gap-[60px] gap-[10px]">
            <img
              className="md:w-[160px] w-[100px]"
              src={investingBitcoinImg}
              alt="bitcoinimg"
            ></img>
            <div className="md:w-[350px] mt-10 text-left">
              <h1 className="font-extrabold text-[22px]">Bitcoin</h1>
              <p className="font-medium font-sans  md:text-[18px] leading-[22px] text-black">
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute md:top-[350px] top-[530px] w-full">
        <img className="md:w-[640px] w-[160px]" src={investingGraphImg} alt="investingGraphImg" />
      </div>
      <div className="absolute md:top-[40px] top-[360px] w-full md:left-[1281px] left-[260px]">
        <img className="md:w-[260px] w-[140px]" src={investingGraphImg2} alt="investingGraphImg2" />
      </div>
      <InvestingFooter />
    </section>
  );
};

export default Investing;
