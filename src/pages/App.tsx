import { useState } from "react";

import { Form } from "../components/Form";
import { List } from "../components/List";
import { Stopwatch } from "../components/Stopwatch";

import Style from "./App.module.scss";

import type { ITask } from "../interfaces/task.interface";

function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [selectedTask, setSelectedTask] = useState<ITask>();

	function selectTask(selectedTask: ITask) {
		setSelectedTask(selectedTask);
		setTasks((tasks) =>
			tasks.map((task) => ({
				...task,
				selected: task.id === selectedTask.id,
			})),
		);
	}

	function finishTask() {
		if (selectedTask) {
			setSelectedTask(undefined);
			setTasks((tasks) =>
				tasks.map((task) => {
					if (task.id === selectedTask.id) {
						return {
							...task,
							completed: true,
						};
					}
					return task;
				}),
			);
		}
	}

	return (
		<div className={Style.AppStyle}>
			<Form setTasks={setTasks} />
			<List tasks={tasks} selectTask={selectTask} />
			<Stopwatch selectedTask={selectedTask} finishTask={finishTask} />
		</div>
	);
}

export default App;
