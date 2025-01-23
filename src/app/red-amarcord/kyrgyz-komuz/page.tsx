
import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
	
} from "@/app/utils/constants";

/* eslint-disable react/no-unescaped-entities */
export default function KyrgyzKomuz() {
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=310135901/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="Kyrgyz Komuz" />
			<Nav
				hrefBackward="/red-amarcord/katyn"
				hrefForward="/red-amarcord/koestler"
				textBackward="Katyn"
				textForward="Koestler"
			/>
			<BodyText>Kyrgyz Komuz</BodyText>
		</>
	);
}
