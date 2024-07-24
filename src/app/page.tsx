/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AlbumSquare from "./ui/AlbumSquare";

export default function Home() {
	return (
		<main className="sm:w-4/5 mx-auto bg-red-700 min-h-screen px-6">
			<div className="bg-stone-200 min-h-screen">
				<h1 className="text-center text-6xl sm:text-3xl pt-6 pb-10">Edenic Past</h1>
				<div className="flex flex-wrap justify-around">
					<AlbumSquare title="Two-song promo">
						<Image
							src="/two-song-promo.jpg"
							className="block shadow-sm"
							width={1000}
							height={1000}
							alt="Edenic Past two song promo cover"
						/>
					</AlbumSquare>
					<AlbumSquare title="Red Amarcord">
						<Image
							src="/red-amarcord-square.png"
							className="block shadow-sm"
							width={1000}
							height={1000}
							alt="Red Amarcord Cover"
						/>
					</AlbumSquare>
				</div>
				<div className="border-t indent-3 w-5/6 sm:w-4/5 py-3 sm:px-3 mt-4 text-md mx-auto leading-6 border-black space-y-2">
					<p>
						Edenic Past was founded in May 2020 by Nicholas McMaster
						to explore political and personal themes through a
						studio-only brutal death metal band with programmed
						drums. Handling said drums, bass, and song structures
						himself, he asked long-time collaborators and friends
						Colin Marston and Paulo Henri Paguntalan to write and
						play guitar and vocals, respectively. Marston has also
						engineered, mixed, and mastered every recording. The
						views expressed on this website in exposition of the
						themes for Edenic Past's songs should be taken as
						McMaster's views alone, not necessarily speaking for the
						other members.
					</p>
					<p>
						The name Edenic Past refers to refers to a core element
						of fascism: the appeal to an imaginary before-time which
						is nebulously defined but was better than the present
						(more often referred to in political writings as the
						"mythic past").
					</p>
					<p>Edenic Past's vocals do not contain lyrics.</p>
				</div>
			</div>
		</main>
	);
}
