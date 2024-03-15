import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const alreadyAddeditem = state.cart.find(
        (item) => item.id === newItem.id,
      );
      if (alreadyAddeditem) {
        alreadyAddeditem.quantity++;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
          toast.success('Product successfully added')
    },
    remove(state, action) {
      return state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state, action) {
      state.cart = [];
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
        item.quantity++;
        toast.success('Quantity updated successfully')
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
        item.quantity--;
        
        if (item.quantity === 0) cartSlice.caseReducers.remove(state, action);
        toast.success('Quantity updated successfully')
    },
  },
});

export const { add, remove, clearCart,increaseItemQuantity,decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
