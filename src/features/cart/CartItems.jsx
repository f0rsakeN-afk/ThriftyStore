import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiSubtractFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { remove } from "./cartSlice";
import ClearCart from "./ClearCart";
import NoItem from "./NoItem";

const CartItems = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  console.log(data);

  return (
    <>
      {data.length === 0 ? (
        <NoItem />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 py-1">
              Cart Items
            </h2>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 py-1 pr-2">
              Total items:{data.length}
            </h2>
          </div>
          <div className="flex flex-col gap-2 divide-y-2 divide-gray-600  ">
            {data.map((item) => (
              <div
                className="grid grid-cols-5 items-center  justify-center p-2   gap-8"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt="product image"
                  className="h-36 w-36 rounded-sm drop-shadow-xl"
                />
                <h2 className="text-sm text-gray-800 dark:text-gray-200 ">
                  {item.title}
                </h2>
                <div className=" flex gap-4 items-center justify-center text-gray-700 dark:text-gray-200">
                  <button className="">
                    <IoAdd />
                  </button>
                  <span className="">{item.quantity}</span>
                  <button className="">
                    <RiSubtractFill />
                  </button>
                </div>
                <h2 className="text-green-600  font-semibold">
                  Rs.{item.price}
                </h2>
                <button
                  className="px-3 py-2 bg-red-600 text-gray-100 font-semibold w-max rounded-md focus:outline-none hover:bg-red-700 hover:shadow-xl "
                  onClick={() => dispatch(remove(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-end pt-4">
              <ClearCart />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartItems;
