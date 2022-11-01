import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import fetchSlice from "./slices/fetchDataSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
	reducer: {
		fetchData: fetchSlice,
		cart: cartSlice,
		user: userSlice,
	},
});
