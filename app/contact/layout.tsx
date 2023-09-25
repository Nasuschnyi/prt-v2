import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Andrii Nasuschnyi",
	description: "Contact with Andrii Nasuschnyi",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
