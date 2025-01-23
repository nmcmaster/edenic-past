import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
} from "@/app/utils/constants";

/* eslint-disable react/no-unescaped-entities */
export default function Koestler() {
	
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=1464845330/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="Koestler" />
			<Nav
				hrefBackward="/red-amarcord/kyrgyz-komuz"
				hrefForward="/red-amarcord/red-amarcord"
				textBackward="Kyrgyz Komuz"
				textForward="Red Amarcord"
			/>
			<BodyText>Koestler body text</BodyText>
		</>
	);
}
