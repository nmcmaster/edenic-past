"use client";
import BodyText from "@/app/ui/BodyText";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
} from "@/app/utils/constants";

/* eslint-disable react/no-unescaped-entities */
export default function RedAmarcord() {

	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=3534253905/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="Red Amarcord" />
			<Nav
				hrefBackward="/red-amarcord/koestler"
				hrefForward="/red-amarcord/baburova"
				textBackward="Koestler"
				textForward="Baburova"
			/>
			<BodyText>
				<p className="">Red A</p>
			</BodyText>
		</>
	);
}
