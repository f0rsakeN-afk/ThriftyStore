import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../assets/logo.webp";
import Wrapper from "../../components/Wrapper";

const SignUpPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <img src={logo} alt="logo-image" className="w-32" />
      <form
        onSubmit={handleSubmit}
        className="border border-gray-400 rounded-md p-6"
      >
        <p className="text-5xl tracking-wide text-gray-800 font-semibold text-center">
          Register
        </p>
        <div className="pt-6 flex flex-col gap-2">
          <Wrapper>
            <label htmlFor="email" className="text-xl text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              required
              className="p-2 rounded-md focus:outline-none border w-72 md:w-[25rem]"
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="password" className="text-xl text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
              className="p-2 rounded-md focus:outline-none border w-72 md:w-[25rem]"
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="confirm-password" className="text-xl text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              ref={confirmPasswordRef}
              required
              className="p-2 rounded-md focus:outline-none border w-72 md:w-[25rem]"
            />
          </Wrapper>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 font-semibold text-gray-100 rounded-md hover:bg-blue-700 transition-all ease-linear duration-150"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-xl text-gray-700">
        Already a User?{" "}
        <Link
          to="/login"
          className="text-blue-600 underline underline-offset-2"
        >
          Login
        </Link>
      </p>
    </div>
  );
};


export default SignUpPage;
