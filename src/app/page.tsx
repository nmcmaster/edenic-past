import { redirect } from "next/navigation";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
	redirect('/red-amarcord/for-brandon-chase');

	return (
		<>
			
			<div className="border-t indent-3 w-5/6 sm:w-4/5 py-3 sm:px-3 sm:mt-4 mt-1 text-md mx-auto leading-6 border-black space-y-2">
				<p>
					Edenic Past was founded in May 2020 by Nicholas McMaster to
					explore political and personal themes through a studio-only
					brutal death metal band with programmed drums. Handling said
					drums, bass, and song structures himself, he asked long-time
					collaborators and friends Colin Marston and Paulo Henri
					Paguntalan to write and play guitar and vocals,
					respectively. Marston has also engineered, mixed, and
					mastered every recording. The views expressed on this
					website in exposition of the themes for Edenic Past's songs
					should be taken as McMaster's views alone, not necessarily
					speaking for the other members. All writings by McMaster except where noted.
				</p>
				<p>
					The name Edenic Past refers to refers to a core element of
					fascism: the appeal to an imaginary before-time which is
					nebulously defined but was better than the present (more
					often referred to in political writings as the "mythic
					past").
				</p>
				<p>Edenic Past's vocals do not contain lyrics.</p>
			</div>
		</>
	);
}
