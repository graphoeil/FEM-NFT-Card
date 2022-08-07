// Imports
import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./features/nftSlice";

// Store
const store = configureStore({
	reducer:{
		nft:nftReducer
	}
});

// Export
export default store;