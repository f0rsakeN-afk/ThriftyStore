import React from "react";
import { AiOutlineExclamation } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import { FiShieldOff } from "react-icons/fi";

function Service() {
  return (
    <div className="py-2 ">
      <section className="flex justify-between items-center">
        <h4 className="text-xs text-gray-600 dark:text-gray-300">Service</h4>
        <AiOutlineExclamation className="p-.5 text-gray-600 border border-slate-400 rounded-full dark:text-gray-200" />
      </section>
      <section className="py-1">
        <p className="flex gap-2 text-gray-700 dark:text-gray-200 items-center text-sm ">
          <GiReturnArrow size={20} /> 14 days free & easy return
        </p>
        <h4 className="ml-8 text-gray-600 dark:text-gray-300 text-xs">
          Change of mind is not applicable
        </h4>
      </section>
      <p className="py-1 text-gray-700 text-sm flex gap-2 items-center dark:text-gray-300 ">
        {" "}
        <FiShieldOff size={20} /> Warranty not available
      </p>
    </div>
  );
}

export default Service;
