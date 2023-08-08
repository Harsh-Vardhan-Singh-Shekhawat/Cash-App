import React from "react";
import InvestingFooter from "./InvestingFooter";
import investingRayImg from "../assets/investing-rays 1.png";
import investingFloorImg from "../assets//investing-floor 1.png";
import investingStocksImg from "../assets/investing-bitcoin.png";
import investingBitcoinImg from "../assets/investing-bitcoin.png";
import investingGraphImg from '../assets/investing-graph-1.png'
import investingGraphImg2 from '../assets/investing-graph-2.png'

const Investing = () => {
  return (
    <section className="absolute w-full h-screen overflow-hidden bg-[#00D54B]">
      <div className="w-full h-screen">
        <img className="w-full" src={investingRayImg} alt="inv-img"></img>
      </div>
      <div className="absolute top-[370px] w-full">
        <img className="w-full" src={investingFloorImg} alt="inv-floor-img" />
      </div>

      <div className="absolute top-20 z-10 w-full">
        <h1 className="text-4xl text-white">Investing</h1>
        <div className="flex justify-evenly items-center mt-10 w-full">
          <div className="w-[350px] mb-40 text-left">
            <h1 className=" font-extrabold text-[22px]">Stocks</h1>
            <p className="font-medium font-sans  text-[18px] leading-[22px] text-black">
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div className="flex gap-[60px]">
            <img  src={investingStocksImg} alt="stockimg"></img>
            <img src={investingBitcoinImg} alt="bitcoinimg"></img>
          </div>
          <div className="w-[350px] mb-40 text-left">
            <h1 className="font-extrabold text-[22px]">Bitcoin</h1>
            <p className="font-medium font-sans  text-[18px] leading-[22px] text-black">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[350px] w-full">
        <img src={investingGraphImg} alt="investingGraphImg" />
      </div>
      <div className="absolute top-[40px] w-full left-[1281px]">
        <img src={investingGraphImg2} alt="investingGraphImg2" />
      </div>
      <InvestingFooter  />
    </section>
  );
};

export default Investing;
