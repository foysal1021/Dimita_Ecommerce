import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {
  const { orderInfo } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [districk, setDistrick] = useState("");
  const [thana, setThana] = useState("");
  const [zipcode, SetzipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const BillinInfo = [
    {
      name,
      division,
      districk,
      thana,
      zipcode,
      phone,
      email,
    },
  ];
  const order = { orderInfo, BillinInfo };

  const Name = (e) => {
    setName(e.target.value);
  };
  const Division = (e) => {
    setDivision(e.target.value);
  };
  const Districk = (e) => {
    setDistrick(e.target.value);
  };
  const Thana = (e) => {
    setThana(e.target.value);
  };
  const zipCode = (e) => {
    SetzipCode(e.target.value);
  };
  const Phone = (e) => {
    setPhone(e.target.value);
  };
  const Email = (e) => {
    setEmail(e.target.value);
  };

  const placeOrder = () => {
    fetch("http://localhost:5000/place_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
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
                  onChange={Name}
                  type="text"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>

              <div className="form-control">
                <label className="mb-1">Division</label>

                <select
                  onChange={Division}
                  className=" w-full  border border-[#d1d0d0] h-12 px-2"
                >
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              <div className="form-control">
                <label className="mb-1">Districk</label>
                <input
                  type="text"
                  onChange={Districk}
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Thana</label>
                <input
                  type="text"
                  onChange={Thana}
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Zip Code</label>
                <input
                  onChange={zipCode}
                  type="text"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>

              <div className="form-control">
                <label className="mb-1">Phone</label>
                <input
                  onChange={Phone}
                  type="email"
                  className=" w-full border border-[#d1d0d0] outline-none h-12 px-2"
                />
              </div>
              <div className="form-control">
                <label className="mb-1">Email</label>
                <input
                  onChange={Email}
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
                  <p className=" w-2/3">
                    {orderInfo.productName} × {orderInfo.Quantity}
                  </p>
                  <p className=" w-1/3 text-right">
                    ${orderInfo.OrginalPrice * orderInfo.Quantity}.00
                  </p>
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
                  <p className=" w-1/3 text-right">${orderInfo.totalPrice}</p>
                </div>
              </div>
            </div>
            <Link
              onClick={placeOrder}
              to="/order_complite"
              className=" btn  w-full text-2xl capitalize"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
