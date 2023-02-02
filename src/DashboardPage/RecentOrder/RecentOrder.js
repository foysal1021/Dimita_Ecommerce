import React from "react";
import { Link } from "react-router-dom";

const RecentOrder = () => {
  return (
    <section className=" mt-10">
      <h2 className=" text-2xl font-bold ">Recent Order</h2>
      <div className=" mt-5 ">
        <table className=" w-full ">
          <thead className=" p-2   border-b-[1px] border-[#d4d4d4]">
            <tr className=" ">
              <th className=" py-5 font-semibold capitalize text-[#1a1a1a]  text-left">
                Order Date
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Delivery Address
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a] ">
                Phone
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Payment Method
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Order Amount
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className=" border-b-[1px] border-[#d4d4d4] ">
              <td className=" text-left py-5"> Jan 17, 2022</td>
              <td className=" text-left">7420,Chowgacha,Jessore,Khulna </td>
              <td className=" text-left">01736068832</td>
              <td className=" text-left">Bkash</td>
              <td className=" text-left font-bold">$45</td>

              <td className="  text-left">Delevery</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentOrder;
