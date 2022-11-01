import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
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

const userEmptyState = {
	userInfo: localStorage.getItem("userData")
		? JSON.parse(localStorage.getItem("userData"))
		: null,
	shippingAddress: localStorage.getItem("shippingAddress")
		? JSON.parse(localStorage.getItem("shippingAddress"))
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
		},
		saveShippingAddress(state, action) {
			state.shippingAddress = { ...action.payload };
			localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
		},
	},
	extraReducers: {
		// [loginUser.pending]: (state, action) => {
		// },
		[loginUser.fulfilled]: (state, action) => {
			state.userInfo = { ...action.payload };
			state.userInfo.error = "";
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		[loginUser.rejected]: (state, action) => {
			state.userInfo.email = "";
			state.userInfo.isAdmin = "";
			state.userInfo._id = "";
			state.userInfo.token = "";
			state.error = action.payload;
		},
	},
});

export const { logoutUser, saveShippingAddress } = userSlice.actions;

export default userSlice.reducer;
