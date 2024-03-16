import React, { useState, useRef, useEffect } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import ShareSocials from "./ShareSocials";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../features/wishlist/WishlistSlice";

const ShareAndWishlist = ({ singleProduct }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  //console.log(wishlist);
  const isAdded = wishlist.some((item) => item.id === singleProduct.id);
  //console.log(isAdded)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="relative" ref={ref}>
      <div className="py-2 flex gap-4 text-xl text-gray-800 dark:text-gray-200 justify-end">
        <button className="" onClick={handleClick}>
          <IoShareSocial />
        </button>
        <button
          className={isAdded ? 'text-red-600' : 'text-slate-400'}
          onClick={() => dispatch(addWishlist(singleProduct))}
        >
          <FaHeart />
        </button>
      </div>
      {show && (
        <div className="absolute right-0  ">
          <ShareSocials />
        </div>
      )}
    </div>
  );
};

export default ShareAndWishlist;
