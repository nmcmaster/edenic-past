import Link from "next/link";
import { ReactNode } from "react";

export default function AlbumSquare({
	children,
	title,
	href,
}: {
	children: ReactNode;
	title: string;
	href: string;
}) {
	return (
		<div className="w-5/6 sm:w-2/5">
			<Link href={href}>
				{children}
				<div className="font-semibold text-center text-lg py-2 sm:mb-0 mb-2">
					{title}
				</div>
			</Link>
		</div>
	);
}
