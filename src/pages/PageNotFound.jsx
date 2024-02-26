import React from "react";
import { useMoveBack } from "../utils/UseMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="bg-gray-200 dark:bg-gray-800 h-screen flex justify-center items-center">
      <h1 className="dark:text-gray-200 text-2xl ">Page not found😩</h1>
      <button onClick={moveBack}>Go Back</button>
    </div>
  );
}

export default PageNotFound;
