import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/WishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
export default store;
