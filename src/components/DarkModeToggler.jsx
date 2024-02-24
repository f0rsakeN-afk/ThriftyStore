import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { GoSun } from "react-icons/go";
function DarkModeToggler() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button onClick={handleThemeSwitch}>
        {theme === "light" ? (
          <IoMoon
            className="text-gray-700 text-2xl animate-bounce duration-200 ease-linear  "
            size={24}
          />
        ) : (
          <GoSun
            className="text-yellow-500 text-2xl font-semibold  hover:text-yellow-400 hover:text-2xl transition-all ease-in-out duration-200 animate-spin"
            size={24}
          />
        )}
      </button>
    </div>
  );
}

export default DarkModeToggler;
