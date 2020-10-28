import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.color.black};
	padding: 64px;
`;

const Inner = styled.div``;

const App = () => {
	return (
		<Wrapper>
			<Inner>App</Inner>
		</Wrapper>
	);
};

export default App;
