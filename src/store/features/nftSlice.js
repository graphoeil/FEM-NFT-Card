// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isTouch:false,
	avatarImg:'image-avatar.png',
	equilibriumImg:'image-equilibrium.jpg'
};

// Slice
const nftSlice = createSlice({
	name:'nft',
	initialState,
	reducers:{
		// Is touch ?
		setIsTouch:(state) => {
			state.isTouch = true;
		}
	}
})

// Actions export
export const { setIsTouch } = nftSlice.actions;

// Reducer export
export default nftSlice.reducer;