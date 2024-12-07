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
		<div className="text-center pb-5">
			<h1 className="mb-3">Red Amardcord (2020)</h1>
			{children}
			<div className="pb-8 pt-8 sm:w-4/5 lg:text-lg text-sm mx-auto text-red-700">
				<Link href={`${directory}for-brandon-chase`}>
					For Brandon Chase
				</Link>
				<Divider />
				<Link href={`${directory}beria`}>Beria</Link>
				<Divider />
				<Link href={`${directory}kolyma`}>Kolyma</Link>
				<div className="hidden sm:inline">
					<Divider />
				</div>
				<div className="sm:hidden" />
				<Link
					href={`${directory}the-connection-between-bruno-schulz-and-the-holodomor`}
				>
					The Connection Between Bruno Schulz and the Holodomor
				</Link>
				<div className="hidden sm:inline">
					<Divider />
				</div>
				<div className="sm:hidden" />
				<Link href={`${directory}chuck-schuldiner`}>
					Chuck Schuldiner
				</Link>
				<Divider />
				<Link href={`${directory}litvinenko`}>Litvinenko</Link>
				<Divider />

				<Link href={`${directory}politkovskaya`}>Politkovskaya</Link>
				<div className="hidden sm:inline">
					<Divider />
				</div>
				<div className="sm:hidden" />
				<Link href={`${directory}molotok`}>Molotok</Link>
				<Divider />
				<Link href={`${directory}katyn`}>Katyn</Link>
				<Divider />
				<Link href={`${directory}kyrgyz-komuz`}>Kyrgyz Komuz</Link>
				<div className="hidden sm:inline">
					{" "}
					<Divider />
				</div>
				<div className="sm:hidden" />
				<Link href={`${directory}koestler`}>Koestler</Link>
				<Divider />
				<Link href={`${directory}red-amarcord`}>Red Amarcord</Link>
				<Divider />
				<Link href={`${directory}baburova`}>Baburova</Link>
				<div className="mt-1.5 border-t border-gray-400 w-1/2 lg:w-1/3 mx-auto pt-1">
					<Link href="#">Bibliography</Link> <Divider /> <Link href="/discography">Discography</Link>
				</div>
			</div>
		</div>
	);
}
