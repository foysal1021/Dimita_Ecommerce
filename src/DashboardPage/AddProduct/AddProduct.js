import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddProduct = () => {
  const [content, setContent] = useState("");
  return (
    <section className=" mt-5 mx-2">
      <h2 className=" text-xl font-bold mb-10"> Add Product</h2>
      <div>
        <form className=" bg-[#fff] p-5 rounded w-1/2 grid grid-cols-1 gap-4">
          <h2 className=" text-xl font-semibold">Basic information</h2>
          <div className=" form-control ">
            <label className=" mb-1 font-semibold">Product title</label>
            <input
              type="text"
              className=" py-3 px-2 border outline-none border-[#b9b9b9]"
              placeholder=" type product name"
            />
          </div>
          <div className=" form-control ">
            <label className=" mb-1 font-semibold">Catagory</label>
            <select className="py-3 px-2 w-full border border-[#b9b9b9]">
              <option disabled selected>
                Select Catagory
              </option>
            </select>
          </div>
          <div className=" form-control ">
            <label className=" mb-1 font-semibold">Price</label>
            <input
              type="number"
              className=" py-3 px-2 border outline-none border-[#b9b9b9]"
              placeholder=" Price"
            />
          </div>
          <div className=" form-control ">
            <label className=" mb-1 font-semibold">Stock quantity</label>
            <input
              type="number"
              className=" py-3 px-2 border outline-none border-[#b9b9b9]"
              placeholder=" Stock quantity "
            />
          </div>
          <div className=" form-control ">
            <label className=" mb-1 font-semibold">About Product</label>
            <div style={{ backgroundColor: "#f3f3f3" }}>
              <ReactQuill
                value={content}
                onChange={setContent}
                style={{
                  height: "200px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className=" form-control  mt-10">
            <label className=" mb-1 font-semibold">Short description</label>
            <input
              type="number"
              className=" py-3 px-2 border outline-none border-[#b9b9b9]"
              placeholder=" Stock quantity "
            />
          </div>

          <div className=" form-control  ">
            <label className=" mb-1 font-semibold">Upload Image</label>
            <input
              type="file"
              className=" py-3 px-2 border outline-none border-[#b9b9b9]"
              placeholder=" Stock quantity "
            />
          </div>
          <input
            type="submit"
            value="Upload Product"
            className=" btn btn-success"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
