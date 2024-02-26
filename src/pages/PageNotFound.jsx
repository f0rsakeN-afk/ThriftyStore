import React from "react";
import { useMoveBack } from "../utils/UseMoveBack";
import { FaBackward } from "react-icons/fa6";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="bg-gray-200 dark:bg-gray-800 h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="dark:text-gray-200 text-gray-700 text-2xl ">
        The page you are looking for could not be found😩
      </h1>
      <button
        onClick={moveBack}
        className="flex gap-1 justify-center items-center text-gray-200 px-3 py-2 bg-green-600 rounded-md "
      >
        Go Back<FaBackward/>
      </button>
    </div>
  );
}

export default PageNotFound;
