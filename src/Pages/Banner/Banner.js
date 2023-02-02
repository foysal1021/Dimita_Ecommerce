import React from "react";
import "../../Pages/Header/Manubar";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo19/slider/slide-1.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" h-[85vh]"
    >
      <div className=" max-w-[1300px] mx-auto h-[100%] flex items-center">
        <div className="  lg:ml-20 mx-2 lg:mx-0 ">
          <h2 className="   lg:text-2xl titale">
            Find the Boundaries. Push Through!
          </h2>
          <h1 className=" text-6xl lg:text-8xl font-bold ">Smartphones</h1>
          <h2 className=" mt-4  text-5xl lg:text-7xl font-bold lg:mt-5">
            70% OFF
          </h2>
          <button className=" mt-3 btn bg-[#1080b9] border-none w-[150px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
