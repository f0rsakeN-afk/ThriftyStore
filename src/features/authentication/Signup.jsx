import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;


  function onError(error) {
    console.log(error);
  }


  function onSubmit(data) {
    console.log(data);
  }

  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="rounded-md shadow-md p-4 bg-gray-300 flex gap-4 flex-col"
      >
        <p className="text-center text-2xl text-orange-600 font-semibold">
          Signup
        </p>
        <div className="flex items-center gap-4">
          <label className="text-gray-700 text-xl">Full Name</label>
          <div className="">
            <input
              type="text"
              placeholder="Enter your fullname"
              id="name"
              className="focus:outline-none p-2 rounded-md text-gray-700"
              {...register("name", { required: "This field is required" })}
            />
            {errors && errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <label className="text-gray-800 text-xl">Email</label>
          <div className="">
            <input
              type="email"
              id="email"
              className="p-2 border-none text-gray-800 rounded-md focus:outline-none"
              placeholder="Enter your email address"
              {...register("email", { required: "This field is required" })}
            />
            {errors && errors.email && (
              <p className="text-red-500 ">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex  gap-4 items-center relative">
          <label className="text-xl text-gray-800">Password</label>
          <div className="">
            <input
              type={show ? "text" : "password"}
              className="p-2 border-none rounded-md focus:outline-none"
              placeholder="Enter your password"
              {...register("password", { required: "This field is required" })}
            />
            {errors && errors.password && (
              <p className="text-red-500 ">{errors.password.message}</p>
            )}
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
          <p className="text-gray-700">Already a user? <Link className='underline underline-offset-2 text-blue-600' to='/login'>Sign In</Link> </p>
    </div>
  );
};

export default Signup;
