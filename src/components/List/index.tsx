import type { ITask } from "../../interfaces/task.interface";
import Item from "./item";
import Style from "./List.module.scss";

interface IList {
	tasks: ITask[];
	selectTask: (task: ITask) => void;
}

export function List({ tasks, selectTask }: IList) {
	return (
		<aside className={Style.tasksList}>
			<h2>Today's Studies</h2>
			<ul>
				{tasks.map((task) => {
					return <Item selectTask={selectTask} key={task.id} {...task} />;
				})}
			</ul>
		</aside>
	);
}
