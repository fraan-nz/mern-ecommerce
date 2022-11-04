import { createSlice } from "@reduxjs/toolkit";

const orderSliceEmptyState = { loading: false };

export const orderSlice = createSlice({
	name: "orderSlice",
	initialState: orderSliceEmptyState,
	reducers: {
		createOrder(state, action) {
			state.loading = true;
		},
		successfulOrder(state, action) {
			state.loading = false;
			localStorage.removeItem("cartItems");
		},
		rejectedOrder(state, action) {
			state.loading = false;
		},
	},
	extraReducers: {},
});

export const { createOrder, successfulOrder, rejectedOrder } =
	orderSlice.actions;

export default orderSlice.reducer;
