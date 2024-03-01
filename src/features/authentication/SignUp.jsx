import React, { useRef } from "react";
import supabase from "../../services/supabase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const register = async (email, password) => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw error;
      }
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Sign up error:", error.message);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Call the register function with email and password
    try {
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value,
      );
      if (!error && data) {
        toast.success(
          "Registration successful. Check your email to confirm your account",
        );
      }
    } catch (error) {
      toast.error("Error creating accouunt");
    }
  };

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
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
              className="p-2 rounded-md focus:outline-none border w-[25rem]"
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
              className="p-2 rounded-md focus:outline-none border w-[25rem]"
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
              className="p-2 rounded-md focus:outline-none border w-[25rem]"
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

export function Wrapper({ children }) {
  return <div className="flex gap-2 flex-col">{children}</div>;
}

export default SignUp;
