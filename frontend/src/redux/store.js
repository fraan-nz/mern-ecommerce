import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./slices/fetchDataSlice";

export const store = configureStore({
	reducer: {
		fetchData: fetchSlice,
	},
});
