import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
	"orderSlice",
	async (args, thunkAPI) => {
		try {
			const { data } = await axios.get(`/api/orders/${args.orderId}`, {
				headers: {
					authorization: `Bearer ${args.userInfo.token}`,
				},
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const orderSliceEmptyState = { loading: false, order: {}, error: "" };

export const orderSlice = createSlice({
	name: "orderSlice",
	initialState: orderSliceEmptyState,
	reducers: {
		createOrder(state, action) {
			state.loading = true;
		},
		successfulOrder(state, action) {
			state.loading = false;
		},
		rejectedOrder(state, action) {
			state.loading = false;
		},
	},
	extraReducers: {
		[fetchOrder.pending]: (state, action) => {
			state.order = {};
			state.loading = true;
			state.error = "";
		},
		[fetchOrder.fulfilled]: (state, action) => {
			state.order = action.payload;
			state.loading = false;
			state.error = "";
		},
		[fetchOrder.rejected]: (state, action) => {
			state.order = {};
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { createOrder, successfulOrder, rejectedOrder } =
	orderSlice.actions;

export default orderSlice.reducer;
