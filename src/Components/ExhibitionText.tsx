import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "./Text/Title";
import Paragraph from "./Text/Paragraph";
import { DATA_MEMBER_ARR, DATA_DESCRIPTION } from "../Data/TextData";
import media from "../Style/Media";
import { useIsAboutClicked, useNowData } from "../Context/AppProvider";

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

const TitleTextWrapper = styled.div`
	position: relative;
`;

const TitleCustom = styled(Title)<{ hide?: boolean }>`
	writing-mode: tb-rl;
	line-height: 1;
	margin-right: 30px;
	width: 50%;
	letter-spacing: ${(props) => `${props.theme.text.title.pc * 0.3}px`};
	opacity: ${(props) => (props.hide ? 0 : 1)};
	transition: opacity 0.5s ${(props) => props.theme.transition.default};
	@media ${media.tablet} {
		/* margin-right: 16px; */
	}
`;

const DetailTitle = styled(TitleCustom)<{ active: boolean }>`
	position: absolute;
	left: 0;
	top: 0;
	background-color: black;
	height: 50vh;
	max-height: ${(props) => (props.active ? "50vh" : 0)};
	opacity: ${(props) => (props.active ? 1 : 0)};
	overflow: hidden;
	transition: max-height 1s ${(props) => props.theme.transition.default} opacity 1s ${(props) => props.theme.transition.default};
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

const DescriptionMobile = styled(Paragraph)<{ active: boolean }>`
	display: none;
	margin-top: 8px;
	opacity: 0.6;

	@media ${media.tablet} {
		/* display: ${(props) => (props.active ? "block" : "none")}; */
		display: block;
		overflow: hidden;
		max-height: ${(props) => (props.active ? "300px" : "0px")};
		transition: max-height 0.6s ${(props) => props.theme.transition.default};
	}
`;

const BtnClose = styled(Paragraph)`
	opacity: 0.6;
	margin-top: 8px;
	padding-top: 8px;
	display: none;
	border-top: 1px solid white;
	width: 100%;
	@media ${media.tablet} {
		display: block;
	}
`;

const ExhibitionText = () => {
	const [filterMember, setFilterMember] = useState<string | string[]>("");
	const { isAboutClicked, setIsAboutClicked } = useIsAboutClicked();
	const { nowData } = useNowData();
	const [detailTitle, setDetailTitle] = useState("");

	useEffect(() => {
		if (nowData) {
			setDetailTitle(nowData.title ? nowData.title : "");
		}
	}, [nowData]);

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

	return (
		<Wrapper>
			<TitleWrapper>
				<TitleTextWrapper>
					<TitleCustom text={"재택전시"} hide={!!nowData && !!nowData.title} />
					<DetailTitle text={detailTitle} active={!!nowData && !!nowData.title} />
				</TitleTextWrapper>

				<ParagraphWrapper>
					<Paragraph text={["건국대학교 산업디자인학과 코딩동아리", "D;의 첫번째 온라인 전시"]} />

					{/* mobile view */}
					<MemberTextMobile text={filterMember} />
					<DescriptionMobile text={DATA_DESCRIPTION} active={isAboutClicked} />
					<BtnClose text={isAboutClicked ? "닫기" : "더보기"} onClick={() => setIsAboutClicked((prev) => !prev)} />
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
