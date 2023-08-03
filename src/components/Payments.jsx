import React from "react";
import paymentPhone from "../assets/payments-phone 1.png";

const Payments = () => {
  return (
    <section className=" w-full bg-[#F8F6F6]">
      <div className="payments w-full h-screen relative top-[354px]">
        <div className="w-[350px] text-left absolute left-80 -top-48">
          <h1 className="text-[#00D54B] font-extrabold text-[40px]">Payments</h1>
          <p className="font-medium font-sans  text-[16px] leading-[22px] text-black">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <div>
          <img
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
            src={paymentPhone}
            alt="payment-phone-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Payments;
