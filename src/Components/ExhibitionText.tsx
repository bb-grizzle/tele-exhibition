import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Title from "./Text/Title";
import Paragraph from "./Text/Paragraph";
import { DATA_MEMBER_ARR, DATA_DESCRIPTION } from "../Data/TextData";
import media from "../Style/Media";

const Wrapper = styled.div`
	color: white;
`;

const TextWrapper = styled.div`
	display: flex;
	position: absolute;
`;

const TitleWrapper = styled(TextWrapper)`
	left: 0;
	top: 0;
`;

const MemberWrapper = styled(TextWrapper)`
	right: 0;
	top: 0;

	@media ${media.tablet} {
		display: none;
	}
`;
const DateWrapper = styled(TextWrapper)`
	left: 0;
	bottom: 0;
`;
const DescriptWrapper = styled(TextWrapper)`
	right: 0;
	bottom: 0;
	width: 320px;
	text-align: right;

	@media ${media.tablet} {
		display: none;
	}
`;

const ParagraphWrapper = styled.div``;

const TitleCustom = styled(Title)`
	writing-mode: tb-rl;
	line-height: 1;
	margin-right: 30px;
	letter-spacing: ${(props) => `${props.theme.text.title.pc * 0.3}px`};
	@media ${media.tablet} {
		margin-right: 16px;
	}
`;

const MemberText = styled(Paragraph)`
	text-align: right;
`;

const MemberTextMobile = styled(MemberText)`
	text-align: left;
	margin-top: 8px;
	display: none;
	@media ${media.tablet} {
		display: block;
	}
`;

const DescriptionMobile = styled(Paragraph)<{ isClicked: boolean }>`
	display: none;
	margin-top: 8px;
	opacity: 0.6;
	@media ${media.tablet} {
		display: block;
	}
`;

const BtnClose = styled(Paragraph)`
	opacity: 0.6;
`;

const ExhibitionText = () => {
	const [filterMember, setFilterMember] = useState<string | string[]>("");

	useEffect(() => {
		const cutCount = Math.round(DATA_MEMBER_ARR.length / 2);
		let row_1 = "";
		let row_2 = "";
		DATA_MEMBER_ARR.forEach((member, index) => {
			if (index < cutCount) {
				if (!row_1) row_1 = member;
				else row_1 = `${row_1} / ${member}`;
			} else {
				if (!row_2) row_2 = member;
				else row_2 = `${row_2} / ${member}`;
			}
		});
		setFilterMember([row_1, row_2]);
	}, []);

	const handleMoreClick = () => {
		// setIsAboutClick(true);
	};
	const handleCloseClick = () => {
		// setIsAboutClick(false);
	};

	return (
		<Wrapper>
			<TitleWrapper>
				<TitleCustom text={"재택전시"} />
				<ParagraphWrapper>
					<Paragraph text={["건국대학교 산업디자인학과 코딩동아리", "D;의 첫번째 온라인 전시"]} />

					<MemberTextMobile text={filterMember} />
					{/* <DescriptionMobile text={!isClicked ? "더 보기" : DATA_DESCRIPTION} isClicked={isClicked} onClick={!isClicked ? handleMoreClick : () => null} /> */}
					{/* {isClicked && <BtnClose text={"닫기"} onClick={handleCloseClick} />} */}
				</ParagraphWrapper>
			</TitleWrapper>

			<MemberWrapper>
				<MemberText text={filterMember} />
			</MemberWrapper>

			<DateWrapper>
				<Title text={"2020 / 11/ 28 SAT - "} />
			</DateWrapper>

			<DescriptWrapper>
				<Paragraph text={DATA_DESCRIPTION} />
			</DescriptWrapper>
		</Wrapper>
	);
};

export default ExhibitionText;
