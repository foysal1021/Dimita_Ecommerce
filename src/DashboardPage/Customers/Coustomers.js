import React from "react";

const Coustomers = () => {
  return (
    <section className=" mx-2">
      <h2 className=" text-2xl font-semibold">Customers List</h2>
      <div>
        <table className=" w-full ">
          <thead className=" p-2   border-b-[1px] border-[#d4d4d4]">
            <tr className=" ">
              <th className=" text-left py-2 font-semibold capitalize text-[#1a1a1a]">
                Name
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Email
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Total Spend
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Total Order
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Action
              </th>
              <th className=" text-left font-semibold capitalize text-[#1a1a1a]">
                Promote
              </th>
            </tr>
          </thead>

          <tbody className="text-[#3e3e3e]">
            <tr className=" border-b-[1px] border-[#d4d4d4] ">
              <td className=" text-left">Foysal Ahamed</td>
              <td className=" text-left py-5">foysalahamed2002@gmail.com</td>
              <td className=" text-left py-5">$456</td>
              <td className=" text-left py-5">44</td>
              <td className=" text-left py-5">
                {" "}
                <button className=" btn btn-xs bg-[#b80c0c] border-none">
                  delete
                </button>
              </td>
              <td className=" text-left py-5">
                <button className=" btn btn-xs bg-[#14ca81] border-none">
                  Make Admin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Coustomers;
