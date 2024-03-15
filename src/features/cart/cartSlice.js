import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const alreadyAddeditem = state.cart.find((item) => item.id === newItem.id);
      if (alreadyAddeditem) {
        alreadyAddeditem.quantity++;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
