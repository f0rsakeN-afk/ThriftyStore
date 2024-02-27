import React from "react";
import { IoMdChatboxes } from "react-icons/io";

const SoldBy = ({ soldBy }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-md p-2 my-4">
      <section className="flex justify-between items-center">
        <section className="flex flex-col gap-1">
          <h3 className="text-sm text-gray-700 dark:text-gray-200">Sold by</h3>
          <h3 className="text-base text-gray-800 dark:text-gray-200 capitalize">
            {soldBy}
          </h3>
        </section>
        <span className="flex gap-2 items-center text-[#1fafa4] cursor-pointer">
          <IoMdChatboxes className="" size={24} /> CHAT
        </span>
      </section>
      <div className="grid grid-cols-3 gap-4 py-2">
        <Wrapper>
          <TextTitle text={`Positive seller rating`} />
          <Percentage percent={`85%`} />
        </Wrapper>
        <Wrapper>
          <TextTitle text={`Ship on time`} />
          <Percentage percent={`100%`} />
        </Wrapper>
        <Wrapper>
          <TextTitle text={`Chat response rate`} />
          <Percentage percent={`89%`} />
        </Wrapper>
      </div>
    
      <p className="pt-2 text-center text-[#1fafa4]  border-t border-slate-300 cursor-pointer">Visit Store</p>
    </div>
  );
};

function TextTitle({ text }) {
  return (
    <h2 className="capitalize text-sm  text-gray-800 dark:text-gray-200">
      {text}
    </h2>
  );
}

function Percentage({ percent }) {
  return (
    <h3 className="text-center text-gray-800 dark:text-gray-200 text-2xl">
      {percent}
    </h3>
  );
}

function Wrapper({ children }) {
  return <div className="grid grid-rows-2  gap-4 ">{children}</div>;
}
export default SoldBy;
