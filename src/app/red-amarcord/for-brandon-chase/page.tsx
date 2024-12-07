"use client";
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import Next from "@/app/ui/Next";
import { iframeStyle, playerCss, playerHeight } from "@/app/utils/constants";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function ForBrandonChase() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<>
			<div style={playerHeight}>
				{isMounted && (
					<iframe
						style={iframeStyle}
						className={playerCss}
						src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=de270f/track=3832122378/transparent=true/"
						seamless
					>
						<a href="https://edenicpast.bandcamp.com/album/red-amarcord">
							Red Amarcord by Edenic Past
						</a>
					</iframe>
				)}
			</div>
			<Nav
				hrefBackward="/red-amarcord"
				hrefForward="/red-amarcord/beria"
				textBackward="album info"
				textForward="Beria"
				infoIconLeft
			/>
			<BodyText>
				Brandon Chase was a friend of mine who passed in 2020. He wrote
				a blog about his experience in city-funded rehabs in New York
				City which displayed his characteristic mixture of intelligence
				and sardonic humor. It gave insight into an element of the
				social safety net most people, privileged people, would never
				see. I would link to it or reproduce it here, but it has been
				lost to the abyss of the internet. We used to sit around
				listening to brutal death metal, so I like to think he would've
				actually liked this track.<Next href="/red-amarcord/beria" />
			</BodyText>
		</>
	);
}
