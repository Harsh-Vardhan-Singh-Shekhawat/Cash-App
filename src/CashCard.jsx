import React from "react";
import stairs1Img from './assets/boost-stairs-1.png'
import stairs2Img from './assets/boost-stairs-2.png'

const CashCard = () => {
  return (
    <section className="w-full h-screen bg-black">
      <div className="flex justify-between">
        <div className="">
            <img className="h-screen" src={stairs2Img} alt="stair2" />
        </div>
        <div className="">
            <img className=" h-screen" src={stairs1Img} alt="stair1" />
        </div>
      </div>
    </section>
  );
};

export default CashCard;
