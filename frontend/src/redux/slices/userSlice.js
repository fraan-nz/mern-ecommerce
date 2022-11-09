import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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
			toast.error("Email or Password not valid");
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
			toast.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const updateUser = createAsyncThunk(
	"userSlice",
	async ({ name, email, password, token }, thunkAPI) => {
		try {
			const { data } = await axios.put(
				"/api/users/profile",
				{
					name,
					email,
					password,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			toast.success("Profile updated");
			return data;
		} catch (error) {
			toast.error(error.message);
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
	error: "",
	loading: false,
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
		[signInUser.pending]: (state, action) => {
			state.loading = true;
			state.error = "";
		},
		[signInUser.fulfilled]: (state, action) => {
			state.userInfo = { ...action.payload };
			state.error = "";
			state.loading = false;
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		[signInUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[signUpUser.pending]: (state, action) => {
			state.loading = true;
			state.error = "";
		},
		[signUpUser.fulfilled]: (state, action) => {
			state.userInfo = { ...action.payload };
			state.error = "";
			state.loading = false;
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		[signUpUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[updateUser.pending]: (state, action) => {
			state.loading = true;
			state.error = "";
		},
		[updateUser.fulfilled]: (state, action) => {
			state.userInfo = { ...action.payload };
			state.error = "";
			state.loading = false;
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		[updateUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { logoutUser, saveShippingAddress, savePaymentMethod } =
	userSlice.actions;

export default userSlice.reducer;
