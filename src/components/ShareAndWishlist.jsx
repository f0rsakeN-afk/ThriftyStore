import React, { useState, useRef, useEffect } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import ShareSocials from "./ShareSocials";

const ShareAndWishlist = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

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
        <button className="">
          <FaRegHeart />
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
