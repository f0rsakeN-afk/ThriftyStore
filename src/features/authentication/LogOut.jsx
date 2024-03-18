import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { useLogout } from "./useLogOut";

const LogOut = () => {
  const { logout, isLoading } = useLogout();
  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="text-xl font-semibold text-gray-700 hover:text-red-600 active:text-blue-700  transition-all ease-linear duration-200 dark:text-gray-200 dark:hover:text-red-600 "
    >
      <IoExitOutline size={24} />
    </button>
  );
};

export default LogOut;
