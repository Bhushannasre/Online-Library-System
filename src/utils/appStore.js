import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./cartSlice.js"
const appStore = configureStore({
    reducer:{
        cart: CartReducer,
    },

});
export default appStore;