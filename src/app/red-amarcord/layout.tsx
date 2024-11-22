import Link from "next/link";
import { ReactNode } from "react";
import Divider from "../ui/Divider";

export default function RedAmarcordLayout({
	children,
}: {
	children: ReactNode;
}) {
	const directory = "/red-amarcord/";
	return (
		<div className="text-center mb-5">
			<h1 className="mb-3">Red Amardcord (2020)</h1>
			{children}
			<div className="mb-8">
				<Link href={`${directory}for-brandon-chase`}>
					For Brandon Chase
				</Link>
				<Divider />
				<Link href={`${directory}beria`}>Beria</Link>
				<Divider />
				<Link href={`${directory}kolyma`}>Kolyma</Link>
				<Divider />
				<Link
					href={`${directory}the-connection-between-bruno-schulz-and-the-holodomor`}
				>
					The Connection Between Bruno Schulz and the Holodomor
				</Link>
				<Divider />
				<Link href={`${directory}chuck-schuldiner`}>
					Chuck Schuldiner
				</Link>
				<Divider />
				<Link href={`${directory}litvinenko`}>Litvinenko</Link>
				<Divider />
				<Link href={`${directory}politkovskaya`}>Politkovskaya</Link>
				<Divider />
				<Link href={`${directory}molotok`}>Molotok</Link>
				<Divider />
				<Link href={`${directory}katyn`}>Katyn</Link>
				<Divider />
				<Link href={`${directory}kyrgyz-komuz`}>Kyrgyz Komuz</Link>
				<Divider />
				<Link href={`${directory}koestler`}>Koestler</Link>
				<Divider />
				<Link href={`${directory}red-amarcord`}>Red Amarcord</Link>
				<Divider />
				<Link href={`${directory}baburova`}>Baburova</Link>
				<Divider />
			</div>
		</div>
	);
}
