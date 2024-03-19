import React from "react";
import { NavLink } from "react-router-dom";
function Navlink({ text, to,text1 }) {
  return (
    <NavLink
      to={to}
      className="text-xl flex gap-1 items-center font-semibold text-gray-700 hover:text-red-600 active:text-blue-700 aria-[current=page]:text-red-600 transition-all ease-linear duration-200 dark:text-gray-200 dark:hover:text-red-600 "
    >
      {text}{text1}
    </NavLink>
  );
}

export default Navlink;
