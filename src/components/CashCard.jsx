import React from "react";
import stairs1Img from "../assets/boost-stairs-1.png";
import stairs2Img from "../assets/boost-stairs-2.png";
import boostPhoneImg from "../assets/boost-phone.png";
import cardImg from "../assets/boost-card.png";
import burgerImg from "../assets/boost-burger.png";
import handImg from "../assets/boost-hand.png";
import shoeImg from "../assets/boost-shoe.png";
import coffeeImg from "../assets/boost-coffee.png";

const CashCard = () => {
  return (
    <section className="w-full h-screen bg-black">
      <div className="absolute">
        <div className="w-[350px] text-left absolute left-80 top-48">
          <h1 className="text-[#00D54B] leading-[40px] font-extrabold text-[40px]">
            Cash Card & Boost
          </h1>
          <p className="font-normal font-sans  text-[16px] leading-[22px] text-white">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          className="relative top-24 z-10 left-[700px]"
          src={boostPhoneImg}
          alt="boostPhoneImg"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute right-4 z-10 top-[380px]"
          src={shoeImg}
          alt="shoe-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute right-[375px] z-10 top-[360px]"
          src={burgerImg}
          alt="shoe-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute right-72 z-10 top-[490px]"
          src={coffeeImg}
          alt="shoe-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute right-72 z-10 top-[190px]"
          src={cardImg}
          alt="shoe-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute right-48 z-10 top-[80px]"
          src={handImg}
          alt="shoe-img"
        />
      </div>
      <div className="flex justify-between">
        <div className="absolute left-0">
          <img className="h-screen" src={stairs2Img} alt="stair2" />
        </div>
        <div className="absolute right-0">
          <img className="h-screen" src={stairs1Img} alt="stair1" />
        </div>
      </div>
    </section>
  );
};

export default CashCard;
