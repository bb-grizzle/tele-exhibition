import { css } from "styled-components";

const Theme = {
	color: {
		black: "black",
		white: "white"
	},
	text: {
		title: {
			pc: 28,
			tablet: 20
		}
	},
	size: {
		fullHeight: css`
			height: 100vh; /* Fallback for browsers that do not support Custom Properties */
			height: calc(var(--vh, 1vh) * 100);
		`,
		center: 560
	},
	transition: {
		default: `cubic-bezier(0.65, 0.01, 0, 0.96)`
	}
};

export default Theme;
