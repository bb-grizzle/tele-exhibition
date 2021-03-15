import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

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
	display: flex;
	flex-direction: column;
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

const NameText = styled(Paragraph)`
	padding-top: 16px;
`;
const LinkText = styled(Title)<{ active: boolean }>`
	${(props) =>
		props.active &&
		css`
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		`};
`;
const TimerWrapper = styled.div`
	display: flex;
`;

const TimeDayText = styled(Title)`
	margin-right: 16px;
`;
const TimeText = styled(Title)`
	font-weight: lighter;
`;

const ExhibitionText = () => {
	const [filterMember, setFilterMember] = useState<string | string[]>("");
	const { isAboutClicked, setIsAboutClicked } = useIsAboutClicked();
	const { nowData } = useNowData();
	const [detailTitle, setDetailTitle] = useState("");
	const [endTime, setEndTime] = useState<Date>();
	const [nowDate, setNowDate] = useState<Date>();
	const [timerDays, setTimerDays] = useState<string>();
	const [timerTimes, setTimerTimes] = useState<string>();
	let interval = useRef(setInterval(() => null));

	useEffect(() => {
		// setEndTime(new Date("03/20/2021 00:00 AM'"));
		setEndTime(new Date(2021, 2, 20, 23, 59, 59));
		// 2020,06,12,23,59,59

		clearInterval(interval.current);
		interval.current = setInterval(() => {
			const nowDate = new Date();
			setNowDate(nowDate);
		}, [100]);

		return () => clearInterval(interval.current);
	}, []);

	useEffect(() => {
		if (nowDate && endTime) {
			const test = endTime.getTime() - nowDate.getTime();

			if (test > 0) {
				const milSecond = 100;
				var _second = 1000;
				var _minute = _second * 60;
				var _hour = _minute * 60;
				var _day = _hour * 24;

				var days = Math.floor(test / _day);
				var hours = Math.floor((test % _day) / _hour);
				var minutes = Math.floor((test % _hour) / _minute);
				var seconds = Math.floor((test % _minute) / _second);
				var milseconds = Math.floor((test % _second) / milSecond);

				setTimerDays(`${days}`);
				setTimerTimes(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}${milseconds}` : `${seconds}${milseconds}`}`);
			} else {
				setTimerDays(undefined);
				setTimerTimes(undefined);
			}
		}
	}, [nowDate, endTime]);

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

	const handleLinkClick = () => {
		console.log("test");
		window.location.href = "https://naver.com";
	};

	return (
		<Wrapper>
			<TitleWrapper>
				<TitleTextWrapper>
					<TitleCustom text={"재택전시"} hide={!!nowData && !!nowData.title} />
					<DetailTitle text={detailTitle} active={!!nowData && !!nowData.title} />
				</TitleTextWrapper>

				<ParagraphWrapper>
					<Paragraph text={["건국대학교 산업디자인학과 코딩동아리", "D;의 첫번째 온라인 전시"]} />
					{nowData && nowData.name && <NameText text={nowData.name} />}

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
				<Title text={"2021 / 3 / 20 SAT - "} />

				{timerDays !== undefined && timerTimes !== undefined ? (
					<TimerWrapper>
						<TimeDayText text={`D - ${timerDays}`} />
						<TimeText text={timerTimes} />
					</TimerWrapper>
				) : (
					<LinkText text={"VIEW EXHIBITION >"} active={true} onClick={handleLinkClick} />
				)}
			</DateWrapper>

			<DescriptWrapper>
				<Paragraph text={DATA_DESCRIPTION} />
			</DescriptWrapper>
		</Wrapper>
	);
};

export default ExhibitionText;
