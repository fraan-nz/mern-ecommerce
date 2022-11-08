import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
	"fetchData",
	async (args, thunkAPI) => {
		try {
			const { data } = await axios.get("/api/products");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const fetchEmptyState = {
	products: [],
	loading: false,
	error: "",
};

export const fetchSlice = createSlice({
	name: "fetchData",
	initialState: fetchEmptyState,
	reducers: {},
	extraReducers: {
		[fetchData.pending]: (state, action) => {
			state.products = [];
			state.loading = true;
			state.error = "";
		},
		[fetchData.fulfilled]: (state, action) => {
			state.products = action.payload;
			state.loading = false;
			state.error = "";
		},
		[fetchData.rejected]: (state, action) => {
			state.products = [];
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {} = fetchSlice.actions;

export default fetchSlice.reducer;
