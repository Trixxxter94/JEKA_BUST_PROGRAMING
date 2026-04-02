import { Header } from "@/src/Header";
import "./globals.css";

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): Promise<React.JSX.Element> {
	return (
		<html lang="en">
			<Header />
			<body>{children}</body>
		</html>
	);
}
