import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiSubtractFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  remove,
} from "./cartSlice";
import ClearCart from "./ClearCart";
import NoItem from "../../components/NoItem";
import CheckoutButton from "../../components/CheckoutButton";

const CartItems = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  //console.log(data);
  const { price, discount, deliveryFree } = data;

  const totalPrice = data.reduce((acc, item) => {
    const price = item.price || 0;
    const discount = item.discount || 0;
    const deliveryFee = item.deliveryFree ? 100 : 0;
    const quantity = item.quantity || 1;

    const priceAfterDiscount = price - discount;
    const priceOfEachItem = priceAfterDiscount * quantity;

    return acc + priceOfEachItem + deliveryFee;
  }, 0);

  return (
    <>
      {data.length === 0 ? (
        <NoItem text={"cart"} />
      ) : (
        <>
          <div className="flex justify-between items-center py-2">
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
                  <button
                    className="text-gray-700 py-2 px-4 rounded-sm text-xl bg-gray-200 hover:text-gray-800 hover:bg-gray-300 dark:invert "
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    <RiSubtractFill />
                  </button>
                  <span className="">{item.quantity}</span>
                  <button
                    className="text-gray-700 py-2 px-4 rounded-sm text-xl bg-gray-200 hover:text-gray-800 hover:bg-gray-300 dark:invert "
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    <IoAdd />
                  </button>
                </div>
                <div className="">
                  <h2 className="text-gray-600 dark:text-gray-300 text-xs font-semibold ">
                    Actual Price:
                    <span className="line-through">Rs.{item.price}</span>
                  </h2>
                  <h2 className="text-xs text-orange-600">
                    Discount:Rs.{item.discount}
                  </h2>
                  <h2 className="text-green-600 fonr-semibold trackind-wide font-semibold ">Price after discount:Rs.{item.price-item.discount}</h2>
                </div>
                <button
                  className="px-3 py-2 bg-red-600 text-gray-100 font-semibold w-max rounded-md focus:outline-none hover:bg-red-700 hover:shadow-xl "
                  onClick={() => dispatch(remove(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between pt-4">
              <div className="flex flex-col gap-2">
                <span className="text-gray-700 text-2xl dark:text-gray-200 font-semibold">
                  Total Amount:{" "}
                  <span className="text-green-600 italic">Rs.{totalPrice}</span>
                  </span>
                  <CheckoutButton/>
              </div>
              <ClearCart />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartItems;
