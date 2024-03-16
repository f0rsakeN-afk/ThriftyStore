import React from "react";
import { useDispatch } from "react-redux";
import { clearWishlist } from "./WishlistSlice";

const ClearWishlist = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="px-3 py-2 bg-red-600 text-gray-100 font-semibold w-max rounded-md focus:outline-none hover:bg-red-700 hover:shadow-xl"
      onClick={() => dispatch(clearWishlist())}
    >
      Clear Wishlist
    </button>
  );
};

export default ClearWishlist;
