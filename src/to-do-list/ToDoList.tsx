import { AddToDo } from "./AddToDo";
import styles from "./ToDoList.module.css";

export const ToDoList = () => {
	return (
		<div className={styles.toDoList}>
			<AddToDo />
		</div>
	);
};
