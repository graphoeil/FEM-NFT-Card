// Imports
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import clock from "../icons/icon-clock.svg";
import ether from "../icons/icon-ethereum.svg";
import eye from "../icons/icon-view.svg";

// Component
const NFTCard = ({ id, title, description, price, remainingDays, author }) => {

	// Store
	const { avatarImg, equilibriumImg } = useSelector((store) => { return store.nft; });

	// Return
	return(
		<Wrapper>
			<div className="image">
				<div className="buttonArea">
					<div className="background"/>
					<button>
						<img src={ eye } alt="white eye" />
					</button>
				</div>
				<img src={ `${ process.env.PUBLIC_URL }/images/${ equilibriumImg }` } alt="the cube" />
			</div>
			<h1>{ `${ title } #${ id }` }</h1>
			<p>{ description }</p>
			<div className="infos">
				<span>
					<img src={ ether } alt="the ethereum" />
					{ price } ETH
				</span><span>
					<img src={ clock } alt="o'clock" />
					{ remainingDays } days left
				</span>
			</div>
			<div className="line"/>
			<div className="author">
				<img src={ `${ process.env.PUBLIC_URL }/images/${ avatarImg }` } alt="the author" />
				<span>Creation of <b>{ author }</b></span>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.article`
	width: calc(100% - 30px);
	max-width: 350px;
	padding: 20px;
	background-color: var(--cardBG);
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(13,19,28,0.4);
	overflow: hidden;
	.image{
		position: relative;
		margin: 0 0 25px 0;
		border-radius: 10px;
		overflow: hidden;
		.buttonArea{
			display: none;
		}
		img{
			display: block;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	h1{
		font-size: 24px;
		font-weight: 600;
		color: white;
		margin: 0 0 20px 0;
	}
	p{
		font-size: 18px;
		font-weight: 300;
		line-height: 1.3em;
		color: var(--softBlue);
		margin: 0 0 20px 0;
	}
	.infos{
		margin: 0 0 20px 0;
		span{
			display: inline-block;
			width: 50%;
			&:first-of-type{
				color: var(--cyan);
				font-weight: 600;
			}
			&:last-of-type{
				text-align: right;
				color: var(--softBlue);
			}
			img{
				padding: 0 7px 0 0;
				vertical-align: bottom;
			}
		}
	}
	.line{
		margin: 0 0 20px 0;
		border-bottom: 1px solid var(--line);
	}
	.author{
		img{
			display: inline-block;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			border: 1px solid white;
			margin: 0 15px 0 0;
			vertical-align: middle;
		}
		span{
			font-size: 18px;
			font-weight: 300;
			color: var(--softBlue);
			b{
				font-weight: 400;
				color: white;
			}
		}
	}
	html.no-touchevents &{
		.image{
			.buttonArea{
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				&:hover .background{
					opacity: 0.4;
				}
				.background{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1;
					background-color: var(--cyan);
					/* Bug in safari, overflow appear after animation */
					border-radius: 10px;
					opacity: 0;
					transition: 0.5s opacity ease-in-out;
				}
				button{
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
					background-color: transparent;
					border: none;
					padding: 135px;
					opacity: 0;
					transition: 0.5s opacity ease-in-out;
					&:hover{
						opacity: 1;
					}
				}
			}
		}
		h1, .author span b{
			cursor: pointer;
			transition: 0.5s color ease-in-out;
		}
		h1:hover, .author span b:hover{
			color: var(--cyan);
		}
	}
`;

// Export
export default NFTCard;