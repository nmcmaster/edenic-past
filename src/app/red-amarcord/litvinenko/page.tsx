import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
} from "@/app/utils/constants"; "react";

/* eslint-disable react/no-unescaped-entities */
export default function Litvinenko() {
	
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=80696129/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="Litvinenko" />
			<Nav
				hrefBackward="/red-amarcord/chuck-schuldiner"
				hrefForward="/red-amarcord/politkovskaya"
				textBackward="Chuck Schuldiner"
				textForward="Politkovskaya"
			/>
			<BodyText>
				Coined the term mafia state. Bring in kapuscinski's discussion
				of mafias? Mention that Litvinenko accused Putin of orchesrating
				Politkovskaya's murder
			</BodyText>
		</>
	);
}
