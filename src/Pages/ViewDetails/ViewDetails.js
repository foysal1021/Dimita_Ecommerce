import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ViewDetails = () => {
  const Details = useLoaderData();
  const { user, setorderInfo, orderInfo } = useContext(AuthContext);
  console.log(orderInfo);
  const [Quantity, setQuantity] = useState(1);
  const DeliveryCharge = 20;
  const serviceCharge = 10;
  const totalPrice = Quantity * Details.price + DeliveryCharge + serviceCharge;

  const decrement = () => {
    if (Quantity < 2) {
      setQuantity(1);
      return;
    }
    setQuantity(Quantity - 1);
  };
  const increment = () => {
    setQuantity(Quantity + 1);
  };

  const addWishList = (id) => {
    const addWishList = {
      orderId: id,
      img: Details.img,
      productName: Details.productName,
      OrginalPrice: Details.price,
      totalPrice: totalPrice,
      ratting: Details.ratting,
      catagory: Details.category,
      Quantity,
    };
  };
  const buyNow = () => {
    const order = {
      email: user?.email,
      orderId: Details._id,
      img: Details.img,
      productName: Details.productName,
      OrginalPrice: Details.price,
      totalPrice: totalPrice,
      ratting: Details.ratting,
      catagory: Details.category,
      Quantity,
    };
    setorderInfo(order);
  };
  return (
    <section className=" max-w-[1300px] mx-auto mt-20">
      <div className=" lg:flex justify-between">
        <div className=" lg:w-4/12 bg-[#f4f4f4] ">
          <img src={Details.img} alt="" className=" mx-auto" />
        </div>

        <div className=" lg:w-5/12 mx-2">
          <h2 className=" text-3xl font-extrabold">{Details.productName}</h2>
          <div className=" flex gap-1 mt-2 text-xl text-[#1080b9]">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <p className=" text-4xl font-extrabold mt-5 ">${Details.price}</p>
          <p className="text-[#383a3a] mt-2">{Details.about}</p>
          <p className=" mt-2">
            Category : <span className=" font-bold">{Details.category}</span>
          </p>

          <div className=" flex gap-7 items-center mt-5">
            <button
              onClick={decrement}
              className=" bg-[#1080b9] border-none btn btn-md"
            >
              <FaMinus></FaMinus>
            </button>
            <span className=" text-xl font-semibold"> {Quantity}</span>
            <button
              onClick={increment}
              className=" bg-[#1080b9] border-none btn  btn-md"
            >
              <FaPlus></FaPlus>
            </button>
          </div>
          <div className=" flex items-center gap-2 mt-5">
            <FaHeart className=" text-[#1080b9] text-2xl"></FaHeart>
            <button
              onClick={() => addWishList(Details._id)}
              className=" btn btn-sm bg-[#1080b9] border-none"
            >
              Add To WishList
            </button>
          </div>
        </div>
        <div className=" lg:w-3/12 border p-5 rounded shadow">
          <div className=" grid grid-cols-1 gap-1">
            <button className=" btn bg-[#1080b9] border-none">
              {" "}
              Add To Cart
            </button>
            <Link
              onClick={buyNow}
              to="/check_out"
              className=" btn bg-[#3086b0] border-none"
            >
              {" "}
              Buy Now
            </Link>
          </div>
          <div>
            <button className=" btn bg-green-700 btn-sm hover:bg-green-700 border-none mt-2 ">
              In Stock
            </button>
            <div className=" font-semibold mt-2">
              <p> Delivery Charge : $20</p>
              <p> Service Fee : $10</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <h2 className=" text-2xl font-semibold mb-5 ">Coustomer Review</h2>

        <div className=" border p-5 rounded">
          <div className=" flex items-center  gap-2">
            <div className=" w-[50px] h-[50px] rounded-full flex justify-center items-center bg-red-300">
              img
            </div>
            <h2 className=" font-bold"> Coustomer Name</h2>
          </div>
          <div className=" flex gap-1 mt-2 text-[#1080b9]">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <p className=" mt-3">
            feed back Amazon Basics 36 Pack AAA High-Performance Alkaline
            Batteries, 10-Year Shelf Life, Easy to Open Value Packs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
