import React, { useEffect } from "react";
import styled from "styled-components";
import media from "./Style/Media";
import LogoCenter from "./Components/LogoCenter";
import ExhibitionText from "./Components/ExhibitionText";
import AppProvider from "./Context/AppProvider";

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.color.black};
	padding: 64px;
	${(props) => props.theme.size.fullHeight};
	display: flex;
	position: relative;

	overflow: hidden;

	@media ${media.tablet} {
		padding: 20px;
	}
`;

const Inner = styled.div`
	width: 100%;
	position: relative;
`;

const App = () => {
	useEffect(() => {
		window.addEventListener("resize", () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});
	}, []);

	return (
		<Wrapper>
			<AppProvider>
				<Inner>
					<ExhibitionText />
					<LogoCenter />
				</Inner>
			</AppProvider>
		</Wrapper>
	);
};

export default App;
