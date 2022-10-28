import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

export const addToCart = createAsyncThunk(
	"addToCart",
	async (prod, thunkAPI) => {
		try {
			const { cart } = thunkAPI.getState();
			const existItem = cart.prodsInCart.find((X) => X.slug === prod.slug);
			const quantity = existItem ? existItem.quantity + 1 : 1;
			const { data } = await axios.get(`/api/product/${prod.slug}`);
			if (data.countInStock < quantity) {
				window.alert("Sorry. Product is out of stock");
				return;
			}
			return { ...prod, quantity: quantity };
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const cartEmptyState = {
	prodsInCart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: cartEmptyState,
	reducers: {},
	extraReducers: {
		[addToCart.fulfilled]: (state, action) => {
			const existItem = current(state).prodsInCart.find(
				(X) => X.slug === action.payload.slug
			);
			const newItems = existItem
				? current(state).prodsInCart.map((item) =>
						item.slug === existItem.slug ? action.payload : item
				  )
				: [...current(state).prodsInCart, action.payload];

			return { prodsInCart: [...newItems] };
		},
		// [addToCart.rejected]: (state, action) => {
		// 	state.prodsInCart = [];
		// },
	},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
