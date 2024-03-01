import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Wrapper } from "./SignUp";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const login = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <form className="border border-gray-400 rounded-md p-6">
        <p className="text-5xl tracking-wide text-gray-800 font-semibold text-center">
          Login
        </p>
        <div className="pt-6 flex flex-col gap-2">
          <Wrapper>
            <label className="text-xl text-gray-700">Email</label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              required
              className="p-2 rounded-md focus:outline-none border w-[25rem]"
            />
          </Wrapper>
          <Wrapper>
            <label className="text-xl text-gray-700">Password</label>
            <input
              type="password"
              ref={passwordRef}
              id="password"
              required
              className="p-2 rounded-md focus:outline-none border w-[25rem]"
            />
          </Wrapper>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 font-semibold text-gray-100 rounded-md hover:bg-blue-700 transition-all ease-linear duration-150"
          >
            Login
          </button>
        </div>
        <p className="text-xl text-gray-700 text-center">
          Not a User?{" "}
          <Link
            to="/signup"
            className="text-blue-600 underline underline-offset-2"
          >
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
