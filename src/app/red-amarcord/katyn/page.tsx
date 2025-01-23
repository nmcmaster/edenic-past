import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
	pullQuote,
} from "@/app/utils/constants";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Katyn() {
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=585450602/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="Katyn" />
			<Nav
				hrefBackward="/red-amarcord/molotok"
				hrefForward="/red-amarcord/kyrgyz-komuz"
				textBackward="Molotok"
				textForward="Kyrgyz Komuz"
			/>
			<BodyText>
				<p className="">Katyn</p>
			</BodyText>
		</>
	);
}
