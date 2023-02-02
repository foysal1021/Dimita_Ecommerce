import React from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <section className=" max-w-[1300px] mx-2 lg:mx-auto">
      <div className=" mt-20">
        <h2 className=" text-2xl font-semibold">Billing details</h2>
        <div className=" grid grid-cols-1  lg:grid-cols-2 gap-9 mt-5">
          <div className=" border border-[#e6e6e6] shadow-xl p-10 rounded">
            <form className=" grid grid-cols-1 gap-4 text-[#000000d9]">
              <div className="form-control">
                <label className="mb-1">Full Name</label>
                <input
                  type="text"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>

              <div className="form-control">
                <label className="mb-1">Country / Region</label>

                <select className=" w-full  border border-[#d1d0d0] h-12 px-2">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              <div className="form-control">
                <label className="mb-1">Street address</label>
                <input
                  type="text"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Town / City</label>
                <input
                  type="text"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">State / County</label>
                <input
                  type="text"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Postcode / Zip</label>
                <input
                  type="number"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Phone</label>
                <input
                  type="email"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
            </form>
          </div>

          <div className="border border-[#e6e6e6] shadow-xl p-10 rounded lg:h-[420px]">
            <h2 className=" text-xl font-bold uppercase">Your Order</h2>
            <div className=" mt-5">
              <h2 className=" font-bold mb-3">Product</h2>
              <hr></hr>
              <div className=" grid grid-cols-1  gap-3 text-[#000000c4] mt-3 mb-5">
                <div className=" flex">
                  <p className=" w-2/3">Circled Ultimate 3D Speaker × 4</p>
                  <p className=" w-1/3 text-right">$44.00</p>
                </div>
                <div className=" flex">
                  <p className=" w-2/3">Delivery Charge</p>
                  <p className=" w-1/3 text-right">$20.00</p>
                </div>
                <div className=" flex">
                  <p className=" w-2/3">Service Charge</p>
                  <p className=" w-1/3 text-right">$10.00</p>
                </div>

                <hr></hr>
                <div className=" flex text-2xl font-bold">
                  <p className=" w-2/3">Total</p>
                  <p className=" w-1/3 text-right">$10.00</p>
                </div>
              </div>
            </div>
            <Link
              to="/order_complite"
              className=" btn  w-full text-2xl capitalize"
            >
              {" "}
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
