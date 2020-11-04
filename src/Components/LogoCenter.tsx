import React from "react";
import styled, { css } from "styled-components";
import media from "../Style/Media";
import logo_default from "../Asset/center_default.png";
import { DATA_LOGOWINDOW_ARR } from "../Data/LogoWindow";

// CENTER LOGO
const Wrppaer = styled.div`
	max-width: ${(props) => `${props.theme.size.center}px`};
	max-height: ${(props) => `${props.theme.size.center}px`};
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 50%;

	user-select: none;
	pointer-events: none;

	&::after {
		content: "";
		display: block;
		padding-top: 100%;
		user-select: none;
		pointer-events: none;
	}

	@media ${media.tablet} {
		width: 100%;
	}
`;

const Container = styled.div``;

const LogoWrppaer = styled.div``;

const Logo = styled.img`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	user-select: none;
	pointer-events: none;
`;

const WindowWrapper = styled.ul``;

const WindowImage = styled.img`
	width: 100%;
`;

const WindowIllust = styled(WindowImage)`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	transition: clip-path 0.6s ${(props) => props.theme.transition.default};
	clip-path: inset(0% 0% 100% 0%);
`;

const WindowList = styled.li<{ width: number; height: number; left: number; top: number }>`
	position: absolute;
	/* overflow: hidden; */
	cursor: pointer;

	&:hover {
		${WindowIllust} {
			clip-path: inset(0% 0% 0% 0%);
		}
	}

	${(props) => css`
		left: ${`${props.left}%`};
		top: ${`${props.top}%`};
		width: ${`${props.width}%`};
		height: ${`${props.height}%`};
	`};
	&::after {
		content: "";
		display: block;
		position: absolute;
		width: calc(100% - 2px);
		height: calc(100% - 2px);
		left: 0px;
		top: 0px;
		border: 1px solid white;
	}
`;

const ImageWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
`;

const LogoCenter = () => {
	return (
		<Wrppaer>
			<Container>
				<LogoWrppaer>
					<Logo src={logo_default} />
				</LogoWrppaer>

				<WindowWrapper>
					{DATA_LOGOWINDOW_ARR.map((el) => {
						return (
							<WindowList key={el.id} width={el.width} height={el.height} left={el.left} top={el.top}>
								<ImageWrapper>
									<WindowImage src={el.image} />
									<WindowIllust src={el.illust} />
								</ImageWrapper>
							</WindowList>
						);
					})}
				</WindowWrapper>
			</Container>
		</Wrppaer>
	);
};

export default LogoCenter;
