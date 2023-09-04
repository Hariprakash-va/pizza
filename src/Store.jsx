import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
const Store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default Store;
