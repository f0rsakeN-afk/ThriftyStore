import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSignup } from "./Signup";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, signup } = useSignup();

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    signup({ email, password });
  }

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <form
        onSubmit={onSubmit}
        className="rounded-md shadow-md p-4 bg-gray-300 flex gap-4 flex-col"
      >
        <p className="text-center text-2xl text-orange-600 font-semibold">
          Signup
        </p>
        <div className="flex items-center gap-4">
          <label className="text-gray-800 text-xl">Email</label>
          <div className="">
            <input
              type="email"
              id="email"
              className="p-2 border-none text-gray-800 rounded-md focus:outline-none"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 items-center relative">
          <label className="text-xl text-gray-800">Password</label>
          <div className="">
            <input
              type={show ? "text" : "password"}
              className="p-2 border-none rounded-md focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {show ? (
              <button className="absolute right-2 top-3" onClick={handleClick}>
                <IoEyeSharp className="text-gray-700" />
              </button>
            ) : (
              <button onClick={handleClick} className="absolute right-2 top-3">
                <FaEyeSlash className="text-gray-700" />
              </button>
            )}
          </div>
        </div>
        <button className="bg-green-500 text-gray-100 rounded-md px-4 py-2">Sign Up</button>
      </form>
      <p className="text-gray-700">
        Already a user? <Link className="underline underline-offset-2 text-blue-600" to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
