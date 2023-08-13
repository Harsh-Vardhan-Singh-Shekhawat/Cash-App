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
        <div className="md:w-[350px] md:m-0 mx-4 my-4  w-[200px] text-left absolute md:left-80 md:top-48">
          <h1 className="text-[#00D54B] leading-[40px] font-extrabold text-[28px] md:text-[40px]">
            Cash Card & Boost
          </h1>
          <p className="font-normal font-sans  md:text-[16px] leading-[22px] text-white">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          className="relative md:w-[250px] w-[110px] left-10 top-80 md:top-24 z-10 md:left-[700px]"
          src={boostPhoneImg}
          alt="boostPhoneImg"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute md:w-[100px] w-[70px] md:right-4 right-0 z-10 top-[380px]"
          src={shoeImg}
          alt="shoe-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute md:w-[70px] w-[45px] md:right-[375px] right-40 z-10 top-[380px] md:top-[360px]"
          src={burgerImg}
          alt="burger-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute md:w-[80px] w-[50px] md:right-72 right-28 z-10 top-[490px]"
          src={coffeeImg}
          alt="coffee-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute md:w-[80px] w-[50px] md:right-72 right-28 top-[220px] z-10 md:top-[190px]"
          src={cardImg}
          alt="card-img"
        />
      </div>
      <div className="absolute w-full">
        <img
          className="absolute md:w-[75px] w-[40px] top-28 right-20 md:right-48 z-10 md:top-[80px]"
          src={handImg}
          alt="shoe-img"
        />
      </div>
      <div className="flex justify-between">
        <div className="absolute md:visible invisible md:left-0 ">
          <img className="md:h-screen" src={stairs2Img} alt="stair2" />
        </div>
        <div className="absolute right-0">
          <img className="h-screen" src={stairs1Img} alt="stair1" />
        </div>
      </div>
    </section>
  );
};

export default CashCard;
