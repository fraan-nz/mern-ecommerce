import { createSlice } from "@reduxjs/toolkit";

const fetchEmptyState = {
	products: [],
	loading: false,
	error: "",
};

export const fetchSlice = createSlice({
	name: "data",
	initialState: fetchEmptyState,
	reducers: {
		loadFetchData: (state, action) => {
			return { ...state, products: action.payload, loading: true };
		},
		successFetchData: (state, action) => {
			return { ...state, loading: false };
		},
		errorFetchDataData: (state, action) => {
			return { ...state, error: action.payload };
		},
	},
});

// Action creators are generated for each case reducer function
export const { loadFetchData, successFetchData, errorFetchDataData } =
	fetchSlice.actions;

export default fetchSlice.reducer;
