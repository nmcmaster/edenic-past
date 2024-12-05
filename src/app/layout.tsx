import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Edenic Past",
	description:
		"The meaning behind the songs by brutal death metal band Edenic Past",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={playfair.className}>
				<main className="sm:w-4/5 mx-auto bg-red-700 min-h-screen px-2 sm:px-6">
					<div className="bg-stone-200 min-h-screen">
						<h1 className="text-center sm:text-6xl text-4xl pt-6 pb-6">
							<Link href="/">Edenic Past</Link>
						</h1>
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
