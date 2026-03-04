import { NavigationMenu } from "@/src/NavigationMenu";

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): Promise<React.JSX.Element> {
	return (
		<html lang="en">
			<body>{children}</body>
			<NavigationMenu />
		</html>
	);
}
