import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Navlink from "./Navlink";
import DarkModeToggler from "./DarkModeToggler";
import logo from "../assets/logo.webp";
import { IoCartOutline, IoPersonCircleSharp } from "react-icons/io5";
import { FaRegHeart,FaProductHunt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const data = useSelector((state) => state.cart.cart);
  const totalCartItems = data.length;

  /*   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
 */
  const handleToggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between items-center">
      <NavLink to="home">
        <img src={logo} alt="logo-image" className="w-32 " />
      </NavLink>
      <div className="hidden md:flex gap-8 justify-center items-center">
        <Navlink to={"about"} text={"About"} />
        <Navlink to={"products"} text={"Products"} />
        <Navlink to={"wishlist"} text={<FaRegHeart size={24} />} />
        <div className="relative">
          <Navlink to={"cart"} text={<IoCartOutline size={24} />} />
          <span className="absolute top-3 text-sm -right-2 text-red-600 font-semibold rounded-full">
            {data.length > 0 && totalCartItems}
          </span>
        </div>
        <Navlink to={"profile"} text={<IoPersonCircleSharp size={24} />} />
        <DarkModeToggler />
      </div>
      <div className="md:hidden text-blue-700 relative">
        <button onClick={handleToggleNavbar}>
          {open ? <RxCross1 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
        {open && (
          <div className="absolute p-2 right-0 flex flex-col gap-4 border rounded-md z-20 bg-white dark:bg-slate-700 ">
            <Navlink to={"products"} text={<FaProductHunt size={24}/>} text1={"Products"} />
            <Navlink
              to={"wishlist"}
              text={<FaRegHeart size={24} />}
              text1={`Wishlist`}
            />
            <Navlink
              to={"cart"}
              text={<IoCartOutline size={24} />}
              text1={`Cart`}
            />
            <Navlink
              to={"profile"}
              text={<IoPersonCircleSharp size={24} />}
              text1={"Profile"}
            />
            <DarkModeToggler />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
