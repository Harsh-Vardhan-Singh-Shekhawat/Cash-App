import React from "react";
import { forwardRef } from "react";
import paymentPhone from "../assets/payments-phone 1.png";
import paymentColumn from '../assets/payments-column.png'
import paymentColumn2 from '../assets/payments-column2.png'
import paymentColumn3 from '../assets/payments-column3.png'
import paymentLargePillar from '../assets/payments-pillar-large.png'
import paymentMedPillar from '../assets/payments-pillar-medium.png';
import paymentMedPillar2 from '../assets/payments-pillar-medium(2).png'
import paymentSmallPillar from '../assets/payments-pillar-small.png'

const Payments = (ref) => {
  return (
    <section  className="w-full bg-[#F8F6F6]">
      <div className="payments w-full h-screen relative md:top-[330px] top-[200px]">
        <div className="md:w-[350px] w-[200px] md:p-0 text-left absolute md:left-80 left-40 md:-top-48 -top-20">
          <h1 className="text-[#00D54B] font-extrabold md:text-[40px] text-[28px]">Payments</h1>
          <p className="font-medium font-sans  md:text-[16px] leading-[22px] tracking-[0.3px] text-black">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <div>
          <img
            className="absolute left-20 md:-top-14 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={paymentPhone}
            alt="payment-phone-img"
          />
        </div>
        <div className="absolute md:w-full w-[100px] md:-top-7 bottom-[200px] z-10">
          <img src={paymentColumn} alt="paymentCol" />
        </div>
        <div className="absolute md:w-full w-[400px] md:-top-[50px] md:left-96 bottom-[200px] right-32 z-20">
          <img src={paymentColumn2} alt="paymentCol2" />
        </div>
        <div className="absolute md:w-full  md:-top-44 md:left-[744px] bottom-60  z-0">
          <img src={paymentColumn3} alt="paymentCol3" />
        </div>
        <div className="absolute md:w-full w-[100px] md:top-24 md:left-40 bottom-80 left-20 z-10">
          <img src={paymentMedPillar} alt="medpillar" />
        </div>
        <div className="absolute md:w-full w-[100px] md:top-9 md:left-[600px] bottom-80 left-20 z-10">
          <img src={paymentMedPillar} alt="medpillar" />
        </div>
        <div className="absolute md:w-full w-[100px] md:top-[189px] md:left-[730px] bottom-[200px] left-28 z-10">
          <img src={paymentMedPillar2} alt="medpillar2" />
        </div>
        <div className="absolute md:w-full w-[100px] md:-top-[50px] md:right-[300px] right-20 bottom-80 z-10">
          <img src={paymentMedPillar} alt="medpillar2" />
        </div>
        <div className="absolute md:w-full w-[100px] md:top-48 md:left-[270px] left-10 bottom-56">
          <img src={paymentSmallPillar} alt="smallpillar" />
        </div>
        <div className="absolute md:w-full w-[100px] md:left-[715px] md:-top-10 bottom-80 left-44">
          <img src={paymentLargePillar} alt="largepillar" />
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Payments);
