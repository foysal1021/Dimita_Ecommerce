import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdExplore } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHome, FaTasks, FaUsers, FaUserTie } from "react-icons/fa";

const LeftsideNav = () => {
  const manuItem = (
    <>
      <Link to="/dashboard" className=" flex items-center gap-2">
        <MdDashboard></MdDashboard>
        <li>Dashboard</li>
      </Link>
      <Link to="/dashboard/product" className=" flex items-center gap-2">
        <BsFillBagCheckFill></BsFillBagCheckFill>
        <li>Product</li>
      </Link>
      <Link to="/dashboard/catagory" className=" flex items-center gap-2">
        <FaTasks></FaTasks>
        <li>Catagory</li>
      </Link>
      <Link to="/dashboard/customers" className=" flex items-center gap-2">
        <FaUsers></FaUsers>
        <li>Customers</li>
      </Link>
      <Link to="/dashboard/order" className=" flex items-center gap-2">
        <MdExplore></MdExplore>
        <li>Orders</li>
      </Link>
      <Link to="/" className=" flex items-center gap-2">
        <FaUserTie></FaUserTie>
        <li>Ouser Saff</li>
      </Link>
      <Link to="/" className=" flex items-center gap-2">
        <FaHome></FaHome>
        <li>Go Back Home</li>
      </Link>
    </>
  );

  return (
    <div className=" px-10  h-[100vh]">
      <div className=" mt-7">
        <img
          src="https://rubiktheme.com/demo/at_dimita_demo/img/dimita-electronics-logo-1613756035.jpg"
          alt=""
        />
      </div>
      <ul className=" grid grid-cols-1 gap-8 text-[18px] mt-10">{manuItem}</ul>
    </div>
  );
};

export default LeftsideNav;
