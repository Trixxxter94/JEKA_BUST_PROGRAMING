"use client";

import { useRef, useState } from "react";
import styles from "./TrafficLight.module.css";

export const TrafficLight = () => {
	const [counter, setCounter] = useState(1);
	const isBusyRef = useRef(false);
	const changeColorRef = useRef(true);
	function changeTrafficLight() {
		if (isBusyRef.current) return;
		isBusyRef.current = true;
		if (changeColorRef.current === true) {
			setCounter((prev) => prev + 1);
			changeColorRef.current = false;
			setTimeout(() => {
				setCounter((prev) => prev + 1);
				isBusyRef.current = false;
			}, 3000);
			return;
		}
		if (changeColorRef.current === false) {
			changeColorRef.current = true;

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
				setTimeout(() => (isBusyRef.current = false), 2000);
			}, 5000);
		}
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
			<button type="button" onClick={changeTrafficLight}>
				Switch Color
			</button>
		</div>
	);
};
