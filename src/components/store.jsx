import { configureStore } from "@reduxjs/toolkit";
import usertSlice from "./slice";
const store = configureStore({
	reducer: usertSlice.reducer,
});

export default store;
