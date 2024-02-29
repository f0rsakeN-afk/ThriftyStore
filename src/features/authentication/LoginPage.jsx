import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLogin } from "./Login";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, login } = useLogin();

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center dark:bg-gray-900 h-screen">
      <form
        className="rounded-md shadow-md p-4 bg-gray-300 flex gap-4 flex-col"
        onSubmit={handleSubmit}
      >
        <p className="text-center text-2xl text-orange-600 font-semibold">
          Login
        </p>
        <div className="flex items-center gap-4">
          <label htmlFor="email" className="text-gray-800 text-xl">
            Email
          </label>
          <div className="">
            <input
              type="email"
              id="email"
              className="p-2 border-none text-gray-800 rounded-md focus:outline-none"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex gap-4 items-center relative">
          <label htmlFor="password" className="text-xl text-gray-800">
            Password
          </label>
          <div className="">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="p-2 border-none rounded-md focus:outline-none"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoEyeSharp className="text-gray-700" />
              ) : (
                <FaEyeSlash className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-gray-100 rounded-md px-4 py-2"login
          disabled={isLoading}
        >
          Login
        </button>
      </form>
      <p className="text-gray-700">
        Not signed up?
        <Link
          to="/signup"
          className="underline underline-offset-2 text-blue-600"
        >
          Signup
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
