import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserData } from "./getProfileInfo";
import { updateProfileInfo } from "./updateProfile";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const UpdateProfileForm = () => {
  const { data } = getUserData();
  const { isLoading, update } = updateProfileInfo();
  const { formState, handleSubmit, register } = useForm({
    defaultValues: data,
  });
  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  function onSubmit(data) {
    //console.log(data);
    update(data);
  }

  function onError(err) {
    console.error(err);
  }

  return (
    <div className="my-6 bg-gray-300 dark:bg-gray-800 p-4 w-72 rounded-md shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-gray-700 dark:text-gray-200">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="focus:outline-none p-2 text-gray-800 rounded-sm "
            {...register("email", { required: "This field is required" })}
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label className="text-gray-700 dark:text-gray-200">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="focus:outline-none p-2 text-gray-800 rounded-sm "
            {...register("password", { required: "This field is required" })}
          />
          <button
            type="button"
            className="absolute right-2 top-10"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IoEyeSharp className="text-gray-700" />
            ) : (
              <FaEyeSlash className="text-gray-700" />
            )}
          </button>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="text-center">
          <button className="text-gray-200  font-semibold bg-blue-600 w-max px-3 py-2 rounded-sm text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
