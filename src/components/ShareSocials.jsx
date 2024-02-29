import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTumblr,
} from "react-icons/fa";
const ShareSocials = () => {
  return (
    <div className="flex items-center bg-gray-200 p-2 rounded-md w-52">
      <h3 className="">Share via:</h3>
      <span className="flex gap-2">
        <Socials>
          <FaFacebookF />
        </Socials>
        <Socials>
          <FaInstagram />
        </Socials>
        <Socials>
          <FaTwitter />
        </Socials>
        <Socials>
          <FaPinterest />
        </Socials>
        <Socials>
          <FaTumblr />
        </Socials>
      </span>
    </div>
  );
};

function Socials({ children }) {
  return <a className="hover:text-red-600 cursor-pointer">{children}</a>;
}
export default ShareSocials;
