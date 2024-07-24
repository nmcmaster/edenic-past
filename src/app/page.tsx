/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
	return (
		<main className="w-4/5 mx-auto bg-red-700 min-h-screen px-6">
			<div className="bg-stone-200 min-h-screen">
				<h1 className="text-center text-6xl pt-6 pb-10">Edenic Past</h1>
				<div className="flex flex-wrap justify-around">
					<div className="w-2/5">
						<Image
							src="/red-amarcord-square.png"
							className="block shadow-lg"
							width={1000}
							height={1000}
							alt="Red Amarcord Cover"
						/>
						<div className="font-semibold text-center text-lg py-2">
							Red Amarcord
						</div>
					</div>
					<div className="w-2/5">
						<Image
							src="/two-song-promo.jpg"
							className="block shadow-lg"
							width={1000}
							height={1000}
							alt="Edenic Past two song promo cover"
						/>
						<div className="font-semibold text-center text-lg py-2">Two-song promo</div>
					</div>
				</div>
				<p className="border-t w-4/5 pt-3 px-3 mt-4 text-md mx-auto leading-6 border-black">Edenic Past was founded in May 2020 by Nicholas McMaster to explore political and personal themes through a studio-only brutal death metal band with programmed drums. Handling said drums, bass, and song structures himself, he asked long-time collaborators and friends Colin Marston and Paulo Henri Paguntalan to write and play guitar and vocals, respectively. Marston has also produced, engineered, and mixed every recording. The views expressed on this website in exposition of the themes for Edenic Past's songs should be taken as McMaster's views alone, not necessarily speaking for the other members.</p>
			</div>
		</main>
	);
}
