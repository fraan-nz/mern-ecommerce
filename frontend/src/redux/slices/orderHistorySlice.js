import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHistory = createAsyncThunk(
	"fetchData",
	async (args, thunkAPI) => {
		try {
			const { data } = await axios.get("/api/orders/mine", {
				headers: { Authorization: `Bearer ${args}` },
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const historyEmptyState = {
	ordersHistory: [],
	loading: false,
	error: "",
};

export const orderHistorySlice = createSlice({
	name: "orderHistory",
	initialState: historyEmptyState,
	reducers: {},
	extraReducers: {
		[fetchHistory.pending]: (state, action) => {
			state.ordersHistory = [];
			state.loading = true;
			state.error = "";
		},
		[fetchHistory.fulfilled]: (state, action) => {
			state.ordersHistory = action.payload;
			state.loading = false;
			state.error = "";
		},
		[fetchHistory.rejected]: (state, action) => {
			state.ordersHistory = [];
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {} = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
