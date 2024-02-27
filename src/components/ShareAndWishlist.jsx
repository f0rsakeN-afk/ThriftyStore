import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const ShareAndWishlist = () => {
  return (
    <div className="py-2 flex gap-4 text-xl text-gray-800 justify-end">
      <button className="">
        <IoShareSocial />
      </button>
      <button className="">
        <FaRegHeart />
      </button>
    </div>
  );
};

export default ShareAndWishlist;
