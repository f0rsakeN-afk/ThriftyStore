import React from "react";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const totalPrice = cartData.reduce((acc, item) => {
    const price = item.price || 0;
    const discount = item.discount || 0;
    const deliveryFee = item.deliveryFree ? 100 : 0;
    const quantity = item.quantity || 1;

    const priceAfterDiscount = price - discount;
    const priceOfEachItem = priceAfterDiscount * quantity;

    return acc + priceOfEachItem + deliveryFee;
  }, 0);
  return (
    <div className="py-2">
      <h2 className="text-gray-700 dark:text-gray-200 font-semibold text-2xl ">
        Checkout
      </h2>

      <div className="pt-4 flex flex-col gap-2">
        <h2 className="text-gray-700 dark:text-gray-200 font-semibold text-2xl underline  underline-offset-2 uppercase tracking-wide">
          Items
        </h2>
        <section className="border w-max p-2 rounded-md border-slate-400 shadow-xl">
          {cartData.map((item) => (
            <div className="py-2" key={item.id}>
              <p className="flex items-center gap-6 text-gray-700 dark:text-gray-200">
                {item.title}
                <RxCross1 className="hover:animate-spin transition-all ease-in-out duration-200 cursor-pointer" />
                <span className="font-semibold text-xl text-orange-600">
                  {item.quantity}
                </span>
              </p>
            </div>
          ))}
          
        </section>
        <h2 className="text-2xl dark:text-gray-200 text-gray-700 font-extrabold underline decoration-red-600 underline-offset-2 pt-2">
            Total amount to be paid:
            <span className="text-green-600 font-semibold tracking-widest">
              Rs.{totalPrice}
            </span>
          </h2>
      </div>
    </div>
  );
};

export default Checkout;
