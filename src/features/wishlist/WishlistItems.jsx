import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "./WishlistSlice";
import NoItem from "../../components/NoItem";
import { add } from "../cart/cartSlice";
import ClearWishlist from "./ClearWishlist";

const WishlistItems = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.wishlist.wishlist);
 // console.log(data);
  const totalWishListitems = data ? data.length : 0;
  const handleRemoveItem = (itemId) => {
    dispatch(removeWishlist(itemId));
  };

  return (
    <div className="pt-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 py-1">
        Wishlist Items
      </h2>

      {totalWishListitems === 0 ? (
        <NoItem text={"wishlist"} />
      ) : (
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {data.map((item) => (
              <div key={item.id} className="border  p-2 lg:p-4">
                <img
                  src={item.image}
                  alt="product-image"
                  className="w-full h-60 rounded-md"
                />
                <div className="py-2 flex flex-col gap-.5">
                  <span className="text-green-600 font-semibold tracking-wide">
                    Actual price:Rs.{item.price}
                  </span>
                  <span className="text-orange-600 font-semibold tracking-wide">
                    Discount amount:Rs.{item.discount}
                  </span>
                </div>
                <h2 className=" font-semibold mt-2 text-gray-700 dark:text-gray-200 truncate hover:text-clip">
                  {item.title}
                </h2>

                <div className="flex gap-1 flex-row items-center justify-between pt-2">
                  <button
                    className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>

                  <button
                    className="px-4 py-2 bg-green-600 text-gray-100 font-semibold w-max rounded-md focus:outline-none hover:bg-green-700 hover:shadow-xl"
                    onClick={() => dispatch(add(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
            <div className="flex justify-end py-2">
              <ClearWishlist/>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistItems;
