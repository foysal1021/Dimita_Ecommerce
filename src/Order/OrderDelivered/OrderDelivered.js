import React from "react";

const OrderDelivered = () => {
  return (
    <section className=" mx-2 mt-10 bg-white p-5 rounded">
      <h2 className=" mb-5 font-semibold"> Order Delivered 55434</h2>
      <table className=" w-full ">
        <thead className=" p-2   border-b-[1px] border-[#d4d4d4]">
          <tr className=" ">
            <th className=" w-2/12 text-left py-2 font-semibold capitalize text-[#1a1a1a]">
              Order Id
            </th>
            <th className="w-1/12  text-left font-semibold capitalize text-[#1a1a1a]">
              Product
            </th>
            <th className="w-3/12  text-left font-semibold capitalize text-[#1a1a1a]">
              Email
            </th>
            <th className="w-3/12  text-left font-semibold capitalize text-[#1a1a1a]">
              Date
            </th>
            <th className=" w-1/12  text-left font-semibold capitalize text-[#1a1a1a]">
              Total
            </th>
            <th className="w-1/12  text-left font-semibold capitalize text-[#1a1a1a]">
              Payment
            </th>
            <th className="w-1/12  text-left font-semibold capitalize text-[#1a1a1a]">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="text-[#737c83]">
          <tr className=" border-b-[1px] border-[#d4d4d4] ">
            <td className=" text-left font-extrabold ">#553UI4F</td>
            <td className=" text-left py-5">
              <div>
                <img
                  className=" w-[50px]"
                  src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo19/products/product-2.jpg"
                  alt=""
                />
              </div>
            </td>
            <td className=" text-left font-bold py-5">
              foysalahamed2001@gmail.com
            </td>
            <td className=" text-left font-bold py-5">
              August 05,2018-10:29 PM
            </td>
            <td className=" text-left font-bold py-5">$544</td>
            <td className=" text-left font-bold py-5">None</td>
            <td className=" text-left font-bold py-5 ">
              <p className=" capitalize text-success">Delivered</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default OrderDelivered;
