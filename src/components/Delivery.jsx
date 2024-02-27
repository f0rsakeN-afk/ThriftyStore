import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
function Delivery() {
  return (
    <div>
          <div className="flex justify-between">
          <p className="flex gap-2 items-center">
        <TbTruckDelivery />
        Free Delivery
              </p>
              <span className="">Free</span>
      </div>
      <span className="pl-6">1-2day(s)</span>
    </div>
  );
}

export default Delivery;
