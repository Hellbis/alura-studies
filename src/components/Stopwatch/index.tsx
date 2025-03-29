import { Button } from "../Button";
import { Clock } from "./Clock";

import { timeToSeconds } from "../../common/utils/date";

import Style from "./Stopwatch.module.scss";
import type { ITask } from "../../interfaces/task.interface";
import { useEffect, useState } from "react";

interface IStopwatch {
	selectedTask: ITask | undefined;
	finishTask: () => void;
}

export function Stopwatch({ selectedTask, finishTask }: IStopwatch) {
	const [time, setTime] = useState<number>();

	useEffect(() => {
		if (selectedTask?.time) setTime(timeToSeconds(selectedTask?.time));
	}, [selectedTask]);

	function decrement(count = 0) {
		setTimeout(() => {
			if (count > 0) {
				setTime(count - 1);
				return decrement(count - 1);
			}
			finishTask();
		}, 1000);
	}

	return (
		<div className={Style.stopwatch}>
			<p className={Style.title}>Select a card to start the stopwatch</p>

			<div className={Style.clockWrapper}>
				<Clock time={time} />
			</div>
			<Button onClick={() => decrement(time)}>Start</Button>
		</div>
	);
}
