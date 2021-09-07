import styled from 'styled-components';
import { variant } from 'styled-system';


const PreloaderStyle = styled.span`
.preloader {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 999999999;
    background: #515375;
	top: 0;
	left: 0;
	.loader {
		position: absolute;
		top: 43%;
		left: 0;
		right: 0;
		transform: translateY(-43%);
		text-align: center;
		margin: 0 auto;
		width: 50px;
		height: 50px;
		transition: $transition;
		.box {
			width: 100%;
			height: 100%;
			background: #fff;
			animation: animate .5s linear infinite;
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 3px;
		}
		.shadow {
			width: 100%;
			height: 5px;
			background: #000000;
			opacity: 0.1;
			position: absolute;
			top: 59px;
			left: 0;
			border-radius: 50%;
			animation: shadow .5s linear infinite;
		}
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 60%;
		height: 100%;
		z-index: -1;
		background: $main-color;
		transition: .9s;
	}
	&::after {
		left: auto;
		right: 0;
	}
	&.preloader-deactivate {
		visibility: hidden;
		&::after,
		&::before {
			width: 0;
		}
		.loader {
			opacity: 0;
			visibility: hidden;
		}
	}
}
@keyframes loader {
	0% {
		left: -100px;
	}
	100% {
		left: 110%;
	}
}
@keyframes animate {
	17% {
		border-bottom-right-radius: 3px;
	}
	25% {
		transform: translateY(9px) rotate(22.5deg);
	}
	50% {
		transform: translateY(18px) scale(1, .9) rotate(45deg);
		border-bottom-right-radius: 40px;
	}
	75% {
		transform: translateY(9px) rotate(67.5deg);
	}
	100% {
		transform: translateY(0) rotate(90deg);
	}
}
@keyframes shadow {
	50% {
		transform: scale(1.2, 1);
	}
}
.preloader-deactivate {
	display: block;
}
`;

// prop types can also be added from the style functions
PreloaderStyle.propTypes = {
  ...variant.propTypes,
};

PreloaderStyle.displayName = 'LoaderStyle';

export default PreloaderStyle;
