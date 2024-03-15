import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

const ClearCart = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="text-xl bg-red-600 px-3 py-2 bg-red-600 text-gray-100 font-semibold w-max rounded-md focus:outline-none hover:bg-red-700 hover:shadow-xl "
      onClick={() => dispatch(clearCart())}
    >
      Clear Cart
    </button>
  );
};

export default ClearCart;
