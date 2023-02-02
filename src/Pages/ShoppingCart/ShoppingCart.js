import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <section className=" mt-20 max-w-[1300px] mx-auto">
      <div>
        <h2 className=" text-2xl font-semibold">Shopping Cart</h2>
        {/* for large divice start */}
        <div className=" mt-5 hidden lg:block">
          <table className=" w-full ">
            <thead className=" p-2 uppercase border-b-[1px] ">
              <tr className="">
                <th className="  thStyle">IMAGE</th>
                <th className="     thStyle text-left">PRODUCT</th>
                <th className="  thStyle ">QUANTITY</th>
                <th className="  thStyle ">PRICE</th>
                <th className="  thStyle ">STOCK STATUS</th>
                <th className="  thStyle ">SUBTOTAL</th>
                <th className="  thStyle ">ACTIONS</th>
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
                <td className="tdStyle">product </td>
                <td className="tdStyle text-center">5</td>
                <td className="tdStyle text-center">$55</td>
                <td className="tdStyle text-center">
                  <button className=" btn btn-xs bg-[#0c8a47] hover:bg-[#0c8a47] border-none">
                    In Stock
                  </button>{" "}
                </td>
                <td className=" tdStyle text-center">$77</td>
                <td className=" tdStyle text-center">
                  <Link
                    to="/check_out"
                    className=" btn btn-sm  bg-[#1080b9] border-none"
                  >
                    BUY NOW
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* for large diivice end */}

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
            <div className="  grid grid-cols-1 gap-1">
              <h2>Product Name:</h2>
              <p>
                Quantity : <span>0</span>
              </p>
              <p className=" capitalize">
                {" "}
                price :<span>$22</span>
              </p>
              <span className=" bg-[#0c8a47] w-[80px] text-center p-1 rounded text-white">
                In Stock
              </span>
              <p>
                Subtotal: <span>$55</span>
              </p>
            </div>
            <div className=" grid grid-cols-1 gap-2 mt-2">
              <Link to="/check_out" className=" btn bg-[#1080b9] border-none">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
        {/* for small divice end */}
      </div>
    </section>
  );
};

export default ShoppingCart;
