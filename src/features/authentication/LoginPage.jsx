import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import Wrapper from "../../components/Wrapper";
import logo from "../../assets/logo.webp";

const LoginPage = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test1234");
  const { login, isLoading } = Login();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <img src={logo} alt="logo-image" className="w-32" />
      <form
        className="border border-gray-400 rounded-md p-6"
        onSubmit={handleSubmit}
      >
        <p className="text-5xl tracking-wide text-gray-800 font-semibold text-center">
          Login
        </p>
        <div className="pt-6 flex flex-col gap-2">
          <Wrapper>
            <label className="text-xl text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
              disabled={isLoading}
              className="p-2 rounded-md focus:outline-none border w-72 md:w-[25rem] "
            />
          </Wrapper>
          <Wrapper>
            <label className="text-xl text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              disabled={isLoading}
              className="p-2 rounded-md focus:outline-none border md:w-[25rem]"
            />
          </Wrapper>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 font-semibold text-gray-100 rounded-md hover:bg-blue-700 transition-all ease-linear duration-150"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-xl text-gray-700 text-center">
        Not a User?{" "}
        <Link
          to="/signup"
          className="text-blue-600 underline underline-offset-2"
        >
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

