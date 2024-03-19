import React from "react";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
const PaymentOptions = () => {
  return (
    <div className="flex items-center pt-4">
      <h2 className="font-semibold text-gray-700 dark:text-gray-200 italic">
        Payment Options: &nbsp;
      </h2>
      <div className="flex gap-6">
        <FaCcPaypal
          size={36}
          className="hover:text-red-600 transition-all ease-linear duration-100 cursor-pointer dark:text-gray-200"
        />
        <FaCreditCard
          size={36}
          className="hover:text-red-600 transition-all ease-linear duration-100 cursor-pointer dark:text-gray-200"
        />
        <GiTakeMyMoney
          size={36}
          className="hover:text-red-600 transition-all ease-linear duration-100 cursor-pointer dark:text-gray-200"
        />
      </div>
    </div>
  );
};

export default PaymentOptions;
