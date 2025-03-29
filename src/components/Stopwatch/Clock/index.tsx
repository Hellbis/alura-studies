import Style from "./Clock.module.scss";

interface IClock {
	time: number | undefined;
}

export function Clock({ time = 0 }: IClock) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const [firstMinutePosition, lastMinutePosition] = String(minutes).padStart(
		2,
		"0",
	);
	const [firstSecondsPosition, lastSecondsPosition] = String(seconds).padStart(
		2,
		"0",
	);

	return (
		<>
			<span className={Style.clockNumber}>{firstMinutePosition}</span>
			<span className={Style.clockNumber}>{lastMinutePosition}</span>
			<span className={Style.clockDivision}>:</span>
			<span className={Style.clockNumber}>{firstSecondsPosition}</span>
			<span className={Style.clockNumber}>{lastSecondsPosition}</span>
		</>
	);
}
