import React from "react";
import paymentPhone from "../assets/payments-phone 1.png";
import paymentColumn from '../assets/payments-column.png'
import paymentColumn2 from '../assets/payments-column2.png'
import paymentColumn3 from '../assets/payments-column3.png'
import paymentLargePillar from '../assets/payments-pillar-large.png'
import paymentMedPillar from '../assets/payments-pillar-medium.png';
import paymentMedPillar2 from '../assets/payments-pillar-medium(2).png'
import paymentSmallPillar from '../assets/payments-pillar-small.png'

const Payments = () => {
  return (
    <section className="w-full bg-[#F8F6F6]">
      <div className="payments w-full h-screen relative top-[330px]">
        <div className="w-[350px] text-left absolute left-80 -top-48">
          <h1 className="text-[#00D54B] font-extrabold text-[40px]">Payments</h1>
          <p className="font-medium font-sans  text-[16px] leading-[22px] tracking-[0.3px] text-black">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <div>
          <img
            className="absolute -top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={paymentPhone}
            alt="payment-phone-img"
          />
        </div>
        <div className="absolute w-full -top-7">
          <img src={paymentColumn} alt="paymentCol" />
        </div>
        <div className="absolute  -top-[50px] left-96 z-20">
          <img src={paymentColumn2} alt="paymentCol2" />
        </div>
        <div className="absolute  -top-44 left-[744px] z-10">
          <img src={paymentColumn3} alt="paymentCol3" />
        </div>
        <div className="absolute  top-24 left-40 z-10">
          <img src={paymentMedPillar} alt="medpillar" />
        </div>
        <div className="absolute  top-9 left-[600px] z-10">
          <img src={paymentMedPillar} alt="medpillar" />
        </div>
        <div className="absolute  top-[189px] left-[730px] z-10">
          <img src={paymentMedPillar2} alt="medpillar2" />
        </div>
        <div className="absolute  -top-[50px] right-[300px] z-10">
          <img src={paymentMedPillar} alt="medpillar2" />
        </div>
        <div className="absolute  top-48 left-[270px]">
          <img src={paymentSmallPillar} alt="smallpillar" />
        </div>
        <div className="absolute left-[715px] -top-10">
          <img src={paymentLargePillar} alt="largepillar" />
        </div>
      </div>
    </section>
  );
};

export default Payments;
