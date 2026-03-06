import Link from "next/link";

export function NavigationMenu() {
	return (
		<div>
			<Link href={"/"}>Home</Link>
			<Link href={"/traffic-light"}>Traffic Light</Link>
		</div>
	);
}
