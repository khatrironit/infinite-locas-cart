import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToBeAdded = action.payload;
      const productExists = state.cart.find(
        (product) => product.id === productToBeAdded.id
      );

      if (productExists) {
        state.cart = state.cart.map((product) =>
          product.id === productToBeAdded.id ? productToBeAdded : product
        );
      } else {
        state.cart.push({ ...productToBeAdded, quantity: 1 });
      }

      state.totalPrice = state.cart
        .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        .toFixed(0);
    },
    removeFromCart: (state, action) => {
      const productToBeRemoved = action.payload;
      state.cart = state.cart.filter(
        (product) => product.id !== productToBeRemoved.id
      );
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
