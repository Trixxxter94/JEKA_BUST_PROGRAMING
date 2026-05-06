"use client";

import { useEffect, useState } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoButton } from "./ToDoButton";
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

	function FilterByDay() {
		setTodos(
			Object.fromEntries(
				Object.values(todoItems)
					.toSorted((a, b) => Number(a.currentData) - Number(b.currentData))
					.map((item) => [item.id, item]),
			),
		);
	}
	function FilterByCompleted() {
		setTodos(
			Object.fromEntries(
				Object.values(todoItems)
					.toSorted((a, b) => Number(b.completed) - Number(a.completed))
					.map((item) => [item.id, item]),
			),
		);
	}
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
				<ToDoButton onClick={FilterByDay} type="button" className="">
					Sort by Date
				</ToDoButton>
				<ToDoButton onClick={FilterByCompleted} type="button" className="">
					Sort by Completed
				</ToDoButton>
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
