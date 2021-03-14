import { useEffect, useState } from "react";

const useTimer = () => {
	const [startTime, setStartTime] = useState(0);
	const [timer, setTimer] = useState<Date>();

	useEffect(() => {
		let interval = setInterval(() => null);
		if (startTime) {
			interval = setInterval(() => {
				const nowTime = new Date().getTime() - startTime;
				setTimer(new Date(nowTime));
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [startTime]);

	return { setStartTime, timer };
};

export default useTimer;
