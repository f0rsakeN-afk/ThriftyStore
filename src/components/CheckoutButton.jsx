import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutButton = () => {
  const navigate = useNavigate();
  return (
    <button className="text-gray-100 px-4 py-2 bg-green-600 font-semibold rounded-md focus:outline-none hover:bg-green-700 transition-all ease-linear duration-200 tracking-widest" onClick={()=>navigate('/checkout')}>
      Checkout
    </button>
  );
};

export default CheckoutButton;
