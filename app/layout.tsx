import './globals.css';
import style from './styles/styles.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio | Andrii Nasuschnyi',
	description: 'Portfolio Andrii Nasuschnyi',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={style.body}>{children}</body>
		</html>
	);
}
