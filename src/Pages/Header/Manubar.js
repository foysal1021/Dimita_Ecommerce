import React, { useContext, useState } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import {
  FaShoppingBag,
  FaTimes,
  FaBlogger,
  FaBars,
  FaHome,
  FaHeart,
} from "react-icons/fa";
import { MdContactMail, MdBookmarkBorder, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Manubar = () => {
  const { user } = useContext(AuthContext);
  const [show, setShowManue] = useState(false);
  const manuItem = (
    <>
      <Link to="/">
        <li className=" flex items-center gap-1">
          <FaHome></FaHome>Home
        </li>
      </Link>
      <Link to="/">
        <li className=" flex items-center gap-1">
          <FaShoppingBag></FaShoppingBag>Shop
        </li>
      </Link>

      <Link to="/blog">
        <li className=" flex items-center gap-1">
          <FaBlogger></FaBlogger>Blog
        </li>
      </Link>
      <Link to="/contact_me">
        <li className=" flex items-center gap-1">
          <MdContactMail></MdContactMail>Contact
        </li>
      </Link>
      <Link to="/my_order">
        <li className=" flex items-center gap-1">
          <MdBookmarkBorder></MdBookmarkBorder>My Order
        </li>
      </Link>
      <Link to="/dashboard">
        <li className=" flex items-center gap-1">
          <MdDashboard></MdDashboard>dashboard
        </li>
      </Link>
    </>
  );
  const showManue = () => {
    if (show === false) {
      setShowManue(true);
    } else {
      setShowManue(false);
    }
  };
  return (
    <div className="py-5 ">
      <div className=" max-w-[1300px] mx-2 lg:mx-auto flex justify-between">
        <div className=" lg:hidden relative">
          {show === true ? (
            <FaTimes onClick={showManue} className=" text-4xl "></FaTimes>
          ) : (
            <FaBars onClick={showManue} className=" text-4xl "></FaBars>
          )}

          <ul
            className={`absolute  w-[150px] grid grid-cols-1 gap-5 py-5 px-2 bg-white rounded capitalize ${
              show === false && "hidden"
            }`}
          >
            {manuItem}
          </ul>
        </div>

        <div className=" hidden lg:block">
          <ul className=" flex  gap-10 text-xl font-semibold uppercase">
            {manuItem}
          </ul>
        </div>
        {user?.uid && (
          <div className=" flex gap-10">
            <Link to="/wishlist" className="relative">
              <FaHeart className=" text-3xl"></FaHeart>
              <p className=" absolute top-[-10px] bg-[#1080b9] text-white  right-0 w-5 h-5 rounded-full flex justify-center items-center">
                0
              </p>
            </Link>
            <Link to="/shopping_cart" className="relative">
              <BsFillCartDashFill className=" text-3xl"></BsFillCartDashFill>
              <p className=" absolute top-[-10px] bg-[#1080b9] text-white right-0 w-5 h-5 rounded-full flex justify-center items-center">
                0
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manubar;
