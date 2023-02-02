import React from "react";
import { Link } from "react-router-dom";

const Catagory = () => {
  return (
    <section className=" mx-5">
      <div className=" flex justify-between items-center">
        <h2 className=" text-xl font-semibold">Catagory List</h2>
        <Link
          to="/dashboard/add_catagory"
          className=" btn bg-[#e7b00a] text-black border-none capitalize"
        >
          Add New Catagory
        </Link>
      </div>
      <div className=" mt-5 ">
        <table className=" w-full ">
          <thead className=" p-2   border-b-[1px] border-[#d4d4d4]">
            <tr className=" ">
              <th className=" text-left py-2 font-semibold capitalize text-[#1a1a1a]">
                Catagory
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Total Item
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Total Sell
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Price
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Product
              </th>
            </tr>
          </thead>

          <tbody className="text-[#3e3e3e]">
            <tr className=" border-b-[1px] border-[#d4d4d4] ">
              <td className=" text-left">Fashion $ Colthes</td>
              <td className=" text-left py-5">553</td>
              <td className=" text-left py-5">6912</td>
              <td className=" text-left py-5">$34562</td>
              <td className=" text-left py-5">
                <button className=" btn btn-sm bg-[#246e0c] border-none">
                  View All
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Catagory;
