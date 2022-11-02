import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signInUser = createAsyncThunk(
	"userSlice",
	async ({ email, password }, thunkAPI) => {
		try {
			const { data } = await axios.post("/api/users/signin", {
				email,
				password,
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const signUpUser = createAsyncThunk(
	"userSlice",
	async ({ name, email, password }, thunkAPI) => {
		try {
			const { data } = await axios.post("/api/users/signup", {
				name,
				email,
				password,
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const userEmptyState = {
	userInfo: localStorage.getItem("userData")
		? JSON.parse(localStorage.getItem("userData"))
		: null,
	shippingAddress: localStorage.getItem("shippingAddress")
		? JSON.parse(localStorage.getItem("shippingAddress"))
		: null,
	paymentMethod: localStorage.getItem("paymentMethod")
		? JSON.parse(localStorage.getItem("paymentMethod"))
		: null,
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState: userEmptyState,
	reducers: {
		logoutUser(state, action) {
			state.userInfo = null;
			localStorage.removeItem("userData");
			localStorage.removeItem("shippingAddress");
			localStorage.removeItem("paymentMethod");
		},
		saveShippingAddress(state, action) {
			state.shippingAddress = { ...action.payload };
			localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
		},
		savePaymentMethod(state, action) {
			state.paymentMethod = action.payload;
			localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
		},
	},
	extraReducers: {
		// [loginUser.pending]: (state, action) => {
		// },
		[signInUser.fulfilled]: (state, action) => {
			state.userInfo = { ...action.payload };
			state.userInfo.error = "";
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		[signInUser.rejected]: (state, action) => {
			state.userInfo.email = "";
			state.userInfo.isAdmin = "";
			state.userInfo._id = "";
			state.userInfo.token = "";
			state.error = action.payload;
		},
		[signUpUser.fulfilled]: (state, action) => {
			state.userInfo = { ...action.payload };
			state.userInfo.error = "";
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		[signUpUser.rejected]: (state, action) => {
			state.userInfo.email = "";
			state.userInfo.isAdmin = "";
			state.userInfo._id = "";
			state.userInfo.token = "";
			state.error = action.payload;
		},
	},
});

export const { logoutUser, saveShippingAddress, savePaymentMethod } =
	userSlice.actions;

export default userSlice.reducer;
