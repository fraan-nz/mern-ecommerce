import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

export const addToCart = createAsyncThunk(
	"addToCart",
	async (prod, thunkAPI) => {
		try {
			const { cart } = thunkAPI.getState();
			const existItem = cart.prodsInCart.find((X) => X.slug === prod.slug);
			const quantity = existItem ? existItem.quantity + 1 : 1;
			const { data } = await axios.get(`/api/products/${prod.slug}`);
			if (data.countInStock < quantity) {
				toast.error("Sorry. Product is out of stock");
				return;
			}
			toast.success(`${prod.name} added`);
			return { ...prod, quantity: quantity };
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const removeCart = createAsyncThunk(
	"removeCart",
	async (prod, thunkAPI) => {
		try {
			const quantity = prod.quantity === 1 ? 1 : prod.quantity - 1;
			const { data } = await axios.get(`/api/products/${prod.slug}`);
			if (data.countInStock < quantity) {
				toast.error("Sorry. Product is out of stock");
				return;
			}
			toast.info(`${prod.name} removed`);
			return { ...prod, quantity: quantity };
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const cartEmptyState = {
	prodsInCart: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: cartEmptyState,
	reducers: {
		deleteItem(state, action) {
			state.prodsInCart = state.prodsInCart.filter(
				(prod) => prod.slug !== action.payload.slug
			);
			toast.info(`${action.payload.name} removed`);
			localStorage.setItem("cartItems", JSON.stringify(state.prodsInCart));
		},
		deleteAllCart(state, action) {
			state.prodsInCart = [];
			localStorage.removeItem("cartItems");
		},
	},
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

			localStorage.setItem("cartItems", JSON.stringify(newItems));

			return { prodsInCart: [...newItems] };
		},
		[removeCart.fulfilled]: (state, action) => {
			const existItem = current(state).prodsInCart.find(
				(X) => X.slug === action.payload.slug
			);
			const newItems = existItem
				? current(state).prodsInCart.map((item) =>
						item.slug === existItem.slug ? action.payload : item
				  )
				: [...current(state).prodsInCart, action.payload];

			localStorage.setItem("cartItems", JSON.stringify(newItems));

			return { prodsInCart: [...newItems] };
		},
	},
});

export const { deleteItem, deleteAllCart } = cartSlice.actions;

export default cartSlice.reducer;
