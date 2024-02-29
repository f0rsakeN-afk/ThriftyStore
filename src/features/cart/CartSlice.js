import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload should be a new item object
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseQuantity(state, action) {
      const product = state.cart.find((product) => product.id === action.payload);
      if (product) {
        product.quantity++;
        product.totalPrice = product.quantity * product.priceAfterDiscount;
      }
    },
    decreaseQuantity(state, action) {
      const product = state.cart.find((product) => product.id === action.payload);
      if (product) {
        product.quantity--;
        product.totalPrice = product.quantity * product.priceAfterDiscount;
        if (product.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.priceAfterDiscount, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((product) => product.id === id)?.quantity ?? 1;
