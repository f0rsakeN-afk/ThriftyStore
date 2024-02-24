import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="hidden  md:grid md:grid-cols-5 gap-4 py-4">
      <div className="">
        <FooterTitle text={"Shop"} />
        <div className="pt-2">
          <Subtitle text={`Women's Items`} />
          <Subtitle text={`Men's Items`} />
          <Subtitle text={`Kid's Items`} />
          <Subtitle text={"Sale Items"} />
        </div>
      </div>
      <div className="">
        <FooterTitle text={`About us`} />
        <div className="pt-2">
          <Subtitle text={`Our Team`} />
          <Subtitle text={`Our Story`} />
          <Subtitle text={`Press`} />
        </div>
      </div>
      <div className="">
        <FooterTitle text={`Customer service`} />
        <div className="pt-2">
          <Subtitle text={`Shipping & Delivery`} />
          <Subtitle text={`Return & Exchange`} />
          <Subtitle text={`FAQ's`} />
          <Subtitle text={`Contact Us`} />
        </div>
      </div>
      <div className=""></div>
      <div className="flex gap-4 text-gray-700 text-3xl justify-end">
        <FaInstagramSquare className="border p-.5 border-gray-700 rounded-md hover:text-red-600 cursor-pointer  dark:text-gray-200 dark:border-gray-200 dark:hover:text-red-600" />
        <FaFacebookSquare className="border p-.5 border-gray-700 rounded-md hover:text-red-600 cursor-pointer dark:text-gray-200 dark:border-gray-200 dark:hover:text-red-600"  />
        <FaTwitter className="border p-.5 border-gray-700 rounded-md hover:text-red-600 cursor-pointer  dark:text-gray-200 dark:border-gray-200 dark:hover:text-red-600" />
      </div>
    </div>
  );
}

function FooterTitle({ text }) {
  return (
    <h1 className="uppercase font-md font-semibold text-gray-700 dark:text-gray-200">
      {text}
    </h1>
  );
}

function Subtitle({ text }) {
  return (
    <h2 className="text-sm text-gray-600 cursor-pointer w-max  dark:text-gray-300">
      {text}
    </h2>
  );
}
export default Footer;
