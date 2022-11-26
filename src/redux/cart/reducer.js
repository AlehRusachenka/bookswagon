import { createSlice } from "@reduxjs/toolkit";

// const items = JSON.parse(localStorage.getItem("cartItems"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
      // localStorage.setItem("cartItems", JSON.stringify(state.itemsInCart));
    },

    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (book) => book.id !== action.payload
      );
      // localStorage.setItem("cartItems", JSON.stringify(state.itemsInCart));
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
