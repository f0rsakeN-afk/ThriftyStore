import React from "react";

function Delivery({ company, days, text, icon, text2 }) {
  return (
    <div className="py-2">
      <div className="flex justify-between">
        <p className="flex gap-2 items-center font-semibold text-gray-700 dark:text-gray-200">
          <span className={`text-[#1fafa4] text-xl`}>{icon}</span>
          {text}
        </p>
        <span className="text-gray-700 dark:text-gray-200 font-semibold">
          {text2}
        </span>
      </div>
      <span className=" tracking-wide text-sm text-gray-500 pl-6 dark:text-gray-300">
        {days}
      </span>

      <p className="ml-6 p-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-sm text-gray-600 rounded-md">
        Enjoy free shipping promotion with minimum spend of Rs. 699 from
        <span className="text-blue-600"> {company}</span>
      </p>
    </div>
  );
}

export default Delivery;
