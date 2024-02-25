import React from "react";

function Spinner() {
  return (
    <div class="flex space-x-2 bg-[#edf2f4] dark:bg-[#212529] justify-center items-center pt-72 ">
      <span class="sr-only">Loading...</span>
      <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
    </div>
  );
}

export default Spinner;
