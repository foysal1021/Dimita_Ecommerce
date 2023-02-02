import React from "react";
import "./WishList.css";
import { HiXMark, IconName } from "react-icons/hi2";

const WishList = () => {
  return (
    <section className=" max-w-[1300px] mx-2 lg:mx-auto mt-20">
      <div className="">
        <h2 className=" text-xl font-semibold capitalize">
          My wishlist on Dimita Shop
        </h2>

        {/* for larger divice start */}
        <div className=" mt-5 hidden lg:block">
          <table className=" w-full ">
            <thead className=" p-2 uppercase border-b-[1px] ">
              <tr className="">
                <th className=" w-1/12 thStyle">IMAGE</th>
                <th className=" w-4/12 thStyle text-left">PRODUCT</th>
                <th className=" w-2/12 thStyle text-left">PRICE</th>
                <th className=" w-2/12 thStyle text-left">STOCK STATUS</th>
                <th className=" w-4/12 thStyle text-left">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              <tr className=" border-b-[1px] ">
                <td className="tdStyle">
                  <div className="relative w-[80px] mx-auto">
                    <img
                      className=" w-[100%] mx-auto"
                      src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-4.jpg"
                      alt=""
                    />
                    <button className=" right-[-4px] absolute top-[-4px] w-[20px] h-[20px] bg-red-400 hover:bg-red-600 rounded-full flex justify-center items-center">
                      <HiXMark className=" cursor-pointer"></HiXMark>
                    </button>
                  </div>
                </td>
                <td className="tdStyle">product</td>
                <td className="tdStyle">$55</td>
                <td className="tdStyle">
                  <button className=" btn btn-xs bg-[#0c8a47] hover:bg-[#0c8a47] border-none">
                    In Stock
                  </button>{" "}
                </td>
                <td className=" tdStyle ">
                  <div className="flex gap-2">
                    <button className=" btn btn-sm w-1/2  bg-[#1080b9] border-none">
                      Quick View
                    </button>
                    <button className=" btn btn-sm w-1/2 bg-[#0c8a47] border-none">
                      add to cart
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* for larger divice end */}

        {/* for small divice start */}
        <div className=" mt-5 lg:hidden grid grid-cols-1 gap-2">
          <div className=" border p-6 rounded">
            <div className="relative w-[100px] mx-auto">
              <img
                className=" w-[100%] mx-auto"
                src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-4.jpg"
                alt=""
              />
              <button className=" right-[-10px] absolute top-[-10px] w-[30px] h-[30px] text-white text-2xl bg-red-400 hover:bg-red-600 rounded-full flex justify-center items-center">
                <HiXMark className=" cursor-pointer"></HiXMark>
              </button>
            </div>
            <div className=" text-center grid grid-cols-1 gap-1">
              <h2>name</h2>
              <h2>price</h2>
              <span>In Stock</span>
            </div>
            <div className=" grid grid-cols-1 gap-2 mt-2">
              <button className=" btn bg-[#1080b9] border-none">
                Quick View
              </button>
              <button className=" btn bg-[#0c8a47] border-none">
                add to cart
              </button>
            </div>
          </div>
        </div>
        {/* for small divice end */}
      </div>
    </section>
  );
};

export default WishList;
