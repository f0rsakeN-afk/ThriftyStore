import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: {},
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
    removeWishlist(state, action) {
      return state.wishlist.filter((item) => item.id !== action.payload);
    },
    clearWishlist(state, action) {
      state.wishlist = [];
    },
  },
});
export const { addWishlist, removeWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
