import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
export const metadata: Metadata = {
	title: 'Portfolio | Bruno Carvalho',
	description: "I'm Bruno, and I'm showing my work & services that I'm currently doing! I hope you enjoy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html translate="no" lang="en">
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
