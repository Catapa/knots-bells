import { Footer, Header } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import {kulim_park, rockybilly, inter} from '@/styles/fonts';

export const metadata: Metadata = {
	title: 'Knots & Bells - Timeless Wedding Experiences',
	description: 'Your love story deserves a beautiful beginning. Let us take care of the details, so you can focus on creating memories that will last a lifetime.',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${kulim_park.variable} ${rockybilly.variable} ${inter.variable}`}>
				<Header />
				  {children}
				<Footer />
			</body>
		</html>
	);
}
