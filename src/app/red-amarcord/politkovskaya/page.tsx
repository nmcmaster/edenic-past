import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
} from "@/app/utils/constants";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Politkovskaya() {
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=4199930869/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Nav
				hrefBackward="/red-amarcord/litvinenko"
				hrefForward="/red-amarcord/molotok"
				textBackward="Litvinenko"
				textForward="Molotok"
			/>
			<BodyText>
				When I was younger, I bristled when learning that a person had
				to die in order to become a catholic saint. But I think I
				understand it now.{" "}
			</BodyText>
		</>
	);
}
