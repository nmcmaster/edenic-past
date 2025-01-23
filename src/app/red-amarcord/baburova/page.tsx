import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";

/* eslint-disable react/no-unescaped-entities */
export default function Baburova() {
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=1055768156/transparent=true/"
				albumHref="https://edenicpast.bandcamp.com/album/red-amarcord"
				albumTitle="Red Amarcord by Edenic Past"
			/>
			<Title title="Baburova" />
			<Nav
				hrefBackward="/red-amarcord/red-amarcord"
				hrefForward="/red-amarcord"
				textBackward="Red Amarcord"
				textForward="album info"
				infoIconRight
			/>
			<BodyText>Baburova</BodyText>
		</>
	);
}
