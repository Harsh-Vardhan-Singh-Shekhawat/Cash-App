import React from "react";
import BankingPhoneImg from "../assets/banking-phone.png";
import bankingHoleImg from "../assets/banking-hole.png";
import bankingHole2 from "../assets/banking-hole2.png";
import bankingPillar from "../assets/banking-column.png";
import BankingTrack1 from '../assets/banking-track-1.png'
import BankingTrack2 from '../assets/banking-track-2.png'
import bankingStairs from "../assets/banking-stairs-1.png";
import bankingStairs2 from "../assets/banking-stairs-2.png";
import bankingRamp from '../assets/banking-ramp-1.png';
import bankingRamp2 from '../assets/banking-ramp-2.png';
import bankingTube from '../assets/banking-tube.png'
import bankingCube from '../assets/banking-cubes.png'
import bankingMonster from '../assets/banking-monster.png'

const Banking = () => {
  return (
    <section className="w-full h-screen bg-[#00D54B] relative">
      <div className=" transform md:w-[350px] w-[200px] absolute top-1/2 md:left-[40%] left-[25%] -tanslate-x-1/2 -translate-y-1/2 z-10">
        <img src={BankingPhoneImg} alt="bankingphone" />
      </div>
      <div className="md:w-[310px] w-[200px] text-left absolute bottom-10 right-10 md:left-80 md:top-72">
        <h1 className="text-white font-extrabold md:text-[40px] text-[28px]">Banking</h1>
        <p className="font-medium font-sans text-[16px] leading-[22px] tracking-[0.3px] text-black">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <div className="md:w-[320px] w-[160px]">
        <img  src={bankingHoleImg} alt="bankingHole" />
      </div>
      <div className="absolute md:w-[130px] w-[60px] md:top-28 top-12 left-12 md:left-16">
        <img src={bankingPillar} alt="bankingPillar" />
      </div>
      <div className="absolute md:w-[80px] w-[50px] md:top-96 top-56 md:left-16 left-8">
        <img src={bankingStairs2} alt="bankingStair" />
      </div>
      <div className="md:w-[250px] w-[130px] absolute top-5 md:right-40 right-10">
        <img src={BankingTrack2} alt="bankingTrack2" />
      </div>
      <div className="absolute top-36 left-[450px]">
        <img src={BankingTrack1} alt="bankingTrack1" />
      </div>
      <div className="absolute md:w-[300px] w-[120px] md:top-[480px] top-96 -left-2 md:left-[250px]">
        <img src={bankingRamp2} alt="bankingRamp2" />
      </div>
      <div className="absolute bottom-0 right-28 md:w-[150px] w-[70px] md:left-[590px]">
        <img src={bankingTube} alt="bankingTube2" />
      </div>
      <div className="absolute top-48 right-80">
        <img src={bankingRamp} alt="bankingRamp" />
      </div>
      <div className="absolute md:w-[90px] w-[60px] md:top-72 top-40 md:right-28 right-10">
        <img src={bankingStairs} alt="bankingStairs" />
      </div>
      <div className="absolute md:w-[240px] w-[160px] md:bottom-32 md:right-80 -left-10 bottom-20">
        <img src={bankingCube} alt="bankingCube" />
      </div>
      <div className="absolute md:w-[380px] w-[200px] bottom-0 md:right-80">
        <img src={bankingHole2} alt="bankingHole2" />
      </div>
      <div className="absolute md:w-[120px] w-[80px] md:bottom-10 bottom-4 right-4 md:right-10">
        <img src={bankingMonster} alt="bankingMonster" />
      </div>

    </section>
  );
};

export default Banking;
