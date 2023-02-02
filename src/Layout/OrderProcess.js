import React from "react";
import { BiRefresh } from "react-icons/bi";
import { BsCart2, BsCheck2 } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";
import LeftsideNav from "../DashboardPage/LeftsideNav/LeftsideNav";

const OrderProcess = () => {
  return (
    <div className=" flex   mx-auto ">
      <div className="  h-[100vh] w-[20%] fixed ">
        <LeftsideNav></LeftsideNav>
      </div>
      <div className="w-[80%] ml-[20%] py-10 bg-[#eff1f2] mt-5">
        <div>
          <section className=" mx-2">
            <div className=" flex gap-5">
              <Link
                to="/dashboard/order"
                className=" btn btn-md bg-[#1f94a2]  border-none  "
              >
                <BsCart2 className=" text-xl mr-2"></BsCart2>
                Total Order
              </Link>
              <Link
                to="/dashboard/order/order_peending"
                className=" btn btn-md bg-[#3f83f8] border-none"
              >
                <BiRefresh className=" text-xl mr-2"></BiRefresh>
                Order Peending
              </Link>
              <Link
                to="/dashboard/order/order_processing"
                className=" btn btn-md bg-indigo-600 border-none"
              >
                <HiOutlineTruck className=" text-xl mr-2"></HiOutlineTruck>
                Order Processing
              </Link>
              <Link
                to="/dashboard/order/order_delivered"
                className=" btn btn-md bg-[#3ecbac] border-none"
              >
                <BsCheck2 className=" text-xl mr-2"></BsCheck2>
                Order Delivered
              </Link>
            </div>
          </section>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default OrderProcess;
