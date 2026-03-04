import HrefPage from "@/src/href-page.ui";

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): Promise<React.JSX.Element> {
	return (
		<html lang="en">
			<body>{children}</body>
			<HrefPage />
		</html>
	);
}
