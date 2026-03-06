"use client";

import { useState } from "react";
import styles from "./TrafficLight.module.css";

export const TrafficLight = () => {
	const [counter, setCounter] = useState(1);
	const [isBusy, setIsBusy] = useState(false);
	function changeTrafficLight() {
		if (isBusy) return;
		setIsBusy(true);
		setCounter((prev) => prev + 1);
		setTimeout(() => {
			setCounter((prev) => prev + 1);
		}, 3000);
		setTimeout(() => {
			const intervalId = setInterval(() => {
				setCounter((prev) => {
					if (prev === 3) return prev - 3;
					if (prev === 0) return prev + 3;
					return prev;
				});
			}, 1000);
			setTimeout(() => {
				clearInterval(intervalId);
				setCounter((prev) => prev + 2);
				setTimeout(() => setCounter((prev) => prev - 1), 3000);
				setTimeout(() => setIsBusy(false), 2000);
			}, 5000);
		}, 5000);
	}
	return (
		<div className={styles.trafficLight}>
			<div className={counter === 1 ? styles.circleRed : styles.blackCircle}>
				Light 1
			</div>
			<div className={counter === 2 ? styles.circleYellow : styles.blackCircle}>
				Light 2
			</div>
			<div className={counter === 3 ? styles.circleGreen : styles.blackCircle}>
				Light 3
			</div>
			<div>
				<button type="button" onClick={() => changeTrafficLight()}>
					Switch Color
				</button>
			</div>
		</div>
	);
};
