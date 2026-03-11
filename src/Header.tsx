"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export function Header() {
	const [logo, setLogo] = useState(0);
	return (
		<div className={styles.HeaderContainerStyle}>
			<div>
				{logo === 0 && <h1 className={styles.logoStyle}>Home</h1>}
				{logo === 1 && <h1 className={styles.logoStyle}>Traffic Light</h1>}
				{logo === 2 && <h1 className={styles.logoStyle}>TODO List</h1>}
			</div>
			<div className={styles.linkContainerStyle}>
				<div>
					<Link
						onClick={() => setLogo(0)}
						className={styles.linkStyle}
						href={"/"}
					>
						Home
					</Link>
				</div>
				<div>
					<Link
						onClick={() => setLogo(1)}
						className={styles.linkStyle}
						href={"/traffic-light"}
					>
						Traffic Light
					</Link>
				</div>
				<div>
					<Link
						onClick={() => setLogo(2)}
						className={styles.linkStyle}
						href={"/to-do-list"}
					>
						TODO List
					</Link>
				</div>
			</div>
		</div>
	);
}
