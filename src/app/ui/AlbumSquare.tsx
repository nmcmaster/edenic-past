import { ReactNode } from "react";

export default function AlbumSquare({ children }: { children: ReactNode }) {
	return (
		<div className="w-2/5">
			{children}
			<div className="font-semibold text-center text-lg py-2">
				Red Amarcord
			</div>
		</div>
	);
}
