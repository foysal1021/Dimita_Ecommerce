import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const userLogout = () => {
    logout()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
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
          <FaUser className=" text-xl text-white"></FaUser>
          {user?.uid ? (
            <Link
              onClick={userLogout}
              to=""
              className=" text-white capitalize font-semibold"
            >
              Logout
            </Link>
          ) : (
            <Link to="/login" className=" text-white capitalize font-semibold ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
