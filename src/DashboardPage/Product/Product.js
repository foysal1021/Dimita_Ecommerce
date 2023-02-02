import React from "react";
import { Link } from "react-router-dom";
import { Line } from "recharts";

const Product = () => {
  return (
    <section className=" mx-5">
      <div className=" flex justify-between items-center">
        <h2 className=" text-xl font-semibold">Products List</h2>
        <Link
          to="/dashboard/add_product"
          className=" btn bg-[#e7b00a] text-black border-none capitalize"
        >
          Import New Product
        </Link>
      </div>
      <div className=" mt-5 ">
        <table className=" w-full ">
          <thead className=" p-2   border-b-[1px] border-[#d4d4d4]">
            <tr className=" ">
              <th className=" text-left py-2 font-semibold capitalize text-[#1a1a1a]">
                Product
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Catagory
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Stock
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Price
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Total Sell
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-[#3e3e3e]">
            <tr className=" border-b-[1px] border-[#d4d4d4] ">
              <td className=" text-left">
                <div className=" flex gap-3 items-center">
                  <div>
                    <img
                      className=" w-14"
                      src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo19/products/product-2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>Men Black Sports Shoes</h2>
                    <p>id : 3235263435</p>
                  </div>
                </div>
              </td>
              <td className=" text-left py-5">Fashion $ Colthes</td>
              <td className=" text-left py-5">
                <p className=" bg-[#ffdcdc] font-bold text-[#990000] w-[110px] rounded px-2">
                  Out of Stock
                </p>
              </td>
              <td className=" text-left py-5">$32</td>
              <td className=" text-left py-5">$3542</td>
              <td className=" text-left py-5">
                <button className=" btn btn-sm bg-[#b80c0c] border-none">
                  Delete
                </button>
              </td>
            </tr>
            <tr className=" border-b-[1px] border-[#d4d4d4] ">
              <td className=" text-left">
                <div className=" flex gap-3 items-center">
                  <div>
                    <img
                      className=" w-14"
                      src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo19/products/product-2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>Men Black Sports Shoes</h2>
                    <p>id : 3235263435</p>
                  </div>
                </div>
              </td>
              <td className=" text-left py-5">Fashion $ Colthes</td>
              <td className=" text-left py-5">
                <p className=" bg-[#def2d0] font-bold text-[#245900] w-[90px] rounded px-2">
                  7 In Stock
                </p>
              </td>
              <td className=" text-left py-5">$32</td>
              <td className=" text-left py-5">$3542</td>
              <td className=" text-left py-5">
                <button className=" btn btn-sm bg-[#b80c0c] border-none">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Product;
