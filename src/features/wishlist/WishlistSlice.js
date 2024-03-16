import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action) {
      const newItem = action.payload;
      const alreadyAddedItem = state.wishlist.find(
        (item) => item.id === newItem.id
      );
      if (!alreadyAddedItem) {
        state.wishlist.push(newItem);
      }
    },
    removeWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
    clearWishlist(state, action) {
      state.wishlist = [];
    },
  },
});

export const { addWishlist, removeWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
