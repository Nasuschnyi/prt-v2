import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Andrii Nasuschnyi",
	description: "Main page of Andrii Nasuschnyi",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
