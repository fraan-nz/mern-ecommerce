import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import fetchSlice from "./slices/fetchDataSlice";

export const store = configureStore({
	reducer: {
		fetchData: fetchSlice,
		cart: cartSlice,
	},
});
