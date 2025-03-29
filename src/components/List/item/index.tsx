import type { ITask } from "../../../interfaces/task.interface";
import Style from "./Item.module.scss";

interface IItem extends ITask {
	selectTask: (task: ITask) => void;
}

export default function Item({
	id,
	name,
	time,
	selected,
	completed,
	selectTask,
}: IItem) {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<li
			className={`${Style.item} ${selected ? Style.itemSelected : ""} ${completed ? Style.itemCompleted : ""}`}
			onClick={(_) =>
				!completed && selectTask({ id, name, time, selected, completed })
			}
		>
			<h3>{name}</h3>
			<span>{time}</span>
			{completed && <span className={Style.completed} aria-label="completed" />}
		</li>
	);
}
