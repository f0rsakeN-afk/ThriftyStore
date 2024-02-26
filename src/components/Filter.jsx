import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex  bg-gray-300 dark:bg-gray-800   rounded-md overflow-hidden ">
      {options.map((option) => (
        <button
          className={`capitalize text-gray-700 dark:text-gray-200 hover:bg-red-600 p-2 hover:text-gray-200  ${option.value === currentFilter ? "bg-red-600 text-gray-200" : ""}`}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
