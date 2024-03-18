import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { useSignUp } from "./useSignUp";

const SignUpPage = () => {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { isLoading, signup } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <img src={logo} alt="logo-image" className="w-32" />
      <form
        className="border border-gray-400 rounded-md p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-5xl tracking-wide text-gray-800 font-semibold text-center">
          Signup
        </p>
        <div className="pt-6 flex flex-col gap-2">
          <Wrapper>
            <label error={errors?.fullName?.message}>Full Name</label>
            <input
              disabled={isLoading}
              type="text"
              className="p-2 rounded-md focus:outline-none border w-72 md:w-[25rem]"
              id="fullName"
              {...register("fullName", { required: "This field is required" })}
            />
          </Wrapper>

          <Wrapper>
            <label error={errors?.email?.message}>Email Address</label>
            <input
              disabled={isLoading}
              type="email"
              className="p-2 rounded-md focus:outline-none border w-72 md:w-[25rem]"
              id="email"
              {...register("email", { required: "This field is required" })}
            />
          </Wrapper>
          <Wrapper>
            <label error={errors.password?.message}>Password</label>
            <input
              type="password"
              id="password"
              disabled={isLoading}
              className="p-2 rounded-md focus:outline-none border md:w-[25rem]"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
          </Wrapper>
          <Wrapper>
            <label error={errors?.passwordConfirm?.message}>
              Confirm password
            </label>
            <input
              type="password"
              disabled={isLoading}
              id="passwordConfirm"
              className="p-2 rounded-md focus:outline-none border md:w-[25rem]"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Password needs to match",
              })}
            />
          </Wrapper>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 font-semibold text-gray-100 rounded-md hover:bg-blue-700 transition-all ease-linear duration-150"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-xl text-gray-700 text-center">
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
