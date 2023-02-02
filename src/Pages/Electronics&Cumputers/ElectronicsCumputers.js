import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ElectronicsCumputers = () => {
  const [electronics, setElectronices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/electronic_products")
      .then((res) => res.json())
      .then((data) => setElectronices(data));
  }, []);
  return (
    <section>
      <div className=" max-w-[1300px] mx-2 lg:mx-auto mt-20">
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold">ELECTRONICS & COMPUTERS</h2>
          <button className=" btn btn-sm bg-[#1080b9] border-none w-[120px]">
            View All
          </button>
        </div>
        <div className=" mt-10 grid grid-cols-2 lg:grid-cols-6 gap-5">
          {electronics.map((electronic) => (
            <div>
              <div className=" relative">
                <img className="" src={electronic.img} alt="" />
                <p className=" absolute top-0 bg-[#0c8a47] rounded-md uppercase text-center text-white w-[50px]">
                  hot
                </p>
              </div>
              <div className=" grid-cols-1 grid gap-1 mt-3">
                <div className=" flex justify-between items-center">
                  <h2>{electronic.productName} </h2>
                  <FaHeart></FaHeart>
                </div>
                <div className=" flex gap-1 text-xl">
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                </div>
                <p className=" text-xl font-bold">${electronic.price}</p>
              </div>{" "}
              <Link
                to={`/view_details/${electronic._id}`}
                className=" btn btn-sm bg-[#1080b9] border-none mt-2"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div
            style={{
              backgroundImage: `url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo19/banners/banner-1.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" bg-red-400 h-32 flex  items-center"
          >
            <div className=" text-white ml-16">
              <h2 className=" font-bold capitalize text-4xl">
                {" "}
                <h3 class="font1 ls-10 text-md-center text-uppercase mb-0">
                  Drone Cameras
                </h3>
              </h2>
              <h4 className=" text-5xl font-bold">$100 off</h4>
            </div>
          </div>
          <div
            className=" h-32"
            style={{
              backgroundImage: `url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo19/banners/banner-2.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" bg-[#2580cbb8] h-[100%] flex justify-center items-center">
              <div className=" text-center text-white">
                <h2 className=" text-5xl uppercase font-bold">
                  Electronic Deals
                </h2>
                <h2 className=" uppercase font-bold text-3xl">$100 off</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsCumputers;
