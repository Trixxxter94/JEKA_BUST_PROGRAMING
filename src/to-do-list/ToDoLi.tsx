import { Trash2 } from "lucide-react";
import { ToDoButton } from "./ToDoButton";
import { ToDoInput } from "./ToDoInput";
import styles from "./ToDoList.module.css";
import type { TodoData } from "./ToDoList.type";

type ToDoLiType = {
	tasks: TodoData;
	onChange: () => void;
	onClick: () => void;
};

export const ToDoLi = ({ tasks, onChange, onClick }: ToDoLiType) => {
	return (
		<li className={styles.liStyle}>
			<ToDoInput
				className={styles.checkBoxStyle}
				type="checkbox"
				checked={tasks.completed}
				onChange={onChange}
			/>
			{tasks.completed ? (
				<p className={styles.completedTaskStyle}>
					{tasks.task}
					<span style={{ color: "blue" }}>Created at: {tasks.currentData}</span>
				</p>
			) : (
				<p className={styles.notCompletedTasksStyle}>
					{tasks.task}
					<span style={{ color: "blue" }}>Created at: {tasks.currentData}</span>
				</p>
			)}
			<ToDoButton
				className={styles.deleteButtonStyle}
				type="button"
				onClick={onClick}
			>
				<Trash2 color="red" size={25} />
			</ToDoButton>
		</li>
	);
};
