import React from "react";

const FreeDelivery = ({ deliveryFree }) => {
  return (
    <h3
      className="text-xs text-[#1fafa4] border w-max px-1 py-.5 rounded-sm border-[#1fafa4]"
    >
      {deliveryFree === false ? "" : "Free delivery"}
    </h3>
  );
};

export default FreeDelivery;
