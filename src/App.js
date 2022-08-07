// Imports
import React, { useEffect } from "react";
import "./css/displayMain.css";
import { useDispatch } from "react-redux";
import { setIsTouch } from "./store/features/nftSlice";
import NFTCard from "./components/NFTCard";

// Modernizr
const Modernizr = window.Modernizr;

// NFT Card
const nftCard = {
	id:3429,
	title:'Equilibrium',
	description:'Our Equilibrium collection promotes balance and calm.',
	price:0.041,
	remainingDays:3,
	author:'Jules Wyvern'
};

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Is touch
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<main>
			<NFTCard { ...nftCard }/>
		</main>
	);
	
};

// Export
export default App;