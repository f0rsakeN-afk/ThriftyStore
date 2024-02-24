import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Navlink from "./Navlink";
import DarkModeToggler from "./DarkModeToggler";
import logo from "../assets/logo.webp";
import { IoCartOutline, IoPersonCircleSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
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
  return (
    <div className="flex justify-between items-center">
      <NavLink to="home">
        <img src={logo} alt="logo-image" className="w-32 " />
      </NavLink>
      <div className=" hidden md:flex gap-8 justify-center items-center ">
        <Navlink to={'about'} text={'About'}/>
        <Navlink to={"products"} text={"Products"} />
        <Navlink to={"wishlist"} text={<FaRegHeart size={24} />} />
        <Navlink to={"cart"} text={<IoCartOutline size={24} />} />
        <Navlink to={"profile"} text={<IoPersonCircleSharp size={24} />} />
        <DarkModeToggler />
      </div>
      <div className="md:hidden text-blue-700 relative" ref={dropdownRef}>
        <button onClick={() => setOpen((open) => !open)}>
          {open ? <RxCross1 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
        {open && (
          <div className="absolute p-2 right-0 flex flex-col gap-4 border  rounded-md z-20 ">
            <Navlink to={"products"} text={"Products"} />
            <Navlink to={"wishlist"} text={<FaRegHeart size={24} />} />
            <Navlink to={"cart"} text={<IoCartOutline size={24} />} />
            <Navlink to={"profile"} text={<IoPersonCircleSharp size={24} />} />
            <DarkModeToggler/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;