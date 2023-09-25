import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Work | Andrii Nasuschnyi",
	description: "Works of Andrii Nasuschnyi",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
