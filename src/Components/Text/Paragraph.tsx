import styled from "styled-components";
import React from "react";

export enum ParagraphType {
	BOLD = 700,
	MEDIUM = 500,
	REGULAR = 400,
}

interface ParagraphProps {
	text: string | string[];
	className?: string;
	type?: ParagraphType;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const Text = styled.p<{ type: ParagraphType }>`
	font-size: 12px;
	line-height: 2;
	font-weight: ${(props) => props.type};

	> span {
		display: block;
	}
`;
const Paragraph: React.FC<ParagraphProps> = ({ text, className, type = ParagraphType.REGULAR, onClick, onMouseEnter, onMouseLeave }) => {
	return (
		<Text className={className} type={type} onClick={onClick}>
			{Array.isArray(text)
				? text.map((t, index) => {
						return (
							<span key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
								{t}
							</span>
						);
				  })
				: text}
		</Text>
	);
};

export default Paragraph;
