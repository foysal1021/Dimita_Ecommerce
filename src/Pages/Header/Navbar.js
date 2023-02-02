import React from "react";
import { FaUser, FaHeart } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#1080b9] py-5">
      <div className=" flex justify-between items-center max-w-[1300px] mx-2 lg:mx-auto">
        <div>
          <img
            src="https://rubiktheme.com/demo/at_dimita_demo/img/dimita-electronics-logo-1613756035.jpg"
            alt=""
          />
        </div>
        <div className=" flex items-center gap-2">
          <FaUser className=" text-xl"></FaUser>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
