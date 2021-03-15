import { useState, useEffect } from "react";
import { BREAKPOINT_TABLET } from "../Style/Media";

const useWindowSize = () => {
	const [size, setSize] = useState({ width: 0, height: 0 });
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setSize({ width: window.innerWidth, height: window.innerHeight });
			setIsTablet(window.innerWidth < BREAKPOINT_TABLET);
		};
		window.addEventListener("resize", handleResize);

		return window.removeEventListener("resize", handleResize);
	}, []);

	return { size, isTablet };
};

export default useWindowSize;
