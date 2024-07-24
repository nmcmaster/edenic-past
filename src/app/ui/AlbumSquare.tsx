import { ReactNode } from "react";

export default function AlbumSquare({ children, title }: { children: ReactNode, title: string }) {
	return (
		<div className="w-2/5">
			{children}
			<div className="font-semibold text-center text-lg py-2">
				{title}
			</div>
		</div>
	);
}
