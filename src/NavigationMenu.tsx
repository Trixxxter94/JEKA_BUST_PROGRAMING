import Link from "next/link";

export function NavigationMenu() {
	return (
		<div>
			<Link href={"/"}>Home</Link>
			<Link href={"/"}>About</Link>
		</div>
	);
}
