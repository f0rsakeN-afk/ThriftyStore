import React from "react";
import { Link } from "react-router-dom";

const NoItem = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-60">
          <h1 className="text-2xl text-gray-700  font-semibold  italic ">No items added in the cart. Please shop first...</h1>
          <Link to='/products' className="px-3 py-2 bg-green-600 text-gray-100 font-semibold w-max rounded-md focus:outline-none hover:bg-green-700 text-xl hover:shadow-xl ">Shop more</Link>
    </div>
  );
};

export default NoItem;
