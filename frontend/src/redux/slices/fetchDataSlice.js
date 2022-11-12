import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchData = createAsyncThunk(
// 	"fetchData",
// 	async (args, thunkAPI) => {
// 		try {
// 			const { data } = await axios.get("/api/products");
// 			return data;
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error.message);
// 		}
// 	}
// );

export const fetchData = createAsyncThunk(
	"fetchData",
	async (args, thunkAPI) => {
		const { page, query, category, brand, price, order } = args;
		try {
			const { data } = await axios.get(
				`/api/products/search?page=${page}&query=${query}&category=${category}&brand=${brand}&price=${price}&order=${order}`
			);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const fetchEmptyState = {
	products: [],
	loading: false,
	page: "",
	pages: 0,
	countProducts: 0,
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
			state.page = "";
			state.pages = 0;
			state.countProducts = 0;
		},
		[fetchData.fulfilled]: (state, action) => {
			state.products = action.payload.products;
			state.loading = false;
			state.error = "";
			state.page = action.payload.page;
			state.pages = action.payload.pages;
			state.countProducts = action.payload.countProducts;
		},
		[fetchData.rejected]: (state, action) => {
			state.products = [];
			state.loading = false;
			state.error = action.payload;
			state.page = "";
			state.pages = 0;
			state.countProducts = 0;
		},
	},
});

export const {} = fetchSlice.actions;

export default fetchSlice.reducer;
