import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import fetchSlice from "./slices/fetchDataSlice";
import orderHistorySlice from "./slices/orderHistorySlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
	reducer: {
		fetchData: fetchSlice,
		cart: cartSlice,
		user: userSlice,
		order: orderSlice,
		orderHistory: orderHistorySlice,
	},
});
