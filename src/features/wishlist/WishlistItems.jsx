import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "./WishlistSlice";
import NoItem from "../../components/NoItem";

const WishlistItems = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.wishlist.wishlist);

  const totalWishListitems = data.length;
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="border p-4">
              <img src={item.image} alt="product-image" className="w-36 h-36" />
              <h2 className="text-lg font-semibold mt-2 text-gray-700">
                {item.title}
              </h2>

              <button
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistItems;
