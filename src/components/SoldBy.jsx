import React from "react";
import { IoMdChatboxes } from "react-icons/io";

const SoldBy = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-md p-2 my-4">
      <section className="flex justify-between items-center">
        <section className="flex flex-col gap-1">
          <h3 className="text-sm text-gray-700 dark:text-gray-200">Sold by</h3>
          <h3 className="text-base text-gray-800 dark:text-gray-200 capitalize">
            cdjs
          </h3>
        </section>
        <span className="flex gap-2 items-center text-[#1fafa4]">
          <IoMdChatboxes className="" size={24} /> CHAT
        </span>
      </section>
      <div className="grid grid-cols-3 gap-1">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

function TextTtile({ text }) {
  return <h2 className="">{text}</h2>;
}

function Wrapper({ children }) {
  return <div className="">{children}</div>;
}
export default SoldBy;
