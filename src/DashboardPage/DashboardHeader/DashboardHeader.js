import React from "react";
import { BiRefresh } from "react-icons/bi";
import { BsCart2, BsCheck2 } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi2";

const DashboardHeader = () => {
  return (
    <div className="">
      <div className=" flex justify-between gap-5">
        <div className=" text-[#f5f0f0]  bg-[#1f94a2] w-4/12 text-center py-10 rounded">
          <h2 className=" text-xl">Today Order</h2>
          <span className=" font-bold text-3xl">$300</span>
        </div>
        <div className="text-[#f5f0f0]  bg-[#3f83f8] w-4/12 text-center py-10 rounded">
          <h2 className=" text-xl">This Month</h2>
          <span className=" font-bold text-3xl">$300</span>
        </div>
        <div className="text-[#f5f0f0]  bg-[#1e9f6e] w-4/12 text-center py-10 rounded">
          <h2 className=" text-xl">Total Order</h2>
          <span className=" font-bold text-3xl">$300</span>
        </div>
      </div>

      <div className=" flex justify-between gap-5 mt-10 ">
        <div className=" w-3/12 flex gap-2 items-center bg-[#fff] px-5 py-5 rounded">
          <div className=" bg-[#fcdabd] w-10 h-10 rounded-full flex justify-center items-center text-xl text-red-500">
            <BsCart2></BsCart2>
          </div>
          <div>
            <p className=" capitalize">total order</p>
            <span className=" font-extrabold text-xl">100</span>
          </div>
        </div>
        <div className=" w-3/12 flex gap-2 items-center bg-[#fff] px-5 py-5 rounded">
          <div className=" bg-[#c3ddfd] w-10 h-10 rounded-full flex justify-center items-center text-xl text-[#3c7af4]">
            <BiRefresh></BiRefresh>
          </div>
          <div>
            <p className=" capitalize">Order Peending</p>
            <span className=" font-extrabold text-xl">100</span>
          </div>
        </div>
        <div className=" w-3/12 flex gap-2 items-center bg-[#fff] px-5 py-5 rounded">
          <div className=" bg-[#afecef] w-10 h-10 rounded-full flex justify-center items-center text-xl text-[#2e8c96]">
            <HiOutlineTruck></HiOutlineTruck>
          </div>
          <div>
            <p className=" capitalize">Order Processing</p>
            <span className=" font-extrabold text-xl">100</span>
          </div>
        </div>
        <div className=" w-3/12 flex gap-2 items-center bg-[#fff] px-5 py-5 rounded">
          <div className=" bg-[#bcf0da] w-10 h-10 rounded-full flex justify-center items-center text-xl text-[#1b654a]">
            <BsCheck2></BsCheck2>
          </div>
          <div>
            <p className=" capitalize">Order Delivered</p>
            <span className=" font-extrabold text-xl">100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
