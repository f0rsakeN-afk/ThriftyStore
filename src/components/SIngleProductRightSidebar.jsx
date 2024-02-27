import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiMoneyBold } from "react-icons/pi";
import Delivery from "../components/Delivery";
import Service from "./Service";
import SoldBy from "./SoldBy";

const SIngleProductRightSidebar = () => {
  return (
    <div className="">
      <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-md p-2">
        <Delivery
          company={"naresh"}
          days={`1-2day(s)`}
          text={`Free Delivery`}
          icon={<TbTruckDelivery />}
          text2={`Free`}
        />
        <hr />
        <Delivery
          days={`Tomorrow`}
          text={`Fastest Delivery`}
          text2={`Rs.65`}
          icon={<FaShippingFast className="text-[#e76012]" />}
          /*  color={`#e76012`} */
          company={`none`}
        />
        <p className="flex gap-2 items-center py-1 text-gray-700  dark:text-gray-300">
          <span className="">
            <PiMoneyBold size={24} className="text-green-500" />
          </span>{" "}
          Cash on Delivery Available
        </p>
        <hr />
        <Service />
      </div>
      <SoldBy />
    </div>
  );
};

export default SIngleProductRightSidebar;
