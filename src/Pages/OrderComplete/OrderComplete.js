import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  return (
    <section className=" mt-20 max-w-[1300px] mx-auto">
      <div className=" border  py-14 px-5 lg:w-1/3 mx-2 lg:mx-auto text-center grid grid-cols-1 gap-2 rounded shadow-lg">
        <BsCheckCircleFill className=" mx-auto text-4xl text-[#04a80e]"></BsCheckCircleFill>
        <h3 className=" text-lg font-semibold">
          Hey <span>Foysal Ahamed</span>
        </h3>
        <h2 className=" text-2xl font-bold">Your Order is Confirmed!</h2>
        <p>
          we'll send you a shipping confirmation email as soon as your order
          ships
        </p>
        <Link to="/my_order" className=" btn bg-[#1080b9] border-none">
          Check status
        </Link>
      </div>
    </section>
  );
};

export default OrderComplete;
