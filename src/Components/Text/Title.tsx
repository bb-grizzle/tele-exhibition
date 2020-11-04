import styled from "styled-components";
import React from "react";
import media from "../../Style/Media";

interface TitleProps {
	text: string;
	className?: string;
}

const Text = styled.h1`
	font-size: ${(props) => `${props.theme.text.title.pc}px`};
	line-height: 1.8;
	font-weight: 700;

	@media ${media.tablet} {
		font-size: ${(props) => `${props.theme.text.title.tablet}px`};
	}
`;

const Title: React.FC<TitleProps> = ({ text, className }) => {
	return <Text className={className}>{text}</Text>;
};

export default Title;
