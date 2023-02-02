import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <section>
      <div className=" my-20 max-w-[1300px] mx-2 lg:mx-auto">
        <div className=" lg:w-1/2 mx-auto rounded px-10 py-14 bg-[#065880]">
          <h2 className=" text-3xl font-bold text-center text-white capitalize mb-10">
            Contact
          </h2>
          <form className=" grid grid-cols-1 gap-4">
            <div className="form-control">
              <label className=" text-white mb-2 flex items-center text-xl gap-1">
                <MdEmail></MdEmail> Name
              </label>
              <input
                type="text"
                placeholder="Type Your Name"
                className="input w-full loginInput text-white"
              />
            </div>
            <div className="form-control">
              <label className="mb-2 text-white flex items-center gap-1 text-xl">
                <MdEmail></MdEmail> Email
              </label>
              <input
                type="email"
                placeholder="Type Your Email"
                className="input w-full loginInput text-white"
              />
            </div>
            <div className="form-control">
              <label className="mb-2 text-white flex items-center gap-1 text-xl">
                <MdEmail></MdEmail> Message
              </label>
              <textarea
                placeholder="Type Your Message.."
                className="loginInput h-40 rounded p-5"
              ></textarea>
            </div>
            <input
              className="input cursor-pointer w-full loginInput text-white"
              value="Send Message"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
