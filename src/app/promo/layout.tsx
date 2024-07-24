import Link from "next/link";
import { ReactNode } from "react";
import Divider from "../ui/Divider";

export default function PromoLayout({ children }: { children: ReactNode }) {
	const directory = "/promo/";
	return (
		<div className="text-center mb-5">
			<h1 className="mb-3">Two-song promo (2020)</h1>
			<div className="mb-3">
				<Link
					href={`${directory}the-connection-between-bruno-schulz-and-the-holodomor`}
				>
					The Connection Between Bruno Schulz and the Holodomor
				</Link>
				<Divider />
				<Link href={`${directory}politkovskaya`}>Politkovskaya</Link>
			</div>
			{children}
		</div>
	);
}
