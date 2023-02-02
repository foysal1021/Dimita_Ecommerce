import React, { useContext } from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { user, userSingIn, GoogleSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const userLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSingIn(email, password)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // google singin start
  const SingInWithGoogle = () => {
    GoogleSingIn()
      .then((data) => {
        const googleUser = {
          name: data.user.displayName,
          email: data.user.email,
        };
        fetch("http://localhost:5000/user_collection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googleUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err));
  };
  // google singin end

  return (
    <section>
      <div className=" my-20 max-w-[1300px] mx-2 lg:mx-auto">
        <div className=" lg:w-1/2 mx-auto rounded px-10 py-14 bg-[#065880]">
          <h2 className=" text-3xl font-bold text-center text-white capitalize mb-10">
            Login Here
          </h2>
          <form onSubmit={userLogin} className=" grid grid-cols-1 gap-4">
            <div className="form-control">
              <label className=" text-white mb-2 flex items-center text-xl gap-1">
                <MdEmail></MdEmail> User Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email"
                className="input w-full loginInput text-white"
              />
            </div>
            <div className="form-control">
              <label className="mb-2 text-white flex items-center gap-1 text-xl">
                <RiLockPasswordFill></RiLockPasswordFill> User Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type Your Password"
                className="input w-full loginInput text-white"
              />
            </div>
            <input
              className="input cursor-pointer w-full loginInput text-white"
              value="Login"
              type="submit"
            />
          </form>

          <div className=" mt-5 text-[#b0aaaa]">
            <Link to="/" className=" underline ">
              Forget Password?
            </Link>
            <br />
            <Link to="/register" className=" underline ">
              {" "}
              Create An Accout
            </Link>
          </div>
          <div className="divider">OR</div>
          <button
            onClick={SingInWithGoogle}
            className=" btn w-full bg-[#13a4ec] border-none"
          >
            Countinu With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
