"use client";
import { useState } from "react";
import { ToDoButton } from "./ToDoButton";
import { ToDoInput } from "./ToDoInput";
import styles from "./ToDoList.module.css";
import type { TodoData } from "./ToDoList.type";

type AddToDoProps = {
	ToDoItems: Record<string, TodoData>;
	onAddTodo: (newTodo: TodoData) => void;
};

export const AddToDo = ({ ToDoItems, onAddTodo }: AddToDoProps) => {
	const [taskTitle, setTaskTitle] = useState("");
	const [taskTitleError, setTaskTitleError] = useState("");
	const handleAddTodo = () => {
		if (taskTitle === "") {
			setTaskTitleError("Please enter task title!");
			return;
		}
		if (taskTitle.length < 4) {
			setTaskTitleError("The task title is to short!");
			return;
		}
		if (
			Object.values(ToDoItems).some(
				(tasks) => tasks.task.toLowerCase() === taskTitle.toLowerCase(),
			)
		) {
			setTaskTitleError("The task with the same title already exists!");
			return;
		}
		onAddTodo({
			id: crypto.randomUUID(),
			task: taskTitle,
			completed: false,
			currentData: new Date().toLocaleDateString("en-CA"),
		});
		setTaskTitleError("");
		setTaskTitle("");
	};

	return (
		<div className={styles.toDoListWrap}>
			<h1 className={styles.ToDoListH1}>ToDo List</h1>
			<div className={styles.buttonAndInputContainer}>
				<div className={styles.inputAndErrorsContainer}>
					<ToDoInput
						className={styles.inputStyle}
						type="text"
						placeholder="New Task"
						inputValue={taskTitle}
						onChange={(event) => setTaskTitle(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								handleAddTodo();
							}
						}}
					/>

					<p className={styles.errorsStyle}>{taskTitleError}</p>
				</div>
				<ToDoButton
					className={styles.addButtonStyle}
					type="button"
					onClick={() => handleAddTodo()}
				>
					Add
				</ToDoButton>
			</div>
		</div>
	);
};
