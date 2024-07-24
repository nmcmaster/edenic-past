import { ReactNode } from "react";

export default function AlbumSquare({ children, title }: { children: ReactNode, title: string }) {
	return (
		<div className="w-5/6 sm:w-2/5">
			{children}
			<div className="font-semibold text-center text-lg py-2 sm:mb-0 mb-2">
				{title}
			</div>
		</div>
	);
}
