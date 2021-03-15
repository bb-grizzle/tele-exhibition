import window_1 from "../Asset/window/frame/window_01.png";
import window_2 from "../Asset/window/frame/window_02.png";
import window_3 from "../Asset/window/frame/window_03.png";
import window_4 from "../Asset/window/frame/window_04.png";
import window_5 from "../Asset/window/frame/window_05.png";
import window_6 from "../Asset/window/frame/window_06.png";
import window_7 from "../Asset/window/frame/window_07.png";
import window_8 from "../Asset/window/frame/window_08.png";

import window_1_illust from "../Asset/window/illust/window_01_drawing.png";
import window_2_illust from "../Asset/window/illust/window_02_drawing.png";
import window_3_illust from "../Asset/window/illust/window_03_drawing.png";
import window_4_illust from "../Asset/window/illust/window_04_drawing.png";
import window_5_illust from "../Asset/window/illust/window_05_drawing.png";
import window_6_illust from "../Asset/window/illust/window_06_drawing.png";
import window_7_illust from "../Asset/window/illust/window_07_drawing.png";
import window_8_illust from "../Asset/window/illust/window_08_drawing.png";

export interface LogoWindowProps {
	id: number;
	name: string | undefined;
	title: string | undefined;
	width: number;
	height: number;
	left: number;
	top: number;
	image: string;
	illust: string;
}

export const DATA_LOGOWINDOW_ARR: LogoWindowProps[] = [
	{
		id: 0,
		name: undefined,
		title: undefined,
		image: window_1,
		illust: window_1_illust,
		height: 5.5357136726379395,
		width: 11.071427345275879,
		left: 15.6796875,
		top: 14.28564453125,
	},
	{
		id: 1,
		name: "Hyunju Lee",
		title: "방구석 꽃 축제",
		image: window_2,
		illust: window_2_illust,
		height: 20.892854690551758,
		width: 17.857141494750977,
		left: 31.9296875,
		top: 23.75,
	},
	{
		id: 2,
		name: "Jieun Lee",
		title: "gaengsaeng",
		image: window_3,
		illust: window_3_illust,
		height: 8.749999046325684,
		width: 13.035713195800781,
		left: 54.4296875,
		top: 35.89306640625,
	},
	{
		id: 3,
		name: "Haein Seo",
		title: "D; MVP",
		image: window_4,
		illust: window_4_illust,
		height: 30.357139587402344,
		width: 9.464284896850586,
		left: 80.32421875,
		top: 14.28564453125,
	},
	{
		id: 4,
		name: undefined,
		title: undefined,
		image: window_5,
		illust: window_5_illust,
		height: 12.142855644226074,
		width: 17.857141494750977,
		left: 1.21484375,
		top: 70.35693359375,
	},
	{
		id: 5,
		name: "Taewoong Yoon",
		title: "...",
		image: window_6,
		illust: window_6_illust,
		height: 16.071426391601562,
		width: 30.714279174804688,
		left: 19.0703125,
		top: 49.64306640625,
	},
	{
		id: 6,
		name: undefined,
		title: undefined,
		image: window_7,
		illust: window_7_illust,
		height: 14.999998092651367,
		width: 19.107139587402344,
		left: 54.4296875,
		top: 70.35693359375,
	},
	{
		id: 7,
		name: "Yuseon Go",
		title: "Meet There! 나의 가면찾기",
		image: window_8,
		illust: window_8_illust,
		height: 10.178570747375488,
		width: 23.92856788635254,
		left: 74.78515625,
		top: 55.53564453125,
	},
];
