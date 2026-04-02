"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export function Header() {
	const pathname = usePathname();
	let logo = "";
	if (pathname === "/") {
		logo = "Home";
	} else if (pathname === "/traffic-light") {
		logo = "Traffic Light";
	} else if (pathname === "/to-do-list") {
		logo = "ToDo List";
	}
	return (
		<div className={styles.HeaderContainerStyle}>
			<div>
				<h1 className={styles.logoStyle}>{logo}</h1>
			</div>
			<div className={styles.linkContainerStyle}>
				<div>
					<Link className={styles.linkStyle} href={"/"}>
						Home
					</Link>
				</div>
				<div>
					<Link className={styles.linkStyle} href={"/traffic-light"}>
						Traffic Light
					</Link>
				</div>
				<div>
					<Link className={styles.linkStyle} href={"/to-do-list"}>
						ToDo List
					</Link>
				</div>
			</div>
		</div>
	);
}
