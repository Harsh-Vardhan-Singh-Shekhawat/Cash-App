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
      <div className=" transform absolute top-1/2 md:left-[40%] -tanslate-x-1/2 -translate-y-1/2 z-10">
        <img src={BankingPhoneImg} alt="bankingphone" />
      </div>
      <div className="w-[310px] text-left absolute left-80 top-72">
        <h1 className="text-white font-extrabold text-[40px]">Banking</h1>
        <p className="font-medium font-sans text-[16px] leading-[22px] tracking-[0.3px] text-black">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <div>
        <img src={bankingHoleImg} alt="bankingHole" />
      </div>
      <div className="absolute top-28 left-16">
        <img src={bankingPillar} alt="bankingPillar" />
      </div>
      <div className="absolute top-96 left-16">
        <img src={bankingStairs2} alt="bankingStair" />
      </div>
      <div className="absolute top-5 right-40">
        <img src={BankingTrack2} alt="bankingTrack2" />
      </div>
      <div className="absolute top-36 left-[450px]">
        <img src={BankingTrack1} alt="bankingTrack1" />
      </div>
      <div className="absolute top-[480px] left-[250px]">
        <img src={bankingRamp2} alt="bankingRamp2" />
      </div>
      <div className="absolute bottom-0 left-[590px]">
        <img src={bankingTube} alt="bankingTube2" />
      </div>
      <div className="absolute top-48 right-80">
        <img src={bankingRamp} alt="bankingRamp" />
      </div>
      <div className="absolute top-72 right-28">
        <img src={bankingStairs} alt="bankingStairs" />
      </div>
      <div className="absolute bottom-32 right-80">
        <img src={bankingCube} alt="bankingCube" />
      </div>
      <div className="absolute bottom-0 right-80">
        <img src={bankingHole2} alt="bankingHole2" />
      </div>
      <div className="absolute bottom-10 right-10">
        <img src={bankingMonster} alt="bankingMonster" />
      </div>

    </section>
  );
};

export default Banking;
