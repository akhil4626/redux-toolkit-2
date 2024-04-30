import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	balence: 0,
	fullName: "",
	mobile: null,
};
const usertSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addbalence: (state, action) => {
			state.balence += +action.payload;
		},
		negatebalence: (state, action) => {
			state.balence -= action.payload;
		},
		updateFullName: (state, action) => {
			state.fullName = action.payload;
		},
		updateMobilenumber: (state, action) => {
			state.mobile = action.payload;
		},
	},
});

export const { addbalence, negatebalence, updateFullName, updateMobilenumber } = usertSlice.actions;

export default usertSlice;
