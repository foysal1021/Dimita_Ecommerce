import React from "react";
import { MdEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Register = () => {
  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <section>
      <div className=" my-20 max-w-[1300px] mx-2 lg:mx-auto">
        <div className=" lg:w-1/2 mx-auto rounded px-10 py-14 bg-[#065880]">
          <h2 className=" text-3xl font-bold text-center text-white capitalize mb-10">
            Register Here
          </h2>

          <form onSubmit={register} className=" grid grid-cols-1 gap-4">
            <div className="form-control">
              <label className=" text-white mb-2 flex items-center text-xl gap-1">
                <MdDriveFileRenameOutline></MdDriveFileRenameOutline> Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Name"
                className="input w-full loginInput text-white"
              />
            </div>
            <div className="form-control">
              <label className=" text-white mb-2 flex items-center text-xl gap-1">
                <MdEmail></MdEmail> User Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Type Your Email"
                className="input w-full loginInput text-white"
              />
            </div>
            <div className="form-control">
              <label className="mb-2 text-white flex items-center gap-1 text-xl">
                <RiLockPasswordFill></RiLockPasswordFill> User Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Type Your Password"
                className="input w-full loginInput text-white"
              />
            </div>
            <input
              className="input cursor-pointer w-full loginInput text-white"
              value="Register"
              type="submit"
            />
          </form>
          <span className=" ">
            Already Have An Account?
            <Link
              to="/"
              className=" btn ml-2 bg-[#0a3a52] border-none mt-3 shadow-lg btn-xs"
            >
              Login
            </Link>
          </span>

          <div className="divider">OR</div>
          <button className=" btn w-full bg-[#13a4ec] border-none">
            Countinu With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
