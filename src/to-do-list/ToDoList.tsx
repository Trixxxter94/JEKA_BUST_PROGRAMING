"use client";

import { useEffect, useState } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoLi } from "./ToDoLi";
import styles from "./ToDoList.module.css";
import type { TodoData } from "./ToDoList.type";

export const ToDoList = () => {
	const stored = localStorage.getItem("ToDoItems");
	const storedToDoItems = stored ? JSON.parse(stored) : {};
	const [todoItems, setTodos] =
		useState<Record<string, TodoData>>(storedToDoItems);
	useEffect(() => {
		localStorage.setItem("ToDoItems", JSON.stringify(todoItems));
	}, [todoItems]);

	return (
		<div className={styles.toDoList}>
			<AddToDo
				ToDoItems={todoItems}
				onAddTodo={(newTodo) =>
					setTodos({
						...todoItems,
						[newTodo.id]: newTodo,
					})
				}
			/>
			<div className={styles.tasksContainer}>
				<ul className={styles.ulStyle}>
					{Object.values(todoItems).map((tasks) => (
						<ToDoLi
							key={tasks.task}
							tasks={tasks}
							onChange={() => {
								setTodos((prevTodos) => ({
									...prevTodos,
									[tasks.id]: {
										...prevTodos[tasks.id],
										completed: !prevTodos[tasks.id].completed,
										currentData: new Date().toLocaleDateString("en-CA"),
									},
								}));
							}}
							onClick={() => {
								setTodos((prevTodos) => {
									const copy = { ...prevTodos };
									delete copy[tasks.id];
									return copy;
								});
							}}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
