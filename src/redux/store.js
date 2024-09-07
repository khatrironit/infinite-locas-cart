import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducerSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
