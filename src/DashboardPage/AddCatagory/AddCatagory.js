import React from "react";

const AddCatagory = () => {
  return (
    <section className=" mx-5">
      <form className=" w-1/2 mx-auto grid grid-cols-1 gap-4">
        <h2 className=" mb-5 text-3xl text-center">Add Catagory</h2>
        <div className=" form-control ">
          <label className=" mb-1 font-semibold">Catagory Name</label>
          <input
            type="text"
            className=" py-3 px-2 border outline-none border-[#b9b9b9]"
            placeholder=" Type Catagory Name"
          />
        </div>
        <input
          type="submit"
          value="Add Catagory"
          className=" btn btn-success w-full"
        />
      </form>
    </section>
  );
};

export default AddCatagory;
