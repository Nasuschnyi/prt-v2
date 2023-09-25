import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Andrii Nasuschnyi",
	description: "About Andrii Nasuschnyi",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
