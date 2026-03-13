"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import styles from "./ToDoList.module.css";

export const AddToDo = () => {
	const [inputValue, setInputValue] = useState("");
	const [itemsToRender, setItemsToRender] = useState<
		{ task: string; completed: boolean }[]
	>([]);
	const [isEmpty, setIsEmpty] = useState(false);
	const [isLessThanThreeChars, setIsLessThanThreeChars] = useState(false);
	const [isTitleExist, setIsTitleExist] = useState(false);

	return (
		<div className={styles.toDoListWrap}>
			<h1 className={styles.ToDoListH1}>ToDO List</h1>
			<div className={styles.buttonAndInputContainer}>
				<div className={styles.inputAndErrorsContainer}>
					<input
						className={styles.inputStyle}
						type="text"
						placeholder="New Task"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					{isEmpty && (
						<p className={styles.errorsStyle}>Please enter task title!</p>
					)}
					{isLessThanThreeChars && (
						<p className={styles.errorsStyle}>The task title is to short!</p>
					)}
					{isTitleExist && (
						<p className={styles.errorsStyle}>
							The task with the same title already exists!
						</p>
					)}
				</div>

				<button
					className={styles.addButtonStyle}
					type="button"
					onClick={() => {
						if (inputValue === "") {
							setIsLessThanThreeChars(false);
							setIsEmpty(true);
							return;
						}
						if (inputValue.length < 4) {
							setIsEmpty(false);
							setIsLessThanThreeChars(true);
							return;
						}
						if (
							itemsToRender.some(
								(tasks) =>
									tasks.task.toLowerCase() === inputValue.toLowerCase(),
							)
						) {
							setIsEmpty(false);
							setIsLessThanThreeChars(false);
							setIsTitleExist(true);
							return;
						}
						setIsLessThanThreeChars(false);
						setIsEmpty(false);
						setIsTitleExist(false);
						setItemsToRender([
							...itemsToRender,
							{ task: inputValue, completed: false },
						]);
						setInputValue("");
					}}
				>
					Add
				</button>
			</div>

			<div className={styles.tasksContainer}>
				<ul className={styles.ulStyle}>
					{itemsToRender.map((tasks) => (
						<li className={styles.liStyle} key={tasks.task}>
							<input
								className={styles.checkBoxStyle}
								type="checkbox"
								checked={tasks.completed}
								onChange={() =>
									setItemsToRender(
										itemsToRender.map((doneTasks) => {
											if (tasks.task === doneTasks.task) {
												if (doneTasks.completed) {
													return { task: doneTasks.task, completed: false };
												}
												return { task: doneTasks.task, completed: true };
											}
											return doneTasks;
										}),
									)
								}
							/>
							{tasks.completed ? (
								<p
									style={{
										textDecoration: "line-through",
										display: "flex",
										alignItems: "center",
										gap: "25px",
									}}
								>
									{tasks.task}
								</p>
							) : (
								<p>{tasks.task}</p>
							)}

							<button
								className={styles.deleteButtonStyle}
								type="button"
								onClick={() =>
									setItemsToRender(
										itemsToRender.filter(
											(doneTasks) => doneTasks.task !== tasks.task,
										),
									)
								}
							>
								<Trash2 color="red" size={25} />
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
