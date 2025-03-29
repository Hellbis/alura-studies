import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Button } from "../Button";

import Style from "./Form.module.scss";
import type { ITask } from "../../interfaces/task.interface";

interface IForm {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function Form({ setTasks }: IForm) {
	const [nameTask, setNameTask] = useState("");
	const [timeTask, setTimeTask] = useState("00:00");

	function addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTasks((tasks) => [
			...tasks,
			{
				id: uuid(),
				name: nameTask,
				time: timeTask,
				selected: false,
				completed: false,
			},
		]);
		setNameTask("");
		setTimeTask("00:00");
	}

	return (
		<form className={Style.newTask} onSubmit={addTask}>
			<div className={Style.inputContainer}>
				<label htmlFor="task">What do you want to study?</label>
				<input
					type="text"
					id="task"
					name="task"
					placeholder="describe a new study"
					value={nameTask}
					onChange={(event) => setNameTask(event.target.value)}
					required
				/>
			</div>
			<div className={Style.inputContainer}>
				<label htmlFor="time">Time for this</label>
				<input
					type="time"
					id="time"
					name="time"
					step="1"
					min="00:00:00"
					max="01:30:00"
					value={timeTask}
					onChange={(event) => setTimeTask(event.target.value)}
					required
				/>
			</div>

			<Button type="submit">Add</Button>
		</form>
	);
}
