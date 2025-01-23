import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
} from "@/app/utils/constants";

/* eslint-disable react/no-unescaped-entities */
export default function Molotok() {
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=2182646226/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="Molotok" />
			<Nav
				hrefBackward="/red-amarcord/politkovskaya"
				hrefForward="/red-amarcord/katyn"
				textBackward="Politkovskaya"
				textForward="Katyn"
			/>
			<BodyText>Molotok</BodyText>
		</>
	);
}
